import MajorsCard from '../components/MajorsCard'
import Card from '../components/SchoolsCard'
import SerachInput from '../components/SerachInput'
import moroccanKingdom from '../images/moroccan_logo.jpg'
import '../phone.css'


function Home() {
  return (
    <>
        <header>
        <div className='moroccanLogo'>
                <img src={moroccanKingdom} alt="Moroccan Kingdom" width={50} height={50} />
        </div>
            <h1 className='headline'><span>تسجل</span> الأن</h1>
            <p className='subheadline'>موقع يجمع لك أغلب المدارس, المعاهد و الجامعات المغربية لكي تكمل تعليمك فيها بعد الباك.</p>
            <SerachInput />
        </header>
        <Card />
        <MajorsCard />
    </>
  )
}

export default Home