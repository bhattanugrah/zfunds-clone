import react from "react";
import Head from "next/head";
import navStyles from "../../styles/nav.module.css"
import styles from "../../styles/Home.module.css"


const Nav = () =>{
    return(
        <>
            <div>
                <Head>
                    <title>ZFunds - Sahi.Asaan</title>
                </Head>
            </div>
            <nav>
                <div className={`nav mt-4 ${navStyles.nav} ${navStyles.navContainer}`}>
                    <div className={navStyles.logo}>
                        <img src="/logo.png" />
                    </div>
                    <div className={navStyles.menu}>
                        <a>Experts</a>
                        <a>How we Work!</a>
                        <a><button className={navStyles.expertBtn}>Portfolio Login</button></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
