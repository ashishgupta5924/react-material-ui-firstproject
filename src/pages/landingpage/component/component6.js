// import { Grid } from '@mui/material';
import '../landingpage.css'
import image1 from '../../image/Rectangle17.png'
import image2 from '../../image/man9.png'
function Component6(){
    return(
        <div className='component6'>
            <div className='container'>
                <img src={image1} className="image1" alt='' />
                <img src={image2} className="image2" alt='' />
                <div  className='container-body'>
                    <h1>Find the <span className='green'>right job</span> <br/>intership for you</h1>
                    <p>Suggested Searches</p>
                <div>
                    <button id='component6-eng-btn'>Engineering</button>
                    <button>Business Development</button>
                    <button>Finance</button><br/>
                    <button>Asministative Assistance</button>
                    <button>Retail Associate</button>
                    <button>Customer Service</button><br/>
                    <button>Operations</button>
                    <button>Information technology</button><br/>
                    <a>See more</a>
                </div>
                </div>       
            </div>
        </div>
    )
}

export default Component6;