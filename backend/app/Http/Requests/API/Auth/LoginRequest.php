<?php

namespace App\Http\Requests\API\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function rules()
    {
        return [
            'login' => 'required|string|min:3',
            'password' => 'required|string|min:6'
        ];
    }
}
