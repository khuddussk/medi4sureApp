
import Button from "@restart/ui/esm/Button";
import {Row,Col,Form} from "react-bootstrap";
import "./Feedback.css";
export const Feedback=()=>{

    return <div>
<Form>
<Form.Control placeholder="Enter the Title" className="fbrow"></Form.Control>
<Form.Control as ="textarea" placeholder="Enter your FeedBack Here ..." className="fbrow" ></Form.Control>

<Row className="fbrow">
<Col lg={8}>  </Col>
<Col lg={1}>
<Button className="btn btn-success">Submit</Button>
</Col>
<Col lg={1}>
<Button className="btn btn-info">Cancel</Button>
</Col>
<Col lg={2}></Col>

</Row>

</Form>
    </div>
       
    }