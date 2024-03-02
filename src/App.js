import React from 'react';
import Datafetching from './Components/DataFetching'
import produtos from './produtos.json'
import ProductsList from './Components/Cards/ProductList';
import NavBar from './Components/navBar';
import './App.css';


function App() {
  const handleClick = React.useCallback(() => {
    window.open('https://www.telerik.com/kendo-react-ui/components/', '_blank');
  }, []);
  
  return (
    <div className="App">
      <NavBar />
      
      <Datafetching/>
    </div>
  );
}

export default App;
