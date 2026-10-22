// import productsStore from "../store/productStore"
// export default function ListItem({title , price , quantity , id}) {
//     // get actions from productsStore
//     const increase = productsStore(state => state.increase)
//     const decrease = productsStore(state => state.decrease)
//     const removeProduct = productsStore(state => state.removeProduct)
//     const updatePrice = productsStore(state => state.updatePrice)

//     return(
//         <>
//             {/* Item display process */}
//              <div className="mb-4 bg-white flex flex-col">

//                 <h3 className="text-2xl bg-blue-500 px-4 py-2 rounded-full">{title}</h3>

//             <div>

//                 <div className="flex gap-2">
//                     <span className="font-bold text-green-700 text-2xl">price:</span>
//                     <span className="text-2xl">{`$${price}`}</span>
//                 </div>

//                 <div className="flex gap-2">
//                     <span className="font-bold text-green-700 text-2xl">quantity:</span>
//                     <span className="text-2xl">{quantity}</span>
//                 </div>

//             </div>



//                 <div className="flex gap-3">

//                     <button onClick={() => increase(id)} className="p-1 bg-amber-300 rounded-2xl">+</button>
//                     <button onClick={() => decrease(id)} className="p-1 bg-amber-300 rounded-2xl">-</button>
//                     <button onClick={() => removeProduct(id)} className="p-1 bg-amber-300 rounded-2xl">remove</button>
//                     <button onClick={() => updatePrice(id)} className="p-1 bg-amber-300 rounded-2xl">edit price</button>

//                 </div>

//              </div>



//         </>
//     )
// }



import productsStore from "../store/productStore"

export default function ListItem({ title, price, quantity, id }) {
    const increase = productsStore((state) => state.increase)
    const decrease = productsStore((state) => state.decrease)
    const removeProduct = productsStore((state) => state.removeProduct)
    const updatePrice = productsStore((state) => state.updatePrice)

    return (
        <article className="group flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">

            {/* Product information */}
            <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    🛍️
                </div>

                <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold text-slate-800">
                        {title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        Product ID: {id}
                    </p>

                    <p className="mt-2 text-lg font-bold text-blue-600">
                        ${Number(price).toLocaleString("en-US")}
                    </p>
                </div>
            </div>

            {/* Quantity and actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">

                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-1">
                    <button
                        onClick={() => decrease(id)}
                        aria-label={`Decrease quantity of ${title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-xl font-bold text-slate-700 shadow-sm transition hover:bg-slate-200 active:scale-95"
                    >
                        −
                    </button>

                    <span className="min-w-6 text-center font-bold text-slate-800">

                        {quantity}

                    </span>

                    <button
                        onClick={() => increase(id)}
                        aria-label={`Increase quantity of ${title}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
                    >
                        +
                    </button>
                </div>

                <button
                    onClick={() => updatePrice(id)}
                    className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-100 active:scale-95"
                >
                    Edit price
                </button>

                <button
                    onClick={() => removeProduct(id)}
                    className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 active:scale-95"
                >
                    Remove
                </button>

            </div>
        </article>
    )
}
