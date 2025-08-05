import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Google Analytics GA4
const GA_MEASUREMENT_ID = 'G-LGS2TRQZLZ';

// Load gtag script
const script1 = document.createElement('script');
script1.async = true;
script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
document.head.appendChild(script1);

// Initialize gtag
const script2 = document.createElement('script');
script2.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${GA_MEASUREMENT_ID}');
`;
document.head.appendChild(script2);

createRoot(document.getElementById("root")!).render(<App />);
