import { useState } from "react"
import productsStore from "../store/productStore"

export default function Input() {

    // get actions from store
    const clearProducts = productsStore(state => state.clearProducts)
    const addProduct = productsStore(state => state.addProduct)

    // create new state
    const [newItemTitle , setNewItemTitle] = useState('')
    const [newItemPrice , setNewItemPrice] = useState('')
    const [newItemQuantity , setNewItemQuantity] = useState('')

    // clear form after create a product
    function clearForm() {
        setNewItemTitle('')
        setNewItemPrice('')
        setNewItemQuantity('')
    }


    return(
        <div className="bg-amber-400 p-3">

            <form action="#" className="flex flex-col gap-3">

                {/* get new title */}
                <label htmlFor="title" className="font-bold">title :</label>
                <input className="title bg-red-300 p-2" type="text" placeholder="please enter your title .." value={newItemTitle} onChange={(e) => setNewItemTitle(e.target.value)} />

                {/* get new price */}
                <label htmlFor="price" className="font-bold">price :</label>
                <input type="text" className="price bg-red-300 p-2" placeholder="please enter your price .." value={newItemPrice} onChange={(e) => setNewItemPrice(e.target.value)} />

                {/* get new quantity */}
                <label htmlFor="quantity" className="font-bold">quantity :</label>
                <input type="text" className="quantity bg-red-300 p-2" value={newItemQuantity} onChange={(e) => setNewItemQuantity(e.target.value)} />

                {/* btns */}
                <button className="border-2 p-3 cursor-pointer w-[20%]" onClick={() => addProduct(newItemTitle , newItemPrice , newItemQuantity , clearForm)}>add product</button>
                <button onClick={() => clearProducts()} className="border-2 bg-red-500 p-3 cursor-pointer w-[20%]">remove all</button>

            </form>

        </div>
    )
}
