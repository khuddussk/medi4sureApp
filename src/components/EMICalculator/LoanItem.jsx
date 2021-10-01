import { Row,Col,InputGroup ,FormControl} from "react-bootstrap"

export const LoanItem =()=>{

        return <div>
    
    
<Row>
    <Col lg={3}>Home Loan Amount</Col>
    <Col lg={9}>
    <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
  </InputGroup>
   </Col>
</Row>

<Row>
    <Col lg={3}>Interest Rate</Col>
    <Col lg={9}>
    <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
  </InputGroup>
   </Col>
</Row>
<Row>
    <Col lg={3}>Loan Tenure</Col>
    <Col lg={9}>
    <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
  </InputGroup>
   </Col>
</Row>

</div>




    









}