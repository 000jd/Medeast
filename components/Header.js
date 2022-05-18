import React from 'react'

const Header = () => {
    return (
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span class="ml-3 text-xl">Medeast</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a class="mr-5 hover:text-white">About</a>
                    <a class="mr-5 hover:text-white">Blog</a>
                </nav>
            </div>
        </header>
    )
}

export default Header