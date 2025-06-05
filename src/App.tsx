import {Button} from "../../../shared-ui/src/components/Button"
import image1 from "./assets/app1.svg"
function App() {
  return (
    <div>
      <h1>Hello from App One</h1>
      <Button />
      <img src={image1} alt="App Illustration11" />
    </div>
  );
}

export default App;
