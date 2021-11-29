import { useState } from "react";
import { Container, Col, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import './login.css'
const Login =()=> {
    const [error, setError] = useState();
    const [loading, setLoading] = useState();
    const navigate = useNavigate();

    // signup form code 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { signup } = useAuth();
  
    async function signUpFormHandleSubmit(e) {
      e.preventDefault();
      // do validation
      if (password !== confirmPassword) {
        return setError("Passwords don't match!");
      }
  
      try {
        setError("");
        setLoading(true);
        await signup(email, password, username);
        navigate("/investorlist");
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError("Failed to create an account!");
      }
    }
    // end signup Code 
    // start login Code 
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const { login } = useAuth();
  
    async function logInFormHandleSubmit(e) {
      e.preventDefault();
      try {
        setError("");
        setLoading(true);
        await login(loginEmail, loginPassword);
        navigate("/investorlist");
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError("Failed to login!");
      }
    }
    // end login Code 
    return (
        <>
        {/* login form  */}
        <Container>
        <Row>
        <Col>
            <div className="login-form-area">
                <h2 className="mb3">Please Login</h2>
                <form onSubmit={logInFormHandleSubmit}>
                    <div className="form-group mb-4">
                        <label >Email address</label>
                        <input 
                        type="email"
                        placeholder="Enter email"
                        icon="alternate_email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        className="form-control"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                         type="password"
                         placeholder="Enter password"
                         required
                         value={loginPassword}
                         onChange={(e) => setLoginPassword(e.target.value)}
                         className="form-control" 
                         />
                    </div>
                    <div className="">
                        <button type="submit" className="login-button" disabled={loading}>Login</button>
                    </div>
                    {error && <div className="alert alert-danger mt-4" role="alert">{error}</div>} 
                </form>
            </div>
        </Col>
        {/* start signup from  */}
        <Col>
            <div className="login-form-area mb-5">
                <h2 className="mb3">Signup Form</h2>
                <form onSubmit={signUpFormHandleSubmit}>
                    <div className="form-group mb-4">
                        <label >Name:</label>
                        <input 
                            className="form-control"
                            type="text"
                            placeholder="Enter name"
                            icon="person"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label >Email address</label>
                        <input 
                        type="email" 
                        className="form-control"
                        required
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                         type="password"
                        required
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                         className="form-control"
                          />
                    </div>
                    <div className="form-group mb-4">
                        <label for="exampleInputPassword1">Password</label>
                        <input 
                        type="password"
                        required
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-control" 
                         />
                    </div>
                    <div className="">
                        <button type="submit" className="login-button" disabled={loading}>
                            Submit Now
                        </button>
                        {error && <div className="alert alert-danger mt-4" role="alert">{error}</div>}
                    </div>
                        
                </form>
            </div>
            </Col>
        </Row>
        </Container>
         {/* end start signup from  */}
        </>
        
    )
} 
export default Login;