import Img1 from '../images/push-it.avif'
import '../css/index.css'
import  Img_2 from '../images/images.png'
// import Img8\ from '../images/img8.avif'

function Section5(){
    return(
        <div className='sec_3_inner_div'>
        <div className='main_inner'>
            <h1 className='inn_text'>Listen. Like it? Back it. Push it!</h1><br /><br />
            <p className='inn_para'>Trust your ear. If you like a song you can support the artist to make it a hit.

.</p>
            <br />
            <br />
            <p className='para_red'>Explore fan campaigns</p>
        </div>
        <div className="inner_sec_img5" >
            <img src={Img1} className="img_sec3" />
        </div>
    </div>
    
    )
}
export default Section5