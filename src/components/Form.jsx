import { useState } from "react"
import productsStore from "../store/productStore"
import cartStore from "../store/cartStore"

export default function Form() {

    const showCartIcon = cartStore(state => state.showCartIcon)
    const showProductList = cartStore(state => state.showProductList)
    const setShowAdminIcon = cartStore(state => state.setShowAdminIcon)
    const setShowCartIcon = cartStore(state => state.setShowCartIcon)
    const setShowForm = cartStore(state => state.setShowForm)

    // get actions from store
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

    function handleClick() {
        setShowCartIcon();
        setShowAdminIcon();
        setShowForm()
    }

    return(

        <div className={`  ${showCartIcon === false & showProductList === false ? '' : 'hidden'}  bg-amber-400 p-3 `}>
            <div className="flex justify-center w-full">
                    <input type="search" className="bg-red-900 text-white w-80 p-3" />
            </div>


            <form action="#" className="flex flex-col gap-3">

                {/* get new title */}
                <label htmlFor="title" className="font-bold">title :</label>
                <input id="title" className="bg-red-300 p-2" type="text" placeholder="please enter your title .." value={newItemTitle} onChange={(e) => setNewItemTitle(e.target.value)} />

                {/* get new price */}
                <label htmlFor="price" className="font-bold">price :</label>
                <input type="text" id="price" className=" bg-red-300 p-2" placeholder="please enter your price .." value={newItemPrice} onChange={(e) => setNewItemPrice(e.target.value)} />

                {/* get new quantity */}
                <label htmlFor="quantity" className="font-bold">quantity :</label>
                <input type="text" id="quantity" className=" bg-red-300 p-2" placeholder="please enter your quantity .." value={newItemQuantity} onChange={(e) => setNewItemQuantity(e.target.value)} />

                {/* btns */}
                <div className="flex justify-center gap-3">
                    <button className="border-2 p-3 cursor-pointer w-[20%] order-1" onClick={() => addProduct(newItemTitle , newItemPrice , newItemQuantity , clearForm)}>add product</button>
                </div>


            </form>

            <button onClick={handleClick}>go to home</button>


        </div>
    )
}
