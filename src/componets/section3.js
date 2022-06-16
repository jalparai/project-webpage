import '../css/index.css'
import Img1 from '../images/img3.png'
import Img2 from '../images/img4.png'
import Img3 from '../images/img5.png'
import Img4 from '../images/img6.png'
import Img5 from '../images/img6.png'
import Img6 from '../images/img7.webp'
import Img7 from '../images/img3.png'
import Img8 from '../images/img8.avif'
function  Section3(){
    return(
   <div className='sec_3'>
 <div className='sec_3_head'>
 <img src={Img1} className="header_3_img"/>
 <img src={Img2} className="header_3_img"/>
 {/* <img src={Img3} className="header_3_img"/> */}
 <img src={Img4} className="header_3_img"/>
 <img src={Img5} className="header_3_img"/>
 <img src={Img6} className="header_3_img"/>
 <img src={Img7} className="header_3_img"/>
 </div>

<div className='sec_3_inner_div'>
    <div className='inner_sec_text'>
        <h1 className='inn_text'>Turn your fans into backers</h1><br /><br />
        <p className='inn_para'>Corite lets fans get a share of streaming revenues by investing in music they love.</p>
        <br />
        <br />
        <p className='para_red'>Sign up for free and claim reward!</p>
    </div>
    <div className="inner_sec_img" >
        <img src={Img8} className="img_sec3" />
    </div>
</div>


        </div>
    )
}
export default Section3