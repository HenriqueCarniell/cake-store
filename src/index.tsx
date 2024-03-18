import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Components
import Home from './components/user/Home/home';

// React-Router-Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormLogin from './components/user/forms/formLogin/formlogin';
import FormCreateAccount from './components/user/forms/formCreateAccount/formcreateaccount';
import Dashboard from './components/dashboard/dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/login' element={<FormLogin />} />
        <Route path='/createaccount' element={<FormCreateAccount />} />
        
        <Route path='/DashBoard/home' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
