import "./styles/App.css";

//components
import Navbar from "./components/Navbar";
import BodySection from "./components/BodySection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mobile">
        <Navbar />
        <BodySection />
        <Footer />
      </div>
    </>
  );
}

export default App;
