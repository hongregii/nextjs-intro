/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // redirecting! 짱이다. path parameters도 가능. 근데 사용자가 URL 바뀌는 거 볼 수 있음.
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    // redirecting 인데, url은 바뀌지 않는다. masks the url
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`, // path parameter는 : 사용
      },
    ];
  },
};

module.exports = nextConfig;
