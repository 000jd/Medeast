import React from 'react'
import Image from 'next/image'
import Search from '../assets/svg/search'

const styles = {
    header: 'bg-[darkslategrey] text-white h-20 flex gap-[100px] w-full p-[30px]',

    headerWrapper: 'flex justify-center h-full max-w-screen-xl mx-auto px-4',

    nav: 'flex justify-center item-center gap-[20px',

    navItem: 'relative mr-1 cursor-pointer hover:opacity-60 px-4',
    badge: 'rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4',
    inputContainer: 'flex items-center justify-center pl-20 rounded bd-[black]',
    input: 'bg-transparent outline-none text-white w-70 ml-3',
}

const Header = () => {
    return (
        <div className={styles.header}>
            <Image
                src='https://image.shutterstock.com/image-photo/excited-african-american-woman-sit-600w-1401388799.jpg'
                alt='logo'
                width={20}
                height={20}

            />

            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Cryptocurrencies</div>
                        <div className={styles.badge} />

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>exchanges</div>

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>NFT</div>
                        <div className={styles.badge} />

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>Cryptown</div>
                        <div className={styles.badge} />

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>portfolio</div>

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>watchlist</div>

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>products</div>

                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>learn</div>

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