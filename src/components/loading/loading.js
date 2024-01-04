export default function Loading() {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-full">
                    <div className="border-0 rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
                        <div className="text-center justify-center rounded-md">
                            <div className="loader-ball-56">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-50 fixed inset-0 bg-black"></div>
        </>
    )
}
