import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Logo, Content, Sidebar } from "../src/component";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-1">
          <Logo />
          <Sidebar />
        </div>
        <div className="col-2">
          <div className="content">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
