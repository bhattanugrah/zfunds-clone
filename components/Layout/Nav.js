import react from "react";
import Head from "next/head";
import navStyles from "../../styles/nav.module.css"
import Image from "next/head"
import { useState } from "react";
import { PortfolioModal } from "../PortfolioModal";

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
                        <a className="px-3"><button className={navStyles.expertBtn} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Portfolio Login</button></a>
                    </div>
                    <div className={navStyles.hamburger}>
                        <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><i className="bi bi-list"></i></a>
                    </div>
                </div>
                {/* <div className={active?`d-block py-5  ${navStyles.sideBarContainer} `:`${navStyles.hiddenContainer}`}>
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
                </div> */}
                <nav>
                    <div className={`container-fluid justify-content-end ${navStyles.deskHide}`}>   
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header justify-content-end">
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className={`offcanvas-body ${navStyles.sideMenuContainer}`}>
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className={`nav-item ${navStyles.sideMenuItem}`}>
                                        <a className={`nav-link active ${navStyles.sideMenuLink}`} aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className={`nav-item ${navStyles.sideMenuItem}`}>
                                        <a className={`nav-link ${navStyles.sideMenuLink}`} href="#">Experts</a>
                                    </li>
                                    <li className={`nav-item ${navStyles.sideMenuItem}`}>
                                        <a className={`nav-link ${navStyles.sideMenuLink}`} href="#">How we work</a>
                                    </li>
                                    <li className={`nav-item ${navStyles.sideMenuItem}`}>
                                        {/* <a className={`nav-link  ${navStyles.sideMenuLink}`} href="#">Link</a> */}
                                        <a><button className={navStyles.expertBtn}>Portfolio Login</button></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
            <PortfolioModal/>
        </>
    )
}

export default Nav;
