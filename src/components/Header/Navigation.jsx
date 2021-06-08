import React, { useState } from "react";
import { withNamespaces } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavItem,
} from "reactstrap";

function Navigation({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <Container>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen}>
            <NavItem>
              <Link to="/asd">asd</Link>
            </NavItem>
            <NavItem>
              <Link to="/asd">asd</Link>
            </NavItem>
            <NavItem>
              <Link to="/asd">asd</Link>
            </NavItem>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withNamespaces()(Navigation);
