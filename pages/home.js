import react from "react";
import Nav from "../components/Layout/Nav";
import Head from "next/head";
import styles from "../styles/Home.module.css"

const Home = () => {
    return ( 
        <div>
            <Head>
                <title>
                    ZFunds - Sahi.Asaan
                </title>
                <link rel="icon" href="/favicon-zf.ico" />
            </Head>
            <Nav />
            <div className={styles.container}>
                <h1 className="d-flex justify-content-center">
                    This is a Home Page!
                </h1>
            </div>
        </div>
    )
}

export default Home;