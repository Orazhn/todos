import { useState} from 'react'
import Cards from './Components/Cards'
import { sendingData} from "./Hooks/DataOperations"


export default function App() {
    const [value, setValue]= useState<string>('')
  
    return (
      <div className="w-screen h-screen flex justify-start items-center flex-col gap-4">
        <div className="flex justify-between gap-4 items-center w-4/5 mt-6">
          <h1 className="text-3xl text-blue-800 font-myFont">todos app</h1>
          <div className="flex w-3/5 justify-between gap-2 md:flex-row sm:flex-col ">
            <input 
              className="w-4/5 py-3 px-4 text-xl rounded-md drop-shadow-2xl sm:w-full " 
              type="text" value={value} 
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {e.key === "Enter" && sendingData(value) }}
            />
            <button 
              className="bg-blue-600 text-white drop-shadow-2xl rounded-lg px-10 py-2 font-myFont font-bold" 
              onClick={() => sendingData(value)}>
              SET
            </button>
          </div>
          
          </div>
              <Cards /> 
         
              
          
           
          </div>
    )
}