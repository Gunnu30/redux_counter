import './App.css';
import Counter from './components/Counter';
function App() {
  return (
    <div className="main-container text-center" style={{backgroundColor:'#2f9b11',textAlign:'center',width:"100vw", height:"100vh"}}>
      <h1 style={{fontSize:"20px",padding:"20px",color:'#ffffff'}}>Redux Counter</h1>
      <Counter/>
    </div>
  );
}

export default App;
