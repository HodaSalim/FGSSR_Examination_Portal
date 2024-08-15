import logo from "../../assets/Logos/light-mode-logo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function Header() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">الرئيسية</Nav.Link>
              <Nav.Link href="#link">بنك الاسئلة</Nav.Link>
              <Nav.Link href="#link">بيان الدرجات</Nav.Link>
              <Nav.Link href="#link">جدول الامتحانات</Nav.Link>
              <NavDropdown title="تقديم الطلبات" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  طلب تاجيل
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  تقديم عذر
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <button className="sign-in btn">تسجيل الدخول</button>
            <button className="sign-up btn">حساب جديد</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main></main>
    </>
  );
}
