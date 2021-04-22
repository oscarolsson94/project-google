import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import { API_KEY, CONTEXT_KEY } from '../keys';

const Search = ({results}) => {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header />

            {/* Search Results */}
        </div>
    );
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${}&q=${context.query.term}`)
        .then(response => response.json());
    
    // After the server has rendered, pass the results to the client
    return {
        props: {
            results: data,
        }
    }
}
