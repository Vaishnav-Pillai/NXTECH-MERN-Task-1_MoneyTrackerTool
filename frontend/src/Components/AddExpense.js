import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AddExpense() {

    let [amount,setAmount] = useState(0);
    let [category,setCategory] = useState('');
    let [date,setDate] = useState('');
    let [description,setDescription] = useState('');

    const navigate = useNavigate();

    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(amount,typeof(amount),category,date,description);
        console.log(location.state);
        if(category==="Income"){
          // let a = parseInt(amount);
          // let b = a+income;
          // let c = a+balance;
          // console.log(b);
          // setIncome(b);
          // setBalance(c);
          // console.log("Hello");
        }
        else{
          // let a = parseInt(amount);
          // let b = a+expense;
          // let c = balance-a;
          // console.log(b);
          // setExpense(b);
          // setBalance(c);
          // console.log("World");
        }
        const uploadUrl = "http://localhost:3000/api/expenses";
        fetch(uploadUrl,{
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            amount,
            category,
            date,
            description
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "User Registered");
            // console.log(income,expense,balance);
            navigate("/");
          });
    }

  return (
    <div className='container my-2' style={{width: '50%', textAlign: 'center', fontFamily: 'cursive'}}>
        <form name='cartform'className='container my-4' style={{border: '2px ridge black', borderRadius:'15px', background: 'rgba(255,255,255,0.5)',  boxShadow: '10px 20px 20px #00002e'}}>
            <div className='my-4'>
                <div className='my-3' style={{fontSize: '23px'}}><label>Amount: </label></div>
                <input type='text' className='form-input' id='amt' name='amount' placeholder='Amount' style={{border: '1.5px solid black', borderRadius: '6px', padding: '2px 5px'}} onChange={(e)=>{setAmount(e.target.value)}}/>
            </div>
            <div className='my-4' style={{width: '70%', margin: 'auto', textAlign: 'center'}}>
                <div className='my-3' id='ctg' style={{fontSize: '20px'}}><label>Category: </label></div>
                <select className="form-select" aria-label="Default select example" name='category' style={{border: '1.5px solid black', cursor: 'pointer'}} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option>Categories</option>
                    <option value="Income">Income</option>
                    <option value="Expense">Expense</option>
                </select>
            </div>
            <div className='my-4'>
                <div className='my-3' style={{fontSize: '20px'}}><label>Date: </label></div>
                <input type='date' className='form-input' id='dt' name='date' style={{border: '1.5px solid black', borderRadius: '6px', padding: '4px 7px', width: '70%', cursor: 'pointer'}} onChange={(e)=>{setDate(e.target.value)}}/>
            </div>
            <div className='my-4'>
                <div className='my-3' style={{fontSize: '20px'}}><label>Description/Note: </label></div>
                <input type='text' className='form-input' id='nt' name='note' placeholder='Note' style={{border: '1.5px solid black', borderRadius: '6px', padding: '2px 5px'}} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
            <hr className="divider my-2"/>
            <div>
                <button type='submit' className='btn btn-outline-dark my-3' style={{width: '100%'}} onClick={handleSubmit}>Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default AddExpense
