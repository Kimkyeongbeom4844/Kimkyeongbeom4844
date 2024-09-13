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
import toontraLogo from "@/app/assets/toontra.png";
import voicePickLogo from "@/app/assets/voicepick.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { addComponent } from "../store/reducers/backdrop";

export default function Home() {
  const dispatch = useDispatch();

  const headerRef = useRef<HTMLElement>(null);

  /**
   * 헤더의 offsetHeight의 값을 headerStore에 저장하는 useEffect
   * @author kyeongbeom
   */
  useEffect(() => {
    if (headerRef.current !== null) {
      dispatch(setheaderOffsetHeight(headerRef.current.offsetHeight));
    }
  }, [headerRef]);

  /**
   * 스크롤이 헤더의 offsetHeight보다 높을 때 border를 온오프하는 useEffect
   * @author kyeongbeom
   */
  useEffect(() => {
    function windowScrollEvent(e: Event) {
      if (headerRef.current !== null) {
        if (window.scrollY >= headerRef.current.offsetHeight) {
          headerRef.current.style.borderBottom = "1px solid rgba(0,0,0,0.1)";
        } else {
          headerRef.current.style.borderBottom = "";
        }
      }
    }
    window.addEventListener("scroll", windowScrollEvent);
    return () => {
      window.removeEventListener("scroll", windowScrollEvent);
    };
  }, []);

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
        className="flex items-center justify-between sticky top-0 bg-white py-5 mx-5"
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
      <main className="container *:mb-12">
        <section id="소개">
          <div className="flex gap-5 lg:flex-col-reverse items-center justify-between">
            <div className="flex basis-1/2">
              <div className="flex flex-col gap-y-5 items-start lg:items-center lg:text-center">
                <h2 className="text-4xl font-bold text-balance">
                  모든 팀을 위한 경범의 워크스페이스
                </h2>
                <p>
                  <strong>Kyeongbeom</strong>은 단순한 워드프로세서가 아닙니다.
                  내 스타일에 맞게 커스텀해서 사용하세요
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
                <p className="text-xs">Kyeongbeom을 사용하는 파트너</p>
                <ul className="flex *:basis-1/4 self-stretch lg:justify-center items-center gap-5 flex-wrap">
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
        <section id="프로젝트" className="bg-green-200 h-[100vh]">
          프로젝트
        </section>
        <section id="개인" className="bg-green-300  h-[100vh]">
          개인
        </section>
        <section id="댓글" className="bg-green-400  h-[100vh]">
          댓글
        </section>
      </main>
      <footer className="border-t">
        <div className="container">푸터</div>
      </footer>
    </div>
  );
}
