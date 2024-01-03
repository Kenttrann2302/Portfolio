import { motion } from "framer-motion";
import { textStyles } from "../textStyles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: any, idName: any) => 
function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${textStyles.padding} max-w-7x1 mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    );
};

export default SectionWrapper;
