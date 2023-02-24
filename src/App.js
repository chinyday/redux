import './App.css';
import Subscribers from './component/Subscribers';
import { Provider } from 'react-redux';
import store from './redux/store';
import Display from './component/Display';
import View from './component/View';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
        <Display />
        <View />
      </div>
    </Provider>
  );
}

export default App;
