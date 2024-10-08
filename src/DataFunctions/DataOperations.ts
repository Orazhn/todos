import axios from "axios";


const sendingData = (value:string) => {
  if (value.trim().length){ 
    axios.post('http://localhost:3000/todos', {
      text: value,
      isFavorite: false
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    window.location.reload()
  }
}
interface ITodo {
  text: string,
  id: string,
  isFavorite: boolean
}

const gettingData = (setTodos: (todos:ITodo[]) => void) => {
  axios.get('http://localhost:3000/todos')
  .then(response => {
    setTodos(response.data);
  })
  .catch(error => {
    console.error(error);

})}

const doneButtonHandler = (id: string) => {
  axios.delete(`http://localhost:3000/todos/${id}`,)
  .then(() => {
    console.log(`Deleted post with ID`);
  })
  .catch(error => {
    console.error(error);
  });
  window.location.reload()
}


const handleFav = (id:string, text: string, fav:boolean) => {

  axios.put(`http://localhost:3000/todos/${id}`, {
    text: text,
    isFavorite: !fav
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })}

  const sendingLocal = (todo: ITodo) => {
    localStorage.setItem('history', JSON.stringify(todo))
  }


  const gettingLocal = () => {
    const item = localStorage.getItem('history')
    if (item){
      const parsedData = JSON.parse(item);
      return parsedData
    }else {
      return "You didn't complete any todo"
    }
  }

  const returnLocal = (todo: ITodo) => {
    localStorage.removeItem('history')
    axios.post('http://localhost:3000/todos', {
      text: todo.text,
      id:todo.id,
      isFavorite: todo.isFavorite
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    window.location.reload()
  }
    
    

export {sendingData, gettingData, doneButtonHandler, handleFav, sendingLocal, gettingLocal, returnLocal}