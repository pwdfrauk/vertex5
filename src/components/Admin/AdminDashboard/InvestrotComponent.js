// import { Col, Container, Row } from "react-bootstrap";
import DashNav from "./DashNav";
import InvestList from "./InvestList";
import { useAuth } from "../../../contexts/AuthContext";
import Login from '../AdminDashboard/Login'

const AdminDashboard =()=> {
    const {currentUser} = useAuth()
    return currentUser ? 
        <>
        <DashNav />
        <InvestList />
        </> : <>
        <DashNav />
        <Login />
        </>
    
} 
export default AdminDashboard