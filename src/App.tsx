import Header from './Header';
import './App.css';
import SideBar from './SideBar';
import Store from './Store';
// 
function App() : JSX.Element{
  return (
    <div className="App">
      <Header></Header>
      <Store className="Store"></Store>
    </div>
  );
}

export default App;
