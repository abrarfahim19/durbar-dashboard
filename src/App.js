import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Aside from "./components/Aside/Aside";

function App() {
  return (
    <div className="">
      <NavBar />
      {/* <Dashboard /> */}
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
