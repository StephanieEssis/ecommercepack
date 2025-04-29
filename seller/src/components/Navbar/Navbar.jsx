import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const isLoggedIn = false; // Remplacer par votre logique d'authentification

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);

    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartCount(updatedCart.length);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Rechercher:", searchQuery);
    // Redirection ou logique de recherche ici
  };

  return (
    <Navbar expand="lg" className="bg-orange-500 shadow-md sticky top-0 z-50 py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white text-2xl font-bold">
          🛍️ E-Shop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <Nav className="flex flex-col lg:flex-row gap-3 lg:gap-4">
              <Nav.Link as={Link} to="/" className="text-white hover:text-gray-300 transition">
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/products" className="text-dark hover:text-gray-300 transition">
                Produits
              </Nav.Link>
              <NavDropdown title="Plus" id="nav-dropdown" className="text-dark">
                <NavDropdown.Item as={Link} to="/about">À propos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form onSubmit={handleSearch} className="w-full lg:w-1/2 mx-auto my-3 lg:my-0">
              <FormControl
                type="text"
                placeholder="Rechercher un produit..."
                className="rounded-l-md border-gray-300 focus:ring-orange-500 focus:border-orange-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                variant="outline-light"
                type="submit"
                className="rounded-r-md bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                🔍
              </Button>
            </Form>

            <Nav className="flex flex-col lg:flex-row gap-3 lg:gap-4 mt-3 lg:mt-0 lg:ml-auto items-center">
              {!isLoggedIn ? (
                <Nav.Link as={Link} to="/auth" className="text-white hover:text-gray-300 transition">
                  Se connecter
                </Nav.Link>
              ) : (
                <NavDropdown
                  title={<img src="/user-avatar.png" alt="avatar" className="w-8 h-8 rounded-full" />}
                  id="user-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/profile">Mon profil</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/orders">Mes commandes</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Se déconnecter</NavDropdown.Item>
                </NavDropdown>
              )}

              <Nav.Link as={Link} to="/cart" className="relative text-white hover:text-gray-300 transition flex items-center gap-1">
                <span className="text-xl">🛒</span>
                <span>Panier</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1">
                    {cartCount}
                  </span>
                )}
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
