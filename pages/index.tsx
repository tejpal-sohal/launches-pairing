import axios from 'axios';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Pagination from '../components/pagination';
import Hero from '../components/hero';
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
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />

      <main>
        <div className='album py-5 bg-light'>
          <div className='container-fluid'>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3'>
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


