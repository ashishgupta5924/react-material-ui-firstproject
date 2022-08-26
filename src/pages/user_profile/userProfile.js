import {  Box, Grid } from "@mui/material";
import NavBar from "./navbar";
import image from '../image/blue_light_flow_background 1.png'

import image3 from '../image/man11.png'
// import image5 from '../image/man12.png'
// import image6 from '../image/man13.png'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PlaceIcon from '@mui/icons-material/Place';
// import image4 from '../image/Line14.png'
import image7 from '../image/Rectangle20.png'
import image8 from '../image/like.png'
import image9 from '../image/likebtn.png'
import image10 from '../image/comment.png'
import image11 from '../image/share.png'
import image12 from '../image/man14.png'

import image13 from '../image/man16.png'
import image14 from '../image/Vector.png'
import image15 from '../image/Reply.png'
import image16 from '../image/man15.png'
import image17 from '../image/commentbtn.png'
import image18 from '../image/man13.png'


import MoreVertIcon from '@mui/icons-material/MoreVert';
import TotalAvatars from "./totlavatar";
import { Stack } from "@mui/system";
import RightImageComponent from "./rightimagecomponent";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}<br/>
        <span style={{color:'#6C757D'}} onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? `Read more..` : " show less"}
        </span>
      </p>
    );
  };
