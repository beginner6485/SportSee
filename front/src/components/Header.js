import logo from '../Assets/logo.png'
import '../styles/header_style.css'

function Header() {
  return (
    <div className="Header">
      <header>
        <div className= "App-header">
          <nav>
          <ul className='App-nav'>
                  <img src={logo} className="App-logo" alt="logo" />
                  <li className='nav-title'>Accueil</li>
                  <li className='nav-title'>Profil</li>
                  <li className='nav-title'>Réglages</li>
                  <li className='nav-title'>Communauté</li>
              </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
