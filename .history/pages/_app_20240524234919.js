import "../styles/globals.css";


//INTERNAL IMPORT 

import { TrackingProvider } from "../Conetxt/Tracking";

import {Navbar ,Footer} from "../Components";

export default function App({ Component, pageProps }) {
  return (
  <>
    <TrackingProvider>
    <Navbar />
     <Component {...pageProps} />;
    </TrackingProvider>
    <Footer />
 </>
  );
}