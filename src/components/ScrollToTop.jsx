import { useEffect, useState } from 'react'


export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    return (
        <div className="fixed bottom-10 right-10">
            <button
                type="button"
                onClick={scrollToTop}
                className={
                    `${isVisible ? 'opacity-100' : 'opacity-0'}
                    bg-[#3F6CEE] hover:bg-[#3F6CEE]/70 focus:outline-0 inline-flex items-center rounded-full p-3 text-white shadow-xl transition-opacity focus:outline-none  text-2xl duration-200`
                }
            >
                <i className='bx bx-up-arrow-alt bx-tada' ></i>
            </button>
        </div>
    )
}