import { schools } from "../schools"


function SchoolsCard() {
  return (
    <div className="schools">
        <h1>المدارس</h1>
        <div className="cards">
            {schools.map(school => (
                <div className="card" key={school.id}>
                    <a href={'/ecoles/' + school.path}>
                        <img src={school.img} alt="ES" width={120} height={120} />
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SchoolsCard