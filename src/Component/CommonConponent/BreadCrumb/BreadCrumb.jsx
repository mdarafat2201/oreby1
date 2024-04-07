import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

const BreadCrumd = () => {
  const location = useLocation();
  let BreadCrumdpathName = location.pathname.split("/").filter((x) => x);
  let BreadCrumdList = "";

  return (
    <>
      <div>
        <ul className="flex items-center gap-3">
          <li>
            <Link
              to={"/"}
              className="bg-blue-400 px-4 py-1 rounded-md text-main_font_color hover:bg-green-400"
            >
              Home
            </Link>
          </li>

          <FaAngleRight />

          {BreadCrumdpathName.map((path, index) => {
            const isLast = index === BreadCrumdpathName.length - 1;
            BreadCrumdList += path;
            return (
              <li key={path}>
                {isLast ? (
                  <Link
                    className={`${
                      isLast
                        ? "bg-green-400 px-4 py-1 rounded-md text-main_font_color hover:bg-blue-400"
                        : null
                    }`}
                  >
                    {path}
                  </Link>
                ) : (
                  <Link
                    to={`/${BreadCrumdList}`}
                    className={`${
                      isLast
                        ? "bg-green-400 px-4 py-1 rounded-md text-main_font_color hover:bg-blue-400"
                        : null
                    }`}
                  >
                    {path}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BreadCrumd;
