export default function Item({ItemObject}){

    let {id, name, quantity, category} = ItemObject;

    return(
        <div className="border-green-800 m-4 p-4 rounded -2xl">
            <ul className="list-disc list-inside">
                <li className="text-sm text-teal-700">{name}</li>
                <li className="text-sm text-teal-600">Quantity: {quantity}</li>
                <li className="text-sm text-teal-600">Category: {category}</li>
                <li className="text-sm text-teal-600">ID: {id}</li>
            </ul>
        </div>
    );
}