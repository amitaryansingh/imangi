import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Mobheader from "./component/Mobheader";
import Herovideo from "./component/Herovideo";
import ImageSlider from "./component/Slider";
function App() {
  return (
    <>
      <Header />
      <Herovideo />
      <ImageSlider />
      <Mobheader />
    </>
  );
}
export default App;
