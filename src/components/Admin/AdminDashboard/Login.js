import { Container, Row, Col } from "react-bootstrap";
import './login.css'
const Login =()=> {
    return (
        <Container>
            <div className="login-form-area">
                <h2 className="mb3">Please Login</h2>
                <form>
                    <div className="form-group mb-4">
                        <label >Email address</label>
                        <input type="email" className="form-control"/>
                    </div>
                    <div className="form-group mb-4">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="">
                    <button type="submit" className="login-button">Login</button>
                    </div>
                        
                </form>
            </div>
        </Container>
        
    )
} 
export default Login;