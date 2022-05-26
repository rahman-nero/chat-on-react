<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Requests\API\Auth\LoginRequest;
use PHPOpenSourceSaver\JWTAuth\Facades\JWTAuth;

final class LoginController
{

    public function login(LoginRequest $request)
    {
        $login = $request->input('login');
        $password = $request->input('password');

        if (!JWTAuth::attempt(['login' => $login, 'password' => $password])) {
            return response()->json(['code' => 401, 'message' => 'Логин или пароль введены неправильно'], 401);
        }

        $user = auth()->user();

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
     * Log the user out (Invalidate the token).
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
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
