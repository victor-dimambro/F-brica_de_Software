const toTop = window.document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if(window.scrollY > 450) {
        to-top.classList.add("active")
    } else {
        to-top.classList.remove("active")
    }
})


const modalButton = document.querySelector("#signup")

const modal = document.querySelector("dialog")

const closeButton = document.querySelector("#close_button")

modalButton.addEventListener("click", ()=> {
    modal.showModal()
})

closeButton.addEventListener("click", ()=> {
    modal.close()
})


const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    console.log(`Nome: ${name}\nEmail: ${email}`)

})


ScrollReveal({origin: 'top', distante: '50px', duration: 2150}).reveal('header, main, section, footer');