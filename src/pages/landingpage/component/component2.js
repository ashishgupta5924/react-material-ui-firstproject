import { Grid } from '@mui/material';
import '../../css/style.css'
import '../landingpage.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HttpsIcon from '@mui/icons-material/Https';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import LoginIcon from '@mui/icons-material/Login';
import {Stack} from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import image1 from '../../image/Rectangle11.png'
import image2 from '../../image/Rectangle 10.png'
import image3 from '../../image/Rectangle 12.png'
import image4 from '../../image/Rectangle 13.png'
import image5 from '../../image/Rectangle14.png'
import image6 from '../../image/Rectangle15.png'
import image7 from '../../image/man2.png'
import image8 from '../../image/girl4.png'
import image9 from '../../image/girl5.png'
import image10 from '../../image/girl6.png'
import image11 from '../../image/girl7.png'
import image12 from '../../image/girl8.png'
function Component2(){
    return(
        <div className='component-body'>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <div className='component2'>
                        <div>
                            <h1>Welcome to your<br/> <span Style={'color:#00DAB0'}>professional</span> community</h1>
                            <p>Join us your professional community</p>
                        </div>
                        <div>
                            <div className="single-input">
                                <span><PersonOutlineIcon/></span><input type='text' placeholder='john@gmail.com'></input>
                            </div>
                            <div className="single-input">
                                <span><HttpsIcon/></span><input type='password' placeholder='*******************'></input><span id='showpass'><RemoveRedEyeIcon/></span>
                            </div>
                            <div className="forgot-link">
                                <a href="xyz.com">Recover password?</a>
                            </div>
                            <div>
                                <br/>
                                <Stack spacing={2} direction="column">
                                    <button className="login-btn"><span>Sign in</span> <LoginIcon/></button>
                                    <button className="or-btn" >or</button>
                                    <button  className="google-btn"><GoogleIcon/> <span>Sign in with Google</span> </button>
                                </Stack>
                            </div>
                            
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <div className='image-div'>
                            <img className='component2-image1' src={image1} alt='' width='127px' height={364}/>
                            <img className='component2-image2' src={image2} alt='' width={126} height={214}/>
                            <img className='component2-image3' src={image3} alt='' width={127} height={364}/>
                            <img className='component2-image7' src={image7} alt='' />
                            <img className='component2-image8' src={image8} alt='' />
                            <img className='component2-image9' src={image9} alt='' />
                        </div>
                        <div>
                            <img className='component2-image4' src={image4} alt='' width={127} height={243}/>
                            <img className='component2-image5' src={image5} alt='' width={127} height={364}/>
                            <img className='component2-image6' src={image6} alt='' width={127} height={243}/>
                            <img className='component2-image10' src={image10} alt=''/>
                            <img className='component2-image11' src={image11} alt=''/>
                            <img className='component2-image12' src={image12} alt='' />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Component2;