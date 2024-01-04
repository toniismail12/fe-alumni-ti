import React from 'react'
import { useRouter } from 'next/router';

export default function Paginate({link, total}) {
  const { pathname, push } = useRouter()

  function toPage(page) {
    push(pathname+"?page="+page)
  }

  return (
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
      <span className="flex items-center col-span-3">
        Total {total}
      </span>
      <span className="col-span-2" />
      {/* Pagination */}
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center">

            {link.map((items) => {
              return (
                <>
                  {items.label !== "&laquo; Previous" && items.label !== "Next &raquo;" &&
                  <li key={items.label}>
                    <button onClick={()=>toPage(items.label)} className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple border">
                      {items.label}
                    </button>
                  </li>
                  }
                </>
              )
            })}

          </ul>
        </nav>
      </span>
    </div >
  )
}
