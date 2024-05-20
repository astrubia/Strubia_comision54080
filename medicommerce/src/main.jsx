import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDvIYRtrzY1zphWjvJsbygPxO4MnRVXeNM",
  authDomain: "medicommerce-b23e0.firebaseapp.com",
  projectId: "medicommerce-b23e0",
  storageBucket: "medicommerce-b23e0.appspot.com",
  messagingSenderId: "264173738318",
  appId: "1:264173738318:web:737d23ddc306d10eefa61f"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
