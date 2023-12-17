import BPCard from "./BPCard";
import "./BudgetPlanning.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { selectId } from "../redux/authSlice";
import {
  useGetMonthlyExpensesQuery,
  useUpdateNeedMutation,
} from "../redux/apiSlice";
let expenseID, expenseRecipient, expenseCategory, expenseDate, expenseAmount, expenseNeed;
function BudgetPlanning() {
  const [condition, setCondition] = useState("none");
  const firstCardTitle = "Necessary Budget";
  const secondCardTitle = "Medium Need";
  const thirdCardTitle = "Unnecessary Budget";
  const Id = useSelector((state) => selectId(state));
  const stringId = Id.toString();
  const [mutateNeed] = useUpdateNeedMutation();
  const dispatch = useDispatch();
  const HandleClick = () => {
    document.querySelector('.hiddenItem').style.visibility = 'initial';
    document.querySelector('.hiddenItem').style.marginTop = '-30%';
    setCondition('showList');
  }
  const {
    data: fetchedExpenseData,
    error: expenseError,
    isLoading: isExpenseLoading,
  } = useGetMonthlyExpensesQuery(stringId);
  function logKey(somevalue)
  {
    expenseID = somevalue._id;
    expenseRecipient = somevalue.recipient;
    expenseCategory = somevalue.category;
    expenseDate = somevalue.date;
    expenseAmount = somevalue.amount;
  }
  function handleNecessary(){
    expenseNeed = "necessary";
  }
  function handleMedium(){
    expenseNeed = "medium";
  }
  function handleUnnecessary(){
    expenseNeed = "unnecessary";
  }

  const handleConfirm = async () => {
    const needInfo = {
      recipient: expenseRecipient,
      category: expenseCategory,
      date: expenseDate,
      amount: expenseAmount,
      need: expenseNeed,
    };
    try {
      await mutateNeed({ExpenseID: expenseID, needData: needInfo });
    } catch (error) {
      console.error("Error updating need:", error);
    }
  }

  return (
    <div>
      <div id="columnLayout">
      <BPCard title={firstCardTitle}></BPCard>
      <BPCard title={secondCardTitle}></BPCard>
      <BPCard title={thirdCardTitle}></BPCard>
      </div>
      <div id="buttondiv"><button id="bpbutton" onClick={HandleClick}>+</button>&nbsp; Add Item</div>
      <div className="hiddenItem">
      {condition === "showList" && <div className="ExpenseList">
       
       <div className="contents">
        LIST OF EXPENSES
       
       {isExpenseLoading ? (
       <p>Loading expenses data...</p>
       ) : expenseError ? (
       <p>Error loading expenses data</p>
       ) : fetchedExpenseData? (
        fetchedExpenseData.map((expenseEntry, index) => (
           
            <div key={index}>
              <p>Recipient: {expenseEntry.recipient} ${expenseEntry.amount} </p>
              <p>Category: {expenseEntry.category}</p>
              <button onClick={() => logKey(expenseEntry)}>select expense</button>
           </div>
       ))
     ) : null}
     <p>Add to category:</p>
     <button onClick={handleNecessary}>Necessary</button>
     <button onClick={handleMedium}>Medium Need</button>
     <button onClick={handleUnnecessary}>Unnecessary</button>
     <button onClick={handleConfirm}>confirm</button> 
      
       </div>

      
       
     </div>}
      </div>
      
    </div>              
  );
}

export default BudgetPlanning;
