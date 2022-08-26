import {Grid} from "@mui/material";

import image from '../../image/group.png'
import '../../css/style.css'
import '../landingpage.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function Component7(){
    return(
        <div className="component7">
            <Grid container spacing={2} columns={16}>
                <Grid item xs={10}>
                    <div className="component7-body">
                        <h1>Get in <span className="green">Touch</span></h1>
                        <p>If you have any Query. Our team will get back to <br/>you within 24 Hours</p>
                        <div>
                            <Grid container columns={10}>
                                <Grid item xs={5}>
                                <div className="component7-form">
                                <input type='text' placeholder="Full name" />
                            </div>
                                </Grid>
                                <Grid item xs={5}>
                                <div className="component7-form">
                                <input type='text' placeholder="Email Address" />
                            </div>
                                </Grid>
                            </Grid>
                        </div>
                        <div >
                            <input id="form-single-input" type='textarea' placeholder='Enter Your Message Here ......'/>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="component7-container">
                        <img src={image} alt='' height={326} width={370} />
                        <div className="component7-container-text">
                            <h2>Business hub</h2>
                            <p>Everyone from newly online
                             businesses to experienced marketers
                              can get results with Meta.Check out
                               their stories for some inspiration</p>
                        </div>
                        <button><span>Get Started </span><ArrowRightAltIcon/></button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Component7;