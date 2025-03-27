import React, { useState } from 'react';
import './NavLeft.css';

const NavLeft = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    {
      title: 'Inicio',
      submenu: [
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'Resumen', path: '/resumen' },
        { title: 'Estadísticas', path: '/estadisticas' }
      ]
    },
    {
      title: 'Usuarios',
      submenu: [
        { title: 'Lista de Usuarios', path: '/usuarios' },
        { title: 'Agregar Usuario', path: '/usuarios/nuevo' },
        { title: 'Roles', path: '/roles' }
      ]
    },
    {
      title: 'Configuración',
      submenu: [
        { title: 'Perfil', path: '/perfil' },
        { title: 'Preferencias', path: '/preferencias' },
        { title: 'Seguridad', path: '/seguridad' }
      ]
    }
  ];

  const handleSubmenuClick = (path) => {
    console.log('Navegando a:', path);
    // Aquí puedes agregar la navegación usando react-router-dom
  };

  return (
    <div className="nav-left">
      <ul>
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className="menu-item"
            onMouseEnter={() => setActiveSubmenu(index)}
            onMouseLeave={() => setActiveSubmenu(null)}
          >
            <span>{item.title}</span>
            {item.submenu && (
              <div className={`submenu ${activeSubmenu === index ? 'show' : ''}`}>
                {item.submenu.map((subItem, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmenuClick(subItem.path);
                    }}
                  >
                    {subItem.title}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLeft; 