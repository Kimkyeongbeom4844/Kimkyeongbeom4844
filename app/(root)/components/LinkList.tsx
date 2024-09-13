import { RootState } from "@/app/store";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { moveToSection } from "../utils/header";
import { useDispatch } from "react-redux";
import { removeComponent } from "@/app/store/reducers/backdrop";

export default function LinkList({ title }: { title: string }) {
  const headerStore = useSelector((state: RootState) => state.header);

  const dispatch = useDispatch();
  return (
    <li
      className="hover:bg-gray-100 cursor-pointer group flex items-center text-sm"
      onClick={() => {
        moveToSection({
          id: title,
          scrollMarginTop: headerStore.headerOffsetHeight,
        });
        dispatch(removeComponent());
      }}
    >
      {title}
      <IoIosArrowDown className="group-hover:rotate-180" />
    </li>
  );
}
