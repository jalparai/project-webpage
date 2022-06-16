import '../css/index.css'
import Img1 from '../images/explore.png'
import Img2 from '../images/megaphone.png'
import Img3 from '../images/gold-record.svg'
import Img4 from '../images/hands.svg'
import Img5 from '../images/megaphone.svg'
import Zix from '../images/line1-horiz.svg'
function Section2(){
    return(
        <div className="sec_2">

<div className='sec_2_top_div' >
<div> 
    <img src={Img1}  className='img_sec_2'/>
<span >Explore</span>
</div>

<div>

<img src={Img2}  className='img_sec_2'/>
<span >of artist</span>
</div>
</div>
<h1 className='hedg_sec_2'>How it works</h1>
<span className='span_headng'>SHARE SUCCESS TOGETHER</span>

<div className='sec_2_flex_img'>
    
<div>
<img src={Img5} className="flex_img"/>
<h3>CREATE FAN CAMPAIGN</h3>
<p>Invite your fans to get support for your next release

</p>
</div>

<div>
<img src={Zix} className="flex_img zixzax"/>

</div>

<div>
<img src={Img4} className="flex_img"/>
<h3>CREATE FAN CAMPAIGN</h3>
<p>Invite your fans to get support for your next release

</p>
</div>

<div>
<img src={Zix} className="flex_img zixzax"/>
</div>
<div></div>
<div>
<img src={Img3} className="flex_img "/>
<h3>CREATE FAN CAMPAIGN</h3>
<p>Invite your fans to get support for your next release

</p>
</div>

</div>
<button className='want_btn'>I WANT TO TRY</button>




        </div>
    )
}

export default Section2