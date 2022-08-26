import { Grid} from '@mui/material';
import * as React from 'react';
import LoginDetails from './component/LoginBody';
import ImageComponent from '../imagecomponent/Imagecomponent';

function Login(){
    return(
        // className='login' style={Style.marginleft}
        <div >
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>

                    <LoginDetails/>
                </Grid>
                <Grid item xs={8}>
                    {/* <StandardImageList/> */}
                    <ImageComponent/>
                </Grid>
            </Grid>           
        </div>
    );
}

export default Login;