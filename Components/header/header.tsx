import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css"

function Header(){
    return (
        <div className={styles.maincontainer}>

        <div className={styles.headerContainer}>
            <div className={styles.subContainer}>
            <div className={styles.headermenu}>

                <div>
                    <Image src="/menu.svg" width={50} height={90} alt="menu"/>
                </div>

                

                <div className={styles.searchInput}>
                    <div className={styles.searchIcon}>
                        <Image src="/search.svg" width={17} height={17} alt="search"/>
                    </div>
                    <div>
                    <input type="text"/>
                    </div>
                </div>

            </div>

            <div>
                <h1>KenyanTimes</h1>
            </div>

<div className={styles.headeraccount}>
            <div className={styles.account}>
                <p>Create Account</p>
            </div>
            <div>
                    <Image src="/icon.svg" width={23} height={23} alt="icon"/>
                </div>
            <div className={styles.loginLink}>
                <p>Login</p>
            </div>
            </div>
        </div>
        </div>

        <div className={styles.listItems}>
            <div className={styles.ListContent}>
            <div>
            <p>Home</p>
            </div>
            <div>
            <p>News</p>
            </div>
            <div>
            <p>Sports</p>
            </div>
            <div>
            <p>Business</p>
            </div>
            <div>
            <p>Life & Style</p>
            </div>
            <div>
            <p>Health</p>
            </div>
            <div>
            <p>Politics</p>
            </div>
            <div>
            <p>Entertainment</p>
            </div>
            <div>
            <p>Culture & Trends</p>
            </div>
            </div>

        </div>

        </div>

    )
}
export default Header