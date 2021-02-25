import logo from './assets/ironhack-logo.svg';
import Menu from './assets/menu-top.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="background">
        <nav className="d-flex flex-row align-items-center justify-content-between container">
          <img src={logo}/>
          <img src={Menu}/>
        </nav>
        <div className="info">
          <h1>Say hello to ReactJS</h1>
          <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <button>Awesome!</button>
        </div>
      </header>

      <section>
        <article>
          <img/>
          <h3></h3>
          <p></p>
        </article>
      </section>
    </div>
  );
}

export default App;
