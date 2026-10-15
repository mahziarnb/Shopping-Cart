import { create } from "zustand";

 const productsStore = create((set) => ({


        products :[

                    { id: 1, title: "Laptop", price: 1000, quantity: 1 },

                    { id: 2, title: "Mouse", price: 50, quantity: 2 },

                    { id: 3, title: "Keyboard", price: 100, quantity: 1 }

                ],

        increase: function(btnId){

            const selectItem = products.filter(
                product =>
                   Number(product.id) === Number(btnId)
            )

            console.log(selectItem)


        }



}))
export default productsStore
