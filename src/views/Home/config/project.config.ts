import { TypeProject } from "../model/TypeProject";

export const projects:TypeProject[] = [
    {
        title : "Smartcardio",
        advantages : ["Next.js", "SSR", "SSG"],
        disAdvantages : null,
        gitHubLink : "https://github.com/SecondNiceee/alsoSmartcardio",
        previewLink : "https://smartcardio.ru/",
        technologys : ["Next" , "TypeScript", "React Hook Form", "RTK", "TailwindCss", "dynamic(lazy)"],
        ImageSrc : "/images/project1.png"
    },
    {
        title : "Connect",
        advantages : ["Fullstack"],
        disAdvantages : ["Упало количество пользователей", "TelegrammWebApp"],
        gitHubLink : "https://github.com/SecondNiceee/Jocker",
        ImageSrc : "/images/project2.png",
        previewLink : "https://t.me/ConnectexBot",
        technologys : ["React", "JavaScript", "React Hook Form", "RTK", "React Router V6", "React lazy"]
    },
    {
        title : "Pet Project 2",
        advantages : null,
        disAdvantages : ["Frontend only, после создания портфолио / регистрации, оно сохраняется в редаксе, но на сервере нет."],
        gitHubLink : "https://github.com/SecondNiceee/portfoliosSaitTwo1",
        ImageSrc : "/images/project3.png",
        previewLink : "https://portfolios-sait-two1.vercel.app/",
        technologys : ["React", "Ts", "RTK", "React Hook Form", "SCSS", "Router V6", "React lazy"]
    },
    {
        title : "Pet Project 1",
        advantages : ["Много фильтров", "юзеры приходят с сервера"],
        disAdvantages : ["Frontend only, после создания юзера, он сохраняется в редаксе, но на сервере нет."],
        gitHubLink : "https://github.com/SecondNiceee/NickSaitOne",
        ImageSrc : "/images/project4.png",
        previewLink : "https://nick-sait-one.vercel.app/",
        technologys : ["React", "Ts", "RTK", "RHK", "TailwindCss", "RouterV6", "React lazy"]
    },
    {
        title : "Promocode Controller",
        advantages : ["Full stack"],
        disAdvantages : ["Нельзя войти без администратора, это панель контролирования промокодов/создания их"],
        gitHubLink : {backend : "https://github.com/SecondNiceee/promocode-backend", frontend : "https://github.com/SecondNiceee/promocode-frontend"},
        ImageSrc : "/images/promo-front.png",
        previewLink : "https://partner.smartcardio.ru/",
        technologys : ["Next", "Ts", "Tailwind", "Zoostand"]
    },
    {
        title : "Redux Cashing",
        advantages : null,
        disAdvantages : ["Очень простое"],
        gitHubLink : "https://github.com/SecondNiceee/projectThree",
        ImageSrc : "/images/project-three.png",
        previewLink : "https://project-three-rho-topaz.vercel.app/",
        technologys : ["React", "Vite", "Redux toolkit", "Tailwind"]
    }
]