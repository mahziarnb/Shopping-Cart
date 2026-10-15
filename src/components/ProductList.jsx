import productsStore  from "../store/productStore"
import ListItem from "./ListItem"

export default function ProductList() {

    const products = productsStore((state) => state.products)

    return(

        <div className="size-[500px] bg-red-800 flex flex-col">

            {

                products.map(product => <ListItem key={product.id} id={product.id} title={product.title} price={product.price} quantity={product.quantity} />)

            }

        </div>

    )
}
