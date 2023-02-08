
import './App.css';

function Header(){
  return(
    <div className='header'>
      <div className='link'>
        <a href=''>Home</a>
        <a href=''>About</a>
        <a href=''>Resume</a>
        <a href=''>Skills</a>
        <a href=''>Projects</a>
        <a href=''>My Blog</a>
        <a href=''>Contact</a>
      </div>
      <div className='profile'>
        profile
      </div>
    </div>
  );
}

function Body(){
  return(
    <div className='body'>
      <div className='Introduction'>
        <p>Hello!</p>
        <h2>I'm Md Minhaj Uddin</h2>
        <h3>A MARN Stack Developer </h3>
        <button>HIRE ME</button>
        <button>MY WORKS</button>
      </div>
      <div className='image'>
        <img src="../public/images/minhaj.webp" alt="Minhaj's pic"/>
      </div>
    </div>
  );
}

function Footer(){
  return(
    <div className='footer'>
      <div className='accounts'>
          accounts
      </div>
      <div className='copyright'>
         <p>Copyright &copy;{new Date().getFullYear()} All rights reserved.</p>
      </div>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
     
    </div>
  );
}

export default App;
