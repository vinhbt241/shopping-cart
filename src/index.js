import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { ItemInfo } from './components/ItemInfo';
import { ShoppingCart } from './components/ShoppingCart';

const Index = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItemToCart = (item) => {
    if(selectedItems.includes(item)) {
      return;
    }
    setSelectedItems(selectedItems.concat(item));
  }

  const removeItemFromCart = (name) => {
    setSelectedItems(selectedItems.filter(item => item.name !== name));
  }

  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/shopping-cart/" element={<App itemAmount={selectedItems.length}/>}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:name" element={<ItemInfo add={addItemToCart} />} />
            <Route 
              path="shopping-cart" 
              element={
              <ShoppingCart 
                remove={removeItemFromCart}
                selectedItems={selectedItems}
                />
              }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

