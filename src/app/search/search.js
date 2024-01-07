

export const Search = ( { scrollHeight }) => {

    return(
        <form className="py-4">
            <div className="flex" style={{ display: scrollHeight < 50 ? 'none' : "block",
        transition: "0.25s ease-in-out" }}>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Recherche dans PickSary" required/>
                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-violet-800 rounded-e-lg border border-violet-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    )
}