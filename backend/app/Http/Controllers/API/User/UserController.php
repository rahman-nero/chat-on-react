<?php

namespace App\Http\Controllers\API\User;


final class UserController
{
    /**
     * Get the authenticated User.
     */
    public function check()
    {
        return response()->json(['code' => 200, 'message' => true]);
    }

}
