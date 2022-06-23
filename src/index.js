import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { Home } from './components/Home';
import { Shop } from './components/Shop';
import { ItemInfo } from './components/ItemInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:name" element={<ItemInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

