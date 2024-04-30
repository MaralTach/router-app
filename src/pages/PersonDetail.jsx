import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import NotFound from "./NotFound"
import spinner from "../img/Spinner-2.gif"

const PersonDetail = () => {
  const [person, setPerson] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  console.log(id)
  const getPerson = () => {
    setLoading(true)
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) =>{
        if(!res.ok){
          setError(true)
          setLoading(false)
          throw new Error("User can not found")
        }
        return res.json()
      })
      .then((data) => {
        setLoading(false)
        setPerson(data.data)
      })
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getPerson()
  }, [])

//? conditional rendering
if(loading){
  return <img src={spinner} alt="spinner"/>
}else if(error){
  return <NotFound/>
}else{
  return (
    <div className="container text-center mt-4">
      <h1>PERSON DETAIL</h1>
      <img className="rounded-circle" src={person?.avatar} alt="img" />

      <h6>
        {person?.first_name} {person?.last_name}
      </h6>
      <p>{person?.email}</p>
      <div>
        <button className="btn btn-danger" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="btn btn-success" onClick={() => navigate("/")}>
          Home
        </button>
      </div>
    </div>
  )
}

}

  

export default PersonDetail
