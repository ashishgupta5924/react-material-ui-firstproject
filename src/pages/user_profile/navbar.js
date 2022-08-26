import { AppBar,  Badge, Box, IconButton, Toolbar } from '@mui/material';
import './style.css'
import Avatar from '@mui/material/Avatar';
import image1 from '../image/graynod_logo.png'
import { Stack } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import image2 from '../image/Rectangle 158.png'
import image3 from '../image/man10.png'

function NavBar(){
    return(
        <div>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position='static' id='navbar'>
                    <Toolbar>
                        <img src={image1} alt=''/>
                        <Stack direction='row' spacing= {2}>
                            <div id="left">                    
                                <button className='navbar-btn'><span><HomeIcon/></span><span style={{fontSize:14}}>Home</span></button>
                                <button className='navbar-btn'><span><StorefrontIcon/></span><span style={{fontSize:14}}>Business</span></button>
                                <button className='navbar-btn'><span><GroupsIcon/></span><span style={{fontSize:14}}>Group</span></button>
                                <button className='navbar-btn'><span><WhatsAppIcon/></span><span style={{fontSize:14}}>Chat</span></button>
                            </div>
                        </Stack>
                        <Box sx={{ flexGrow: 0.2 }} />
                        <Box>
                            <IconButton  color="inherit">
                                <Badge badgeContent color="error" size="small">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                        </Box>
                        <Avatar alt="memy Sharp" src='image3' sx={{ width: 30, height: 30 }} />
                       


                        <Box sx={{ flexGrow: 1 }}>
                            
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar;