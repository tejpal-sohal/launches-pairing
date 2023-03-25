import axios from 'axios';
import Head from 'next/head';
import React, { useState, useEffect, Suspense } from 'react';
import Pagination from '../components/pagination';
const Hero = React.lazy(() => import('../components/hero'));
import Card from '../components/card';
import Footer from '../components/footer';

export default function Home() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const configFetch = {
    method: 'post',
    url: 'https://api.spacexdata.com/v5/launches/query',
    data: {
      options: {
        limit: 10,
        page: page,
        sort: 'asc',
      },
    },
  };

  const queryFunction = (page: any) => {
    axios(configFetch).then((res) => setData(res.data))
      .catch(
        function() {
          return {
            notfound: true,
          };
        },
      );
  };

  useEffect(() => {
    queryFunction(page);
  }, [page]);


  return (
    <div>
      <Head>
        <title>Welcome to my Next.js app!</title>
        <meta name='description' content='Space X' />
        <link rel='icon' href='/favicon.ico' />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap" rel="stylesheet"/>
      </Head>
        <Hero />
      <main>
        <div className='album py-5'>
          <div className='container-fluid'>
            <h1 className="mb-5 text-light text-center">STARSHIP LUNAR EXPLORATION</h1>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3'>
              {data ? (
                <>
                  {data.docs.map((item, k) => (
                    <Card key={k} item={item} />
                  ))}
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>

        <div className='container d-none d-lg-block'>
          {data ? (<Pagination totalPage={data.totalPages} setPage={setPage} page={page} />) : ('')}
        </div>

      </main>
      <Footer />
    </div>
  );
}


