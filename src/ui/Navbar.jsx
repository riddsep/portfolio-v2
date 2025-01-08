import styled from "styled-components";
import Logo from "./Logo";
import { HiArrowUpRight } from "react-icons/hi2";

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
        <Li>
          <span>Hire me</span> <HiArrowUpRight />
        </Li>
      </NavList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 100%;
  padding-block: 2rem;
  font-family: "Inter", sans-serif;
`;

const NavList = styled.ul`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2rem;
  border-radius: 2rem;

  li:nth-child(2) {
    margin-left: auto;
  }
  li:last-child {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
    background-color: transparent;
    padding: 0.5rem 2rem;
    border-radius: 1.5rem;
    border: 2px solid #000;
  }
`;

const Li = styled.li``;

export default Navbar;
