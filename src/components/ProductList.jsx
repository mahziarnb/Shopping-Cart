import productsStore  from "../store/productStore"
import ListItem from "./ListItem"

export default function ProductList() {

    const products = productsStore((state) => state.products)



    return(

        <div className="size-[500px] bg-red-800 flex flex-col justify-center">

            {

                products.map(product => <ListItem key={product.id} id={product.id} title={product.title} price={product.price} quantity={product.quantity} />)

            }

            {

                products.length === 0 &&

                <h1 className="p-3 bg-amber-100 border-4 test-3xl text-center">The Shopping Cart is empty</h1>

            }

        </div>

    )
}
