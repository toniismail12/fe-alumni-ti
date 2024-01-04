import { Main } from '@layouts'
import { AuthMe } from "@controllers"
import { useEffect, useState, useCallback } from "react";
import Link from 'next/link'
import { useRouter } from 'next/router'
import TabProfile from './profile'
import TabPendidikan from './pendidikan'
import TabPekerjaan from './pekerjaan'

export default function Profile() {

  const { query } = useRouter()

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {

    const res = await AuthMe();
    if (res !== 'error') {
      setData(res.user)
    }

  }, [])

  useEffect(() => {

    fetchData();

  }, [fetchData])

  return (
    <Main>
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64">

        <div className="mt-4 mx-4">
          <div className="w-full overflow-hidden rounded-lg shadow-xs border">
            <div className="w-full overflow-x-auto">

              <div className="bg-white relative shadow rounded-lg w-full mx-auto">

                <div className="mt-12">
                  <h1 className="font-bold text-center text-3xl text-gray-900">
                    {data.name}
                  </h1>
                  <p className="text-center text-sm text-gray-400 font-medium">
                    {data.username}
                  </p>
                  <p>
                    <span></span>
                  </p>

                  <div className="flex justify-between items-center my-5 px-6">
                    <Link
                      href="/dashboard/profile"
                      className={query.tab === undefined ? "text-gray-900 bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/dashboard/profile?tab=pendidikan"
                      className={query.tab === 'pendidikan' ? "text-gray-900 bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"}
                    >
                      Pendidikan
                    </Link>
                    <Link
                      href="/dashboard/profile?tab=pekerjaan"
                      className={query.tab === 'pekerjaan' ? "text-gray-900 bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3" : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"}
                    >
                      Pekerjaan
                    </Link>

                  </div>

                  <div className="w-full">

                    {query.tab == undefined &&
                      <TabProfile />
                    }
                    {query.tab == 'pendidikan' &&
                      <TabPendidikan />
                    }
                    {query.tab == 'pekerjaan' &&
                      <TabPekerjaan />
                    }

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </Main>

  )
}
