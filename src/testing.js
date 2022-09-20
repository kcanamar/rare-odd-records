import {BiMusic} from "react-icons/bi"

export const links = [
    {
        // todo? work out how to have home navigate to "/" not "/home"
        name: 'Home',
        path: '/home',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Artists',
        path: '/artists',
    },
    {
        name: 'Contact',
        path: '/contact',
    }
]


export const plans = [
    {
        id: 1,
        icon: <BiMusic/>,
        title: "Plan A",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora dicta et sed nemo?",
        path: '/plans/AAA'
    },
    {
        id: 2,
        icon: <BiMusic/>,
        title: "Plan B",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora dicta et sed nemo?",
        path: '/plans/BBB'
    },
    {
        id: 3,
        icon: <BiMusic/>,
        title: "Plan C",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora dicta et sed nemo?",
        path: '/plans/CCC'
    },
    {
        id: 4,
        icon: <BiMusic/>,
        title: "Plan D",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora dicta et sed nemo?",
        path: '/plans/DDD'
    }
]

