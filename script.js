document.addEventListener('click',e=>{
    const isDropdown = e.target.matches("[yearButton]");
    if(!isDropdown && e.target.closest("[year-dropdown]")!=null) return;

    let currentDropdown;
    if(isDropdown){
        currentDropdown = e.target.closest("[year-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[year-dropdown].active").forEach(dropdown=>{
        if(dropdown===currentDropdown) return;
        dropdown.classList.remove("active");
    })
})