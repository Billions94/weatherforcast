import { Navbar, Nav} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "./styles.css"

const NavBar = () => {
    const navigate = useNavigate()
 return(
    <Navbar className="customNav" variant="dark">
        <Navbar.Brand href="#home">
        <img src="https://img.icons8.com/small/50/000000/partly-cloudy-day.png"
             alt='' width='30px'/>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default NavBar