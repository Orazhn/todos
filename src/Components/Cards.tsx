import { FC, useEffect, useState } from "react"
import { MdHistory } from "react-icons/md";
import {  gettingData, gettingLocal} from "../DataFunctions/DataOperations"
import Card from "./Card";
import EmptyTodo from "./EmptyTodo";
import Favorites from "./Favorites";
import HistoryCard from "./HistoryCard";

interface ITodo {
  text: string,
  id: string,
  isFavorite: boolean
}

const Cards: FC = () =>  {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [tab, setTab] = useState<string>('All')
  const [historyShown, setHistoryShown] = useState<boolean>(false)
  
  const data:any = gettingLocal()

  useEffect(() => {
    gettingData(setTodos)
  }, [])

  

  return (
    <div className="bg-slate-300 py-5 rounded-md flex justify-center w-4/5 h-auto sm:w-full md:w-4/5">
        <div className="w-4/5 flex flex-col items-center gap-4">
          <div className="flex justify-center w-full gap-4">
            <ul className="list-none flex justify-center w-4/5 rounded-md">
              <li onClick={() => setTab('All')} 
                className={`${tab == 'All' ? 'bg-blue-500 text-white' : 'bg-slate-200'} 
                  border cursor-pointer border-gray-500 rounded-md w-full text-center`
                }>
                All
              </li>
              <li onClick={() => setTab('Favorites')} 
                  className={`${tab == 'Favorites' ? 'bg-blue-500 text-white' : 'bg-slate-200'} 
                    border cursor-pointer border-gray-500 rounded-md w-full text-center`
                }>
                Favorites
              </li>
            </ul>
            <MdHistory onClick={() => setHistoryShown(prev => !prev)} className="text-3xl cursor-pointer "/>
          </div>
          {todos.length == 0 ? 
            <div className="w-4/5 flex justify-center gap-4">
              <EmptyTodo />
            </div> :
            <ul className="list-none sm:w-full lg:w-4/5">
              {tab == 'Favorites' ? <Favorites/> : 
                todos.map (todo => 
                  <li key={todo.id}>
                    <Card text = {todo.text} id = {todo.id} isFavorite = {todo.isFavorite}/>
                  </li>)
              }
            </ul>
          }
          {
            historyShown &&
              <div className="w-3/5 mt-5 bg-slate-300 rounded-lg p-5 flex flex-col  justify-center items-center sm:w-full lg:w-4/5">
                <h1 className="text-lg"><strong>History</strong></h1>
                {data.text  ?
                  <HistoryCard todo = {data}/> :
                  <img src="src/images/emptyFolder.png"/>
                } 
              </div>
          }
        </div>
    </div>
  )
}
export default Cards