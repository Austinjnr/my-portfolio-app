import './App.css';
import Form from './components/form/Form';
import Navbar from './components/navbar/Navbar';
import About from './components/card/Aboutme';
import Template from './components/template/Temp';


function App() {
  return (
    <div className="App">
      <Form />
      <Navbar />
      <About />
      <Template />
    </div>
  );
}

export default App;
