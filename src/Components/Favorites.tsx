import Card from "./Card"
import { useEffect, useState } from "react"
import { gettingData } from "../DataFunctions/DataOperations"
import EmptyTodo from "./EmptyTodo"

interface ITodo {
    text: string,
    id: string,
    isFavorite: boolean
}
const Favorites = () :JSX.Element => {
    const [todos, setTodos] = useState<ITodo[]> ([])
    useEffect(() => {
        gettingData(setTodos)
    }, [])

   
  return (
    <div>
        {todos.filter(todo => todo.isFavorite).length == 0 ? 
            <div className="w-full flex justify-center">
                <EmptyTodo text={"Favorite"} />
            </div> :
            todos.filter(todo => todo.isFavorite)
                .map(todo => 
                    <li key={todo.id}>
                        <Card text = {todo.text} id = {todo.id} isFavorite = {todo.isFavorite}/>
                    </li>)
            
        }
    </div>
  )
}

export default Favorites