
import logo from '../assets/logo-itsa.png'
import './Navbar.css'

function Navbar() {

  return (
    <div className='container-nav'>

      <div className='nav-left'>

        <div className='nav-left-logo'>
          <img src={logo} alt="logo" />
        </div>

        <ul className='nav-left-menu'>
          <li className='nav-left-menu-config'>
            <span>Configuracion</span>
            <ul className='nav-left-submenus'>
              <li>Parametros</li> 
              <li>Usuarios</li>
              <li>Roles</li>
            </ul>
          </li> 
        </ul>

      </div>

      <div className='nav-sesion-info'>
        <button className='btn-sesion-info'>Login</button>
        <button className='btn-sesion-info'>Register</button>
      </div>
        
    </div>
  )
}

export default Navbar