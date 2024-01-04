import React from 'react'

export default function Header() {

    function Logout() {
        return window.location.href = "/login";
    }

    return (
        <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
            <div className="flex items-center justify-start pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
                
                <span className="hidden md:block font-semibold"> Teknologi Informasi </span>
            </div>
            <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">

                <div className="rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm ">
                    <h3 className='font-semibold'></h3>
                </div>

                <ul className="flex items-center">

                    <li>
                        <button onClick={()=>Logout()} href="#" className="flex items-center mx-4 hover:text-blue-100">
                            <span className="inline-flex mr-1">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                            </span>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
