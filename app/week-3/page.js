import Item from "./item.js";
import ItemList from "./item-list.js";

export default function Page(){

    let items = 
        ItemList()
    ;

    return(
        <main className="p-4 bg-blue-900">
            <h1 className="text-3xl text-amber-100">Shopping List:</h1>
            <ul className="list-inside bg-amber-100 rounded-xl m-4 p-2">
                <li><Item ItemObject={items[0]}/></li>
                <li><Item ItemObject={items[1]}/></li>
                <li><Item ItemObject={items[2]}/></li>
                <li><Item ItemObject={items[3]}/></li>
                <li><Item ItemObject={items[4]}/></li>
                <li><Item ItemObject={items[5]}/></li>
                <li><Item ItemObject={items[6]}/></li>
                <li><Item ItemObject={items[7]}/></li>
                <li><Item ItemObject={items[8]}/></li>
                <li><Item ItemObject={items[9]}/></li>
                <li><Item ItemObject={items[10]}/></li>
                <li><Item ItemObject={items[11]}/></li>
            </ul>
        </main>
    );
}