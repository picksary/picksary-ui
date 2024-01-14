import { Menu } from "../menu/menu"
import image from "../../assets/duck-8469484_1280.jpg"
import { Blank } from "../../utils/utils"
import { Button } from "../../components/button/button"

export const Profile = ({ imageData })=>{
    return (
       <div>
            <Menu />
            <Blank />
            <div className="flex justify-between my-12 mx-8 items-center">
                <div className="m-auto">
                    <img className="w-auto h-96" src={image} alt="image"/>
                </div>
                <div className=" border-2 border-gray-200 p-6 rounded-[8px] w-96">
                    <div className="my-6">
                        <p className="text-sm font-light text-gray-500">Gratuit pour une utilisation sous <a className="underline">licence contenu</a> Picksary</p>
                         <div className="flex justify-between">
                            <Button 
                                classNameAttr="text-xs border-2 border-gray-500 m-2 text-gray-500 py-2 px-6 rounded-[25px] inline-flex items-center"
                                label="Editer l'image" />
                            <Button 
                                classNameAttr="text-xs bg-violet-800 hover:bg-violet-600 border-white m-2 text-sm text-white py-2 px-6 rounded-[25px] inline-flex items-center"
                                label="Telecharger" />
                         </div>
                    </div>
                    <hr />
                    <div className="my-6">
                        <div>
                            <Button 
                                classNameAttr="text-xs border-2 border-gray-500 text-sm text-gray-500 py-1 px-4 rounded-[8px] inline-flex items-center"
                                label="5,256" >
                                    <svg class="w-5 h-5 p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                                    </svg>
                                </Button>
                            <Button 
                                classNameAttr="text-xs border-2 border-gray-500 m-2 text-sm text-gray-500 py-1 px-4 rounded-[8px] inline-flex items-center"
                                label="Enregistrer" >
                                    <svg class="w-5 h-5 p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"/>
                                    </svg>
                                </Button>
                            <Button 
                                classNameAttr="text-xs border-2 border-gray-500 text-sm text-gray-500 py-1 px-4 rounded-[8px] inline-flex items-center"
                                label="Partager" >
                                    <svg class="w-5 h-5 p-1 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5.953 7.467 6.094-2.612m.096 8.114L5.857 9.676m.305-1.192a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0ZM17 3.84a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Zm0 10.322a2.581 2.581 0 1 1-5.162 0 2.581 2.581 0 0 1 5.162 0Z"/>
                                    </svg>
                                </Button>
                        </div>
                        <div className="m-1">
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500">Affichage: </p>
                                <p className="text-xs text-gray-500">5,000,000 </p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-500">Telechargements: </p>
                                <p className="text-xs text-gray-500">5,000,000 </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between my-6 items-center">
                        <div className="flex justify-between items-center">
                            <div className="mx-2">
                                <img className="w-10 h-10 rounded-[50%]" src={image} alt="author"/>
                            </div>
                            <div className="text-xs">
                                <p className="font-bold">Ny Hasina VAGNO</p>
                                <p className="text-gray-500 font-light">Digital creator</p>
                            </div>
                        </div>
                        <div className="text-xs">
                                <p className="font-light text-violet-800 hover:text-violet-500">Suivre</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <Button 
                            classNameAttr="w-full hover:border-violet-800 hover:text-violet-800 text-center text-xs border-2 border-gray-500 m-1 text-sm text-gray-500 py-2 px-6 rounded-[8px]"
                            label="Faites un don" />
                    </div>
                </div>
            </div>
       </div>
    )
}