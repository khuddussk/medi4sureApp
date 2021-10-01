import{Tab,Tabs,Sonnet} from  "react-bootstrap";
import { LoanItem } from "./LoanItem";
export const EmiCalculator=()=>{

    return <div>
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="Homeloan" title="Home Loan">
   <p><LoanItem/></p>
  </Tab>
  <Tab eventKey="Personalloan" title="Personal Loan">
  <p>Tab2</p>
  </Tab>
  <Tab eventKey="Carloan" title="Car Loan">
  <p>Tab3</p>

  </Tab>
</Tabs>





    </div>





}