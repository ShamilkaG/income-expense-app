<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IncomeController;

Route::get('/test-api', function () {
    return response()->json([
        'test'=>'test content',
    ]);
});

//Route::post('add-income', function (){
//
//});
Route::post('add-income', [IncomeController::class, 'addIncome']);
