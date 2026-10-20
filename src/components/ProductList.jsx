// import { useEffect } from "react"
// import productsStore  from "../store/productStore"
// import ListItem from "./ListItem"

// export default function ProductList() {

//     // get state and action from productsStore
//     const products = productsStore((state) => state.products)
//     const getProducts = productsStore((state) => state.getProducts)


//     useEffect(() => {

//         getProducts()

//     },[])

//     const getTotal = productsStore(state => state.getTotal)


//     return(

//         <div className="w-[80%] mx-auto p-5 flex flex-col justify-center">

//             {/* show products */}
//             {

//                 products.map(product => <ListItem key={product.id} id={product.id} title={product.title} price={product.price} quantity={product.quantity} />)

//             }

//             {/* handle empty basket */}
//             {
//                 products.length === 0 ?

//                 <h1 className="p-3 bg-amber-100 border-4 test-3xl text-center">The Shopping Cart is empty</h1> :

//                 <h1 className="bg-gray-600 text-2xl text-white p-3 w-[45%]">total price : {getTotal()}</h1>
//             }


//         </div>

//     )
// }


import { useEffect } from "react"
import productsStore from "../store/productStore"
import ListItem from "./ListItem"

export default function ProductList() {
    const products = productsStore((state) => state.products)
    const getProducts = productsStore((state) => state.getProducts)
    const getTotal = productsStore((state) => state.getTotal)
    const clearProducts = productsStore(state => state.clearProducts)


    useEffect(() => {
        getProducts()
    }, [getProducts])

    const total = getTotal()

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                            Your Store
                        </p>

                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            Shopping Cart
                        </h1>

                        <p className="mt-2 text-slate-500">
                            Manage your products in one place.
                        </p>
                    </div>

                    <div className="flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                        <span className="text-2xl">🛒</span>

                        <div>
                            <p className="text-xs text-slate-500">
                                Total products
                            </p>

                            <p className="text-xl font-bold text-slate-900">
                                {products.length}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Products */}
                <section className="rounded-3xl  border border-slate-200 bg-white/70 p-3 shadow-sm sm:p-5">
                    <div className="mb-5 flex items-center justify-between px-2 pt-2">
                        <h2 className="text-lg font-bold text-slate-800">
                            Your products
                        </h2>

                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                            {products.length} items
                        </span>
                    </div>

                    {products.length === 0 ? (
                        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white px-5 py-16 text-center">
                            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-4xl">
                                🛒
                            </div>

                            <h2 className="text-xl font-bold text-slate-800">
                                Your cart is empty
                            </h2>

                            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                                There are no products in your cart yet.
                                Add some products to get started.
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-4">
                            {products.map((product) => (
                                <ListItem
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    quantity={product.quantity}
                                />
                            ))}
                        </div>
                    )}

                    <div className="flex w-full justify-center py-2">
                        <button onClick={() => clearProducts()} className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 active:scale-95">remove all</button>
                    </div>
                    
                </section>


                {/* Order Summary */}
                {products.length > 0 && (
                    <section className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 p-6 text-white shadow-xl sm:p-8">

                        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">

                            {/* Discount Code */}
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-3xl">
                                        🛒
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            Order Summary
                                        </h2>

                                        <p className="mt-1 text-sm text-blue-200">
                                            Apply a discount code to get a better price.
                                        </p>
                                    </div>
                                </div>

                                <div className="my-6 h-px bg-blue-300/20" />

                                <form
                                    className="flex flex-col gap-3 sm:flex-row"
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        // Add discount validation here
                                    }}
                                >
                                    <input
                                        type="text"
                                        placeholder="Enter discount code"
                                        aria-label="Discount code"
                                        className="min-w-0 flex-1 rounded-xl border border-blue-300/25 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-blue-200/70 transition focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                                    />

                                    <button
                                        type="submit"
                                        className="rounded-xl bg-blue-500 px-7 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 active:scale-95"
                                    >
                                        Apply
                                    </button>
                                </form>
                            </div>

                            {/* Total Price */}
                            <div className="border-t border-blue-300/20 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                                <p className="text-lg font-medium text-blue-200">
                                    Total Price
                                </p>

                                <p className="mt-2 break-words text-4xl font-extrabold tracking-tight text-sky-400 sm:text-5xl">
                                    ${Number(total).toLocaleString("en-US")}
                                </p>

                                <p className="mt-3 text-sm text-blue-200/80">
                                    Including all product quantities
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-sm text-emerald-300">
                                    <span>✓</span>
                                    <span>Your cart is ready</span>
                                </div>
                            </div>

                        </div>
                    </section>
                )}


                {/* Footer */}
                <footer className="py-8 text-center text-sm text-slate-400">
                    Shopping Cart · Built with React and Zustand
                </footer>

            </div>
        </main>
    )
}
