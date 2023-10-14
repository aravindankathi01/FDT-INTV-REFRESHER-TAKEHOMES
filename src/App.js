import "./App.css";
import Calculator from "./Components/Calculator";
import Counter from "./Components/Counter";
import Form from "./Components/Form";

function App() {
  return (
    <div className='text-xl text-center flex flex-col items-center h-screen justify-center gap-6'>
      <Calculator />
    </div>
  );
}

export default App;
