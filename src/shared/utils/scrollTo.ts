export default function scrollTo(elementId : string){
    const el = document.getElementById(elementId)
    el?.scrollIntoView({
        behavior : "smooth",
    })
}