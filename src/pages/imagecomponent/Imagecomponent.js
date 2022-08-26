import image from '../image/Group 40.png'
import '../css/style.css'
import './imageComponent.css'
// import image1 from '../image/girl1.png'
import image1 from '../image/Rectangle1.png'
import image2 from '../image/Rectangle2.png'
import image3 from '../image/Rectangle3.png'
import image4 from '../image/Rectangle4.png'
import image5 from '../image/Rectangle5.png'
import image6 from '../image/Rectangle6.png'
import image7 from '../image/Rectangle7.png'
import image8 from '../image/Rectangle8.png'
import image9 from '../image/Rectangle9.png'
import image10 from '../image/Rectangle10.png'
import image11 from '../image/girl1.png'
import image12 from '../image/man1.png'
import image13 from '../image/girl2.png'
import image14 from '../image/girl3.png'
import image15 from '../image/arrow-01.png'
import { Grid } from '@mui/material'
function ImageComponent(){
    return(
        <div>
            <div>
                <Grid container spacing={1} columns={8}>
                    <Grid item xs={1}>
                        <div className='left-child'>
                            <img src={image} alt="" width='64px' height='64px'/>
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <div className='right-child' >
                            <div>
                                <img src={image1} className="first-image" height='150px'  alt=''/>
                                <img src={image11} className="second-image" height='122px'  alt=''/>
                                <span className='first-text'><h4>Administrative<br/>Assistant</h4></span>
                                <img src={image2} height='150px' alt=''/>
                            </div>
                            <div>
                                <img src={image3} height='150px' alt=''/>
                                <img src={image4}  className="first-image" height='150px' alt=''/>
                                <img src={image15}  className="sixth-image" height='150px' alt=''/>
                                <img src={image12} className="third-image" height='135px'  alt=''/>
                                <img src={image5} height='150px' alt=''/>
                            </div>
                            <div>
                                <img src={image6} height='150px' alt=''/>
                                <span className='second-text'><h4>Bunsiness<br/>Management</h4></span>
                                <img src={image7}  height='150px' alt=''/>
                                <span className='third-text'><h4>Science &<br/>Environment</h4></span>
                                <img src={image13} className="forth-image" height='135px' alt=''/>
                            </div>
                            <div> 
                                <img src={image8} className="first-image" height='150px' alt=''/>
                                <img src={image14} className="fifth-image" height='135px' alt=''/>
                                <img src={image9} height='150px' alt=''/>
                                <img src={image10} height='150px' alt=''/>
                                <span className='forth-text'><h4>Marketing &<br/>Advertising</h4></span>
                            </div>
                        </div>
                    </Grid>

                </Grid>
                
                
            </div>
        </div>
    )
}
export default ImageComponent;