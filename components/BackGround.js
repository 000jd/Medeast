import React from 'react'
import { ConnectButton } from 'web3uikit'

const BackGround = () => {
    return (
        <div class="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
            <div class="relative mt-6">
                <ConnectButton />
            </div>

            <div class="flex flex-col justify-between flex-1 mt-6">
                <nav>
                    <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    
                        <div class="mx-4 font-medium">
                            Manafactura
                        </div>
                    </a>

                    <hr class="my-6 border-gray-200 dark:border-gray-600" />

                    <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                       

                        <div class="mx-4 font-medium">IOT section</div>
                    </a>

                    <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                        

                        <div class="mx-4 font-medium">Deatels</div>
                    </a>
                </nav>


            </div>
        </div>
    )
}
export default BackGround