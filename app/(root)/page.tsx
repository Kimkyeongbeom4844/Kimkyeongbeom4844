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
              moveToId({
                id: "소개",
                scrollMarginTop: headerRef.current?.offsetHeight as number,
              })
            }
          >
            <Image src={LogoImage} alt="kyeongbeom" width={30} />
            <p className="font-bold text-lg">Kyeongbeom</p>
          </div>
          <ul className="flex lg:hidden ">
            <LinkList title="소개" />
            <LinkList
              title="프로젝트"
              list={["아이디어콘서트 채용페이지", "플레이콘 홈페이지"]}
            />
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
      <main
        ref={mainRef}
        className="container *:opacity-0 flex flex-col gap-y-36"
      >
        <section
          id="소개"
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
                <span className="text-green-600">{`"아이디어콘서트 홈페이지"`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">
                  {`"이 프로젝트는 디자인 시안 없이 퍼블리싱이 완료된 상태로 나와 기능적으로만 살을 붙이기만 하면 되었던 프토젝트였습니다. 저는 처음에 react를 써서 진행을하려고 했었는데 당시 팀장님께서 vue를 사용하면 react랑 다르게 html 부분을 수정할 필요 없이 전부 복사해서 붙여넣기만 해도 된다며 vue를 쓰는게 해당 프로젝트에 맞는것 같다며 vue로 세팅해서 진행하라고 말씀주셨습니다. 마침 사내에 vite기반 vue 보일러플레이트가 마련되어 있어 해당 레포지토리의 코드를 기반으로 진행했습니다. vue를 사용해보지는 않았지만, react와 비슷하면서도 오히려 state선언 및 변경, 상태감지 등의 부분이 react보다 쉬웠다는 느낌을 받아 빠르게 vue에 적응했습니다. 프로젝트가 거의 마무리 될때쯤 대표님께서 국내에 거주하는 웹툰작가들 뿐만이 아닌 해외웹툰작가도 모집을 하고 싶다고 언급을 하셔서 vue에서 지원하는 vue-18n을 이용하여 다국어 작업을 진행하였습니다. 해당 작업을 위해 페이지 오른쪽 상단부분에 language 셀렉트 버튼을 추가적으로 작업하였습니다. 또한 전역적으로 유저가 고른 언어셋으로 나타나야되서 vue의 상태관리 라이브러리인 vuex를 도입하여 i18n 다국어 작업 맟 스피너 등 전역적으로 필요한 상태관리를 처리하였습니다."`}
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>{" "}
                <span>:</span>
                <span className="text-green-600">{`"Javascript"`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>{" "}
                <span>:</span>
                <span className="text-green-600">{`"Vue"`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>{" "}
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"{"}</span>
                  <span className="ml-4">{`"vuex",`}</span>
                  <span className="ml-4">{`"vue-i18n",`}</span>
                  <span className="ml-4">{`"sanitize-html",`}</span>
                  <span className="ml-4">{`"aos",`}</span>
                  <span>{"}"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>{" "}
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://gitlab.com/ideaconcert-dev/employment_front",
                    })
                  }
                >{`"https://gitlab.com/ideaconcert-dev/employment_front"`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>{" "}
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://ideaconcert.art/",
                    })
                  }
                >{`"https://ideaconcert.art/"`}</span>
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
                <span className="text-green-600">{`"플레이콘 홈페이지"`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"description"`}</span>
                <span>:</span>
                <span className="text-green-600">
                  {`"웹툰제작 및 웹툰과 관련된 기술을 개발하는 회사, 플레이콘의 메인홈페이지 프론트엔드 파트를 전반적으로 맡아서 작업했습니다. 디자인 시안은 zeplin으로 제공이 되었고, 메인 페이지의 회사위치를 알려주는 지도를 나타내기 위해 kakao에서 제공하는 map API를 활용하여 표현하였고, 중간지점의 history섹션의 리스트를 자동적으로 좌우슬라이드 효과를 주기위하여 swiper라이브러리를 적용하였습니다. 또한 프로젝트의 전반적인 반응형breakpoint 설정을 tailwind.config.ts에서 설정하여 보다 효율적으로 반응형 웹을 구현하였습니다."`}
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Language"`}</span>{" "}
                <span>:</span>
                <span className="text-green-600">{`"Typescript"`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Framework"`}</span>{" "}
                <span>:</span>
                <span className="text-green-600">{`"React"`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Library"`}</span>{" "}
                <span>:</span>
                <span className="text-green-600 flex flex-col">
                  <span>{"{"}</span>
                  <span className="ml-4">{`"tailwindcss",`}</span>
                  <span className="ml-4">{`"react-hook-form",`}</span>
                  <span className="ml-4">{`"swiper",`}</span>
                  <span className="ml-4">{`"react-kakao-maps-sdk",`}</span>
                  <span>{"}"}</span>
                </span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Api"`}</span> <span>:</span>
                <span className="text-green-600">{`"KakaoAPI"`}</span>
              </div>

              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Repository"`}</span>{" "}
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://gitlab.com/ideaconcert-dev/playconweb",
                    })
                  }
                >{`"https://gitlab.com/ideaconcert-dev/playconweb"`}</span>
              </div>
              <div className="flex gap-2 ml-4">
                <span className="text-blue-400">{`"Domain"`}</span>{" "}
                <span>:</span>
                <span
                  className="text-green-600 hover:font-bold cursor-pointer hover:underline"
                  onClick={() =>
                    openNewTab({
                      href: "https://playcon.kr/",
                    })
                  }
                >{`"https://playcon.kr/"`}</span>
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
        <div className="container">푸터</div>
      </footer>
    </div>
  );
}
