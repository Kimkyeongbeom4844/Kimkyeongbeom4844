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
      <LinkList title="소개" />
      <LinkList
        title="프로젝트"
        list={["아이디어콘서트 채용페이지", "플레이콘 홈페이지"]}
      />
      <LinkList title="개인" />
      <LinkList title="댓글" />
    </ul>
  );
}
