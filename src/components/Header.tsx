import Link from "next/link";
import React, { ReactEventHandler, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <header className="top-0 sticky flex flex-auto  bg-blue-500 h-16">
          <div className="flex items-center text-4xl font-bold font-sans text-gray-50">
            <button onClick={handleClickOpen}>
              <img src="/shark.svg" className="h-12 w-12" />
            </button>
            変ないきもの水族館
          </div>
        </header>
        <aside
          id="default-sidebar"
          className={
            open
              ? `fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full translate-x-0`
              : `fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full `
          }
          aria-label="Sidebar"
        >
          <div className="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <div className="top-0 sticky flex justify-end bg-blue-500 h-16">
              <button onClick={handleClickClose}>
                <img src="/shark.svg" className="h-12 w-12" />
              </button>
            </div>
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">ホーム画面</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">料金</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    アクセスマップ
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    イベント情報
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    怪奇現象
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
