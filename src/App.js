import "./App.css";
import AxiosApi from "./component/AxiosApi";

function App() {
  return (
    <div className="App">
      <h1>Ashutosh - Checking Netlify Deployment</h1>
      <h3>Change 1 - Done!</h3>
      <h3>change 2- from another branch</h3>
      <h3>change 3- Axios API Call</h3>
      <AxiosApi />
    </div>
  );
}

export default App;
