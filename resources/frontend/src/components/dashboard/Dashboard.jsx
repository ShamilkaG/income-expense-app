import MainDashboard from "./dashBoardComponents/MainDashboard.jsx";
import {Route, Routes} from "react-router";
import AddIncome from "./dashBoardComponents/transactionManagemet/AddIncome.jsx";
import AddExpense from "./dashBoardComponents/transactionManagemet/AddExpense.jsx";

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainDashboard/>}/>
                <Route path="/add-income" element={<AddIncome/>}/>
                <Route path="/add-expenses" element={<AddExpense/>}/>
            </Routes>

        </>
    );
};

export default Dashboard;
