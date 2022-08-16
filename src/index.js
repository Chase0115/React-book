import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Expenses from './routes/expenses';
import Invoices from './routes/invoices';
import Invoice from './routes/inovice';
import Articles from './routes/Articles';
import Article from './routes/Article';
import Layout from './Layout';
import MyPage from './routes/MyPage';
import Login from './routes/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<App />}>
        <Route path="About" element={<About />}></Route>
        <Route path="Home" element={<Home />}></Route>
        <Route path="Articles" element={<Articles />}>
          <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>select an Article</p>
                </main>
              }
            />
          <Route path=":id" element={<Article />}/>
        </Route>
        <Route path="Expenses" element={<Expenses />}></Route>
        <Route path="Invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />}></Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing to show!</p>
            </main>
          }
        />
      </Route>
      <Route path="Login" element={<Login />}></Route>
      <Route path="MyPage" element={<MyPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
