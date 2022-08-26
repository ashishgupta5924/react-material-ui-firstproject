import '../landingpage.css'
import { AppBar ,  Stack, Toolbar, Typography } from "@mui/material";
import image from '../../image/graynod_logo.png'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
function Component1(){
    return(
        <div>
            <AppBar id="appbar">
            <Toolbar>
                {/* <h1>GrayNod</h1> */}
                <img src={image} alt=''/>
                <Typography variant = 'h6' component='div' >

                </Typography>
                <Stack direction='row' spacing= {2}>
                    <div id="left">                    
                        <button  id="component1-btn-home">Home</button>
                        <button  className='component1-btn'>Business</button>
                        <button className='component1-btn'>People</button>
                        <button className='component1-btn'>Jobs</button>
                    </div>
                    <div id="right">
                    <Stack spacing={15} direction="row"> 
                        <button  className='component1-btn' >Join Now</button>
                        <button id="component1-btn-signup"><PermIdentityIcon/> <span>Sign in</span></button>
                    </Stack>
                    </div>
                </Stack>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Component1;