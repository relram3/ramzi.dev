import Head from 'next/head';
import { Component } from 'react';
import { attributes, react as HomeContent} from '../content/home.md';

class Index extends Component {
  render(){
    let {title, cats} = attributes;
    console.log(attributes, cats);
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {
              cats.map((cat, k) => (
                <li key={k}>
                  <h2>{cat.name}</h2>
                  <p>{cat.description}</p>
                </li>
              ))
            }
          </ul>
        </article>
      </>
    )
  }
}

export default Index;