import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Expenses() {

    const navigate = useNavigate();

    let [posts,setPosts] = useState([]);

    let income = 0;
    let expense = 0;
    let balance = 0;
    var id;

    function handleAdd(){
        navigate("/addExpense", {state: {income: income, expense: expense, balance: balance}});
    }

    useEffect(() => {
        fetch('http://localhost:3000/api/expenses')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            });
    })

    for(const element of posts){
        if(element.category=='Income'){
            balance=balance+parseInt(element.amount);
            income=income+parseInt(element.amount);
        }
        else{
            balance=balance-parseInt(element.amount);
            expense=expense+parseInt(element.amount);
        }
    }

    function handleDelete(){
        fetch(`http://localhost:3000/api/expenses/${id}`,{
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/deleteExpense");
          });
    }

  return (
    <div className='row' style={{fontFamily: '-moz-initial'}}>
      <div className="col-md-4" id='expense' style={{margin: '60px 25px'}}>
          <div className="card" style={{width: '25rem', border: '2px ridge black', borderRadius:'15px', background: 'rgba(255,255,255,0.5)',  boxShadow: '10px 20px 20px #00002e'}}>
            <div className="card-body">
                <center><button className="btn btn-outline-dark" style={{width:'100%'}} onClick={() => handleAdd()}>Add Transaction</button></center>
                <p></p><br/>
                <h4><b>TRANSACTIONS </b></h4>
                <p></p><br/>
                <table className="table text-center" style={{borderTop: '2px solid black', padding:'1px 3px'}}>
                    <thead style={{borderBottom: '1px solid black'}}>
                        <tr>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Date</th>
                        <th scope="col">Note</th>
                        <th scope="col">Operation</th>
                        </tr>
                    </thead>
                    <tbody>

                    {posts.map((element,key) => (

                    <tr style={{fontSize: '10px'}}>
                    <th scope="col" style={{color: element.category=='Income'?'green':'red'}}>&#8377; {element.amount}</th>
                    <th scope="col">{element.category}</th>
                    <th scope="col">{element.date}</th>
                    <th scope="col">{element.description}</th>
                    <th scope="col"><button className='btn btn-outline-danger btn-sm' style={{borderRadius: '25px', fontSize: '10px'}} onClick={()=>{id=element._id;handleDelete();}}>Delete</button></th>
                    </tr>

                    ))}

                    </tbody>
                </table>
            </div>
          </div>
        </div>
        <div className="col-md-4 offset-md-4" id='category' style={{margin: '60px 0px 60px 140px'}}>
            <div className="card" style={{width: '18rem', border: '2px ridge black', borderRadius:'15px', background: 'rgba(255,255,255,0.5)',  boxShadow: '10px 20px 20px #00002e'}}>
                <div className="card-body">
                    <center><h4><u><b>CATEGORIES</b></u></h4></center>
                    <p></p><br/>
                    <table className="table text-center" style={{borderTop: '2px solid black', padding:'1px 3px'}}>
                        <thead style={{borderBottom: '1px solid black'}}>
                            <tr>
                                <th scope="col">CATEGORY</th>
                                <th scope="col">AMOUNT TRANSACTED</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{color: 'green'}}>
                                <th scope="row" style={{color: 'green'}}>Income</th>
                                <td style={{color: 'green'}}>&#8377; {income}</td>
                            </tr>
                            <tr style={{color: 'red'}}>
                                <th scope="row" style={{color: 'red'}}>Expense</th>
                                <td style={{color: 'red'}}>&#8377; {expense}</td>
                            </tr>
                        </tbody>
                        <tbody style={{borderTop: '2px solid black'}}>
                            <tr>
                                <th scope="row">BALANCE</th>
                                <td>&#8377; {balance}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expenses
