import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import './style/Navbar.css'
import './style/Footer.css'
import './style/introduction.css'
import './style/feature.css'
import './style/category.css'
import './style/Faqs.css'
import './style/step.css'
import './style/testimonial.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
