import { create } from "zustand";

 const productsStore = create((set) => ({

        products :[

                    { id: 1, title: "Laptop", price: 1000, quantity: 1 },

                    { id: 2, title: "Mouse", price: 50, quantity: 2 },

                    { id: 3, title: "Keyboard", price: 100, quantity: 1 }

                ],


        increase: (btnId) => {

            set((state) => ({

                products : state.products.map(
                product => product.id === btnId ?
                {...product , quantity: product.quantity + 1} :
                product

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
        },

        removeProduct: (btnId) => {
            set(
                state => ({
                    products : state.products.filter(
                        product =>
                            product.id !== btnId
                    )
                })
            )
        },

        updatePrice : (btnId) => {

            const newPrice = prompt('enter new price :')

            if(newPrice === null) {
                return
            }

            if(Number.isNaN(Number(newPrice)) || newPrice.trim() === ''){
                alert('value is not valid')
                return
            }

            set((state) => ({
                products : state.products.map(
                    product =>
                        product.id === btnId ?
                        {...product , price : Number(newPrice) } :
                        product
                )
            }))

        },

        clearProducts : () => {
            set(() => ({
                products : []
            }))
        }

}))
export default productsStore
