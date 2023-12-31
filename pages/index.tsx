'use client'

import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import {Button} from "antd";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <h1>Hello</h1>
                <Button type="primary"><Link href={'dashboard/auth'}>Getting start</Link></Button>
            </main>
        </>
    );
}
