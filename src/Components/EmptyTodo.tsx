interface IProps {
  text?: string
}
const EmptyTodo = ({text}: IProps) => {

  return (
    <div >
        <p className="text-black  font-myFont text-lg">{`It looks like you don't have ${ text == 'Favorite' ? 'Favorite' : ''} todos, add some :)`}</p> 
    </div>
    
  )
}
export default EmptyTodo