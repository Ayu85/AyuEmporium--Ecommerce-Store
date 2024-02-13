import Body from "./components/Body";
import Menswear from "./components/Menswear";
import store from "./components/redux/store";
import { Provider } from 'react-redux'
import { createBrowserRouter } from 'react-router-dom'
const approut = createBrowserRouter([
  {
    path: '/',
    element: <Body />
  },
  {
    path: '/menswear',
    element: <Menswear />
  }
])
function App() {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
}

export default App;
