import Sidebar from "./component/Sidebar/sidebar";
import Topbar from "./component/Topbar/Topbar";
import Home from "./pages/home/home";
import './App.css'
function App() {
  return (
    <div className="App">
     <Topbar/>
     <div className="contanier">
       <Sidebar/>
       <Home/>
     </div>
  
    </div>
  );
}

export default App;
