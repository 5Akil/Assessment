import React,{ useContext }  from 'react'
import { DataLayer } from './App'


function CheckList() {

    const{state , setState}= useContext(DataLayer); 
    function flipcheked(e) {
        const checked = e.target.checked;
        if (checked)
            setState({
                [e.target.name]: `${!e.target.value}`
            });
        else {
            setState({
                [e.target.name]: false
            });
        }
    }
    console.log(state)

   return (
    <>
        <div>
            <label>Are you a citizen? <input type='checkbox' name='citizen' value={state.citizen}    onChange={flipcheked}  /> </label> 
            <label>Are you over 21? <input type='checkbox' name='age_limit' value={state.age_limit}   onChange={flipcheked}  /> </label> 
        </div>

        <div>
            <p>Are you a citizen ? : {state.citizen? 'yes' : 'no'}</p>
            <p>Are you over 21 ? : {state.age_limit? 'yes' : 'no'}</p>
        </div>
    </>
  )
}

export default CheckList