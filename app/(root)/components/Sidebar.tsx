"use client";
import React from "react";
import style from "./Sidebar.module.css";
import clsx from "clsx";
import LinkList from "./LinkList";

export default function Sidebar() {
  return (
    <ul
      className={clsx(
        "absolute inset-y-0 right-0 bg-white p-5 flex flex-col gap-y-5",
        style["side_bar"]
      )}
    >
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
  );
}
