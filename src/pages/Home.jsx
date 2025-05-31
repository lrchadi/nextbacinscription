import FeedBack from '../components/FeedBack'
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
        <div className="ctaSection">
          <h1 className="title">أختر <span>توجهك</span> ألان بكل <span style={{fontWeight: 'bold', color: 'black'}}>سهولة</span></h1>
          <p className='subTitle'>ستجد في كل صفحة شرح للمؤسسة أو للتخصص, المدن التي تتواجد بها, طريقة التسجيل وغيرها...</p>
          <a href="#">
            <button className='ctaBtn'>تسجل الأن</button>
          </a>
        </div>
        <FeedBack />
        <footer>
          <p className="msg">بالتوفيق للجميع</p>
          <p className="madewithlove">♡ Made with </p>
        </footer>
    </>
  )
}

export default Home