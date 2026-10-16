import productsStore  from "../store/productStore"
import ListItem from "./ListItem"

export default function ProductList() {

    // get state and action from productsStore
    const products = productsStore((state) => state.products)
    const getTotal = productsStore(state => state.getTotal)


    return(

        <div className="w-[80%] mx-auto p-5 bg-red-800 flex flex-col justify-center">

            {/* show products */}
            {

                products.map(product => <ListItem key={product.id} id={product.id} title={product.title} price={product.price} quantity={product.quantity} />)

            }

            {/* handle empty basket */}
            {
                products.length === 0 ?

                <h1 className="p-3 bg-amber-100 border-4 test-3xl text-center">The Shopping Cart is empty</h1> :

                <h1 className="bg-gray-600 text-2xl text-white p-3 w-[45%]">total price : {getTotal()}</h1>
            }


        </div>

    )
}
