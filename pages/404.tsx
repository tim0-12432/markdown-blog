import Footer from '@/components/Footer';
import Head from '@/components/Head';
import Main from '@/components/Main';
import configuration from '@/config/configuration';
import React from 'react'

function Custom404() {
  return (
    <>
        <Head title={`404 - ${configuration.blogName}`} />
        <Main>
            <h1>404</h1>
            <h2>Not found!</h2>
        </Main>
        <Footer />
    </>
  )
}

export default Custom404;