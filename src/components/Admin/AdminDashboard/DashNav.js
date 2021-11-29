import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/navlogo.png'
import {useAuth} from '../../../contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
const DashNav =(props)=>{
  const {currentUser, logout} = useAuth()
  const usertieIcon = <FontAwesomeIcon icon={faUserTie} /> 
  return(
    <Container>
    <Row className='justify-content-between dashNav-area'>
        <Col md={4}>
            <div>
                <img className='dashlogo' src={logo} alt='logo' />
            </div>
        </Col>
        <Col md = {8} className="align-self-center text-right" >
           <div className="dashnavbtn-area">
           {!currentUser?  (
            <>
            <Link to="/admin" className='dashnavbtn'>Login</Link>
            </>
           ) : (
            <>
            <Link to="/investorlist"  className='dashnavbtn'>Inv-List</Link>
            <Link to="/subscribelist" className='dashnavbtn'>Sub-List</Link>
            <Link to="/admin" className='dashnavbtn' onClick={logout}>Login Out</Link>
            <div className='userIconArea'>
            <i>{usertieIcon}</i>
            <h6 className="loginUserName">
            {currentUser.displayName}</h6>
            </div>
            </>
           ) }
           
           </div>
        </Col>
    </Row>
</Container>
  )
}
export default DashNav;