import { Button } from "../../components/button/button"
import { Search } from "../search/search"

export const Menu = ({ scrollHeight })=>{
    return (
        <div className="z-20 flex justify-between font-bold" 
        style={{ position: `${scrollHeight < 100 ? "sticky" : "fixed"}`, width: "100%", 
        backgroundColor: scrollHeight < 100 ? "transparent" : "white",
        transition: "0.25s ease-in-out" }}>
            <div className="py-4 px-8">
                <h1 className={`py-2 font-bold text-xl text-${scrollHeight < 100 ? "white" : "gray"}`}>PickSary</h1>
            </div>
            <Search scrollHeight={scrollHeight}/>
            <div className="py-2">
                <ul className="flex py-3 px-12 text-sm">
                    <li>
                        <Button 
                        classNameAttr={`hover:text-violet-800  mx-1 text-sm text-${scrollHeight < 100 ? "white" : "gray"} py-2 px-6 rounded-[8px] inline-flex items-center`}
                         label="Parcourir"/>
                    </li>
                    <li><Button
                    classNameAttr={`hover:text-violet-800  mx-1 text-sm text-${scrollHeight < 100 ? "white" : "gray"} py-2 px-6 rounded-[8px] inline-flex items-center`}
                    label="Connexion">
                        </Button></li>
                    <li><Button 
                    classNameAttr={`hover:text-violet-800  mx-1 text-sm text-${scrollHeight < 100 ? "white" : "gray"} py-2 px-6 rounded-[8px] inline-flex items-center`}
                    label="S'inscrire"></Button></li>
                    <li>
                        <Button 
                        classNameAttr="bg-violet-800 hover:bg-violet-600 border-white mx-1 text-sm text-white py-2 px-6 rounded-[8px] inline-flex items-center"
                        label="Telecharger">
                        <svg class="w-3 h-3 mx-1 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"/>
                        </svg>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}