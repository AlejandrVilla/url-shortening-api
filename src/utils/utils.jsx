const menuVariants = {
    hidden: {
        right: -300,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.5,
        }
    },
    visible: {
        right: 25,
        transition: {
            type: "tween",
            ease: "linear",
            duration: 0.5,
        }
    },
}

const getWindowType = (width) => {
    if (width <= 900 ) return "phone";
    return "desktop";
}

export { getWindowType, menuVariants };