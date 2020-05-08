let sections = document.querySelectorAll(".nav_item");

sections.forEach(section => section.addEventListener("click", goToSection));

function goToSection(e){
    let sectionName = this.innerText;
    console.log(sectionName)
    switch (sectionName){
        case "Homepage":
            scroll(0)
            break
        case "Features":
            scroll(1)
            break
        case "Services":
            scroll(2)
            break
        case "Contact us":
            scroll(3)
            break
        default:
            scroll(4)
    }
}
function scroll(to){
    scrollTo({top: innerHeight * to, behavior: "smooth"})
}
