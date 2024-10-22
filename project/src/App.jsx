import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
import SideBar from "./components/SideBar/SideBar";
import Card from "./components/Card/Card";
import { LineGraph } from "./components/Charts/Line";
import BarChart from "./components/Charts/Bar";
import DoughnutChart from "./components/Charts/Doughnut";
import PieChart from "./components/Charts/Pie";
import SCard from "./components/SCard/SCard";
import PolarAreaChart from "./components/Charts/PolarArea";
import MenuBars from "./components/Menubars/MenuBars";
import ChartForm from "./components/ChartForm/ChartForm";
function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleAddChart = () => {};

  return (
    <>
      <div className="h-screen">
        <Nav>
          <button onClick={toggleSidebar}>
            <MenuBars />
          </button>
        </Nav>
        <section className="master">
          {isSidebarVisible && <SideBar />}
          <div className="dashboard">
            <Row>
              <button
                className="w-28 h-9 rounded-full bg-[#d3d3d3]/50"
                onClick={handleAddChart}
              >
                Add Chart
              </button>
              {/* <ChartForm /> */}
            </Row>
            <Row>
              <SCard bgColor="#c8acf0" title="Total Users" value="476" />
              <SCard bgColor="#a3f1c0" title="Students" value="290" />
              <SCard bgColor="#eff0a3" title="Alumni" value="186" />
              <SCard
                bgColor="#ccd3dc"
                title="Total Donation"
                value="Rs. 150500"
              />
            </Row>
            <Row>
              <Card width="700px" title="Active Users Month wise">
                <LineGraph />
              </Card>

              <Card width="380px" title="Field of Education">
                <DoughnutChart />
              </Card>
            </Row>
            <Row>
              <Card width="690px" title="Month wise Amount Donation">
                <BarChart />
              </Card>

              <Card width="350px" title="Jobs Opening Fiels wise">
                <PieChart />
              </Card>
            </Row>
            <Row>
              <Card width="300px" title="Employed Alumni">
                <PolarAreaChart />
              </Card>

              <Card width="450px" title="Passing Year of Alumni">
                <BarChart />
              </Card>

              <Card width="300px" title="Open Jobs">
                <DoughnutChart />
              </Card>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
