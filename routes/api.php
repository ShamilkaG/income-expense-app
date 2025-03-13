<?php

use App\Http\Controllers\IncomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/test-api', function () {
    return response()->json([
        'test'=>'test content'
    ]);
});

//Route::post('add-income', function (){
//
//});
Route::post('add-income', [IncomeController::class, 'addIncome']);
