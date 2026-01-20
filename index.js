// template_ld0p19g
// service_ynsqhzr
// Q--5LHDPksFwdL8p3

function contact(event) {
event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"

emailjs
.sendForm(
    'service_ynsqhzr',
    'template_ld0p19g',
    event.target,
    'Q--5LHDPksFwdL8p3'
).then(() => {
    loading.classList.remove("modal__overlay--visible")
    success.classList += " modal__overlay--visible"
}).catch(() => {
    loading.classList.remove("modal__overlay--visible")
    alert(
        "The contact form service is temporarily unavailble. Please contact me directly at codyglane@gmail.com"
    )
})
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}