import { RootState } from "@/app/store";
import React, { useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { moveToId } from "../utils/header";
import { removeComponent } from "@/app/store/reducers/backdrop";
import tailwindconfig from "@/tailwind.config";
import clsx from "clsx";

export default function LinkList({
  title,
  list,
}: {
  title: string;
  list?: string[];
}) {
  const headerStore = useSelector((state: RootState) => state.header);
  const backdropStore = useSelector((state: RootState) => state.backdrop);

  const dispatch = useDispatch();

  const ulRef = useRef<HTMLUListElement>(null);

  function move({ id }: { id: string }) {
    moveToId({
      id,
      scrollMarginTop: headerStore.headerOffsetHeight,
    });
    dispatch(removeComponent());
  }

  useEffect(() => {
    if (ulRef.current !== null) {
      console.log(
        Number((tailwindconfig.theme as any).screens.lg.max.replace("px", ""))
      );
      console.log(window.innerWidth);
      if (
        window.innerWidth <=
        Number((tailwindconfig.theme as any).screens.lg.max.replace("px", ""))
      ) {
        ulRef.current.style.left = `-${ulRef.current.offsetWidth}px`;
      } else {
        ulRef.current.style.left = ``;
      }
    }
  }, [ulRef]);

  return (
    <li
      className="hover:bg-slate-100 group flex items-center text-sm relative py-2 px-3 cursor-pointer rounded-md gap-x-1"
      onClick={() => {
        if (list === undefined) {
          move({ id: title });
        }
      }}
    >
      {title}
      {list && (
        <>
          <IoIosArrowDown className="group-hover:rotate-180 lg:rotate-90 lg:group-hover:rotate-[270deg]" />
          <ul
            ref={ulRef}
            className={clsx(
              backdropStore.components.length === 0 ? "top-[100%]" : "top-0",
              "absolute left-0 w-max invisible group-hover:visible bg-white border rounded-md p-1 z-[1] lg:top-0 *:py-2 *:px-3"
            )}
          >
            {list.map((elem, index) => (
              <li
                key={index}
                className="hover:bg-slate-100"
                onClick={() => {
                  move({ id: elem });
                }}
              >
                {elem}
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
}
