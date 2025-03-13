<?php

namespace App\Action\Income;

use App\Models\Income;

class AddIncome
{
    //Using _invoke this class turn to be functional / php related thing, so then we can called AddIncome as a functional call
    public function __invoke(array $validatedIncomeDetails): array
    {
        // TODO: Implement __invoke() method.
        Income::create([
            'income_amount'=> $validatedIncomeDetails['income_amount'],
            'income_category'=> $validatedIncomeDetails['income_category'],
        ]);

        return [
            "message" => "Income added successfully",
        ];
    }
}
