import React from "react";
import './test.css'

const Test = () => {
    return(
        <>
        <div>
            <div className="grid-container">
           <div className="boxint">
               <input type="int"/>
           </div>
           <div>
               <select>
                 <option selected>Open this select menu</option>
                 <option value="1">isPrime</option>
                 <option value="2">isFibonacci</option>
               </select>
           </div>
           <div className="text">
               ture
           </div>
           </div>
        </div>
        </>
    )
}

export default Test