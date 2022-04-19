import Footer from '@/components/Footer';
import Head from '@/components/Head';
import Main from '@/components/Main';
import configuration from '@/config/configuration';
import React from 'react'

function Custom500() {
  return (
    <>
        <Head title={`500 - ${configuration.blogName}`} />
        <Main>
            <h1>500</h1>
            <h2>Internal Server Error!</h2>
        </Main>
        <Footer />
    </>
  )
}

export default Custom500;