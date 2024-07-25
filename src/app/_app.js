// pages/_app.js
import { ThemeProvider } from '@material-tailwind/react';
import './globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
