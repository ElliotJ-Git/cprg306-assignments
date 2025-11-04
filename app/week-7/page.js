"use client";

import {useState} from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";

export default function Page(){


    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem){
        setItems(prevItems => [...prevItems, newItem]);
    }

    return(
        <main className="p-4 bg-cyan-900">
            <h1 className="text-3xl text-amber-100">Shopping List(week-7):</h1>
            <div className="mt-4 space-y-4">
                <NewItem onAddItem = {handleAddItem}/>
                <ItemList items = {items}/>
            </div>
        </main>
    );
}