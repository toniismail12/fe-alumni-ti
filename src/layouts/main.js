import React from 'react'
import Header from "./header";
import Sidebar from "./sidebar";
import Head from 'next/head';

export default function Main({ children }) {

    return (
        <>

            <Head>
                <title>Alumni Teknologi Informasi</title>
                <meta charSet="utf-8" />
                <meta name="description" content="alumni teknologi informasi fakultas teknik universitas muhammadiyah palembang" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                ></meta>
                {/* <link rel="icon" href={FAVICON} /> */}
            </Head>

            <div className="">
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                    {/* Header */}
                    <Header />
                    {/* ./Header */}
                    {/* Sidebar */}
                    <Sidebar />
                    {/* ./Sidebar */}
                    
                    {children}

                </div>
            </div>

        </>
    )
}
