import image1 from '../image/Rectangle18.png'
import image2 from '../image/Rectangle19.png'
import './style.css'
function RightImageComponent(){
    return(
        <div>
            <div className="right-component">
                <div>
                    <img src={image1} alt='' height={218}/>
                </div>
                            
                <div className="right-2nd-image">
                    <p>Advertisement</p>
                </div>
                <div>
                    <img src={image2} alt='' height={218}/>
                </div>                
            </div>

        </div>
    )
}
export default RightImageComponent;