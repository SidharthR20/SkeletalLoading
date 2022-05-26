//import './App.css';
//import DataLoader from './Components/DataLoader';
import Articles from './components/Articles';
import Users from './components/Users';
import './index.css';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>React Skeletons</h1>
      </header>
      <div className='content'>
        <Articles/>
        <Users/>
      </div>
    </div>
  );
}

export default App;
