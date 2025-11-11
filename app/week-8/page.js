"use client";

import {useState} from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas.js";

export default function Page(){

    const [selectedItemName, setSelectedItemName] = useState("");
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem){
        setItems(prevItems => [...prevItems, newItem]);
        
    }

    function handleItemSelect(item) {
    let cleanedName = item.name  
        .split(",")[0]
        .replace(/[^\w\s]/gi, "") 
        .trim();
      setSelectedItemName(cleanedName);
    }

    return(
        <main className="p-4 bg-cyan-900 min-h-screen w-full">
            <h1 className="text-3xl text-amber-100">Shopping List(week-8):</h1>
            <div className="flex">
                <div className="mt-4 space-y-4">
                    <NewItem onAddItem = {handleAddItem}/>
                    <ItemList items = {items} onItemSelect = {handleItemSelect}/>
                </div>
                <div className="mt-4">
                    <MealIdeas ingredient = {selectedItemName}/>
                </div>
            </div>
        </main>
    );
}