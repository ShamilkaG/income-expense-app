<?php

namespace App\Http\Controllers;

use App\Action\Income\GetIncomes;
use App\Models\Income;
use Illuminate\Http\Request;
use App\Action\Income\AddIncome;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\IncomeFormRequest;

class IncomeController extends Controller
{
    //2,3,4
//    public function addIncome(Request $request): JsonResponse{
//    public function addIncome(IncomeFormRequest $request): JsonResponse{
    public function addIncome(IncomeFormRequest $request, AddIncome $addIncome): JsonResponse
    {
        //5
//        Log::info($request->all());
        $validatedIncomeDetails = $request->validated();

//        Income::create([
        ////            'income_amount'=> $request['income_amount'],
        ////            'income_category'=> $request['income_category'],
//
//            'income_amount'=> $validatedIncomeDetails['income_amount'],
//            'income_category'=> $validatedIncomeDetails['income_category'],
//        ]);
        //2
//        return response()->json([]);
        //3
//        return response()->json([
//            //3
        ////            "message" => "",
//            //4
//            "message" => "Income added successfully",
//        ]);
        return response()->json($addIncome($validatedIncomeDetails));
    }

    public function getIncomes(GetIncomes $getIncomes): JsonResponse
    {
//        return response()->json([
//            'status' => '200',
//            'all_incomes' => []
//        ]);
        return response()->json($getIncomes());
    }
}
