import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      {/* Head 안에 들어가는 것들은 Html Head와 같다 */}
      <title> {title} | Next Movies</title>
    </Head>
  );
}
