import image1 from '../../image/landingpage-background.png'
import image2 from '../../image/graynod_logo-02.png'
import image3 from '../../image/Line14.png'
import { Grid } from '@mui/material';

function Component8(){
    return(
        <div className='component8-container' >
            <img src={image1} alt='' height={470} width={1366}/>
            <div className='component8-body'>
                <img  id='component8-logo'src={image2} alt=''/>
                <div id='footer-links'>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={4}>
                            <div>
                                <h3>About us </h3>
                                <p>While not explicitly documented above, the props of the ButtonBase
                                component are also available on Button. You can take advantage of this to target nested components.</p>
                                
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                            <h3>Company</h3>
                                <ul>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                    <li>Terms & conditions</li>
                                    <li>Privacy & Policy</li>
                                    <li>Career</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                                <h3>Business Links </h3>
                                <ul>
                                    <li>Business</li>
                                    <li>People</li>
                                    <li>News</li>
                                    <li>Jobs</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div>
                                <h3>Social Links </h3>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>Twitter</li>
                                    <li>Linked in</li>
                                    <li>Youtube</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <img id='component8-line' src={image3} alt=''/>
                
                <div id="copyright">&copy;2022. Graynod. All right reserved</div>
            </div>
        </div>
    )
}

export default Component8;