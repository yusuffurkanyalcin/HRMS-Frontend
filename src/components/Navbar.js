import React from "react";

import {
  Button,
  Container,
  Nav,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  return (
    <Container fluid className={styles.container}>
      <Nav className={styles.nav} activeKey="/#">
        <Nav.Item className="me-auto p-2 bd-highlight">
          <Button variant="otline-light" className={styles.hrmsLogo}>
            HRMS.net
          </Button>
          <Button variant="otline-light" className={`${styles.leftButton} ${styles.searchJob}`}>
            İş Ara
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>
          </Button>

          <Button variant="otline-light" className={styles.leftButton}>
            Üniversite Rehberi
          </Button>
          <Button variant="otline-light" className={styles.leftButton}>
            Pozisyon Rehberi
          </Button>
        </Nav.Item>
        <Nav.Item className={styles.leftNavItem}>
          <Button
            className="px-4 navButton "
            variant="outline-danger"
            size="md"
           
          >
            ÜYE OL
          </Button>
        </Nav.Item>
        <Nav.Item className={styles.leftNavItem}>
          <Button className=" px-3 " variant="outline-danger" size="md">
            ÜYE GİRİŞİ
          </Button>
        </Nav.Item>
        <Nav.Item className={styles.leftNavItem}>
          <DropdownButton title="İşveren" align="end" size="md">
            <Dropdown.Item href="#/action1">Giriş Yap</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action2">Kayıt Ol</Dropdown.Item>
          </DropdownButton>
        </Nav.Item>
      </Nav>
    </Container>
  );
}
