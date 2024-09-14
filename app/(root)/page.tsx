"use client";
import Image from "next/image";
import LogoImage from "@/app/assets/logo.png";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setheaderOffsetHeight } from "../store/reducers/header";
import LinkList from "./components/LinkList";
import { moveToSection } from "./utils/header";
import styles from "./page.module.css";
import kbJeans from "@/app/assets/kbJeans.png";
import ideaconcertLogo from "@/app/assets/ideaconcertpng.png";
import playconLogo from "@/app/assets/playcon.png";
import futureScienTechLogo from "@/app/assets/futureScienTech.png";
import kantarKoreaLogo from "@/app/assets/kantarKorea.png";
import mintmediaLogo from "@/app/assets/mintmedia.png";
import fanslikeLogo from "@/app/assets/fanslike.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { addComponent, removeComponent } from "../store/reducers/backdrop";

export default function Home() {
  const dispatch = useDispatch();

  const headerRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    /**
     * 스크롤이 헤더의 offsetHeight보다 높을 때 border를 온오프하는 useEffect
     * @author kyeongbeom
     */
    function windowScrollEvent() {
      if (headerRef.current !== null) {
        if (window.scrollY >= headerRef.current.offsetHeight) {
          headerRef.current.classList.add("border-b");
        } else {
          headerRef.current.classList.remove("border-b");
        }
      }
    }
    window.addEventListener("scroll", windowScrollEvent);

    return () => {
      window.removeEventListener("scroll", windowScrollEvent);
    };
  }, []);

  /**
   * 헤더의 offsetHeight의 값을 headerStore에 저장하는 useEffect
   * @author kyeongbeom
   */
  useEffect(() => {
    if (headerRef.current !== null) {
      dispatch(setheaderOffsetHeight(headerRef.current.offsetHeight));
    }
  }, [headerRef]);

  useEffect(() => {
    if (mainRef.current !== null) {
      /**
       * section태그에 IntersectionObserver 효과 추가
       * @author kyeongbeom
       */
      const intersectionObserver = new IntersectionObserver(function (entries) {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting === true) {
            entries[i].target.classList.add(styles["show"]);
          } else {
            entries[i].target.classList.remove(styles["show"]);
          }
        }
      });

      for (let i = 0; i < mainRef.current.children.length; i++) {
        intersectionObserver.observe(mainRef.current.children[i]);
      }
    }
  }, [mainRef]);

  function openNewTab({
    href,
    target = "_blank",
  }: {
    href: string;
    target?: string;
  }) {
    const $a = document.createElement("a");
    $a.href = href;
    $a.target = target;
    $a.click();
  }

  return (
    <div className="flex flex-col">
      <header
        ref={headerRef}
        className="flex items-center justify-between sticky top-0 bg-white py-5 mx-5 z-[1]"
      >
        <div className="flex items-center gap-x-7">
          <div
            className="flex items-center gap-x-1 cursor-pointer"
            onClick={() =>
              moveToSection({
                id: "소개",
                scrollMarginTop: headerRef.current?.offsetHeight as number,
              })
            }
          >
            <Image src={LogoImage} alt="kyeongbeom" width={30} />
            <p className="font-bold text-lg">Kyeongbeom</p>
          </div>
          <ul className="flex *:py-1 *:px-2 *:cursor-pointer *:rounded-md *:flex *:items-center *:gap-x-1 lg:hidden">
            <LinkList title="소개" />
            <LinkList title="프로젝트" />
            <LinkList title="개인" />
            <LinkList title="댓글" />
          </ul>
        </div>
        <ul className="flex lg:hidden">
          <li
            className={styles["red_button"]}
            onClick={() =>
              openNewTab({
                href: "https://github.com/Kimkyeongbeom4844",
              })
            }
          >
            Github 방문하기
          </li>
        </ul>
        <RxHamburgerMenu
          className="hidden lg:flex cursor-pointer"
          size={25}
          onClick={() =>
            dispatch(addComponent(import("@/app/(root)/components/Sidebar")))
          }
        />
      </header>
      <main ref={mainRef} className="container *:min-h-[100vh] *:opacity-0">
        <section id="소개" className="pt-24">
          <div className="flex gap-5 lg:flex-col-reverse items-center justify-between">
            <div className="flex basis-1/2">
              <div className="flex flex-col gap-y-5 items-start lg:items-center lg:text-center">
                <h2 className="text-4xl font-bold text-balance">
                  모든 팀을 위한 경범의 포트폴리오
                </h2>
                <p>
                  <strong>Kyeongbeom</strong>은 단순한 개발자가 아닙니다. 팀
                  스타일에 맞게 커스텀해서 사용하세요
                </p>
                <button
                  className={styles["red_button"]}
                  onClick={() =>
                    openNewTab({
                      href: "https://github.com/Kimkyeongbeom4844",
                    })
                  }
                >
                  Github 방문하기
                </button>
                <p className="text-xs">Kyeongbeom에게 도움받은 파트너</p>
                <ul className="flex *:basis-1/4 self-stretch lg:justify-center items-center gap-5 flex-wrap *:flex *:justify-center">
                  <li>
                    <Image
                      src={ideaconcertLogo}
                      alt="(주)아이디어콘서트"
                      title="(주)아이디어콘서트"
                      className="cursor-pointer"
                      onClick={() =>
                        openNewTab({
                          href: "https://ideaconcert.com/",
                        })
                      }
                    />
                  </li>
                  <li>
                    <Image
                      src={playconLogo}
                      alt="(주)플레이콘"
                      title="(주)플레이콘"
                      className="cursor-pointer"
                      onClick={() =>
                        openNewTab({
                          href: "https://playcon.kr/",
                        })
                      }
                    />
                  </li>
                  <li>
                    <Image
                      src={futureScienTechLogo}
                      alt="(주)퓨처사이언테크"
                      title="(주)퓨처사이언테크"
                      className="cursor-pointer"
                      onClick={() =>
                        openNewTab({
                          href: "https://futurescientech.com/",
                        })
                      }
                    />
                  </li>
                  <li>
                    <Image
                      src={kantarKoreaLogo}
                      alt="(주)칸타코리아"
                      title="(주)칸타코리아"
                      className="cursor-pointer"
                      onClick={() =>
                        openNewTab({
                          href: "https://www.kantar.co.kr/",
                        })
                      }
                    />
                  </li>
                  <li>
                    <Image
                      src={mintmediaLogo}
                      alt="(주)민트미디어"
                      title="(주)민트미디어"
                      className="cursor-pointer"
                      onClick={() =>
                        openNewTab({
                          href: "https://mintmedia.co.kr/",
                        })
                      }
                    />
                  </li>
                  <li>
                    <Image
                      src={fanslikeLogo}
                      alt="(주)팬즈라이크"
                      title="(주)팬즈라이크"
                      className="cursor-pointer"
                      onClick={() =>
                        openNewTab({
                          href: "https://fanslike.io/",
                        })
                      }
                    />
                  </li>
                </ul>
              </div>
            </div>
            <Image src={kbJeans} alt="경범진스" />
          </div>
        </section>
        <section id="프로젝트" className="bg-green-200">
          <article>1</article>
          <article>1</article>
          <article>1</article>
        </section>
        <section id="개인" className="bg-green-300 ">
          개인
        </section>
        <section id="댓글" className="bg-green-400">
          댓글
        </section>
      </main>
      <footer className="border-t">
        <div className="container">푸터</div>
      </footer>
    </div>
  );
}
