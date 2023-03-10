var seconds = 10
var miliSeconds = 100
document.getElementById("secs").innerHTML = `${seconds}.00`
var availableOfColors = ["yellow", "green", "red", "blue"]
var bgColor = availableOfColors[parseInt(Math.random() * 4)];
var fontColor = "black"
var nextBackgroundColor = ""
var nextFontColor = ""
document.body.style.background = bgColor
document.body.style.color = fontColor

//function for delay
async function delay(time)
{
    return new Promise(resolve => setTimeout(resolve, time));
}

//function for countdown
async function reverseCountdown() {
    for(var i=1; i<=10; i++)
    {
        seconds -= 1
        document.getElementById("secs").innerHTML = `${seconds}.00`
        miliSeconds = 100
        for (var j = 1; j <= 100; j++) 
        {
            await delay(7)
            miliSeconds -= 1
            document.getElementById("secs").innerHTML = `${seconds}.${miliSeconds}`
        }
        nextBackgroundColor = availableOfColors[parseInt(Math.random() * 4)];
        nextFontColor = availableOfColors[parseInt(Math.random() * 4)];
        while(nextBackgroundColor == document.body.style.background || nextFontColor == document.body.style.color || nextBackgroundColor == nextFontColor)
        {
            nextBackgroundColor = availableOfColors[parseInt(Math.random() * 4)];
            nextFontColor = availableOfColors[parseInt(Math.random() * 4)];
        }
        document.body.style.background = nextBackgroundColor
        document.body.style.color = nextFontColor
    }
}
async function countdown() {
    for(var i=1; i<=10; i++)
    {
        miliSeconds = 0
        for (var j = 1; j <= 99; j++) 
        {
            await delay(7)
            miliSeconds += 1
            document.getElementById("secs").innerHTML = `${seconds}.${miliSeconds}`
        }
        seconds += 1
        document.getElementById("secs").innerHTML = `${seconds}.00`
        nextBackgroundColor = availableOfColors[parseInt(Math.random() * 4)];
        nextFontColor = availableOfColors[parseInt(Math.random() * 4)];
        while(nextBackgroundColor == document.body.style.background || nextFontColor == document.body.style.color || nextBackgroundColor == nextFontColor)
        {
            nextBackgroundColor = availableOfColors[parseInt(Math.random() * 4)];
            nextFontColor = availableOfColors[parseInt(Math.random() * 4)];
        }
        document.body.style.background = nextBackgroundColor
        document.body.style.color = nextFontColor
    }
}
async function count() {
    while(true)
    {
        
        await reverseCountdown()
        document.body.style.background = "white"
        document.body.style.color = "white"
        await delay(1000)
        document.body.style.background = nextBackgroundColor
        document.body.style.color = nextFontColor
        await countdown()
        document.body.style.background = "white"
        document.body.style.color = "white"
        await delay(1000)
        document.body.style.background = nextBackgroundColor
        document.body.style.color = nextFontColor
    }
}
count()