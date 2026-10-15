
export default function Input() {


    return(
        <div className="bg-amber-400 p-3">

            <form action="#" className="flex flex-col gap-3">

                <label htmlFor="title" className="font-bold">title :</label>
                <input className="title bg-red-300 p-2" type="text" placeholder="please enter your title .." />

                <label htmlFor="price" className="font-bold">price :</label>
                <input type="text" className="price bg-red-300 p-2" placeholder="please enter your price .." />

                <label htmlFor="quantity" className="font-bold">quantity :</label>
                <input type="text" disabled value={4} className="quantity bg-red-300 p-2" />

                <button className="border-2 p-3 cursor-pointer w-[20%]">add product</button>

            </form>

        </div>
    )
}
