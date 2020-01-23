import { useRouter } from 'next/router';
import useSWR from 'swr';

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

export default function Index() {
  const { query } = useRouter();
  const { data, error } = useSWR(
    `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
    fetcher
  );
  // The following line has optional chaining, added in Next.js v9.1.5,
  // is the same as `data && data.author`
  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = 'Loading...';
  if (error) quote = 'Failed to fetch the quote.';

  return (
    <main className="center">
      <div className="quote">{quote}</div>

      <style jsx>{`
        main {
          width: 90%;
          max-width: 900px;
          margin: 350px auto;
          text-align: center;    
          background: rgb(255, 255, 255, 0.1);    
          border-radius: 25px;   

        }
        .quote {
          font-family: Tohoma ;
          color: #ffe000;
          font-size: 45px;
          padding-bottom: 10px;
          border-radius: 10px;   
          background: rgba(255, 255, 255, 0.5); 
          -webkit-text-stroke: 1px black;
        }
        .author {
          font-family: Tohoma ;
          color: #559834;
          font-size: 20px;
        }
      `}</style>      
      <style jsx global>{`
      body {
        background-image: url('../background.png');
        overflow: hidden;
      }
    `}</style>
    </main>
  );
}