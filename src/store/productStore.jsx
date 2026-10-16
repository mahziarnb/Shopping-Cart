import { create } from "zustand";

 const productsStore = create((set,get) => ({


        products :[

                    { id: 1, title: "Laptop", price: 1000, quantity: 1 },

                    { id: 2, title: "Mouse", price: 50, quantity: 2 },

                    { id: 3, title: "Keyboard", price: 100, quantity: 1 }

                ],

        increase: (btnId) => {

            set((state) => ({

                products : state.products.map(

                product => product.id === btnId ? {...product , quantity: product.quantity + 1} : product

            )
        }))

        },

        decrease : (btnId) => {
            set((state) => ({
                products : state.products.map(
                    product =>
                    product.id === btnId && product.quantity > 1 ?
                    {...product , quantity: product.quantity - 1} :
                    product
                )
            }))
        }
}))
export default productsStore


            // const selectItem = get().products.filter(

            //     product =>
            //        product.id === btnId

            // )
