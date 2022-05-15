import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = {
    header: 'bg-[teal] text-white h-20 flex pl-7 items-center justify-start gap-[450px] w-full p-[20px]',
    logo: 'text-4xl font-bold flex items-center justify-start w-full px-7',
    headerWrapper: 'flex items-center justify-end h-full max-w-screen-xl  px-4',
    nav: 'test-black flex justify-center item-center gap-[20px',
    navItem: 'relative mr-1 cursor-pointer hover:opacity-60 px-4',
    inputContainer: 'flex items-center justify-center pl-20 rounded bd-[black]',
    input: 'bg-transparent outline-none text-white w-70 ml-3',
}

const Header = () => {
    return (
        <div className={styles.header}>

            <div className={styles.logo}>
                <h3>
                    Medeast
                </h3>

            </div>

            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Blog</div>


                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>About</div>

                    </div>



                </nav>

                <div className='flex items-center'>
                    {/*<connectButon/> */}
                    <div className={styles.inputContainer}>
                        <Search />
                        <input className={styles.input} placeholder='search' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header