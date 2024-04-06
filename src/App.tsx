import './App.css';
import handleSubmit from './handles/handles';
import { useRef } from 'react';
 
function App() {
  const dataRef = useRef<HTMLInputElement>(null);
 
  const submithandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(dataRef.current!.value);
    
    handleSubmit(dataRef.current!.value);
    dataRef.current!.value = "";
  }
 
  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <input type= "text" ref={dataRef} />
        <button type = "submit">Save</button>
      </form>
    </div>
  );
}
 
export default App;