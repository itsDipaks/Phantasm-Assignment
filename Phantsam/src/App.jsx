import "./App.css";
import Header from "./Components/Header";
import Info1 from "./Components/Info1";
import Sidebar from "./Components/Sidebar";
import shipped from "./assets/Logos/File.svg";
import filedark from "./assets/Logos/File dark.svg";
import qtylogo from "./assets/Logos/briefcase.svg";
// import BarChart from "./Components/Charts/ActiveItem";
function App() {
  const data = [
    {logo: qtylogo, text: "Quantity", info: "4932"},
    {logo: shipped, text: "Shipped", info: "1,032"},
    {logo: filedark, text: "Shipped", info: "1,032"},
  ];
  return (
    <>
      <div className="outerbox">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div>
          <Header />
        <div className="info1outerbox">

          <div className="info1">
            {data &&
              data?.map((el) => (
                <Info1 logo={el.logo} text={el.text} info={el.info} />
              ))}
          </div>
        </div>
        </div>
      </div>
      {/* <BarChart /> */}
    </>
  );
}

export default App;
