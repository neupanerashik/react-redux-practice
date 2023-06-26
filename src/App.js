import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Shop from './Shop';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Shop/>
      <hr className='my-5 py-5'/>
      <Input />
    </div>
  );
}

export default App;
