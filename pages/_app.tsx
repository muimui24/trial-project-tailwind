import '../styles/globals.css'

import type { AppProps } from 'next/app'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'
import { Dialog, Popover, Tab } from '@headlessui/react'
import { SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline'
import { FaBars } from 'react-icons/fa'
import { SessionProvider } from 'next-auth/react'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/about', current: false },
  { name: 'Ebook', href: '/e-books', current: false },
  { name: 'Admin', href: '/admin', current: false },
]

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <SessionProvider session={session}>
      <div>
        <div className="bg-white">
          {/* Mobile menu */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-40 flex lg:hidden"
              onClose={setOpen}
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
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex w-60 max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pt-5 pb-2">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                    <div className="flow-root">
                      <a
                        href="/"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="/about"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Books
                      </a>
                    </div>

                    <div className="flow-root">
                      <a
                        href="/e-books"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        E-Books
                      </a>
                    </div>
                    <div className="flow-root">
                      <a
                        href="/admin"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Manage Requests
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4">
                    <a href="#" className="-m-2 flex items-center p-2">
                      <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                      />
                      <span className="ml-3 block text-base font-medium text-gray-900">
                        CAD
                      </span>
                      <span className="sr-only">, change currency</span>
                    </a>
                  </div>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>

          <header className="relative bg-white">
            <nav
              aria-label="Top"
              className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
              <div className="border-b border-gray-200">
                <div className="flex h-16 items-center">
                  <button
                    type="button"
                    className="bg-blue rounded-md p-2 text-gray-400 lg:hidden"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Logo */}
                  <div className="ml-4 flex lg:ml-0">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="ml-auto flex items-center">
                    <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                      <a
                        href="/"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Home
                      </a>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                      <a
                        href="/about"
                        className="hover:text-white-800 text-sm font-medium text-gray-700 "
                      >
                        Book
                      </a>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                      <a
                        href="/e-books"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        E-books
                      </a>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                      <a
                        href="/admin"
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Manage Request
                      </a>
                    </div>

                    <div className="hidden lg:ml-8 lg:flex">
                      <a
                        href="/about"
                        className="flex items-center text-gray-700 hover:text-gray-800"
                      >
                        <img
                          src="https://tailwindui.com/img/flags/flag-canada.svg"
                          alt=""
                          className="block h-auto w-5 flex-shrink-0"
                        />
                        <span className="ml-3 block text-sm font-medium">
                          CAD
                        </span>
                        <span className="sr-only">, change currency</span>
                      </a>
                    </div>

                    {/* Search */}
                    <div className="flex lg:ml-6">
                      <a
                        href="#"
                        className="p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Search</span>
                        <SearchIcon className="h-6 w-6" aria-hidden="true" />
                      </a>
                    </div>

                    {/* Cart */}
                    <div className="ml-4 flow-root lg:ml-6">
                      <a href="#" className="group -m-2 flex items-center p-2">
                        <ShoppingBagIcon
                          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                          0
                        </span>
                        <span className="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}

export default MyApp
