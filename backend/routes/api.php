<?php

use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\API\User\UserController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/logout', [LoginController::class, 'logout']);

Route::group(['middleware' => 'auth:api'], function() {

    Route::get('/check', [UserController::class, 'check']);

    Route::get('/example', function() {
        return response()->json('Good');
    });

});
