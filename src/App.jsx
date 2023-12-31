import { useState } from "react";
import "./index.css"
function App() {

const [text, settext ]=useState('')
const [todo, settodo ]=useState([])

function addtodo(event) {
  if (text==='') {
    alert('please entr task')
  return
  }
  event.preventDefault()

todo.push(text)
settodo([...todo])
console.log(todo);
settext('')
}


function deletetodo(index) {

const arr =[...todo]  
  
arr.splice(index,1)

settodo(arr)

}


function edittodo (index) {
  const newarr= [...todo]

let newval=prompt('enter new value')
if (newval==='') {
  alert('please enter Todo')
  return
}


newarr[index]=newval

settodo(newarr)

}



return(
<>
<div className="head">
<h1 >ToDo App</h1>
<div>
<form onSubmit={addtodo}>

<input className="inp" type="text" placeholder="enter todo" onChange={(e)=>settext(e.target.value)} value={text} />
<button className="btn" type="submit">AddTodo</button>
</form>
</div>


{todo.map((item,index)=>{

return<h2 key={index}>{item}

<button className="btn" onClick={()=>edittodo(index)}>Edit</button>

<button className="btn" onClick={() => deletetodo(index)}>delete</button>

</h2>

}
)}











</div>
</>
)
}


export default App
