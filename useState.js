import react,{useState} from 'react'

const Fun=()=>{
  const [name,useName]=useState("MJ");
  return(
    <div>
      <h1> Hey!..{name}</h1>
      </div>
  )
}

export default Fun
