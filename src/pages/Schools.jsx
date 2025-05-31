import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../phone.css'

function Schools() {

  const [ecoles, setEcoles] = useState([])

  let params = useParams()


  useEffect(() => {
    const fetchEcoles = async () => {
      const response = await fetch('../../data.json');
      const data = await response.json()
      setEcoles(data.filter(ecole => ecole.id === params.id))      
    }
    fetchEcoles()
  }, [])

  

  
  return (
    <>
      <button className="filter" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white" className="filterIcon"><path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z"/></svg>
        <p>Filter</p>
      </button>

    
      <div className="ecoles">
        {ecoles.map((ecole, i) => (
          <div className="ecole" key={i}>
            <img src={ecole.image} alt={ecole.id} width={80} height={80} />
            <h1 className="ecole_name">{ecole.name}</h1>
            <p className="ecole_city">-{ecole.city}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Schools