import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Menu, Dropdown } from 'antd'; // Antd imports for dropdown
import { DownOutlined } from '@ant-design/icons'; // Ant Design icon for the dropdown arrow
import logo from "../assets/images/Pixel_Logo.png";

function TopNavBar() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');

  // Close the navbar when a link is clicked
  const closeNavbar = () => {
    if (navbarExpanded) {
      setNavbarExpanded(false);
    }
  };

  // Detect scroll and change the background color of the navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg('rgba(0, 0, 0, 0.8)'); // Light grey
      } else {
        setNavbarBg('transparent'); // Transparent background
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = window.innerWidth <= 767;

  // Ant Design Dropdown Menu for Our Services
  const servicesMenu = (
    <Menu>
      <Menu.Item key="1">
        <a href="/WebApplicaiton" onClick={closeNavbar}>Web Applicaiton</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/Desktops_Laptops" onClick={closeNavbar}>Desktops & Laptops</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="/Software_Solutions" onClick={closeNavbar}>Software Solutions</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="/VOIP" onClick={closeNavbar}>VOIP</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="/Cloud_Support" onClick={closeNavbar}>Cloud Support</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="/IT_Services" onClick={closeNavbar}>IT Services</a>
      </Menu.Item>
      <Menu.Item key="7">
        <a href="/Access_Points" onClick={closeNavbar}>Access Points</a>
      </Menu.Item>
      <Menu.Item key="8">
        <a href="/Networking_Devices" onClick={closeNavbar}>Networking Devices</a>
      </Menu.Item>
      <Menu.Item key="9">
        <a href="/IT_Security" onClick={closeNavbar}>IT Security</a>
      </Menu.Item>
      <Menu.Item key="10">
        <a href="/IT_Support" onClick={closeNavbar}>IT Support</a>
      </Menu.Item>
      
    </Menu>
  );

  return (
    <Navbar
      expand="lg"
      expanded={navbarExpanded}
      onToggle={() => setNavbarExpanded(!navbarExpanded)}
      style={{
        background: navbarBg, // Dynamic background color
        transition: 'background-color 0.5s ease', // Smooth transition
        backdropFilter: isMobile ? 'blur(10px)' : 'none',
        position: 'fixed', // Sticky navbar
        top: 0,
        zIndex: 1000,
        width: '100%',
      }}
    >
      <Container>
        <Navbar.Brand className="pt-1 pb-1" href="/">
          <img src={logo} width="65px" alt="Logo" />
          <h3 style={{ color: "#fff" }} className='d-inline none anton-regular ms-2'>Pixel IT Group</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="fw-semibold glow" href="/" onClick={closeNavbar}>
              <span style={{ color: "#fff" }} className="glow">Home</span>
            </Nav.Link>

            {/* Antd Dropdown for "Our Services" */}
            <Dropdown overlay={servicesMenu} trigger={['click']}>
              <Nav.Link className="fw-semibold glow" onClick={(e) => e.preventDefault()}>
                <span style={{ color: "#fff" }} className="glow">Our Services <DownOutlined size={"1x"}/></span>
              </Nav.Link>
            </Dropdown>

            {/* <Nav.Link className="fw-semibold glow" href="/Contact" onClick={closeNavbar}>
              <span style={{ color: "#fff" }} className="glow">Contact Us</span>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
