import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';

const Main = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-E5WSY9HJQM';
    script.async = true;
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-E5WSY9HJQM');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
