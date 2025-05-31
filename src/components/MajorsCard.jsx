import { specialiste } from "../specialiste"


function MajorsCard() {
  return (
    <>
      <div className="majors">
        <h1>بعض التخصصات</h1>
        <div className="more">
          <a href="#">المزيد</a>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="12px" fill="blue" className="leftArrow"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
        </div>
      </div>
      <div className="cards">
        {specialiste.map(major => (
          <div className="card" key={major.id}>
            <img className="majorImage" src={major.image} alt={major.name} width={130} height={130} />
            <p className="majorName">{major.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default MajorsCard