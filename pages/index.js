import Head from "next/head"
import { Component } from 'react'
// import { attributes, react as HomeContent } from '../content/home.md';

import Landing from './Landing';
import Navbar from './Navbar';
import Skills from './Skills';

export default class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap" rel="stylesheet"></link>
        </Head>
        <Landing />
        <Navbar />
        <Skills />
      </>
    )
  }
}