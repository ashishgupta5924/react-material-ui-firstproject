import '../css/style.css'
import './createOption.css'
import headarrow from '../image/Group (1).png'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Grid} from '@mui/material';
import { Box } from '@mui/system';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import BusinessIcon from '@mui/icons-material/Business';
import ImageComponent from '../imagecomponent/Imagecomponent';
// import backImage from '../image/Ellipse1.png'
function CreateOption(){
    return(
        <div>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                <div className="left-margin">
                    <div className="container">
                            <div className="image">
                                <span className="back-icon"><KeyboardBackspaceIcon/></span>
                            </div>
                            <div className="text">
                                <h3>Back to login</h3>
                            </div>
                    </div>
                    <div>
                        <div className='create-account'>
                            <h2>Create an <span className="green " >account</span><img width='50' height='25'  src={headarrow} alt=''/></h2>
                            <p>Please select your role to proceed a next step</p>
                        </div>
                    </div>
                    <div className='parent'>
                        <div className='child left' >
                            <Box
                                sx={{
                                    width: 207,
                                    height: 136,
                                    border:'2px solid #00DAB0' ,
                                    borderRadius:2
                                }}
                                ><div className='box-container'>
                                    {/* <img src={} /> */}
                                    <div className='box-logo'><span className='green'><PermIdentityIcon/></span></div>
                                    <div className='box-text'><span className='green'>User</span></div>
                                </div>
                                </Box>
                        </div>
                        <div className='child ' >
                            <Box
                                sx={{
                                    width: 207,
                                    height: 136,
                                    border:'2px solid #CBD3E7' ,
                                    borderRadius:2
                                }}
                                ><div className='box-container'>
                                    <div className='box-logo'><span><BusinessIcon/></span></div>
                                    <div className='box-text'><span>Company</span></div>
                                </div>
                                </Box>
                        </div>
                    </div>
                    <div className='next-btn'>
                        <button  className="green-btn" id="register-btn"><span>Next</span><ArrowRightAltIcon/></button>    
                    </div>
                </div>
                </Grid>
                <Grid item xs={8}>
                    <ImageComponent/>
                </Grid>
            </Grid>
        </div>
    )
}
export default CreateOption;