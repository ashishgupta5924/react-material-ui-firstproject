import Component1 from './component/component1';
import Component2 from './component/component2';
import Component4 from './component/component4';
import Component3 from './component/component3';
import Component5 from './component/component5';
import Component6 from './component/component6';
import Component7 from './component/component7';
import Component8 from './component/component8';

import '../css/style.css'
import './landingpage.css'



function LandingPage(){
    return(
        <div>
            <Component1/>
            <Component2/>
            <Component3/>
            <Component4/>
            <Component5/>
            
            <Component7/>
            <Component8/>
            <Component6/>
        </div>
    )
}

export default LandingPage;