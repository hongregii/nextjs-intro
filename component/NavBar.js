import Link from "next/link";
import { useRouter } from "next/router";
import stylez from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    // css module은 classname="nav" 해도 안됨.
    // 동적 클래스명 생성해주기 때문임. 다른 컴포넌트에서도 "nav"라는 클래스명 사용할수있게
    <nav className={stylez.nav}>
      <Link className={router.pathname === "/" ? stylez.active : ""} href="/">
        Home
      </Link>
      <Link
        className={router.pathname === "/click" ? stylez.active : ""}
        href="/click"
      >
        Click
      </Link>
      <style jsx>{`
        // 백틱을 열어야 함. Styles JSX
        // style jsx global 추가하면 글로벌 스타일 적용. 그래도 그렇게 안하는게 좋음. 컴포넌트단위로 북붙해야할수도
        nav {
          background-color: whitesmoke;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: "blue";
        }
      `}</style>
    </nav>
  );
}
