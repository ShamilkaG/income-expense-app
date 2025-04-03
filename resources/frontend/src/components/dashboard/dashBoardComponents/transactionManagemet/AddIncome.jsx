import React, {useState} from 'react';
import axios from "axios";
import {addNewIncome} from "../../../../utilities/api/income/incomeCreateAPI.js";

const AddIncome = () => {
    const [incomeDetails, setIncomeDetails] = useState({
        income_amount: 0,
        income_category: ''
    })

    const [message,setMessage  ] = useState('')
    // const [errorMessage, setErrorMessage] = useState('')
    const [isIncomeAmountEmptyField, setIsIncomeAmountEmptyField] = useState(false)
    const [isIncomeCategoryEmptyField, setIsIncomeCategoryEmptyField] = useState(false)
    const handleInputFieldsChange = (event ) => {
        // console.log(event.target.value, event.target.name)

        const {name, value} = event.target;
        setIsIncomeAmountEmptyField(false)
        setIsIncomeCategoryEmptyField(false)
        // console.log(name, value)
        setIncomeDetails((prevState)=>(
            {...prevState, [name]: value}
        ))
    }
    // console.log(incomeDetails)
    const handleSubmit = async  (event) => {
        event.preventDefault();

        // console.log('working')
        // await axios.post('http://127.0.0.1:8000/api/add-income',incomeDetails)
        // console.log(incomeDetails)
        // console.log(Object.values(incomeDetails))

        if(!incomeDetails.income_amount ){
            // console.log('test')
            // setErrorMessage('Income amount required.')
            setIsIncomeAmountEmptyField(true)
            return
        }

        if(!incomeDetails.income_category){
            setIsIncomeCategoryEmptyField(true)
            return
        }
        const response = await addNewIncome(incomeDetails)
        // console.log(response)
        // const message = response.data
        // console.log(message)
        const {message} = response.data
        // console.log(message)
        setMessage(message)
    }

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 ">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add Income</h2>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>

                </div>
                <div className="mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-1 w-3/4 m-auto lg:py-16">

                            {message && <div
                                className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                                role="alert">
                                <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span className="sr-only">Info</span>
                                <div>
                                    <span className="font-medium">Success alert!</span>
                                    {message}
                                </div>
                            </div>}


                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="sm:col-span-2">
                                        <label htmlFor="income_amount"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Income
                                            amount</label>
                                        <input type="number" name="income_amount" id="income_amount"
                                               onChange={handleInputFieldsChange}
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                                               placeholder="Type income amount" required=""/>
                                        {isIncomeAmountEmptyField && <div className="text-red-500 text-sm">Income amount required</div>}
                                        {/*{errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}*/}
                                    </div>

                                    <div>
                                    <label htmlFor="category"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                        <select id="category"
                                                name='income_category'
                                                onChange={handleInputFieldsChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 ">
                                            <option selected="">Select income</option>
                                            <option value="Salary">Salary</option>
                                            <option value="Side project">Side project</option>
                                            <option value="Youtube revenue">Youtube revenue</option>
                                        </select>
                                        {isIncomeCategoryEmptyField && <div className="text-red-500 text-sm">Income category required</div>}
                                    </div>

                                </div>
                                <button type="submit"
                                        className="mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                    Add Income
                                </button>
                            </form>
                        </div>
                    </section>
                </div>


            </div>
        </div>
    );
};

export default AddIncome;
