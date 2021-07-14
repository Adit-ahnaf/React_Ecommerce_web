
import './App.css';
import ProductsMap from './Components/ProductsMap';
import {Route, Switch, BrowserRouter as Router} from '../node_modules/react-router-dom';
import Mainitem from './Components/Mainitem';


function App() {
  return (
    <div>
    <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-green-300" >
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow mx-3 text-2xl">
        <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
          Home
        </a>
        
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-green-900 border-green-800 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Cart</a>
      </div>
    </div>
  </nav>
  <Router>
      <Switch>
      <Route exact path="/" component={Mainitem} />
      
      </Switch>
    </Router>
  </div>
  );
}

export default App;
