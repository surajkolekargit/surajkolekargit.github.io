 
import './App.css';
import Greet from './Components/Greet';
import Message from './Components/Message';
import MyComp from './Components/Componet'
import Mess from './Components/Message'
import Counter from './Components/Counter'
import NameList from './Components/NameList'
import ErrorBoundary from './Components/ErrorBoundary'
function App() {
  return (
    <div className="App">
       
<Counter/>

<ErrorBoundary>
<NameList/>
</ErrorBoundary>

<Message/>
      
    </div>
  );
}

export default App;
