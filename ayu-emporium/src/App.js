import Body from "./components/Body";
import Cart from "./components/Cart";
import Menswear from "./components/Menswear";
import Productdetails from "./components/Productdetails";
import store from "./components/redux/store";
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const approute = createBrowserRouter([
  {
    path: '/',
    element: <Body />
  },
  {
    path: '/menswear',
    element: <Menswear />
  },
  {
    path: '/details/:id',
    element: <Productdetails />
  },
  {
    path: '/categories/1',
    element: <Menswear />
  },
  {
    path: '/cart',
    element: <Cart />
  }
])
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={approute} />
    </Provider>
  );
}

export default App;
