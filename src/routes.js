import Home from './components/home/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import Pricing from './components/Pricing';

const rotues = [
    {
        name: "Home",
        url:"/Home",
        component: <Home />
    },
    {
        name: "About",
        url:"/about",
        exact:true,
        component: <About />
    },
    {
        name: "Work",
        url:"/work",
        exact:true,
        component: <Work />
    },
    {
        name: "Pricing",
        url:"/pricing",
        exact:true,
        component: <Pricing />
    },
    {
        name: "Contact",
        url:"/contact",
        exact:true,
        component: <Contact />
    }

];
export const footerRoute2 = [
    {
        name: "Home",
        url:"/Home",
        component: <Home />
    },
    {
        name: "About",
        url:"/about",
        exact:true,
        component: <About />
    },
    {
        name: "Work",
        url:"/work",
        exact:true,
        component: <Work />
    },
    {
        name: "Pricing",
        url:"/pricing",
        exact:true,
        component: <Pricing />
    },
    {
        name: "Contact",
        url:"/contact",
        exact:true,
        component: <Contact />
    }
];

export const footerRoute3 = [
    {
        name: "Branding",
        url:"/Home",
        component: <Home />
    },
    {
        name: "Buisiness",
        url:"/Home",
        component: <Home />
    },
    {
        name: "Marketing",
        url:"/Home",
        component: <Home />
    },
    {
        name: "Social Media",
        url:"/Home",
        component: <Home />
    },
    {
        name: "Digital Solution",
        url:"/Home",
        component: <Home />
    },
    {
        name: "Graphic",
        url:"/Home",
        component: <Home />
    }
];
export default rotues;