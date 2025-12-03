"use client";

import {useState, useEffect} from "react";
import ItemList from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import {getItems, addItem} from "../_services/shopping-list-service.js";

export default function Page(userVerified){

    const user = userVerified;
    const [selectedItemName, setSelectedItemName] = useState("");
    const [items, setItems] = useState(getItems(user.uid).items || []);

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

    async function loadItems() {
        try {
            const loadedItems = await getItems(user.uid);
            setItems(loadedItems);                          
        } catch (err) {
            console.error("Error loading items:", err);
        }
    }

    async function handleAddItem(newItem) {
        try {
            const id = await addItem(user.uid, newItem);   
            const itemWithId = { ...newItem, id };         
            setItems(prev => [...prev, itemWithId]);       
        } catch (err) {
            console.error("Error adding item:", err);
        }
    }

        useEffect(() => {
        if (user?.uid) {
            loadItems();
        }
    }, [user?.uid]);   

    if (!user) {
        return (
            <main className="p-4 bg-cyan-900 min-h-screen w-full">
                <h1 className="text-3xl text-amber-100">Shopping List(week-8):</h1>
                <p className="mt-4 w-80 h-60 bg-amber-950 p-4 text-3xl text-amber-100">Please sign in to continue.</p>
            </main>
        );
    }else{
        return(
            <main className="mt-10 p-4 bg-cyan-900 min-h-screen w-full">
                <h1 className="text-3xl text-amber-100">Shopping List(week-9):</h1>
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
}
