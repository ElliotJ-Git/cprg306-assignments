export default function Item({ItemObject, onSelect}){

    let {id, name, quantity, category} = ItemObject;

    return(
        <div className="border-black border-3 m-4 p-4 rounded-2xl bg-gray-700 cursor-pointer hover:bg-gray-600"  onClick={() => onSelect(name)}>
            <ul className="list-disc list-inside">
                <h1 className="text-lg text-teal-500">{name}</h1>
                <li className="text-s text-teal-600">Quantity: {quantity}</li>
                <li className="text-s text-teal-600">Category: {category}</li>
                <li className="text-sm text-teal-600">ID: {id}</li>
            </ul>
        </div>
    );
}