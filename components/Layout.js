import React from 'react'
import Head from 'next/head'
import Header from './Header'



const Layout = ({title, description, children}) =>{

    return (
        <div>
         <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="relative min-h-screen bg-primary-light font-montserrat dark:bg-gray-900 dark:text-white">
            <div className=" z-10 px-3 overflow-hidden w-full h-full">
                <Header/>
                 {children}
            </div>
           
        </div>
                
        </div>
    )
}

export default Layout