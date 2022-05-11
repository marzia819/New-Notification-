const successBtn = document.querySelector("#success-btn")
const dangerBtn = document.querySelector("#danger-btn")
let toast = document.querySelector(".toast")
let closeIcon = document.querySelector(".close")
let progress = document.querySelector(".progress")

let dangerToast = document.querySelector(".toast-danger")
let dangerProgress = document.querySelector(".danger-progress")
let dangerCloseIcon = document.querySelector(".danger-close")
// let btn = document.querySelector('#success-btn')


    successBtn.addEventListener("click", () => {
        toast.classList.add("active")
        progress.classList.add("active")
        
        setTimeout(() => {
            toast.classList.remove("active")
        }, 5000)

        setTimeout(() => {
            progress.classList.remove("active")
        }, 5300)
    })

    closeIcon.addEventListener("click", () => {
        toast.classList.remove("active")

        setTimeout(() => {
            progress.classList.remove("active")
        }, 300)
    })


    // danger toast

    dangerBtn.addEventListener("click", () => {
        dangerToast.classList.add("active")
        dangerProgress.classList.add("active")

        setTimeout(() => {
            dangerToast.classList.remove("active")
        }, 5000)

        setTimeout(() => {
            dangerProgress.classList.remove("active")
        }, 5300)
    })

    dangerCloseIcon.addEventListener("click", () => {
        dangerToast.classList.remove("active")

        setTimeout(() => {
            progress.classList.remove("active")
        }, 300)
    })


    