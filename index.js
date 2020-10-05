document.addEventListener("DOMContentLoaded", () => {
    const date = document.querySelector(".date");
    const time = document.querySelector(".time");

    date.innerHTML = dayjs().format("DD/MMM/YYYY");
    time.innerHTML = dayjs().format("HH:mm:ss");
    setInterval(() => {
        date.innerHTML = dayjs().format("DD/MMM/YYYY");
        time.innerHTML = dayjs().format("HH:mm:ss");
    }, 1000)
})