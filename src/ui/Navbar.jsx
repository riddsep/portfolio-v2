import styled from "styled-components";
import Logo from "./Logo";

function Navbar() {
  return (
    <StyledNav>
      <NavList>
        <Li>
          <Logo />
        </Li>
        <Li>Home</Li>
        <Li>About</Li>
        <Li>Skills</Li>
        <Li>Projects</Li>
        <Li>Contact</Li>
        <Li>Hire me</Li>
      </NavList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  padding-block: 1rem;
  font-family: "Inter", sans-serif;
`;

const NavList = styled.ul`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  li:nth-child(2) {
    margin-left: auto;
  }
  li:last-child {
    margin-left: auto;
    background-color: #000;
    padding: 0.5rem 1rem;
    color: white;
    border-radius: 8px;
  }
`;

const Li = styled.li``;

export default Navbar;
