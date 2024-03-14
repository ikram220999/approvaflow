import logo from './logo.svg';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App my-4 h-screen">
      <h4 className='text-4xl font-bold'>Approva<span className='text-indigo-600'>Flow</span></h4>  
      <div className='border-2 w-1/2 h-full rounded-2xl m-auto my-4'> 
        <Form />
      </div>
    </div>
  );
}

export default App;
