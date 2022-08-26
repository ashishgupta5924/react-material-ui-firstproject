import { Avatar, Card,Grid, Modal} from "@mui/material"
import NavBar from "../user_profile/navbar"
import './homepage.css'
import image1 from '../image/blue_light_flow_background 1.png'
import image2 from '../image/man15.png'
import image3 from '../image/viewprofile.png'
import image4 from '../image/man16.png'
import image5 from '../image/Rectangle21.png'
import image6 from '../image/like.png'
import image7 from '../image/likebtn.png'
import image8 from '../image/comment.png'
import image9 from '../image/share.png'
import image10 from '../image/commentbtn.png'
import image11 from '../image/Vector.png'
import image12 from '../image/Reply.png'
import image13 from '../image/man12.png'
import image14 from '../image/girl10.png'
import image15 from '../image/publish.png'
import image16 from '../image/Rectangle22.png'
import image17 from '../image/profile.png'
import image18 from '../image/bookmark.png'
import image19 from '../image/setting.png'
import image20 from '../image/helpcenter.png'
import image21 from '../image/logout.png'
import image22 from '../image/forward.png'
import { Box } from "@mui/system"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RightImageComponent from "../user_profile/rightimagecomponent"
import Looks4Icon from '@mui/icons-material/Looks4';
import { useState } from "react"
import ReportModel from "./models/reportModel"
import CustomizedDialogs from "./models/dialog"
function HomePage2(){
    const [reportModal, setModal] = useState(false);
    const Toggle = () => setModal(!reportModal);
    return(
        <div>
        <button onClick={()=>Toggle()}>tn</button>
        <NavBar/>
            <div className="homepage2">
                <Grid container spacing={4} columns={16}>
                    <Grid item xs={4}>
                        <div className="homepage-left-component">
                            <div className="container1">
                                <div>
                                    <img src={image1} alt='' className="container1-img1"></img>
                                </div>
                                <div>
                                    <img src={image2} alt='' className="container1-img2"/>
                                </div>
                                <p>
                                Lorem ipsum is a placeholder text 
                                commonly used to demonstrate the visual form of a document or a
                                 typeface without relying on meaningful content. 
                                </p>
                                <button><img src={image3} alt='' /></button>
                                </div>
                            <div>
                        
                            <div className="container1-box1">
                                    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                                        <div style={{width:'240px',marginTop:'25px',borderBottom:'1px solid #CBD3E7'}}>
                                            <div className="number" style={{float:"left"}}>4</div>
                                            <div style={{float:"left" ,marginLeft: '10px'}}><p style={{marginTop:'-8px'}}>Connections <br/> Grow Your Network</p></div>
                                            <div style={{float:"right"}}><button style={{background:'none',border:'none'}}><img src={image22} alt=''/></button></div>
                                        </div>
                                        
                                        <div style={{width:'240px',marginTop:'20px'}}>
                                            <div className="number" style={{float:"left"}}>6</div>
                                            <div style={{float:"left" ,marginLeft: '10px'}}><p style={{marginTop:'0px'}}>Veiw Requests</p></div>
                                            <div style={{float:"right"}}><button style={{background:'none',border:'none'}}><img src={image22} alt=''/></button></div>
                                        </div>
                                    </Box>
                                </div>
                            <div className="container1-box2">
                                
                                    <div style={{width:'240px'}}>
                                            <div className="number" style={{float:"left"}}>4</div>
                                            <div style={{float:"left" ,marginLeft: '10px'}}><p style={{marginTop:'-8px'}}>Group <br/>Manage or Create group</p></div>
                                            <div style={{float:"right"}}><button style={{background:'none',border:'none'}}><img src={image22} alt=''/></button></div>
                                        </div>

                            </div>   
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <div>
                            <div className="container2">
                                <img src={image2} alt='' />
                                <input placeholder="Start a post.." type='text' />
                            </div>
                            <button className="reportbtn" onClick={() => Toggle()}>Report content</button>
                            <CustomizedDialogs><ReportModel /></CustomizedDialogs>
                            
                            <div id="secondpage" >
                                <Box sx={{
                                    width: '558px',
                                    height: 1050,
                                    marginTop:'25px',
                                    padding:'15px',
                                    backgroundColor: '#FFFFFF',
                                    border:'1px solid #CBD3E7',
                                    borderRadius:'5px',
                                }}>
                                    <Card id='card'sx={{ display: 'flex',width:'318px'}}>
                                        <Box sx={{ display: 'flex', flexDirection: 'column',paddingLeft:"15px"}}>
                                            <div class="card-box1">
                                               
                                                <div  style={{float:"left"}}><img src={image2} width="40px" height={40} /></div>
                                                <div style={{float:"left" ,marginLeft: '10px'}}><h4 style={{marginTop:'10px' }}>David smith </h4></div>
                                                <div style={{float:"left",marginLeft: '5px' }}><img src={image17} style={{marginTop:'16px' }}/></div>
                                                <div><button class="card-box1-btn">View profile</button></div>
                                              
                                            </div>
                                            <p style={{color:'#6C757D'}}>Accounts</p>
                                            <div>
                                                <div style={{float:"left"}}><img src={image18} alt=''/></div>
                                                <div style={{float:"left" ,marginLeft: '10px'}}><h4 style={{marginTop:'-2px' }}>Bookmarks</h4></div>
                                                <div style={{float:"right"}}><button style={{background:'none',border:'none'}}><img src={image22} alt=''/></button></div>

                                            </div>
                                            <div>
                                                <div style={{float:"left"}}><img src={image19} alt=''/></div>
                                                <div style={{float:"left" ,marginLeft: '10px'}}><h4 style={{marginTop:'-2px' }}>Settings</h4></div>
                                                <div style={{float:"right"}}><button style={{background:'none',border:'none'}}><img src={image22} alt=''/></button></div>

                                            </div>
                                            <div>
                                                <div style={{float:"left"}}><img src={image20} alt=''/></div>
                                                <div style={{float:"left" ,marginLeft: '10px'}}><h4 style={{marginTop:'-2px' }}>Help Center</h4></div>
                                                <div style={{float:"right"}}><button style={{background:'none',border:'none'}}><img src={image22} alt=''/></button></div>

                                            </div>
                                            <div>
                                                <div style={{float:"left"}}><img src={image21} alt=''/></div>
                                                <div style={{float:"left" ,marginLeft: '10px'}}><h4 style={{marginTop:'-2px' }}>Logout</h4></div>
                                                <div style={{float:"right"}}><button style={{background:'none',border:'none'}}><img src={image22} alt=''/></button></div>

                                            </div>
                                            <div className="card-copyright">
                                                <p>&copy;2020. Graynod All rights reserved</p>
                                            </div>
                                        </Box>
                                    </Card>
                                    <div className="container3">
                                        <div>
                                            <img src={image4} alt='' className='iconDetails'/>
                                        </div>
                                        <div><h4>Herry weish</h4></div>
                                        <div style={{fontSize:"0.8em",float:"left" ,marginLeft: '15px',color:'#6C757D'}}>Banglore 2hr ago</div>
                                        <div style={{float:"right",fontSize:".6em"}}><Avatar sx={{ width: 25, height: 25 }}><MoreVertIcon sx={{ width: 30, height: 30 }}/></Avatar></div>
                                    </div>   
                                    <div style={{marginTop:'30px',fontSize:'14px'}}>
                                        <p>
                                        If you want to make a bold <span style={{color:'#0099FF'}}>#statement</span> with your design work, look no furhter. We've rounded up a handful of unique 
                                                type faces that are bursting with personality
                                        </p>
                                    </div>
                                    <div >
                                        <img src={image5} alt='' width={560}/>
                                    </div>
                                    <div >
                                        <div>
                                            <img src={image6} alt='' className="likeDetails"/>
                                        </div>
                                        <div style={{fontSize:"14px",float:"left",color:'#6C757D'}}>Jhone, Visten and 57 others</div>
                                        <div style={{float:"right",fontSize:"14px",color:'#6C757D'}}>18 comments</div>
                                    </div>
                                    <div className="container3b">
                                        <button ><img src={image7} alt=''/></button><span style={{borderRight:"1px solid #CBD3E7"}}></span>
                                        <button><img src={image8} alt=''/></button><span style={{borderRight:"1px solid #CBD3E7"}}></span>
                                        <button><img src={image9} alt=''/></button>
                                    </div>
                                    <div className="container3c">
                                        <img src={image2} alt='' width='40px' height='40px'/>
                                        <input type='text' placeholder='Write a comment...' />
                                        <button><img src={image10} alt=''/></button>
                                    </div>
                                    <div className="container3" style={{paddingTop:'10px'}}>
                                        <div>
                                            <img src={image13} alt='' className='iconDetails'/>
                                        </div>
                                        <div><h4>Patrick Kollor</h4></div>
                                        <div style={{fontSize:"0.8em",float:"left" ,marginLeft: '15px',color:'#6C757D'}}>Talent, leadership, organization <span style={{borderLeft:'0.5px solid #CBD3E7', marginRight:'5px'}}></span> 2hr ago</div>
                                        <div style={{float:"right",fontSize:".6em"}}><Avatar sx={{ width: 25, height: 25 }}><MoreVertIcon sx={{ width: 30, height: 30 }}/></Avatar></div>
                                    </div>
                                    <div className="homepage-comment-box">
                                        <p style={{marginLeft:10}}>I think in the Future. Neuromorphim style will be more popular </p>
                                        <button><img src={image7} alt=''/></button><span style={{borderRight:'1px solid #CBD3E7', marginLeft:'10px',marginRight:'10px'}}></span>
                                        <button><img src={image11} alt=''/><img src={image12} alt=''/></button>
                                        <div style={{float:"right"}}>2</div>
                                        <div style={{float:"right"}}><img src={image6} alt=''/></div>
                                    </div>
                                    <div className="container3" style={{paddingTop:'10px'}}>
                                        <div>
                                            <img src={image13} alt='' className='iconDetails'/>
                                        </div>
                                        <div><h4>Keith Ferrazi</h4></div>
                                        <div style={{fontSize:"0.8em",float:"left" ,marginLeft: '15px',color:'#6C757D'}}>CEO at Linkedin <span style={{borderLeft:'0.5px solid #CBD3E7', marginRight:'5px'}}></span> 2hr ago</div>
                                        <div style={{float:"right",fontSize:".6em"}}><Avatar sx={{ width: 25, height: 25 }}><MoreVertIcon sx={{ width: 30, height: 30 }}/></Avatar></div>
                                    </div>
                                    <div className="homepage-comment-box">
                                        <p style={{marginLeft:10}}>Great job ! Maybe u just need to resize like and dislike button. </p>
                                        <button><img src={image7} alt=''/></button><span style={{borderRight:'1px solid #CBD3E7', marginLeft:'10px',marginRight:'10px'}}></span>
                                        <button><img src={image11} alt=''/><img src={image12} alt=''/></button>
                                        <div style={{float:"right"}}>16</div>
                                        <div style={{float:"right"}}><img src={image6} alt=''/></div>
                                        <div className="container3d">
                                            <img src={image2} alt='' width='40px' height='40px'/>
                                            <input type='text' placeholder='@keithferrazi' />
                                            
                                        </div>
                                      
                                    </div>
                                    <div className="viewcomments-btn">
                                        <button>View All Comments</button>
                                    </div>
                                    
                                    
                                </Box>
                            </div>
                            <div>
                            <Box sx={{
                                    width: '558px',
                                    height: 905,
                                    marginTop:'25px',
                                    padding:'15px',
                                    backgroundColor: '#FFFFFF',
                                    border:'1px solid #CBD3E7',
                                    borderRadius:'5px',
                                }}>
                                    <div className="container3">
                                        <div>
                                            <img src={image14} alt='' className='iconDetails'/>
                                        </div>
                                        <div><h4>Metropolitan Law</h4></div>
                                        <div style={{fontSize:"0.8em",float:"left" ,marginLeft: '15px',color:'#6C757D'}}>15,337 followers <span style={{borderLeft:'1px solid #CBD3E7', marginRight:'5px'}}></span>2hr ago</div>
                                        <div style={{float:"right",fontSize:".6em",marginLeft: '15px'}}> <Avatar sx={{ width: 25, height: 25 }}><MoreVertIcon sx={{ width: 25, height: 25 }}/></Avatar></div>
                                        <div style={{float:"right"}}><img src={image15} alt=''/></div>
                                       
                                    </div> 
                                    <div style={{marginTop:'30px',fontSize:'14px'}}>
                                        <p>
                                        Employee empowerment is a hot topic in workspace culture . This rewards go-getter 
                                        with the chance to take greater initiative and  helps the organization in identifying the high-potential, future leaders.
                                        </p>
                                        <span style={{color:'#6C757D'}}>Read More </span>
                                    </div>
                                    <div style={{marginTop:'20px'}}>
                                        <img src={image16} alt=''  width={560}/>
                                    </div> 
                                    <div >
                                        <div>
                                            <img src={image6} alt='' className="likeDetails"/>
                                        </div>
                                        <div style={{fontSize:"14px",float:"left",color:'#6C757D',marginLeft:'10px'}}>Jhone, Visten and 57 others</div>
                                        <div style={{float:"right",fontSize:"14px",color:'#6C757D'}}>34 comments</div>
                                    </div>
                                    <div className="container3b">
                                        <button ><img src={image7} alt=''/></button><span style={{borderRight:"1px solid #CBD3E7"}}></span>
                                        <button><img src={image8} alt=''/></button><span style={{borderRight:"1px solid #CBD3E7"}}></span>
                                        <button><img src={image9} alt=''/></button>
                                    </div>
                                    <div className="container3c">
                                        <img src={image2} alt='' width='40px' height='40px'/>
                                        <input type='text' placeholder='Write a comment...' />
                                        <button><img src={image10} alt=''/></button>
                                    </div>
                                    <div className="container3" style={{paddingTop:'10px'}}>
                                        <div>
                                            <img src={image13} alt='' className='iconDetails'/>
                                        </div>
                                        <div><h4>Patrick Kollor</h4></div>
                                        <div style={{fontSize:"0.8em",float:"left" ,marginLeft: '15px',color:'#6C757D'}}>Talent, leadership, organization <span style={{borderLeft:'0.5px solid #CBD3E7', marginRight:'5px'}}></span> 2hr ago</div>
                                        <div style={{float:"right",fontSize:".6em"}}><Avatar sx={{ width: 25, height: 25 }}><MoreVertIcon sx={{ width: 30, height: 30 }}/></Avatar></div>
                                    </div>
                                    <div className="homepage-comment-box">
                                        <p style={{marginLeft:10}}>I think in the Future. Neuromorphim style will be more popular </p>
                                        <button><img src={image7} alt=''/></button><span style={{borderRight:'1px solid #CBD3E7', marginLeft:'10px',marginRight:'10px'}}></span>
                                        <button><img src={image11} alt=''/><img src={image12} alt=''/></button>
                                        <div style={{float:"right"}}>2</div>
                                        <div style={{float:"right"}}><img src={image6} alt=''/></div>
                                    </div>
                                    <div className="viewcomments-btn2">
                                        <button>View All Comments</button>
                                    </div>
                                </Box>
                            </div>
                            
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{marginRight:'10px'}}>
                            <RightImageComponent/>
                            
                        </div>
                        
                    </Grid>
                </Grid>
            </div>
        
        </div>
    )
}

export default HomePage2