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
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="mhndsbgyn" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FF5F5F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
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