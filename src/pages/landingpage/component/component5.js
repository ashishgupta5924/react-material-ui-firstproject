import '../landingpage.css'
import { CardMedia, Grid, Typography } from "@mui/material";
import { Box } from '@mui/system';
// import image1 from '../../image/Ellipse1.png'
import image2 from '../../image/briefcase 1.png'
import image3 from '../../image/briefcase 1.png'
import image4 from '../../image/briefcase 1.png'
function Component5(){
    return(
        <div className="component5">
            <div className="component5-text">
                <h1>Graynod community <span className="green">news</span></h1>
                <p>Get the latest news from business, real estate , stocks <br/>and other feature stories.</p>
            </div>
            <div className='component5-card'>
                <Grid container columns={16} justify="space-between" alignItems="center">
                    <Grid item xs={5}>
                   
                            <Box
                                sx={{
                                    width: 370,
                                    height: 230,
                                    border:'1px solid #00DAB0',
                                    borderRadius:'10px',
                                    display:"flex" ,
                                    flexDirection: 'column',
                                    alignItems:"center",
                                    justifyContent:"center",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                    height: 29,
                                    width: 29,
                                    // backgroundImage: `url(${image1})`,
                                    // maxHeight: { xs: 233, md: 167 },
                                    // maxWidth: { xs: 350, md: 250 },
                                    }}
                                    src={image2}
                                    />
                                
                                <h2>Business</h2>
                                <Typography align="center" sx={{ px: 4}} paragraph>Business is the activity of making one's living or making 
                                money</Typography>
                            </Box>
                       
                    </Grid> 
                    <Grid item xs={5}>
                        <div>
                        <Box
                                sx={{
                                    width: 370,
                                    height: 230,
                                    border:'1px solid #00DAB0',
                                    borderRadius:'10px',
                                    display:"flex" ,
                                    flexDirection: 'column',
                                    alignItems:"center",
                                    justifyContent:"center",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                    height: 29,
                                    width: 29,
                                    // backgroundImage: `url(${image1})`,
                                    // maxHeight: { xs: 233, md: 167 },
                                    // maxWidth: { xs: 350, md: 250 },
                                    }}
                                    src={image3}
                                    />
                                <h2>Real Estate</h2>
                                <Typography align="center" sx={{ px: 4 ,justifyContent:'center'}} paragraph>Real estate is private property in the form of buildings and land.
                            </Typography>
                            </Box>
                        </div>
                    </Grid> 
                    <Grid item xs={5}>
                        <div>
                        <Box
                                sx={{
                                    width: 370,
                                    height: 230,
                                    border:'1px solid #00DAB0',
                                    borderRadius:'10px',
                                    display:"flex" ,
                                    flexDirection: 'column',
                                    alignItems:"center",
                                    justifyContent:"center",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                    height: 29,
                                    width: 29,
                                    // backgroundImage: `url(${image1})`,
                                    // maxHeight: { xs: 233, md: 167 },
                                    // maxWidth: { xs: 350, md: 250 },
                                    }}
                                    src={image4}
                                    />
                                <h2>Stockes</h2>
                                <Typography align="center" sx={{ px: 4 ,justifyContent:'center'}} paragraph>A stock is a form of security that indicates the holder has proportionate ownership 
                            </Typography>
                            </Box>
                        </div>
                    </Grid> 
                </Grid>
            </div>
        </div>
    )
}

export default Component5;