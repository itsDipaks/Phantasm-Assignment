import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

function App() {
  
  return (
    <>
      <div className="outerbox">
        <div className="sidebar">
        <Sidebar/>
        </div>
<div>
  <Header/>
</div>


      </div>
    </>
  );
}

export default App;
