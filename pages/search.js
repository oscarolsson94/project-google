import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

const Search = () => {
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
