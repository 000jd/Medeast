import React from 'react'
import Image from 'next/image'

const styles = {

    background: ' bg-[teal] flex justify-end w-full h-full ',
    title: 'text-4xl font-bold  flex items-end justify-start w-full h-full px-7',
    example: 'bg-[teal] text-white h-20 flex pl-7 items-center justify-start gap-[450px] w-full p-[20px]',
    eg2: 'text-4xl font-bold flex items-center justify-start w-full px-7',
    eg3: 'flex items-center justify-end h-full max-w-screen-xl  px-4',
}

const BackGround = () => {
    return (
        <div className={styles.background}>
            <div className={styles.title}>
                welcome,<br />
                Sidebar under construction
            </div>
            <Image
                src='https://cdn.pixabay.com/photo/2016/10/10/13/20/drugs-1728381_960_720.jpg'
                width='1260'
                height='950'
            />
        </div>
    )
}
export default BackGround