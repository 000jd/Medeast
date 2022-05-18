import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">

                    <span class="ml-3 text-xl">Medeast</span>
                </a>
                <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 Medeast
                </p>
            </div>
        </footer>
    )
}
export default Footer