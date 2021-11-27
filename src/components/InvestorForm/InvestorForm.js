import { Col, Row } from "react-bootstrap";
import Input from "../UI/Input/Input"
import classes from "./InvestForm.module.css"
const InvestorForm =(props)=> {
    return(
       <>
            <Row>
                <Col>
                <form onSubmit={props.submitInvestForm }>
                <Row>
                    <Col lg={4}>
                    <Input 
                        Label={`Name:`}
                        Type={`text`}
                        OnChange={props.OnChange}
                        Name={`name`}
                        Value={props.StateName}
                        Background = "#F6F6F6"
                        BorderColor="#EAE6D9"
                        Required={true}
                        />
                    </Col>
                    <Col lg={4}>
                    <Input 
                        Label={`Company:`}
                        Type={`text`}
                        OnChange={props.OnChange}
                        Name={`companyName`}
                        Value={props.StateCompanyName }
                        Background = "#F6F6F6"
                        BorderColor="#EAE6D9"
                        Required={true}
                        /> 
                    </Col>
                    <Col lg={4}>
                    <Input 
                        Label={`Email:`}
                        Type={`email`}
                        OnChange={props.OnChange}
                        Name={`email`}
                        Value={props.StateEamil }
                        Background = "#F6F6F6"
                        BorderColor="#EAE6D9"
                        Required={true}
                        />
                    </Col>
                </Row>
                <div className="form-group">
                        <label className={[classes.Textarealabel, 'form-label'].join(' ')}>Any additional comments (optional):</label>
                        <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="8"
                        type="textarea" 
                        value={props.StateComment}  
                        onChange={props.OnChange}
                        style={{background:'#F6F6F6',
                        borderColor:'#EAE6D9'}} >
                        </textarea>
                </div>
                <Row>
                    <Col className='Checkbox-S-area'>
                     <input type="checkbox" onChange={props.OnChange} name="isSubscribe" value={props.StateIsSubscribe} />
                     <span> Would you like to also subscribe for our company updates?</span>
                    </Col>
                </Row>
                    <div className={classes.InvFormSubmitArea}>
                        <button className={classes.InvestFormSubmitBtn} type='submit'  disabled={props.StateLoadding}  >Submit</button>
                    </div>
                    </form>
                </Col>
            </Row>
        </>
    )
}
export default InvestorForm