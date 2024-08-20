import { RiHomeLine } from "react-icons/ri";
import { PiTelevisionSimpleThin } from "react-icons/pi";
import { MdOutlineMovieCreation } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

export const navigation = [
    {
        label: "TV Shows",
        href: "tv",
        icon:<PiTelevisionSimpleThin />

    },
    {
        label: "Movies",
        href: "movie",
        icon:<MdOutlineMovieCreation />
    }
]

export const mobileNav =[
    {
        label: "Home",
        href: "/",
        icon: < RiHomeLine/>
    },
    ...navigation,
    {
        label:"Search",
        href:"/search",
        icon:<RiSearch2Line/>
    }

]