function UserProfile(){
    return(
        <div>
            <NavBar/>
            <div id="profile-page">
                <Grid container spacing={5} columns={16}>
                    <Grid item xs={11.4}>
                        <div className="left-component">
                            <div id="firstpage">
                                <img src={image} alt='' width={870} height={250}/>
                                <img src={image3} alt=''  id="image1" />
                                <div id="firstpage-text" >
                                    <h1>Harry Weish</h1>
                                    <p style={{color: '#6C757D'}}>Denver, CEO </p>
                                    <p style={{display:'flex',verticleAlign:'middile',color: '#6C757D',marginBottom: '6px'}}><PlaceIcon style={{marginLeft:'-5px'}}/>Akshay Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore</p>
                                </div>
                                <div style={{borderBottom:'0.5px solid #CBD3E7',marginTop: '6px'}}>
                                    <p style={{fontWeight:600,color:'#6C757D'}}>About Me</p>
                                    <p>The designer used a grid layout in the layout of his about page . Contamporary colors inform you
                                    of the designer's style,while a status message of his availability to take on new projects makes it clear 
                                    to prospective clients whether he's available or not....</p>
                                </div>
                                <div className="mutual-connection">
                                    {/* <TotalAvatars/> */}
                                    {/* <Avatar src={`${process.env.PUBLIC_URL}/apple-touch-icon.png`} className={classes.avatar} style={{ borderRadius: 0 }} /> */}
                                    
                                        <div>
                                            <img src={image18} alt='' height='33px' width='33px' className='mutual-connection-image'/>
                                            <img src={image13} alt='' height='35px' width='35px' className='mutual-connection-image'/>
                                            <img src={image13} alt='' height='35px' width='35px' className='mutual-connection-image'/>
                                        </div>
                                        <div>
                                            <p>12 mutual connections : <span> Kethi Ferrazi,jhon Densal ,and 5 other</span></p>
                                        </div>
                                   

                                </div>
                                <div id="firstpage-btn">
                                    <button>Connect</button>
                                    <button>Cancel Request</button>
                                    <button>Message</button>
                                </div>
                            </div>
                            <div id="secondpage">
                                <Box sx={{
                                    width: 840,
                                    height: 1018,
                                    marginTop:'25px',
                                    padding:'15px',
                                    backgroundColor: '#FFFFFF',
                                    border:'1px solid #CBD3E7',
                                    borderRadius:'5px',
                                }}>
                                    <div className="container2">
                                        <div>
                                            <img src={image3} alt='' className='iconDetails'/>
                                        </div>
                                        <div><h4>Herry weish</h4></div>
                                        <div style={{fontSize:"0.8em",float:"left" ,marginLeft: '15px',color:'#6C757D'}}>Banglore 2hr ago</div>
                                        <div style={{float:"right",fontSize:".6em"}}><Avatar sx={{ width: 30, height: 30 }}><MoreVertIcon/></Avatar></div>
                                    </div>   
                                    <div className="container">
                                        <p>
                                            <ReadMore>
                                                If you want to make a bold statement with your design work, look no furhter. We've rounded up a handful of unique 
                                                type faces that are bursting with personality a bold statement with your design work.  
                                            </ReadMore>
                                        </p>
                                    </div>
                                    <img src={image7} alt=''/>
                                    <div className="container3">
                                        <div>
                                            <img src={image8} alt='' className="likeDetails"/>
                                        </div>
                                        <div style={{fontSize:"14px",float:"left",color:'#6C757D'}}>Jhone, Visten and 57 others</div>
                                        <div style={{float:"right",fontSize:"14px",color:'#6C757D'}}>18 comments</div>
                                    </div>
                                    <div className="container4">
                                        <button ><img src={image9} alt=''/></button><span style={{borderRight:"1px solid #CBD3E7"}}></span>
                                        <button><img src={image10} alt=''/></button><span style={{borderRight:"1px solid #CBD3E7"}}></span>
                                        <button><img src={image11} alt=''/></button>
                                    </div>
                                    <div className="container2" style={{marginTop:20}}>
                                        <div>
                                            <img src={image12} alt='' className='likeDetails'/>
                                        </div>
                                        <div><h4>Patrick Kollor</h4></div>
                                        <div style={{fontSize:"0.8em",float:"left",marginLeft: '15px',color:'#6C757D'}}>Banglore 2hr ago</div>
                                        <div style={{float:"right",fontSize:".6em"}}><Avatar sx={{ width: 30, height: 30 }}><MoreVertIcon/></Avatar></div>
                                    </div>
                                    <div className="comment-box">
                                        <p style={{marginLeft:10}}>I think in the Future. Neuromorphim style will be more popular </p>
                                    </div>
                                    <div className="container5">
                                        <button><img src={image9} alt=''/></button><span style={{borderRight:'1px solid #CBD3E7', marginLeft:'10px',marginRight:'10px'}}></span>
                                        <button><img src={image14} alt=''/><img src={image15} alt=''/></button>
                                        <div style={{float:"right"}}>2</div>
                                        <div style={{float:"right"}}><img src={image8} alt=''/></div>
                                    </div>
                                    <div className="container2" style={{marginTop:20}}>
                                        <div>
                                            <img src={image13} alt='' className='likeDetails'/>
                                        </div>
                                        <div><h4>Keith Ferrazi</h4></div>
                                        <div style={{fontSize:"0.8em",float:"left",marginLeft: '15px',color:'#6C757D'}}>CEO at Linkedin <span style={{borderRight:'1px solid ',marginRight:'5px'}}></span> 2hr ago</div>
                                        <div style={{float:"right",fontSize:".6em"}}><Avatar sx={{ width: 30, height: 30 }}><MoreVertIcon/></Avatar></div>
                                    </div>
                                    <div className="comment-box">
                                        <p style={{marginLeft:10}}>Great job ! Maybe u just need to resize like and dislike button. </p>
                                    </div>
                                    <div className="container5">
                                        <button><img src={image9} alt=''/></button><span style={{borderRight:'1px solid #CBD3E7', marginLeft:'10px',marginRight:'10px'}}></span>
                                        <button><img src={image14} alt=''/><img src={image15} alt=''/></button>
                                        <div style={{float:"right"}}>16</div>
                                        <div style={{float:"right"}}><img src={image8} alt=''/></div>
                                    </div>
                                    <div style={{marginTop:'23px', borderBottom:'1px solid #CBD3E7'}}></div>
                                    <div className="container6">
                                        <img src={image16} alt='' width='40px' height='40px'/>
                                        <input type='text' placeholder='Write a comment...' />
                                        <button><img src={image17} alt=''/></button>
                                    </div>
                                </Box>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4.6}>
                        <RightImageComponent/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default UserProfile;