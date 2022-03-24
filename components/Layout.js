import Head from 'next/head'
import Footer from "./Footer"
import Navbar from "./Navbar"
export default function Layout(props) {
  return (
    <>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    {props.children}
    <Footer />
    </>
  )
}
