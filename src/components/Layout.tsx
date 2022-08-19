import React, { Fragment, useState, ReactNode } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

type Props = {
  children: ReactNode;
  title?: string;
};

const navigation = [
  { name: "✨ Fiction", href: "#", icon: HomeIcon, current: false },
  { name: "🍲 Nutrition & Health", href: "#", icon: UsersIcon, current: false },
  { name: "🔬 Science", href: "#", icon: FolderIcon, current: false },
  { name: "📜 History", href: "#", icon: CalendarIcon, current: false },
  {
    name: "🚀 Motivation & Insperation",
    href: "#",
    icon: InboxIcon,
    current: false,
  },
  { name: "🔪 True Crime", href: "#", icon: ChartBarIcon, current: false },
  { name: "📰 Non Fiction", href: "#", icon: ChartBarIcon, current: false },
  { name: "💅 Self Help", href: "#", icon: ChartBarIcon, current: false },
  { name: "✨ Spirituality", href: "#", icon: ChartBarIcon, current: false },
  { name: "🚀 Science Fiction", href: "#", icon: ChartBarIcon, current: false },
  { name: "🖍️ Graphic Novel", href: "#", icon: ChartBarIcon, current: false },
  { name: "🦄 Fantasy", href: "#", icon: ChartBarIcon, current: false },
  {
    name: "🪄 Historical Fiction",
    href: "#",
    icon: ChartBarIcon,
    current: false,
  },
  { name: "🤣 Comedy", href: "#", icon: ChartBarIcon, current: false },
  {
    name: "🤑 Money & Investment",
    href: "#",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "❤️ Romance",
    href: "#",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "📚 Classic Literature",
    href: "#",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "🏀 Sports",
    href: "#",
    icon: ChartBarIcon,
    current: false,
  },
  {
    name: "✨ Magical Realism",
    href: "#",
    icon: ChartBarIcon,
    current: false,
  },
  { name: "✨ Fiction", href: "#", icon: HomeIcon, current: false },
  { name: "🍲 Nutrition & Health", href: "#", icon: UsersIcon, current: false },
  { name: "🔬 Science", href: "#", icon: FolderIcon, current: false },
  { name: "📜 History", href: "#", icon: CalendarIcon, current: false },
  {
    name: "🚀 Motivation & Insperation",
    href: "#",
    icon: InboxIcon,
    current: false,
  },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Layout = ({ children, title = "Search Google Books API" }: Props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="http://localhost:3000/litbookLogo.svg"
                      alt="Workflow"
                    />
                  </div>
                  {/* mobile nav */}
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-300"
                                : "text-gray-400 group-hover:text-gray-300",
                              "mr-4 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  {/* end mobile nav */}
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0">
            <div className="flex items-center h-16 flex-shrink-0 px-4 ">
              <img
                className="h-8 w-auto"
                src="http://localhost:3000/litbookLogo.svg"
                alt="Workflow"
              />
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex flex-row flex-wrap justify-around">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-900 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-xs font-medium rounded-md border-2 border-gray-900 bg-gray-100 rounded-full mb-4"
                    )}
                  >
                    {/* <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-2 flex-shrink-0 h-4 w-4"
                      )}
                      aria-hidden="true"
                    /> */}
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col">
          <div className="top-0 z-10 flex-shrink-0 flex h-16">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="flex-1">
            <div className="">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Search Bar */}
                <div className="flex-1 px-4 h-14 flex justify-between bg-[#FFE398] border-2 border-gray-900 rounded-lg mb-12">
                  <div className="flex-1 flex">
                    <form
                      className="w-full flex md:ml-0"
                      action="#"
                      method="GET"
                    >
                      <label
                        htmlFor="search-field"
                        className="sr-only text-gray-900"
                      >
                        Search
                      </label>
                      <div className="relative w-full text-gray-900 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none ">
                          <SearchIcon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <input
                          id="search-field"
                          className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-900 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm bg-[#FFE398]"
                          placeholder="Search"
                          type="search"
                          name="search"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End Search Bar */}
                <h1 className="text-2xl font-semibold">Popular on Tiktok</h1>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Book Content */}
                <div className="py-4">
                  <div className="h-96">{children}</div>
                </div>
                {/* End Book Content */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
