import { Navbar } from "./Navbar"
import { MediUpdates } from "./MediUpdates";
import { Feedback } from "../FeedBack/FeedBack";
import {EmiCalculator} from "../EMICalculator/EmiCalculator";
import { HeaderForComp } from "../Common/HeaderForComp";

export const Home=()=>{

return <div>
    <HeaderForComp title="EMI Calculator"/>
<EmiCalculator/>
<HeaderForComp title="Feed back"/>

 <Feedback/>
 <HeaderForComp title="MediCare Updates"/>

      <MediUpdates/>
      <HeaderForComp title=""/>
 

</div>



}