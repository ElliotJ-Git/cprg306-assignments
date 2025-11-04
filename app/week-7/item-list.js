"use client";

import {useState} from "react";
import Item from "./item";

export default function ItemList({items}){

    const [sortingBy, setSortingBy] = useState("name");

    let buttonStyleName = "w-30 h-15 bg-blue-700 rounded-lg text-amber-100 cursor-pointer transition-colors border-2 border-black hover:bg-blue-600"
    let buttonStyleCategory = "w-30 h-15 bg-blue-700 rounded-lg text-amber-100 cursor-pointer transition-colors border-2 border-black hover:bg-blue-600"

    function sortBy(itemArray){

    if(sortingBy == "name"){
    itemArray.sort((a, b) =>{
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;

    });
    }else if(sortingBy == "category"){
        itemArray.sort((a, b) =>{
            if(a.category.toLowerCase() < b.category.toLowerCase()) return -1;
            if(a.category.toLowerCase() > b.category.toLowerCase()) return 1;
            return 0;
        });
    }

    return <ul className="list-inside bg-amber-100 rounded-xl m-4 p-2">
        {itemArray.map((item) => (
            <li key={item.id}>
                <Item ItemObject={item} />
            </li>
        ))}
    </ul>
}

function setSortBy(event){
    setSortingBy(event.target.value);
}

if(sortingBy == "name"){
    buttonStyleName = "w-30 h-15 bg-cyan-700 rounded-lg text-amber-100 border-2 border-black focus:border-3 border-black";
}else if(sortingBy == "category"){
    buttonStyleCategory = "w-30 h-15 bg-cyan-700 rounded-lg text-amber-100 border-2 border-black focus:border-3 border-black";
}

return (
    <main className="mt-4 ml-40 mr-40 bg-amber-950 flex flex-col items-center rounded-lg p-4 space-y-4">
        <div className="w-full flex justify-center space-x-4 mb-4">
            <button className={buttonStyleName} value="name" onClick={setSortBy}>Sort by Name</button>
            <button className={buttonStyleCategory} value="category" onClick={setSortBy}>Sort by Category</button>
        </div>
        <div className="w-full flex flex-col space-y-2">
            {sortBy(items)}
        </div>
    </main>
);
}