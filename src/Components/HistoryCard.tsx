import {  returnLocal } from "../DataFunctions/DataOperations";



interface ITodo {
    todo: {
        text: string,
        id: string,
        isFavorite: boolean
    }
    
}

const HistoryCard  = ({todo}: ITodo): JSX.Element => {

   
  return (
    <div className="flex justify-between border rounded-md mt-1 border-gray-400 items-center bg-slate-200 py-5  w-full">
        <p className="w-full text-black text-xl pl-3">{todo.text}</p>
        <button onClick={() => returnLocal(todo)} className="p-2 ml-4 mr-2 border-2 bg-slate-400  rounded-md hover:text-white text-green border-green hover:bg-green">Return</button>
    </div>
  )
}
export default HistoryCard