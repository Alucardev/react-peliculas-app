import styles from "./NavBar.module.css";
import {Search} from "./Search"
import {Link } from "react-router-dom";

export function NavBar(){
    return <div className={styles.NavBar}>
        <ul className ={styles.nav__list}>
            <li className={styles.items}>
                    <Link to="/">   
                    <p>REACT<span className={styles.span}>PELIX</span></p>
                    </Link>
             </li>

            <li className={styles.items}>
                <Search></Search>
            </li>
         
        </ul>
        </div>
}