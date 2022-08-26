import { Grid } from "@mui/material";

import image1 from '../../image/girl9.png'
// import image2 from '../../image/Rectangle16.png'

import '../landingpage.css'

function Component3(){
    return(
        <div className="component3">
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8} >
                    <div className="component3-leftcomponent" >
                        {/* <img src={image2} alt='' width={570} height={336} />
                            <div>
                                <h3>Find A Business</h3>
                                <p>Here's how to find the perfect idea for your business</p>
                                <br/><br/><br/><br/><br/>
                                <button >Search</button>
                            </div>
                        <img src={image1} height='270px' alt='green amuga'/> */}
                        <Grid container columns={8}>
                            <Grid item xs={4}>
                                <div className="component3-leftcomponent-text">
                                    <h3>Find A Business</h3>
                                    <p>Here's how to find the perfect idea for your business</p>
                                    <br/><br/><br/><br/><br/>
                                    <button >Search</button>
                                </div>
                            </Grid>
                            <Grid item xs={4}>
                                <img src={image1} width={272} alt='green amuga'/>
                            </Grid>
                        </Grid>
                        
                        
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <h1>Explore <span className="green">topics</span> <br/>you are interested in</h1>
                        <p>Content Topics</p>
                    </div>
                    <div id="component3-rightcomponent">
                        <button className="component3-rightbtn" style={{color:'#00DAB0',border:'2px solid #00DAB0'}}> See All Topics</button>
                        <button className="component3-rightbtn"> Science and Environment</button>
                        <button className="component3-rightbtn"> Marketing and Advertising</button><br/>
                        <button className="component3-rightbtn">  Sales and Retail</button>
                        <button className="component3-rightbtn"> Technology</button>
                        <button className="component3-rightbtn"> Finance and Economy</button>
                        <button className="component3-rightbtn"> Health</button><br/>
                        <button className="component3-rightbtn"> Business and Management</button><br/>
                        <a>See more</a>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Component3;