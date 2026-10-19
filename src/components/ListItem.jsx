import productsStore from "../store/productStore"
export default function ListItem({title , price , quantity , id}) {
    // get actions from productsStore
    const increase = productsStore(state => state.increase)
    const decrease = productsStore(state => state.decrease)
    const removeProduct = productsStore(state => state.removeProduct)
    const updatePrice = productsStore(state => state.updatePrice)

    return(
        <>
            {/* Item display process */}
             <div className="mb-4 bg-white flex justify-around">

            <div className="flex gap-2">
                <span className="font-bold text-green-700 text-2xl">title:</span>
                <span className="text-2xl">{title}</span>
            </div>

            <div className="flex gap-2">
                <span className="font-bold text-green-700 text-2xl">price:</span>
                <span className="text-2xl">{`$${price}`}</span>
            </div>

            <div className="flex gap-2">
                <span className="font-bold text-green-700 text-2xl">quantity:</span>
                <span className="text-2xl">{quantity}</span>
            </div>

                <div className="flex gap-3">

                    <button onClick={() => increase(id)} className="p-1 bg-amber-300 rounded-2xl">+</button>
                    <button onClick={() => decrease(id)} className="p-1 bg-amber-300 rounded-2xl">-</button>
                    <button onClick={() => removeProduct(id)} className="p-1 bg-amber-300 rounded-2xl">remove</button>
                    <button onClick={() => updatePrice(id)} className="p-1 bg-amber-300 rounded-2xl">edit price</button>

                </div>

             </div>



        </>
    )
}
