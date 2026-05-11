function delayedPromise(text, ms) {
    return new Promise((res) => {
        setTimeout(() => {
            res(text)
        },ms)
    })
}
function randomTime() {
    return Math.floor(Math.random() * (5000 - 1000) + 1000)
}

const time1 = randomTime()
const time2 = randomTime()
const time3 = randomTime()
const time4 = randomTime()
const time5 = randomTime()
    const promis1 = delayedPromise(`promis1 повернувся з затримакою: ${time1}`,time1)
    const promis2 = delayedPromise(`promis2 повернувся з затримакою: ${time2}`,time2)
    const promis3 = delayedPromise(`promis3 повернувся з затримакою: ${time3}`,time3)
    const promis4 = delayedPromise(`promis4 повернувся з затримакою: ${time4}`,time4)
    const promis5 = delayedPromise(`promis5 повернувся з затримакою: ${time5}`,time5)



Promise.all([promis1,promis2,promis3,promis4,promis5]).then(result => console.log(result))

Promise.race([promis1,promis2,promis3,promis4,promis5]).then(result => console.log(result))