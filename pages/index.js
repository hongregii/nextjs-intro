import Seo from "@/component/Seo";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ results }) {
  const router = useRouter();

  const onClickMovie = (id, title) => {
    router.push(
      {
        // router.push는 url을 객체로 줄 수도 있음.
        pathname: `/movies/${title}/${id}`,
        query: {
          id: id,
          title: title,
        },
      },
      `/movies/${title}/${id}` // as. 이대로 url이 마스킹 된다.
    );
  };

  return (
    <>
      <Seo title="Home" />
      <h1>Movies</h1>
      <div className="container">
        {results == [] ? (
          <h4>loading..</h4>
        ) : (
          results?.map((movie) => {
            return (
              <div
                className="movie"
                key={movie.id}
                onClick={() => onClickMovie(movie.id, movie.title)}
              >
                {/* <Link href={`/movies/${movie.id}`} key={movie.id}> */}
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                />
                {/* </Link> */}
                <h4>{movie?.original_title}</h4>
              </div>
            );
          })
        )}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            cursor: pointer;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // 함수이름은 예약어다!
  // 이 코드는 서버에서 작동함. 여기서 API KEY 써도 됨. 클라단에서 안보임
  // props가 Key인 object를 리턴함.
  // 이 object가 _app.js의 ...pageProps에 들어감. 그건 다시 위에 {results}에 들어감

  const res = await axios.get("http://localhost:3000/api/movies");
  const { results } = res.data;
  return {
    props: {
      results,
    },
  };
}
