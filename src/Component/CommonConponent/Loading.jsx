import React from "react";

const Loading = () => {
  return (
    <>
      <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-10  shadow">
        <div class="flex animate-pulse space-x-10">
          <div class="flex-1 space-y-10 py-1">
            <div class="h-2 rounded bg-slate-700"></div>
            <div class="space-y-10">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-slate-700"></div>
                <div class="col-span-1 h-2 rounded bg-slate-700"></div>
              </div>
              <div class="h-2 rounded bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
