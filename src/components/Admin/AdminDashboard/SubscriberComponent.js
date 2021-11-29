// import { Col, Container, Row } from "react-bootstrap";
import DashNav from "./DashNav";
import SubscribeList  from "./SubscribeList";
import { useAuth } from "../../../contexts/AuthContext";
import Login from '../AdminDashboard/Login';
const SubscribeComponent=()=> {
    const {currentUser} = useAuth()
    return currentUser?
        <>
            <DashNav />
            <SubscribeList  />
        </>
        : 
        <>
            <DashNav />
            <Login />
        </>
} 
export default SubscribeComponent