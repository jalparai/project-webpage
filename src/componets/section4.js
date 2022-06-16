import Img1 from '../images/mobil-img.avif'
import '../css/index.css'
import  Img_2 from '../images/images.png'
// import Img8\ from '../images/img8.avif'

function Section4(){
    return(
        <div className='sec_3_inner_div'>
             <div className="inner_sec_img_2" id='mob_img'>
            <img src={Img1} className="img_sec4" />
        </div>
        <div className='inner_sec_tex_2'>
            <h1 className='inn_text'>Complete control for artists</h1><br /><br />
            <p className='inn_para'>You decide the size of your own royalty advance and keep all the rights. Distribution included!</p>
            <br />
            <br />
           <button className='start_btn'>
            Start
           </button>
           {/* <img src={Img_2} className="app_logo"/> */}
        </div>
       
    </div>
    
    )
}
export default Section4