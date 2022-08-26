import { Grid } from "@mui/material";
// import image from '../login/loginImage/Rectangle 50.png'
import '../css/style.css'
import './createUser.css'
import headarrow from '../login/loginImage/Group (1).png'
import { Stack } from "@mui/system";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ImageComponent from "../imagecomponent/Imagecomponent";
function CreateUser(){
    return(
        <div >
            <Grid container spacing={0} columns={16}>
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
                            <h2>Create an user <span className="green">account  </span><img width='50' height='25'  src={headarrow} alt=''/></h2>
                            <p>Please enter the following details in the given form to create your account</p>
                        </div>
                        <div id='input'>
                            <div className="single-input">
                                <input placeholder="Enter your full name" type='text'/>
                            </div>
                            <div className="single-input">
                                <input placeholder="Enter your Email id" type='text'/>
                            </div>
                            <div className="single-input">
                                <input placeholder="Enter your mobile number" type='text'/>
                            </div>
                        </div>
                        <div id="btn">
                            
                            <Stack spacing={15} direction="row"> 
                            <button className="prev-btn" > <KeyboardBackspaceIcon id='logo'/><span>   prev</span></button>
                            <button className="create-btn"><span>Create Now</span></button> 
                                {/* <Button  sx={{ color:'black',bakgroundColor:'#F7F9FC',border:'2px solid #CBD3E7',borderRadius:'15px',height:'48px' ,width:'130px'}}><KeyboardBackspaceIcon/> <span> prev</span></Button>
                                <Button sx={{color:'white',backgroundColor:'#00DAB0',borderRadius:'18px',width:'224px', height:'48'}}>Create Now</Button> */}
                            </Stack>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        
                        <ImageComponent/>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default CreateUser;