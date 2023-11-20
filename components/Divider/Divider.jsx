const Divider = () => {
    return (
        <div className="md:hidden container mx-auto px-4 md:px-0">
            <div class="relative">

                <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300"></div>
                </div>


                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="text-center">
                        <span class="text-gray-500 bg-white px-2 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </span>
                    </div>
                </div>

                <div class="relative max-w-screen-xl mx-auto px-4">

                </div>
            </div>


        </div>
    )
}

export default Divider