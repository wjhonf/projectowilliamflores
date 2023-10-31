import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDrmPdqU0vP_NStdu2u_Ib9JHYRu-WhEi8",
  authDomain: "proyecto-ed6f2.firebaseapp.com",
  projectId: "proyecto-ed6f2",
  storageBucket: "proyecto-ed6f2.appspot.com",
  messagingSenderId: "1013364468077",
  appId: "1:1013364468077:web:88996b87d0647024855264"
};
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
