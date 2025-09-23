"use client";

import {useState} from "react";


export default function NewItem(){
    const [quantity, setQuantity] = useState(1);
        
        const increment = () => {
            if(quantity < 20){
                setQuantity(quantity + 1);
            }
        }
    
        const decrement = () => {
            if(quantity > 1){
                setQuantity(quantity - 1);
            }
        }

        let buttonStylesIncrement = "w-8 bg-blue-800 rounded-lg text-amber-100 cursor-pointer transition-colors hover:bg-blue-600"
        let buttonStylesDecrement = "w-8 bg-blue-800 rounded-lg text-amber-100 cursor-pointer transition-colors hover:bg-blue-600"

        if (quantity <= 1){
            buttonStylesDecrement = "w-8 bg-gray-700 rounded-lg text-amber-100"
        } else if (quantity >= 20){
            buttonStylesIncrement = "w-8 bg-gray-700 rounded-lg text-amber-100"

        }

    return(
        <main className="justify-center mt-4 ml-40 mr-40 bg-amber-950 flex flex-col items-center rounded-lg p-4 space-y-4">
            <p className = "justify-center bg-blue-950 text-amber-100 rounded-lg w-30 border-black border-2 flex">Quantity: {quantity}</p>
            <div className = "justify-center w-full flex p-3 space-x-3">
                <button onClick={increment} type="button"  className={buttonStylesIncrement}>+</button>
                <button onClick={decrement} type="button" className={buttonStylesDecrement}>-</button>
            </div>
        </main>
    );

}