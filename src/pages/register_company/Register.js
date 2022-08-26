import { Grid } from "@mui/material";
import '../css/style.css'
import './Register.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import headarrow from '../image/Group (1).png'
import ImageComponent from "../imagecomponent/Imagecomponent";

function Register(){
    return(
        <div>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                    <div className="left-margin">
                        <div className="container">
                            <div className="image">
                                {/* <img src={image} alt=''/> */}
                                <span className="back-icon"><KeyboardBackspaceIcon/></span>
                            </div>
                            <div className="text">
                                <h3>Back to login</h3>
                            </div>        
                        </div>
                        <div >
                            <h2 id="register-body">Register a  <span className="green " >company  </span><img width='50' height='25'  src={headarrow} alt=''/></h2>
                            <p>Please enter the following details in the given form to Register your account</p>
                        </div>
                        <div >
                            <form className="form">
                                <div>
                                    <select placeholder="carname" id='two-upper-left' name="cars" className="company-name">
                                        <option value="" disabled selected hidden>Company name</option>
                                    </select>
                                    <select placeholder="carname"  id='two-upper-right' name="cars" className="register-border">
                                        <option value="" disabled selected hidden>Industry</option>
                                    </select>
                                </div>
                                <div className="register-form register-border">
                                    <input type='text' placeholder="Enter your address" required></input>
                                </div>
                                <div className="register-form register-border">
                                    <input type='email' placeholder="Enter email id" required></input>
                                </div>
                                <div className="register-form register-border">
                                    <input type='textarea' placeholder="Desciption (optional)" ></input>
                                </div>
                                <div className="register-form register-border">
                                    <input placeholder="Enter your website(optional)" type='text'></input>
                                </div>
                                <div >
                                    <input  placeholder="Choose password" id='two-left'></input>
                                    <input placeholder="Confirm password" id='two-right'></input>
                                </div>
                                <div className="condition">
                                    <input type='checkbox' />Agree <span className="green">Terms & conditions</span>
                                </div>
                                <button className="green-border" id="register-btn">Register</button>
                            </form>
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

export default Register;