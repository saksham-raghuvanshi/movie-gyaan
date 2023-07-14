import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./index.css";

import Allroutes from "./routes/Allroutes";

function App() {
  return (
    <div className="App">
      <Header />
      <Allroutes />
      <Footer />
    </div>
  );
}

export default App;
