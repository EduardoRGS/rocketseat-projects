import styles from './Header.module.css'
import todoLogo from '../assets/todo.png'
import rocketLogo from '../assets/rocket.png'

export function Header () {

    return (
        <header className={styles.header} >
            <img src={rocketLogo} />
             <img src={todoLogo} />
         </header>
    )
}