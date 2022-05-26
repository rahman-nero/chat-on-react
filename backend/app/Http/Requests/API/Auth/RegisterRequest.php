<?php

namespace App\Http\Requests\API\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function rules()
    {
        return [
            'login' => 'required|string|min:3|unique:users,login',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|string|min:6'
        ];
    }
}
