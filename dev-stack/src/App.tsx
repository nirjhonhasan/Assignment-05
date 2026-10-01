

import { Suspense } from 'react'
import './App.css'
import Hero from './Componants/Hero'
import Nav from './Componants/Nav'
import Technologies from './Componants/Technologies/Technologies'
import type { Itypes } from './Types/Itypes'
import Footer from './Componants/Footer'

// import { ToastContainer } from 'react-toastify';





const TechnologiesResponse = async (): Promise<Itypes[]> => {

    const res = await fetch('./Technologies.json');
    const data = await res.json();

    return data;
  }



  function App() {

    const techPromise = TechnologiesResponse();

    return (
      <>

        <Nav/>
        <Hero />

        <Suspense fallback={<div>Loading...</div>}>
          <Technologies techPromise={techPromise} />
        </Suspense>

        <Footer/>

      </>
    )
  }

  export default App
