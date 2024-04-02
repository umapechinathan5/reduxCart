import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./Store"; 
import Cart from "./Component/Cart";
import "./App.css"
function App() {
  return (
    <Provider store={store}>
     <Cart/>
    </Provider>
  );
}

export default App;
