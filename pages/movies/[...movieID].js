import Seo from "@/component/Seo";
import { useRouter } from "next/router";

// 파일명에 [대괄호] 가 있으면, 대괄호 안의 문자열이 변수가 됨.
export default function MovieDetail({ params }) {
  const [title, id] = params.movieID || [];

  return (
    <div>
      <Seo title={title} />
      <h4>{title || "LOADING.."}</h4>
    </div>
  );
}

export function getStaticProps({ params }) {
  console.log("params", params);
  return {
    props: { params },
  };
}

export async function getStaticPaths() {
  return {
    paths: [], // 동적 경로가 없으므로 빈 배열로 설정
    fallback: "blocking", // 다른 경로로의 접근은 서버사이드에서 대기
  };
}
