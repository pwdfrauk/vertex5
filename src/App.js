import VertexHome from "./containers/VertexHome/VertexHome";
 import Admin from './containers/VertexHome/Admin/Admin';
 import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
       <Routes>
          <Route path='/' element={ <VertexHome />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;