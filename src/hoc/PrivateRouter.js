import { useNavigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return currentUser ? (
    <Route {...rest}>{(props) => <Element {...props} />}</Route>
  ) : (
    navigate("/admin")
  );
}