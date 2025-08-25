import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice.js';
import { Navbar as BsNavbar, Nav, Button } from 'react-bootstrap';

export default function Navbar() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false); // track toggle state

  const handleNavClick = () => setExpanded(false); // close on click

  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      style={{ background: 'linear-gradient(90deg, #ff9966, #ff5e62)' }}
    >
      <BsNavbar.Brand as={Link} to="/" className="text-white fw-bold">
        ✈️ WanderList
      </BsNavbar.Brand>
      <BsNavbar.Toggle aria-controls="navbar-nav" />

      <BsNavbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            className="text-white"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
            })}
            onClick={handleNavClick}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            className="text-white"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
            })}
            onClick={handleNavClick}
          >
            About
          </Nav.Link>
          {isAuthenticated && (
            <Nav.Link
              as={NavLink}
              to="/trips"
              className="text-white"
              style={({ isActive }) => ({
                fontWeight: isActive ? 'bold' : 'normal',
              })}
              onClick={handleNavClick}
            >
              Trips
            </Nav.Link>
          )}
        </Nav>

        {/* Right Nav */}
        <Nav>
          {isAuthenticated ? (
            <Button
              variant="outline-light"
              onClick={() => {
                dispatch(logout());
                handleNavClick();
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              as={Link}
              to="/login"
              variant="light"
              className="fw-bold"
              onClick={handleNavClick}
            >
              Login
            </Button>
          )}
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
}
