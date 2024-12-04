import { useNavigate } from "react-router-dom"

export const Errorpage = ()=>{
  const navigate = useNavigate()

  const handlebackbtn = ()=>{
   navigate('/')
  }
    return(
        <>
          <p>Page nhi hai..</p>
          <button onClick={handlebackbtn} >click</button>
        </>
    )
}