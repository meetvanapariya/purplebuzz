import Home from './components/home/Home';
import About from './components/aboutus/AboutUs';
import Contact from './components/contactus/ContactUs';
import Work from './components/work/Work';
import Pricing from './components/pricing/Pricing';
import Blogs from './components/blogs/Blogs';

const rotues = [
    {
        name: "Home",
        url:"/home",
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
        name: "Blog",
        url:"/blog",
        exact:true,
        component: <Blogs />
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