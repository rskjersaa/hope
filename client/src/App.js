import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Form from './components/Form';
import Display from './components/Display';
import DisplayOne from './components/DisplayOne';
import Home from './components/Home';
import Edit from './components/Edit';
import furnishLogo from"./images/Logo_black_CMYK+(PRINT).png"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Furnish Hope</h1> */}
      <div className="container">
      <nav className="navbar navbar-expand-xl navbar-light bg-light" >
  <a className="navbar-brand" href="#">
  <img src={furnishLogo} width="80" height="80" class="d-inline-block align-center" alt=""></img>
    </a>
    
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="/">Home </a>
      <a className="nav-item nav-link" href="/inventory">Recent Donations</a>
      <a className="nav-item nav-link" href="/donate">Donate</a>
      
    </div>
  </div>
</nav>
</div>
      <BrowserRouter>
      
      <Routes>
        
        <Route path='/' element = {<Home/>}/>
        <Route path='/inventory' element = {<Display/>}/>
        <Route path='/donate' element = {<Form/>}/>
        <Route path='/viewdonation/:id' element = {<DisplayOne/>}/>
        <Route path='/edit/:id' element = {<Edit/>}/>
        

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
