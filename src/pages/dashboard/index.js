import React from 'react'
import { Main } from '@layouts'

export default function Dashboard() {
    return (
        <Main>

            <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 p-4 gap-4">
                    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg
                                width={30}
                                height={30}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">1,257</p>
                            <p>Alumni</p>
                        </div>
                    </div>
                    
                    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg
                                width={30}
                                height={30}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">1,257</p>
                            <p>Laki-Laki</p>
                        </div>
                    </div>
                    <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg
                                width={30}
                                height={30}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">75,257</p>
                            <p>Perempuan</p>
                        </div>
                    </div>
                </div>
                {/* ./Statistics Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
                    {/* Social Traffic */}
                    <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                                        Total Alumni
                                    </h3>
                                </div>
                                <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                                    {/* <button
                                        className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        See Data
                                    </button> */}
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto">
                                <iframe className="mt-0" src="/chart/pie-total-alumni.html" width="100%" height="350px"></iframe>
                            </div>
                        </div>
                    </div>
                    {/* ./Social Traffic */}
                    {/* Recent Activities */}
                    <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                                        Alumni Pertahun
                                    </h3>
                                </div>
                                <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                                    {/* <button
                                        className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        See all
                                    </button> */}
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto">
                                <iframe className="mt-0" src="/chart/bar-total-perangkatan.html" width="100%" height="350px"></iframe>
                            </div>
                        </div>
                    </div>
                    {/* ./Recent Activities */}
                </div>
                
            </div>
        </Main>
    )
}
