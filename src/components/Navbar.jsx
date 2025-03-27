import React, { useState } from 'react'
import logo from '../assets/logo-itsa.png'
import './Navbar.css'

function Navbar() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return (
    <div className='container-nav'>
      <div className='nav-left'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <ul className='nav-left-menu'>
          <li key="configuracion" 
              onMouseEnter={() => setActiveSubmenu('configuracion')} 
              onMouseLeave={() => setActiveSubmenu(null)}>
            <span>Configuracion</span>
            <ul className={`nav-left-submenus ${activeSubmenu === 'configuracion' ? 'show' : ''}`}>
              <li>Parametros</li> 
              <li>Usuarios</li>
              <li>Roles</li>
            </ul>
          </li> 
          <li key="ligas"
              onMouseEnter={() => setActiveSubmenu('ligas')} 
              onMouseLeave={() => setActiveSubmenu(null)}
          >
            <span>Ligas</span>
            <ul className={`nav-left-submenus ${activeSubmenu === 'ligas' ? 'show' : ''}`}>
              <li>Ligas</li> 
              <li>Equipos</li>
              <li>Jugadores</li>
            </ul>
          </li>
          <li key="procesos"
              onMouseEnter={() => setActiveSubmenu('procesos')} 
              onMouseLeave={() => setActiveSubmenu(null)}
          >
            <span>Procesos</span>
            <ul className={`nav-left-submenus ${activeSubmenu === 'procesos' ? 'show' : ''}`}>
              <li>Torneos</li> 
              <li>Partidos</li>
              <li>Resultados</li>
            </ul>
          </li>
          <li key="reportes"
              onMouseEnter={() => setActiveSubmenu('reportes')} 
              onMouseLeave={() => setActiveSubmenu(null)}
          >
            <span>Reportes</span>
            <ul className={`nav-left-submenus ${activeSubmenu === 'reportes' ? 'show' : ''}`}>
              <li>Estadisticas</li> 
              <li>Cedulas</li>
              <li>Torneos</li>
            </ul>
          </li>
        </ul>
      </div>

{/*         <div className='nav-sesion-info'>
          <img src="" alt="user" className='nav-sesion-avatar' />
          <span className='nav-sesion-name'>Lesly</span>
        </div>
 */}
        <div className='nav-sesion-info'>
          <button className='btn-sesion-info'>Login</button>
          <button className='btn-sesion-info'>Register</button>
        </div>
        
    </div>
  )
}

export default Navbar