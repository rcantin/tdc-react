import logo from "./img/tdclogo-whitetext.svg";
import "./theme.scss";
import Banner from "./components/Banner";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Banner />
      <Button variant="pink">Test Button</Button>
      <Button variant="purple">Another Button</Button>
      <Button variant="blue">Last Button</Button>
    </div>
  );
}

export default App;
