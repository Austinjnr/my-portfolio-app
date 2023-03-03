import './App.css';
import Form from './components/form/Form';
import Menu from './components/nav/Navbar';
import About from './components/card/Aboutme';
import Template from './components/template/Temp';


function App() {
  return (
    <div className="App">
      <Form />
      <Menu />
      <About />
      <Template />
    </div>
  );
}

export default App;
