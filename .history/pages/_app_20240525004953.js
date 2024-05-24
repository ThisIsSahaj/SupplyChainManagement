import "../styles/globals.css";


//INTERNAL IMPORT 

import { TrackingProvider } from "../Conetxt/TrackingContext";

import {Navbar ,Footer} from "../Components";

 function App({ Component, pageProps }) {

  return (
  <>
    <TrackingProvider>
    <Navbar />
     <Component {...pageProps} />
    </TrackingProvider>
    <Footer />
    return <Component {...pageProps} />;
 </>
  );
}


export default App;

