"use client";
import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import dynamic from "next/dynamic";
import { removeComponent } from "../store/reducers/backdrop";

export default memo(function Backdrop() {
  const backdropStore = useSelector((state: RootState) => state.backdrop);
  const dispatch = useDispatch();

  useEffect(() => {
    function windowKeydownEvent(e: KeyboardEvent) {
      // console.log(e.key);
      if (e.key === "Escape") {
        dispatch(removeComponent());
      }
    }

    window.addEventListener("keyup", windowKeydownEvent);
    return () => {
      window.removeEventListener("keyup", windowKeydownEvent);
    };
  }, [dispatch]);

  return (
    <>
      {backdropStore.components.map((component, index) => {
        return (
          <div
            key={index}
            className="fixed inset-0 bg-[#00000033] flex justify-center items-center z-[1]"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                dispatch(removeComponent());
              }
            }}
          >
            {(() => {
              const Component = dynamic(() => component);
              return <Component />;
            })()}
          </div>
        );
      })}
    </>
  );
});
