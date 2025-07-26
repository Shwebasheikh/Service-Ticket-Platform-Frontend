import React, { useState, useEffect } from 'react';
import { 
  House, 
  Ticket, 
  People, 
  BarChart, 
  ArrowLeftRight, 
  Chat, 
  Briefcase, 
  Gear,
  ChevronDown,
  BoxArrowRight,
  Person,
  List
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '../Styles/SideNav.css';

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
      { name: 'Home', icon: <Briefcase size={18} />, path: '/' },
    { name: 'Dashboard', icon: <House size={18} />, path: '/dashboard' },
    { name: 'Tickets', icon: <Ticket size={18} />, path: '/newticket' },
    { name: 'Employees', icon: <People size={18} />, path: '/employee-portal' },
    { name: 'Analytics', icon: <BarChart size={18} />, path: '/analytics' },
    { name: 'RequestTracking', icon: <ArrowLeftRight size={18} />, path: '/track' },
    { name: 'Services', icon: <Chat size={18} />, path: '/' },
  ];

  const settingsItems = [
    { name: 'Profile', icon: <Person size={16} />, path: '/SignUp' },
    { name: 'Logout', icon: <BoxArrowRight size={16} />, path: '/login' }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setCollapsed(!collapsed);
    }
    if ((collapsed || mobileMenuOpen) && showSettingsMenu) {
      setShowSettingsMenu(false);
    }
  };

  const toggleSettingsMenu = () => {
    setShowSettingsMenu(!showSettingsMenu);
    setActiveItem('Settings');
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {isMobile && (
        <button className="mobile-menu-toggle" onClick={toggleSidebar}>
          <List size={24} />
        </button>
      )}

      <div className={`sidebar-container ${collapsed ? 'collapsed' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          {!collapsed && <h3>ServiceTicket</h3>}
          <button className="toggle-btn" onClick={toggleSidebar}>
            {collapsed ? '→' : '←'}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map((item) => (
              <li 
                key={item.name}
                className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
                onClick={() => {
                  setActiveItem(item.name);
                  closeMobileMenu();
                }}
              >
                <Link to={item.path} className="nav-link">
                  <span className="nav-icon">{item.icon}</span>
                  {!collapsed && (
                    <span className="nav-text">{item.name}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
         
          <div 
            className={`nav-item settings-item ${activeItem === 'Settings' ? 'active' : ''}`}
            onClick={toggleSettingsMenu}
          >
            <span className="nav-icon"><Gear size={18} /></span>
            {!collapsed && (
              <>
                <span className="nav-text">Settings</span>
                <span className={`chevron ${showSettingsMenu ? 'open' : ''}`}>
                  <ChevronDown size={14} />
                </span>
              </>
            )}
          </div>

          {!collapsed && showSettingsMenu && (
            <div className="settings-menu">
              {settingsItems.map((item) => (
                <Link 
                  to={item.path}
                  key={item.name} 
                  className="settings-menu-item"
                  onClick={() => {
                    console.log(item.name);
                    closeMobileMenu();
                  }}
                >
                  <span className="settings-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && mobileMenuOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
    </>
  );
};

export default SideNav;