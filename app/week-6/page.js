import ItemList from "./item-list.js";

export default function Page(){

    return(
        <main className="p-4 bg-cyan-900">
            <h1 className="text-3xl text-amber-100">Shopping List (week-6):</h1>
            <div className="mt-4 space-y-4">
                <ItemList/>
            </div>
        </main>
    );
}