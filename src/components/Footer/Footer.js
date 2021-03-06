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
                        <form onSubmit={props.subscribFormHandler}>
                            <Input 
                            Placeholder="Enter email address"
                            Type={`email`}
                            Value = {props.Value}
                            OnChange = {props.Onchage} 
                            Required={true} />
                            <button className={classes.SubscribeSubmitBtn} disabled={props.stateLoading}  type="submite" >Submit  </button>
                        </form>
                    </Col>
                </Row>
           </Container>
        </footer>
        
    )
}
export default Footer;