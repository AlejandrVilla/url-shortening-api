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
    if (width <= 900 ) return "mobile";
    return "desktop";
}

const statistics = [
    {
        title: "Brand Recognition",
        description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        icon: "./icons/icon-brand-recognition.svg",
    },
    {
        title: "Detailed Records",
        description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
        icon: "./icons/icon-detailed-records.svg",
    },
    {
        title: "Fully Customizable",
        description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
        icon: "./icons/icon-fully-customizable.svg",
    },
]

export { getWindowType, menuVariants, statistics };