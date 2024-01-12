export const Articles = ({ key, items })=>{
    return(
       items.map((item, k)=>(
        <div key={k} className="grid grid-cols-8 gap-4 p-10 h-auto">
            <div className="col-span-2 opacity-90 overflow-hidden hover:opacity-100 flex justify-center items-center">
                <div style={{ position: "absolute" }} className="flex gap-2 z-20 text-white text-sm">
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-3 w-5 h-5 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                        </svg>
                    </div>
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-2 w-6 h-6 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                        </svg>
                    </div>
                </div>
                <img alt="" style={{ transition: "0.5s ease-in-out" }} className="h-full hover:scale-150" src={item[0]} />
            </div>
            <div className="col-start-3 overflow-hidden col-span-4 opacity-90 hover:opacity-100 flex justify-center items-center">
            <div style={{ position: "absolute" }} className="flex gap-2 z-20 text-white text-sm">
                <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-3 w-5 h-5 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                        </svg>
                    </div>
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-2 w-6 h-6 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                        </svg>
                    </div>
                </div>
                <img style={{ transition: "0.5s ease-in-out" }} className="h-96 w-full hover:scale-150" alt="" src={item[1]} />
            </div>
            <div className="col-span-2 overflow-hidden opacity-90 hover:opacity-100 flex justify-center items-center">
            <div style={{ position: "absolute" }} className="flex gap-2 z-20 text-white text-sm">
                <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-3 w-5 h-5 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                        </svg>
                    </div>
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-2 w-6 h-6 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                        </svg>
                    </div>
                </div>
                <img alt="" style={{ transition: "0.5s ease-in-out" }} className="h-full hover:scale-150" src={item[2]} />
            </div>
            <div className="col-span-2 overflow-hidden opacity-90 hover:opacity-100 flex justify-center items-center">
            <div style={{ position: "absolute" }} className="flex gap-2 z-20 text-white text-sm">
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-3 w-5 h-5 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                        </svg>
                    </div>
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-2 w-6 h-6 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                        </svg>
                    </div>
                </div>
                <img style={{ transition: "0.5s ease-in-out" }} className="h-full hover:scale-150" alt="" src={item[3]} />
            </div>
            <div className="col-span-2 overflow-hidden opacity-90 hover:opacity-100 flex justify-center items-center">
            <div style={{ position: "absolute" }} className="flex gap-2 z-20 text-white text-sm">
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-3 w-5 h-5 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                        </svg>
                    </div>
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-2 w-6 h-6 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                        </svg>
                    </div>
                </div>
                <img style={{ transition: "0.5s ease-in-out" }} className="h-full hover:scale-150" alt="" src={item[4]} />
            </div>
            <div className="col-span-2 overflow-hidden opacity-90 hover:opacity-100 flex justify-center items-center">
            <div style={{ position: "absolute" }} className="flex gap-2 z-20 text-white text-sm">
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-3 w-5 h-5 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                        </svg>
                    </div>
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-2 w-6 h-6 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                        </svg>
                    </div>
                </div>
                <img style={{ transition: "0.5s ease-in-out" }} className="h-full hover:scale-150" alt="" src={item[5]} />
            </div>
            <div className="col-span-2 overflow-hidden opacity-90 hover:opacity-100 flex justify-center items-center">
            <div style={{ position: "absolute" }} className="flex gap-2 z-20 text-white text-sm">
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-3 w-5 h-5 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                        </svg>
                    </div>
                    <div className="border-2 border-white rounded-[8px] hover:border-violet-800">
                        <svg class="m-2 w-6 h-6 text-white hover:text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                        </svg>
                    </div>
                </div>
                <img style={{ transition: "0.5s ease-in-out" }} className="h-full hover:scale-150" alt="" src={item[6]} />
            </div>
        </div>
       ))
    )
}