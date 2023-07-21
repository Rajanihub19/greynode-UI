import { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './components/allroutes';
import LandingPage from './components/pages/landingpage';
import Login from './components/pages/login';
import Navbar from './components/landing structure/navbar';
import Chart from './components/charts/piechart';
import Barchart from './components/charts/bar';
import LineChart from './components/charts/line';
import Barchart1 from './components/charts/bar2';
import Piechart1 from './components/charts/piechart2';
// --------------------------------------------------------
function App() {

  return (

    <div className="App">
      <LandingPage />
      {/* <Navbar /> */}
      {/* <Login /> */}
      {/* <Chart /> */}
      {/* <Barchart /> */}
      {/* <Barchart1 /> */}
      {/* <Piechart1 /> */}
      {/* <LineChart /> */}
    </div>
  )
}




export default App;







