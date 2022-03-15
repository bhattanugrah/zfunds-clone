import react from "react";
import Head from "next/head";
import navStyles from "../../styles/nav.module.css"
import Image from "next/head"
import { useState } from "react";

const Nav = () =>{

    const [active, setActive] = useState(false);

    const hamburger = () =>{
        if(active===false){
            setActive(true)
        }
        else{
            setActive(false)
        }
    }

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
                        {/* <Image src="/logo.png" alt="logo" height={500} width={500}/> */}
                        <img src="/logo.png" />
                    </div>
                    <div className={navStyles.menu}>
                        <a className="px-3">Experts</a>
                        <a className="px-3">How we Work!</a>
                        <a className="px-3"><button className={navStyles.expertBtn}>Portfolio Login</button></a>
                    </div>
                    <div className={navStyles.hamburger} onClick={hamburger}>
                        <a><i className="bi bi-list"></i></a>
                    </div>
                </div>
                <div className={active?`d-block py-5  ${navStyles.sideBarContainer} `:`${navStyles.hiddenContainer}`}>
                    <div className={`${navStyles.sideMenu}`}>
                        <ul>
                            <li>
                                <a>Experts</a>
                            </li>
                            <li>
                                <a>How we Work!</a>
                            </li>
                            <li>
                                <a><button className={navStyles.expertBtn}>Portfolio Login</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
