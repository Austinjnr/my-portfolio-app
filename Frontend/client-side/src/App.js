import './App.css';
import Form from './components/form/Form';
import Menu from './components/navbar/Navbar';
import About from './components/aboutme/Aboutme';
import Template from './components/template/temp';

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
