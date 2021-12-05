// import { Col, Container, Row } from "react-bootstrap";
import DashNav from "./DashNav";
import Login from "./Login";
import InvestList from "./InvestList";
import { useAuth } from "../../../contexts/AuthContext"; 
const AdminDashboard =()=> {
    const {currentUser} = useAuth()
    return(
        <>
        <DashNav />
        {currentUser? <InvestList /> :   <Login />}
        </>
    )
} 
export default AdminDashboard