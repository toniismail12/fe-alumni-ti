import React from 'react'
import { AuthMe, GetPendidikan } from "@controllers"
import { useEffect, useState, useCallback } from "react";

export default function TabPendidikan() {

  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {

    const res = await AuthMe();
    if (res !== 'error') {
      const res2 = await GetPendidikan(1, res.user.username);
      if (res2 !== 'error') {
        setData(res2.data)
      }
    }

  }, [])

  useEffect(() => {

    fetchData();

  }, [fetchData])

  return (
    <>
      {/* component */}
      {/* Created By Joker Banny */}
      <div className="flex items-start justify-start p-5 bg-white border-t">
        <div className="space-y-6 border-l-2 border-dashed">
          {data.map((items) => {
            return (

              <div key={items.id} className="relative w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                <div className="ml-6">
                  <h4 className="font-bold text-blue-500">({items.jenjang}) - {items.program_studi}</h4>
                  <p className="mt-2 max-w-screen-sm text-sm text-gray-500">
                    {items.nama_instansi} ({items.jenis_instansi})
                  </p>
                  <span className="mt-1 block text-sm font-semibold text-blue-500">
                    {items.mulai} S.d {items.selesai}
                  </span>
                </div>
              </div>

            )
          })}


        </div>
      </div>
    </>

  )
}
