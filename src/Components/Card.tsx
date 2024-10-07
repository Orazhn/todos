import { MdOutlineStarPurple500 } from "react-icons/md";
import { useState } from "react";
import { doneButtonHandler, handleFav, sendingLocal } from "../DataFunctions/DataOperations";


interface ITodo {
    text: string,
    id: string,
    isFavorite: boolean
}

const Card = (todo: ITodo): JSX.Element => {

    const settingStar = (id: string, text:string, fav: boolean) => {
        setStar(prev => !prev)
        handleFav(id, text, fav)
        window.location.reload()
    }
    const [star, setStar] = useState<boolean>(todo.isFavorite)

    const doneHandler = (todo: ITodo) => {
      doneButtonHandler(todo.id)
      sendingLocal(todo)
    }

  return (
    <div className=" flex justify-between border rounded-md mt-1      border-gray-400 items-center bg-slate-200 py-5 w-full">
        <p className="w-full text-black text-xl pl-3">{todo.text}</p>
        <button onClick={() => settingStar(todo.id, todo.text, todo.isFavorite)}>
            <MdOutlineStarPurple500 className={`text-2xl  
              ${star ?            
              'text-yellow-400 active:text-3xl' : 
              'text-white active:text-3xl ' }`
            }/>
        </button>
        <button onClick={() => doneHandler(todo)} className="flex-no-shrink p-2 ml-4 mr-2 border-2 bg-slate-400  rounded-md hover:text-white text-green border-green hover:bg-green">Done</button>
    </div>
  )
}
export default Card