<?php

use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('home', [UserController::class, 'index'])/* ->middleware('auth') */;

Route::post('register', [RegisterController::class, 'create']);
