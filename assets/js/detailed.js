const stepsData = "https://api.myjson.com/bins/1gwnal"


let request = new XMLHttpRequest()

request.open('GET', stepsData, true)

request.onload = function() {
    let dataForSteps = []
    let data = JSON.parse(this.response)
    for(let i = 0; i< data.length; i++){
        dataForSteps.push(data[i].steps)      
    }
    let z = sessionStorage.getItem("key3")
    document.getElementById('day'+z).classList.add('activeClass');
    stepCounter(dataForSteps)  
    document.querySelectorAll('.dayBox').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault()
            let x = sessionStorage.getItem("key2")
            let arg = event.target.getAttribute('param')
            sessionStorage.setItem("key2",arg)
            console.log(z)
            console.log(x)
            console.log(arg)
            if(x != arg) {
                document.getElementById('day'+arg).classList.add('activeClass')
                document.getElementById('day'+x).classList.remove('activeClass')
                document.getElementById('day'+z).classList.remove('activeClass')  
            }
            else if(z == x){
                document.getElementById('day'+arg).classList.add('activeClass')
            }
            sessionStorage.setItem("key", arg)
            stepCounter(dataForSteps)
        })
    }) 
}
request.send()

document.getElementById('arrowImg').addEventListener('click', event => {
    event.preventDefault()
    location.href="index.html"
})


const stepCounter = (step) => {
    let x = sessionStorage.getItem("key")
    const steps = document.getElementById("dailySteps")
    steps.innerHTML = step[x]
    const madeSteps = step[x]
    let km = (madeSteps * 0.762)/1000
    const kilometer = document.getElementById("km")
    kilometer.innerHTML = km.toFixed(1)
    let cal = madeSteps * 0.05
    const calories = document.getElementById("cal")
    calories.innerHTML = cal.toFixed(0)
    let hour = (madeSteps * 0.5)/3600
    const hours = document.getElementById("hour")
    hours.innerHTML = hour.toFixed(2)
}

