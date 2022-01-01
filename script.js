document.addEventListener('click',e=>{
    // @ts-ignore
    const isDropdown = e.target.matches("[yearButton]");
    // @ts-ignore
    if(!isDropdown && e.target.closest("[year-dropdown]")!=null) return;

    let currentDropdown;
    if(isDropdown){
        // @ts-ignore
        currentDropdown = e.target.closest("[year-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[year-dropdown].active").forEach(dropdown=>{
        if(dropdown===currentDropdown) return;
        dropdown.classList.remove("active");
    })
})

const avpIcon = document.querySelector(".hiddenStickyNameOnHover img");
// @ts-ignore
avpIcon.addEventListener("click",e=>{
    window.open("./docs/AvinashPetla.pdf", '_blank');
})


