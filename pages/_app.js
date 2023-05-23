// _app.js 라는 이름은 예약어임. blueprint 역할을 함.
// 모든 라우트에서 pages 안에 있는 컴포넌트를 이 함수의 Component 인자로 넣어줌. 마치 react-router v6 의 Outlet
// 여기서만 styles/globals.css 임포트 가능
// 일반 컴포넌트에서는 ~~.module.css 만 임포트할 수 있음.

import NavBar from "@/component/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <span>_app.js</span>
    </div>
  );
}
