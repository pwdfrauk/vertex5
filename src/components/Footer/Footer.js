import { Col, Container, Row } from "react-bootstrap";
import logofooter from '../../assets/img/footerlogo.png'
import classes from './Footer.module.css'
import DescriptionText from "../UI/DescriptionText/DescriptionText";
import Input from "../UI/Input/Input";
const Footer =(props)=> {
    return(
        <footer className={classes.Footer}>
           <Container className={classes.FooterContainer}>
                <Row>
                    <Col md={7} >
                        <div className={classes.FooterLogoArea}>
                            <img className={classes.FooterLogo} src={logofooter} alt="footer vertex5" />
                        </div>
                    </Col>
                    <Col md={5}>
                        <DescriptionText 
                        Color="#ffffff"
                        Weight="500"
                        >
                            Subscribe here to receive all of our company updates:
                        </DescriptionText>
                        <form>
                            <Input 
                            Placeholder="Enter email address"
                            type={props.subscribEmail}
                            value = {props.value}
                            onChange = {props.chage} />
                            <input className={classes.SubscribeSubmitBtn}  type="submite" value='Submit' />
                        </form>
                    </Col>
                </Row>
           </Container>
        </footer>
        
    )
}
export default Footer;