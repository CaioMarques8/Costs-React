import { Link } from "react-router-dom"

import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'


function Navbar(){

    return(
        <nav className={styles.navbar}>
          <Container>
          <Link><img src={logo} alt="Coats"/></Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Inicio</Link></li>
                <li className={styles.item}><Link to="/projects">Projetos</Link></li>
                <li className={styles.item}><Link to="/company">Empresa</Link></li>
                <li className={styles.item}><Link to="/contact">Contatos</Link></li>
                
            </ul>
          </Container>
        </nav>
    )
}

export default Navbar