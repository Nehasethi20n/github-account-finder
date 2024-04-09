import '../style/app.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaGithub } from "react-icons/fa";
import SearchBar from './searchBar';

const Header = () => {

    return (
        <>
            <Navbar bg='dark' data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">
                        <FaGithub />
                        {' '}
                        GitHub Account Finder
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <SearchBar />
        </>
    )
}

export default Header