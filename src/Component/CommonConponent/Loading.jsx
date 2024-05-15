import React from "react";
const Loading = ({ sortProductAll, className }) => {
  return (
    <>
      {[...new Array(sortProductAll).map((_, index) => index)].map((item) => (
        <div className={className} key={item}>
          <div class=" rounded-md  shadow">
            <div class="flex animate-pulse space-x-10">
              <div class="flex-1 space-y-10 py-1">
                <div class="h-[290px] rounded bg-slate-700"></div>
                <div class="space-y-10">
                  <div class="flex items-center justify-between  ">
                    <div class="  h-10 w-[50%] rounded bg-slate-700"></div>
                    <div class=" h-6 w-[30%] rounded bg-slate-700"></div>
                  </div>
                  <div class="h-6 w-[30%] rounded bg-slate-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Loading;
