import { motion, useAnimation } from "framer-motion";
import { useEffect, } from "react";
import { useInView } from "react-intersection-observer";


const TextRevealAnimation = ({ text }) => {
    // const ref = useRef(null);
    const control = useAnimation();
    const [ref, inView] = useInView();
    // const isInView = useInView(ref, { once: true });





    const massege = text || "";
    const sentance = {
        hidden: { opacity: 1 },
        vissible: {
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.5,
                staggerChildren: 0.08
            }

        }
    }

    // const letter = {
    //     hidden: { opacity: 0, y: 50 },
    //     vissible: {
    //         duration: 0.001,
    //         opacity: 1,
    //         y: 0
    //     }
    // }
    const letterBox = {
        hidden: { opacity: 0 },
        vissible: {
            opacity: 1
        }
    }

    useEffect(() => {
        if (inView) {
            control.start("vissible");
        }
    }, [control, inView]);


    return (
        <motion.p
            ref={ref}
            className=""
            variants={sentance}
            initial="hidden"
            animate="vissible"
        >
            {
                // massege?.split('')
                massege?.split('').map((char, index) => {
                    return (
                        <motion.span
                            key={char + "-" + index}
                            // initial={{ opacity: 0 }}
                            // animate={{ opacity: 1 }}
                            variants={letterBox}
                            initial="hidden"
                            animate={control}
                            transition={{
                                duration: 0.1,
                                delay: index / 200
                            }}
                        >
                            {char}
                        </motion.span>
                    )
                })
            }

        </motion.p>

    );
};

export default TextRevealAnimation;