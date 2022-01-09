import { Col, Container, Row } from "react-bootstrap";
import Title from "../UI/Title/Title"
import DescriptionText from "../UI/DescriptionText/DescriptionText";
import classes from './Welcome.module.css'
import Bicepgif from '../../assets/img/heroimages.png'
const Welcome =(props)=> {
    return(
        <Container className={`${classes.WelcomeContainer} containerpading`}>
            <Row>
                <Col md={7} lg={7} xl={7}>
                <Title Class={classes.WelcomeTitle} Animate={props.animateClass} >Welcome to <br /> VERTEX 5!</Title>
                <DescriptionText Animate={props.animateClass}  LineHeight='1.5'>We are on a mission to remodel the fitness industry armed with our real-time
                    repetition tracking application which utilises our wearable sensors.
                    <br />
                    <br />
                    Our custom built wearable sensors enable us to accurately count repetitions of any
                    movement, personalised to an individual users metrics, including the ability
                    to detect the correct form of a repetition.
                    <br />
                    <br />
                    We are currently building out the foundations for one of the most successful
                    fitness based consumer subscription businesses worldwide. Which includes the
                    ability to battle your friends, or compete in group classes, anywhere in the world.
                    </DescriptionText>
                    <br />
                    <DescriptionText Animate={props.animateClass}  LineHeight='1.5'>Find out more {props.icon}</DescriptionText>
                </Col>
                <Col md={5} lg={5} xl={5} className={`{classes.WelcomeImageArea} wow animate__animated animate__slideInRight align-self-center`}>
                    <div>
                        <img className={classes.WelcomeImg} src={Bicepgif} alt='vertex5 ' />                   
                    </div>
                </Col>
            </Row>
        </Container>
      
    )
}
export default Welcome; 