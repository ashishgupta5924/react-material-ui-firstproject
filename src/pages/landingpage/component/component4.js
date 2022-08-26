import { Grid } from "@mui/material";
import map from '../../image/map.png'
import image1 from '../../image/man3.png'
import image2 from '../../image/man4.png'
import image3 from '../../image/man5.png'
import image4 from '../../image/man6.png'
import image5 from '../../image/man7.png'
import image6 from '../../image/man8.png'
import image7 from '../../image/Vector1.png'
import bubble from '../../image/bubble.png'


import '../landingpage.css'
function Component4(){
    return(
        <div className='component-body'>
            <Grid container spacing={0} columns={16}>
                <Grid item xs={8}>
                    <div>
                        <div>
                            <img id="component4-image8" src={bubble} alt=''/>
                        </div>
                        <div className="left-margin" id="component4-textbody">
                            <h1> Meet your <img id="component4-image7" src={image7} alt='' /> <br/><span className="green">Community</span> People</h1>
                            <p>A community is a familiar thread used to bring people together to business and stocks 
                            each other in the fight to overcome those threats</p>
                            <button>Explore More </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <img id="component4-background-image" src={map} alt='map' />
                        <img id="component4-image1" src={image1} alt='' />
                        <img id="component4-image2" src={image2} alt='' />
                        <img id="component4-image3" src={image3} alt='' />
                        <img id="component4-image4" src={image4} alt='' />
                        <img id="component4-image5" src={image5} alt='' />
                        <img id="component4-image6" src={image6} alt='' />

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default Component4;