import logo from './assets/ironhack-logo.svg';
import Menu from './assets/menu-top.svg'
import './App.css';

const propertiesReact = [
  {
    image: './assets/icon1.png',
    title: 'Declarative',
    subtitle: 'react make it painless to create interactive UIs.'
  },
  {
    image: './assets/icon2.png',
    title: 'Components',
    subtitle: 'Build encapsulated components that manage their state.'
  },
  {
    image: './assets/icon3.png',
    title: 'Single-Way',
    subtitle: 'A set of immutable values are passed to the component´s.'
  },
  {
    image: './assets/icon4.png',
    title: 'JSX',
    subtitle: 'Statically-typed, designed to run on modern browser.'
  },
]

function App() {
  return (
    <div className="App">
      <header className="background">
        <div className="container">
        <nav className="d-flex flex-row align-items-center justify-content-between pt-3 mb-5">
          <img src={logo} alt="Ironhack-logo"/>
          <img src={Menu} alt="menu"/>
        </nav>
        <div className="info">
          <h1>Say hello to ReactJS</h1>
          <p className="mb-5 pb-5">You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
          <button className="awesome">Awesome!</button>
        </div>
        </div>
      </header>
      <section className="container mb-5 mt-5 pb-5 pt-5">
        <article className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
        {propertiesReact.map((properties, i) => (
          <div key={i} className="box col text-center text-lg-start">
            <img className="mb-5 img-fluid" src={properties.image} alt="service"/>
            <div className="box-content">
              <h3>{properties.title}</h3>
              <p className="text-muted">{properties.subtitle}</p>
            </div>
          </div>
  ))}
        </article>
      </section> 
    </div>
  );
}

export default App;
