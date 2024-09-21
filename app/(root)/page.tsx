"use client";
import Image from "next/image";
import LogoImage from "@/app/assets/logo.png";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setheaderOffsetHeight } from "../store/reducers/header";
import LinkList from "./components/LinkList";
import { moveToId } from "./utils/header";
import styles from "./page.module.css";
import kbJeans from "@/app/assets/kbJeans.png";
import ideaconcertLogo from "@/app/assets/ideaconcertpng.png";
import playconLogo from "@/app/assets/playcon.png";
import futureScienTechLogo from "@/app/assets/futureScienTech.png";
import kantarKoreaLogo from "@/app/assets/kantarKorea.png";
import mintmediaLogo from "@/app/assets/mintmedia.png";
import fanslikeLogo from "@/app/assets/fanslike.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { addComponent } from "../store/reducers/backdrop";
import playconProject from "@/app/assets/playcon_project.png";
import ideaconcertProject from "@/app/assets/ideaconcert_project.png";
import futureScienTechProject from "@/app/assets/futureScienTech_project.png";
import voicepickProject from "@/app/assets/voicepick_project.png";
import kantarKoreaProject from "@/app/assets/kantarKorea_project.png";
import imagetalkProject from "@/app/assets/imagetalk_project.png";
import { FaSquareGitlab, FaSquareGithub, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import toontraProject from "@/app/assets/toontra_project.png";

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
  }, [headerRef, dispatch]);

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
    target?: "_blank" | "_self" | "_parent" | "_top";
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
              moveToId({
                id: "메인",
                scrollMarginTop: headerRef.current?.offsetHeight as number,
              })
            }
          >
            <Image src={LogoImage} alt="kyeongbeom" width={30} />
            <p className="font-bold text-lg">Kyeongbeom</p>
          </div>
          <ul className="flex lg:hidden ">
            <LinkList
              title="프로젝트"
              list={[
                "아이디어콘서트 채용페이지",
                "플레이콘 홈페이지",
                "퓨처사이언테크 홈페이지 & 기술소개페이지",
                "보이스픽",
                "형태소분석기",
                "툰트라",
                "이미지톡",
              ]}
            />
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
      <main
        ref={mainRef}
        className="container *:opacity-0 flex flex-col gap-y-36 mb-36"
      >
        <section
          id="메인"
          className="min-h-screen flex lg:flex-col-reverse items-center justify-between lg:justify-around"
        >
          <div className="flex basis-1/2">
            <div className="flex flex-col gap-y-5 items-start lg:items-center lg:text-center">
              <h2 className="text-4xl font-bold text-balance">
                모든 팀을 위한 경범의 포트폴리오
              </h2>
              <p>
                <strong>Kyeongbeom</strong>은 딱딱한 개발자가 아닙니다. 팀
                스타일에 맞게 커스텀해서 사용하세요.
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
              <p className="text-xs">Kyeongbeom에게 도움받은 기업</p>
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
        </section>
        <section id="아이디어콘서트 채용페이지">
          <span className="bg-slate-100 py-1 px-2 rounded-md">프로젝트</span>
          <h2 className="text-4xl font-bold mt-3 mb-5">
            아이디어콘서트 채용페이지
          </h2>
          <div className="flex lg:flex-col gap-12 lg:gap-5">
            <Image
              className="basis-1/2 border rounded-md overflow-hidden"
              src={ideaconcertProject}
              alt="아이디어콘서트 채용페이지"
            />
            <code className="basis-1/2 overflow-auto self-stretch bg-slate-100 text-sm p-2 rounded-md *:my-2">
              <div className="!indent-0 !text-slate-400 !mb-5">
                {"// package.json"}
              </div>
              <div className="!indent-0 text-yellow-600">{"{"}</div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"name"`}</span> <span>:</span>
                <span className="text-green-600">{`"아이디어콘서트 홈페이지",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">
                  {`"Vue의 composition API와 setup문법 기반 다국어 채용페이지",`}
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Javascript",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Vue",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"vuex",`}</span>
                  <span className="ml-4">{`"vue-i18n",`}</span>
                  <span className="ml-4">{`"sanitize-html",`}</span>
                  <span className="ml-4">{`"aos"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://gitlab.com/ideaconcert-dev/employment_front",
                    })
                  }
                >{`"https://gitlab.com/ideaconcert-dev/employment_front",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://ideaconcert.art",
                    })
                  }
                >{`"https://ideaconcert.art",`}</span>
              </div>
              <div className="!indent-0 text-yellow-600">{"}"}</div>
            </code>
          </div>
        </section>
        <section id="플레이콘 홈페이지">
          <span className="bg-slate-100 py-1 px-2 rounded-md">프로젝트</span>
          <h2 className="text-4xl font-bold mt-3 mb-5">플레이콘 홈페이지</h2>
          <div className="flex lg:flex-col gap-12 lg:gap-5">
            <Image
              className="basis-1/2 border rounded-md overflow-hidden"
              src={playconProject}
              alt="플레이콘 홈페이지"
            />
            <code className="basis-1/2 overflow-auto self-stretch bg-slate-100 text-sm p-2 rounded-md *:my-2">
              <div className="!indent-0 !text-slate-400 !mb-5">
                {"// package.json"}
              </div>
              <div className="!indent-0 text-yellow-600">{"{"}</div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"name"`}</span> <span>:</span>
                <span className="text-green-600">{`"플레이콘 홈페이지",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">
                  {`"React와 kakaomap API를 사용하여 만든 반응형 홈페이지",`}
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Typescript",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"React",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"tailwindcss",`}</span>
                  <span className="ml-4">{`"react-hook-form",`}</span>
                  <span className="ml-4">{`"swiper",`}</span>
                  <span className="ml-4">{`"react-kakao-maps-sdk"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Api"`}</span> <span>:</span>
                <span className="text-green-600">{`"KakaoAPI",`}</span>
              </div>

              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://gitlab.com/ideaconcert-dev/playconweb",
                    })
                  }
                >{`"https://gitlab.com/ideaconcert-dev/playconweb",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://playcon.kr",
                    })
                  }
                >{`"https://playcon.kr"`}</span>
              </div>
              <div className="!indent-0 text-yellow-600">{"}"}</div>
            </code>
          </div>
        </section>
        <section id="퓨처사이언테크 홈페이지 & 기술소개페이지">
          <span className="bg-slate-100 py-1 px-2 rounded-md">프로젝트</span>
          <h2 className="text-4xl font-bold mt-3 mb-5">
            퓨처사이언테크 홈페이지 & 기술소개페이지
          </h2>
          <div className="flex lg:flex-col gap-12 lg:gap-5">
            <Image
              className="basis-1/2 border rounded-md overflow-hidden"
              src={futureScienTechProject}
              alt="퓨처사이언테크 홈페이지 & 기술소개페이지"
            />
            <code className="basis-1/2 overflow-auto self-stretch bg-slate-100 text-sm p-2 rounded-md *:my-2">
              <div className="!indent-0 !text-slate-400 !mb-5">
                {"// package.json"}
              </div>
              <div className="!indent-0 text-yellow-600">{"{"}</div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"name"`}</span> <span>:</span>
                <span className="text-green-600">{`"퓨처사이언테크 홈페이지 & 기술소개페이지",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Next.js와 redux를 사용하여 제작한 홈페이지",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Typescript",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Next",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"tailwindcss",`}</span>
                  <span className="ml-4">{`"@reduxjs/toolkit"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"CI / CD"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"gitlab-ci",`}</span>
                  <span className="ml-4">{`"docker"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>

              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span
                    className="text-green-600 hover:font-bold cursor-pointer hover:underline ml-4"
                    onClick={() =>
                      openNewTab({
                        href: "https://gitlab.com/ideaconcert-dev/futurescience",
                      })
                    }
                  >{`"https://gitlab.com/ideaconcert-dev/futurescience",`}</span>
                  <span
                    className="text-green-600 hover:font-bold cursor-pointer hover:underline ml-4"
                    onClick={() =>
                      openNewTab({
                        href: "https://gitlab.com/ideaconcert-dev/idea-tech-next",
                      })
                    }
                  >{`"https://gitlab.com/ideaconcert-dev/idea-tech-next"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span
                    className="text-green-600 hover:font-bold cursor-pointer hover:underline ml-4"
                    onClick={() =>
                      openNewTab({
                        href: "https://futurescientech.com",
                      })
                    }
                  >{`"https://futurescientech.com",`}</span>
                  <span
                    className="text-green-600 hover:font-bold cursor-pointer hover:underline ml-4"
                    onClick={() =>
                      openNewTab({
                        href: "https://tech.futurescientech.com",
                      })
                    }
                  >{`"https://tech.futurescientech.com"`}</span>
                  <span>{"]"}</span>
                </span>
              </div>
              <div className="!indent-0 text-yellow-600">{"}"}</div>
            </code>
          </div>
        </section>
        <section id="보이스픽">
          <span className="bg-slate-100 py-1 px-2 rounded-md">프로젝트</span>
          <h2 className="text-4xl font-bold mt-3 mb-5">보이스픽</h2>
          <div className="flex lg:flex-col gap-12 lg:gap-5">
            <Image
              className="basis-1/2 border rounded-md overflow-hidden"
              src={voicepickProject}
              alt="보이스픽"
            />
            <code className="basis-1/2 overflow-auto self-stretch bg-slate-100 text-sm p-2 rounded-md *:my-2">
              <div className="!indent-0 !text-slate-400 !mb-5">
                {"// package.json"}
              </div>
              <div className="!indent-0 text-yellow-600">{"{"}</div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"name"`}</span> <span>:</span>
                <span className="text-green-600">{`"보이스픽",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"RTK Query를 활용한 응답데이터 캐싱을 적용한 React기반 프로젝트",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Javascript",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"React",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"swiper",`}</span>
                  <span className="ml-4">{`"@reduxjs/toolkit"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"CI / CD"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"gitlab-ci",`}</span>
                  <span className="ml-4">{`"docker"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://gitlab.com/ideaconcert-dev/mintmedia",
                    })
                  }
                >{`"https://gitlab.com/ideaconcert-dev/mintmedia",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://voicepick.kr",
                    })
                  }
                >{`"https://voicepick.kr"`}</span>
              </div>
              <div className="!indent-0 text-yellow-600">{"}"}</div>
            </code>
          </div>
        </section>
        <section id="형태소분석기">
          <span className="bg-slate-100 py-1 px-2 rounded-md">프로젝트</span>
          <h2 className="text-4xl font-bold mt-3 mb-5">형태소분석기</h2>
          <div className="flex lg:flex-col gap-12 lg:gap-5">
            <Image
              className="basis-1/2 border rounded-md overflow-hidden"
              src={kantarKoreaProject}
              alt="형태소분석기"
            />
            <code className="basis-1/2 overflow-auto self-stretch bg-slate-100 text-sm p-2 rounded-md *:my-2">
              <div className="!indent-0 !text-slate-400 !mb-5">
                {"// package.json"}
              </div>
              <div className="!indent-0 text-yellow-600">{"{"}</div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"name"`}</span> <span>:</span>
                <span className="text-green-600">{`"형태소분석기",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"기존 jQuery로 구현되있는 react프로젝트 유지보수 및 형태소분석기 기능 고도화",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Javascript",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"React",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"jquery",`}</span>
                  <span className="ml-4">{`"read-excel-file",`}</span>
                  <span className="ml-4">{`"generate-csv-from-array",`}</span>
                  <span className="ml-4">{`"react-wordcloud"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://github.com/Kimkyeongbeom4844/kantar_KTA",
                    })
                  }
                >{`"https://github.com/Kimkyeongbeom4844/kantar_KTA",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://www.k-textanalyzer.co.kr",
                    })
                  }
                >{`"https://www.k-textanalyzer.co.kr"`}</span>
              </div>
              <div className="!indent-0 text-yellow-600">{"}"}</div>
            </code>
          </div>
        </section>
        <section id="툰트라">
          <span className="bg-slate-100 py-1 px-2 rounded-md">프로젝트</span>
          <h2 className="text-4xl font-bold mt-3 mb-5">툰트라</h2>
          <div className="flex lg:flex-col gap-12 lg:gap-5">
            <Image
              className="basis-1/2 border rounded-md overflow-hidden"
              src={toontraProject}
              alt="툰트라"
            />
            <code className="basis-1/2 overflow-auto self-stretch bg-slate-100 text-sm p-2 rounded-md *:my-2">
              <div className="!indent-0 !text-slate-400 !mb-5">
                {"// package.json"}
              </div>
              <div className="!indent-0 text-yellow-600">{"{"}</div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"name"`}</span> <span>:</span>
                <span className="text-green-600">{`"툰트라",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"웹툰 파일 업로드 시 말풍선 내 텍스트 인식 및 자동번역 후 보정작업기능을 제공하는 툴",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Typescript",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Next",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"@webtoon/psd",`}</span>
                  <span className="ml-4">{`"@reduxjs/toolkit",`}</span>
                  <span className="ml-4">{`"@tanstack/react-query",`}</span>
                  <span className="ml-4">{`"konva",`}</span>
                  <span className="ml-4">{`"axios",`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"CI / CD"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"gitlab-ci",`}</span>
                  <span className="ml-4">{`"docker"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://gitlab.com/ideaconcert-dev/toontra-demo-next",
                    })
                  }
                >{`"https://gitlab.com/ideaconcert-dev/toontra-demo-next",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://demo.toontra.com",
                    })
                  }
                >{`"https://demo.toontra.com"`}</span>
              </div>
              <div className="!indent-0 text-yellow-600">{"}"}</div>
            </code>
          </div>
        </section>
        <section id="이미지톡">
          <span className="bg-slate-100 py-1 px-2 rounded-md">프로젝트</span>
          <h2 className="text-4xl font-bold mt-3 mb-5">이미지톡</h2>
          <div className="flex lg:flex-col gap-12 lg:gap-5">
            <Image
              className="basis-1/2 border rounded-md overflow-hidden"
              src={imagetalkProject}
              alt="이미지톡"
            />
            <code className="basis-1/2 overflow-auto self-stretch bg-slate-100 text-sm p-2 rounded-md *:my-2">
              <div className="!indent-0 !text-slate-400 !mb-5">
                {"// package.json"}
              </div>
              <div className="!indent-0 text-yellow-600">{"{"}</div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"name"`}</span> <span>:</span>
                <span className="text-green-600">{`"이미지톡",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"실시간적 요소에 필요한 websocket 및 webRTC, 그리고 firebase cloud message(FCM)기능을 도입한 vue기반의 메신저 웹서비스",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Javascript",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>
                <span>:</span>
                <span className="text-green-600">{`"Vue",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"["}</span>
                  <span className="ml-4">{`"@webtoon/psd",`}</span>
                  <span className="ml-4">{`"pinia",`}</span>
                  <span className="ml-4">{`"firebase",`}</span>
                  <span className="ml-4">{`"konva",`}</span>
                  <span className="ml-4">{`"axios",`}</span>
                  <span className="ml-4">{`"dayjs"`}</span>
                  <span>{"],"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://gitlab.com/ideaconcert-dev/toonmaker/-/tree/imagetalk?ref_type=heads",
                    })
                  }
                >{`"https://gitlab.com/ideaconcert-dev/toonmaker/-/tree/imagetalk?ref_type=heads",`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://imagetalk.kr",
                    })
                  }
                >{`"https://imagetalk.kr"`}</span>
              </div>
              <div className="!indent-0 text-yellow-600">{"}"}</div>
            </code>
          </div>
        </section>
        {/* <section id="개인" className="bg-green-300 ">
          개인
        </section>
        <section id="댓글" className="bg-green-400">
          댓글
        </section> */}
      </main>
      <footer className="border-t">
        <div className="container pt-10 pb-2">
          <ul className="text-sm flex flex-col gap-2 mb-10 *:flex *:gap-3 *:items-center select-text items-start">
            <li
              className="cursor-pointer"
              onClick={() =>
                openNewTab({
                  href: "https://github.com/Kimkyeongbeom4844",
                })
              }
            >
              <FaSquareGithub size={25} color="#050505" />
              <p>https://github.com/Kimkyeongbeom4844</p>
            </li>
            <li
              className="cursor-pointer"
              onClick={() =>
                openNewTab({
                  href: "https://gitlab.com/xops09685",
                })
              }
            >
              <FaSquareGitlab size={25} color="#050505" />
              <p>https://gitlab.com/xops09685</p>
            </li>
            <li
              className="cursor-pointer"
              onClick={() =>
                openNewTab({
                  href: "mailto:xops09685@gmail.com",
                  target: "_self",
                })
              }
            >
              <IoMailSharp size={25} color="#050505" />
              <p>xops09685@gmail.com</p>
            </li>
            <li
              className="cursor-pointer"
              onClick={() =>
                openNewTab({
                  href: "tel:01056894844",
                  target: "_self",
                })
              }
            >
              <FaPhone size={25} color="#050505" />
              <p>010-5689-4844</p>
            </li>
          </ul>
          <p className="text-xs">
            ©2024 kimkyeongbeom4844. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
