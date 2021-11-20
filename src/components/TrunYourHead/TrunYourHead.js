import { Col, Container, Row } from "react-bootstrap";
import InvestorForm from "../InvestorForm/InvestorForm";
import DescriptionText from '../UI/DescriptionText/DescriptionText'
import Title from "../UI/Title/Title";
import classes from './TrunYourHead.module.css'
const TrunYourHead = (props)=> {
    return(
        <Container className={classes.TrunYourHead}>
           <Row>
                <Title Size="40px"
                Bold="700"
                PaddingBottom="30px"> Did we turn your head? </Title>
           </Row>
           <Row>
                <Col md={8}>
                    <DescriptionText 
                    color='#393939'
                    PaddingBottom="40px" >
                    We are opening our pre-seed funding round in February 2022, if you’re an investor 
                    and you would like to see our pitch deck, please leave your details below. <br /><br />
                    Alternatively, you can reach out to Josh directly at: josh.brooks@vertex5.com
                    </DescriptionText>
                </Col>
           </Row>
           <InvestorForm
                    OnChange={props.InputChange}
                    submitInvestForm = {props.SubmitInForm}
                    StateName={props.stateName}
                    StateEamil = {props.stateEmail}
                    StateCompanyName = {props.stateCompanyName}
                    StateComment = {props.stateComment} />
        </Container>
        
    )
}
export default TrunYourHead;