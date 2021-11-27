import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/navlogo.png'
const DashNav =(props)=>{
  return(
    <Container>
    <Row className='justify-content-between dashNav-area'>
        <Col md={6}>
            <div>
                <img className='dashlogo' src={logo} alt='logo' />
            </div>
        </Col>
        <Col md = {6} className="align-self-center text-right" >
           <div className="dashnavbtn-area">
                <Link to="/admin" className='dashnavbtn'>Login</Link>
                <Link to="/investorlist"  className='dashnavbtn'>Invest list</Link>
                <Link to="/subscribelist" className='dashnavbtn'>subscribe list</Link>
           </div>
        </Col>
    </Row>
</Container>
  )
}
export default DashNav;