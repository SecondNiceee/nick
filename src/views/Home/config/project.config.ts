import { TypeProject } from "../model/TypeProject";

export const projects:TypeProject[] = [
    {
        title : "Smartcardio",
        advantages : ["Next.js", "SSR", "SSG"],
        disAdvantages : null,
        gitHubLink : null,
        previewLink : "https://smartcardio.ru/",
        technologys : ["Next" , "TypeScript", "React Hook Form", "RTK", "FSD", "TailwindCss", "dynamic(lazy)"],
        ImageSrc : "/images/project1.png"
    },
    {
        title : "Connect",
        advantages : ["Fullstack"],
        disAdvantages : ["Упало количество пользователей", "TelegrammWebApp"],
        gitHubLink : null,
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
        technologys : ["React", "Ts", "FSD", "RTK", "React Hook Form", "SCSS", "Router V6", "React lazy"]
    },
    {
        title : "Pet Project 1",
        advantages : ["Много фильтров", "юзеры приходят с сервера"],
        disAdvantages : ["Frontend only, после создания юзера, он сохраняется в редаксе, но на сервере нет."],
        gitHubLink : "https://github.com/SecondNiceee/NickSaitOne",
        ImageSrc : "/images/project4.png",
        previewLink : "https://nick-sait-one.vercel.app/",
        technologys : ["React", "Ts", "FSD", "RTK", "RHK", "TailwindCss", "RouterV6", "React lazy"]
    }
]