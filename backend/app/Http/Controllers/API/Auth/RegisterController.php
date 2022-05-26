<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Requests\API\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

final class RegisterController
{
    /**
     * User registration
    */
    public function register(RegisterRequest $request)
    {
        $email = $request->input('email');
        $login = $request->input('login');
        $password = $request->input('password');

        $user = User::query()->create([
            'email' => $email,
            'login' => $login,
            'password' => Hash::make($password)
        ]);

        if (!$user) {
            return new JsonResponse(['code' => 500, 'message' => 'Произошла ошибка, не удалось зарегистрироваться, повторите попытку позднее'], 500);
        }

        $customClaims = [
            'login' => $user->login,
            'email' => $user->email,
            'created_at' => $user->create_at,
        ];

        $token = JWTAuth::customClaims($customClaims)
                 ->fromUser($user);

        return $this->respondWithToken($token);
    }


    /**
     * Get the token array structure.
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
