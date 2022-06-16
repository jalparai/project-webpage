import '../css/index.css'
import Logo1 from '../images/img-fb (1).png'
import Logo2 from '../images/img-fb (2).png'
import Logo3 from '../images/img-fb (3).png'
import Logo4 from '../images/youtube.png'
import Logo5 from '../images/img-fb (5).png'
function Footer(){
    return(
        <div className='footer'>
<div>
    <p>Corite copyright © 2022. All Rights Reserved.</p>
    <p>
        <a href='#' className='footer_links'>News</a>
        <a href='#' className='footer_links'> Terms of use</a>
        <a href='#' className='footer_links'>Privacy policy</a>
        <a href='#' className='footer_links'>Support</a>
    </p>
  
</div>
<div>
<span>
        <img src={Logo1} className="footer_img" />
        <img src={Logo2} className="footer_img"/>
        <img src={Logo3} className="footer_img"/>
        <img src={Logo4} className="footer_img"/>
        <img src={Logo5} className="footer_img"/>
    </span>
</div>
        </div>
    )
}
export default Footer