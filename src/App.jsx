import { useState } from "react";

function App() {

  const [num ,setnum]=useState(0)
  // let num =0
function addnum() {

  setnum( num + 1)
  // num = num + 1
  console.log(num);
}

return(
<>

<h1>Hellow world</h1>
<button onClick={addnum}>addnum</button>
</>

)
}


export default App
