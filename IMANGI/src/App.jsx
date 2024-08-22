import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Mobheader from "./component/Mobheader";
import Herovideo from "./component/Herovideo";
function App() {
  return (
    <>
      <Header />
      <Herovideo />
      <Mobheader />
    </>
  );
}
export default App;
