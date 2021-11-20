import { Col, Container, Row } from "react-bootstrap";
import DescriptionText from "../UI/DescriptionText/DescriptionText";
import logo from '../../assets/img/navlogo.png'
import classes from './Nav.module.css'
const Nav =(props)=>{
  return(
    <Container>
    <Row className={[classes.Nav, 'justify-content-between'].join(' ')}>
        <Col xs={5} md={4}>
            <div>
                <img className={classes.Logoimg} src={logo} alt='logo' />
            </div>
        </Col>
        <Col xs={7} md={6} className='align-self-center'>
            <div className={classes.Navtext}>
                <DescriptionText className='mb-0'> Register for company updates here {props.icon} </DescriptionText>
                
            </div>
        </Col>
    </Row>
</Container>
  )
}
export default Nav;