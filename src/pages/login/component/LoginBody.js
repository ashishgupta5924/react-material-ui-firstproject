import '../../css/style.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HttpsIcon from '@mui/icons-material/Https';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import headarrow from '../loginImage/Group (1).png'
import LoginIcon from '@mui/icons-material/Login';
import {Stack} from '@mui/system';
import GoogleIcon from '@mui/icons-material/Google';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './loginBody.css'
function LoginDetails(){
    return(
        <div  className='left-margin'>
            <div className="container">
                <div className="image">
                    <span className="back-icon"><KeyboardBackspaceIcon/></span>
                </div>
                <div className="text">
                    <h3>Back to login</h3>
                </div> 
            </div>       
            <div id="heading" >
                <h2  >Welcome<span className='green'> Back,</span> <img width='50' height='25' src={headarrow} alt=''/></h2>
                <p>Please enter your email or password to sign in and to access your account</p>
            </div>
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
             <div className="create-link">
                <p>Don't have an account? <a href="xyz.com">Create New </a></p>
             </div>
        </div>
    )



}
export default LoginDetails;