
sessionStorage.setItem("isActiveSession", false);
const stepsData = "https://api.myjson.com/bins/1gwnal"

let request = new XMLHttpRequest()

request.open('GET', stepsData, true)

request.onload = function() {
    let data = JSON.parse(this.response)
    let dataForSteps = []
    let dataForTimestamp = []
    for(let i = 0; i< data.length; i++){
            
        dataForSteps.push(data[i].steps)
        dataForTimestamp.push(data[i].timestamp)

        let weekSteps = 0
        for(let j = 0; j< dataForSteps.length; j++){
            weekSteps += dataForSteps[j]
        }
        document.getElementById("numberOfSteps").innerHTML = weekSteps

        let calories = weekSteps * 0.05
        document.getElementById("numberOfCalories").innerHTML = calories.toFixed(0)

        let timestamp = 0
        let hours = 0
        let minutes = 0 
        let seconds = 0
        let resultTimeInSeconds = 0
        for(let k = 0; k< dataForTimestamp.length; k++){
            timestamp += dataForTimestamp[k]
            let date=new Date(timestamp)
            hours += date.getHours()
            minutes += date.getMinutes()
            seconds += date.getSeconds()
        }
        resultTimeInSeconds = (hours*3600 + minutes*60 + seconds)/data.length

        hours   = Math.floor(resultTimeInSeconds / 3600);
        minutes = Math.floor((resultTimeInSeconds - (hours * 3600)) / 60);
        let averageTime = hours + 'h ' + minutes + 'min'
    
        document.getElementById("timeInWalk").innerHTML = averageTime
      
    }
    document.querySelectorAll('.dayBox').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault()
            let arg = event.target.getAttribute('param');
            document.getElementById('day'+arg).classList.add('activeClass');
            sessionStorage.setItem("key", arg)
            sessionStorage.setItem("key3", arg)
	        sessionStorage.setItem("isActiveSession", true)
            location.href="detailed.html"
        })
    })   
}

request.send()




