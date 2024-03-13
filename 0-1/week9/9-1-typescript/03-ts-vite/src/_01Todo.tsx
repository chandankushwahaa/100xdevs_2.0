
const _01Todo = () => {
  return (
<>
    <h2>1.Takes Todos as Input And Render it.</h2>
    < TodoItem 
      title="Learn React" 
      description="Learn how to use React with Typescript" 
      done={true} 
    />
</>
)
}


interface TodoProps{
  title: string,
  description: string,
  done: boolean
}

function TodoItem(props: TodoProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.done ? 'Done' : 'Not done'}</p>
    </div>
  )
}

export default _01Todo