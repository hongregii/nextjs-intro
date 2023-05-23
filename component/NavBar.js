import Link from "next/link";
import { useRouter } from "next/router";
import stylez from "./NavBar.module.css";
import Image from "next/image";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    // css module은 classname="nav" 해도 안됨.
    // 동적 클래스명 생성해주기 때문임. 다른 컴포넌트에서도 "nav"라는 클래스명 사용할수있게
    <nav className={stylez.nav}>
      <Image src="/vercel.svg" width="100" height="100" alt="logo" />
      {/* public 안에 있으면 src 알아서 찾아감. Image를 쓰라는데 로컬, 원격 이미지 찾기 어려워질 수 있다고 함 */}
      <div>
        <Link className={router.pathname === "/" ? stylez.active : ""} href="/">
          Home
        </Link>
        <Link
          className={router.pathname === "/click" ? stylez.active : ""}
          href="/click"
        >
          Click
        </Link>
      </div>
      <style jsx>{`
        // 백틱을 열어야 함. Styles JSX
        // style jsx global 추가하면 글로벌 스타일 적용. 그래도 그렇게 안하는게 좋음. 컴포넌트단위로 북붙해야할수도
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}
