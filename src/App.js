import logo from './logo.svg';
import './App.css';
// import InputForm from './InputForm';
import ButtonClick from './ButtonClick';

function App() {
  return (
    <div className="App">
      <p>First react test case  sacsaa14214214</p>
      <p>Swarnabha Dutta</p>
      {/* part 2  : test for input fields */}
      <input type='text'
        placeholder="Enter the Text"
        name="username"
        id="userId"
        value='swarnabha dutta'
        readOnly
      />
      <br />
      <br />
      <br />

      {/* // <InputForm/> */}
      <ButtonClick />
    </div>
  );
}

export default App;
