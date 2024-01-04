import { Main } from '@layouts'
import { useEffect, useState, useCallback } from "react";
import { Alumni } from "@controllers"
import { Paginate } from '@components'
import { useRouter } from 'next/router';

export default function AlumniPages() {

    const { query } = useRouter()

    const [data, setData] = useState([]);
    const [links, setLinks] = useState([]);
    const [total, setTotal] = useState(0);

    const fetchData = useCallback(async (page) => {

        const res = await Alumni(page);
        if (res !== 'error') {
            setData(res.data)
            setLinks(res.links)
            setTotal(res.total)
        }
       
    }, [])

    useEffect(() => {

        fetchData(query.page);

    }, [fetchData, query.page])

    return (
        <Main>
            <div className="h-full ml-14 mt-14 mb-10 md:ml-64">

                {/* Client Table */}
                <div className="mt-4 mx-4">
                    <div className="w-full overflow-hidden rounded-lg shadow-xs">
                        <div className="w-full overflow-x-auto">

                            <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded border">
                                <div className="rounded-t mb-0 px-0 border-0">
                                    <div className="flex flex-wrap items-center px-4 py-2">
                                        <div className="relative w-full max-w-full flex-grow flex-1">
                                            <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                                                Alumni
                                            </h3>
                                        </div>
                                        <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                                            {/* <button
                                                className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Tambah Data
                                            </button> */}
                                        </div>
                                    </div>
                                    <div className="block w-full overflow-x-auto">
                                        <table className="items-center w-full bg-transparent border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Nama
                                                    </th>
                                                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        NIM
                                                    </th>
                                                    <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                        Angkatan
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {data.map((items)=>{

                                                    return(
                                                        <tr key={items.id} className="text-gray-700 dark:text-gray-100">
                                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                                {items.name}
                                                            </td>
                                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {items.username}
                                                            </td>
                                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                                {items.angkatan}
                                                            </td>

                                                        </tr>

                                                    )
                                                })}
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                    <Paginate link={links} total={total} />
                                </div>
                            </div>

                        </div>
                      
                    </div>
                </div>
                {/* ./Client Table */}

            </div>
        </Main>
    )
}
