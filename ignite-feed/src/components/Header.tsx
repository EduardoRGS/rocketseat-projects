import  styles  from './Header.module.css'
import igniteLogo from '../assets/Ignite-logo.png'

export function Header() {

    return (
        <header className={styles.header} >
            <strong >Ignite Feed</strong>
            <img src={igniteLogo}></img> 
          
        </header>
    );
}