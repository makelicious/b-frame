import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../content/assets/logo.svg"

const Wrapper = styled.div``

const Header = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);
  margin-bottom: 4rem;
`
const Nav = styled.nav`
  margin-right: 2rem;
  display: flex;
  align-items: center;
`

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
`

const NavListItem = styled.li`
  display: inline;
  margin-right: 2rem;
`

const NavLink = styled(Link)`
  color: ${props => (props.selected ? "#2F8AAA" : "#82888A")};
  padding: 0.25rem;
  box-shadow: ${props => (props.selected ? "0 3px 2px -2px #2F8AAA" : "none")};
  font-weight: 600;

  &:hover {
    color: #2f8aaa;
    box-shadow: 0 3px 2px -2px #2f8aaa;
    transition: box-shadow 0.2s ease-out;
  }
`

const LogoLink = styled(Link)`
  box-shadow: none;
`

const Main = styled.main`
  max-width: 920px;
  margin: 0 auto;
  padding: 0 3rem;
`

const Footer = styled.footer``
const Logo = styled.img`
  width: 60px;
  margin: 0.75rem 0 0.5rem 4rem;
`

const Title = styled.h1`
  margin-bottom: 6rem;
`

class Layout extends React.Component {
  render() {
    const { children, location } = this.props

    const rootPath = `${__PATH_PREFIX__}/`
    const isMainPage = rootPath === location.pathname
    return (
      <Wrapper>
        <Header>
          <LogoLink to="/">
            <Logo src={logo} />
          </LogoLink>
          <Nav>
            <NavList>
              <NavListItem>
                <NavLink to="/" selected={true}>
                  Home
                </NavLink>
              </NavListItem>
              <NavListItem>
                <NavLink to="/">About</NavLink>
              </NavListItem>
            </NavList>
          </Nav>
        </Header>
        <Main>
          {isMainPage && <Title>Latest posts</Title>}
          {children}
        </Main>
        <Footer />
      </Wrapper>
    )
  }
}

export default Layout

// export const bioQuery = graphql`
//   query BioQuery {
//     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//       childImageSharp {
//         fixed(width: 50, height: 50) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         author
//         social {
//           twitter
//         }
//       }
//     }
//   }
// `
