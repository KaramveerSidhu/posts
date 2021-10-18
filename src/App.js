import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <PostForm />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
