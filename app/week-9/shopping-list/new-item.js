"use client";

import {useState} from "react";

export default function NewItem({onAddItem}){
    const [name, setName] = useState(""); //Added
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce"); //Added

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const ItemObject =
        {
        id: Math.random().toString(36).substr(2, 9),
        name,
        quantity,
        category
        }

        onAddItem(ItemObject);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    let buttonStylesIncrement = "w-8 bg-blue-800 rounded-lg text-amber-100 cursor-pointer transition-colors hover:bg-blue-600"
    let buttonStylesDecrement = "w-8 bg-blue-800 rounded-lg text-amber-100 cursor-pointer transition-colors hover:bg-blue-600"
   
    let titleStyles = "bg-blue-950 text-amber-100 rounded-lg w-fit border-black border-2 flex flex-row p-0.5" //Added
    let divSet = "w-full flex p-1 space-x-3" //Added

    if (quantity <= 1){
        buttonStylesDecrement = "w-8 bg-gray-700 rounded-lg text-amber-100"
    } else if (quantity >= 20){
        buttonStylesIncrement = "w-8 bg-gray-700 rounded-lg text-amber-100"
    }

    return(//added form and input elements
        <main className="mt-4 w-80 h-60 bg-amber-950 flex flex-col items-center rounded-lg p-4 space-y-4 mr-70">
            <form className="space-y-4 w-full flex flex-wrap " onSubmit={handleSubmit}>
                <div className={divSet}>
                    <input type="text" placeholder="Item Name" className={titleStyles} value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={divSet} >
                    <select className={titleStyles + ""} value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household Items">Household Items</option>
                        <option value="Other">Other</option>
                    </select> 
                </div>           
                <div className={divSet}>
                    <p className = {titleStyles}>Quantity: {quantity}</p>
                    <button onClick={increment} type="button"  className={buttonStylesIncrement}>+</button>
                    <button onClick={decrement} type="button" className={buttonStylesDecrement}>-</button>
                </div>
                <div>
                    <button type="submit" className="w-35 bg-green-800 rounded-lg text-amber-100 p-2 cursor-pointer transition-colors hover:bg-green-600">Add Item</button>
                </div>
            </form>
        </main>
    );

}
