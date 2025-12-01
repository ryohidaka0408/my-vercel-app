import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50 animate-pulse">
        Ryo Hidaka
      </h1>
    </div>
  );
};

export default Loader;