import gsap from 'gsap'

export default function Scroll() {

    gsap.from(".box", {
        scrollTrigger: true,
        // x: 300,
        y: 100,
        opacity: 1,
        duration: 1,
        delay: 1,
        transition: true,
        stagger: 0.5,
    })
    return (
        <div>
            <div className='box max-w-[600px] mx-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint vel, tempore voluptatem velit impedit reprehenderit dolorum laboriosam incidunt pariatur numquam, fuga perferendis odio tempora  earum dolorem ea maiores eum?
                Vero quis in soluta totam! Iste, animi modi? Tempora quo quas ex! Ducimus nobis magni, explicabo molestiae quisquam, excepturi fuga provident cumque sint aperiam rem expedita modi veritatis, adipisci soluta!
            </div>
        </div>
    )
}
