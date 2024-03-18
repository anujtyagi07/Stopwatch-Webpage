// Assigning initial values through array
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// selecting timr through DOM
let displayTime = document.getElementById("timer");

let timer = null;

// StopWatch Function
function stopWatch(){
    milliseconds += 10; // increment milliseconnds by 10
    if(milliseconds == 1000){ //when milliseconds reaches to 1000 change it to 00 and increase the secondsby 1
        milliseconds = 00;
        seconds++;
        if(seconds == 60){ //when seconds reaches to 60, change it to 0 and increase minutes by 1
            seconds = 0;
            minutes++;
            if(minutes == 60){ //when minutes reaches to 60, change it to 0 and increase hours by 1
                minutes = 0;
                hours++;
            }
        }
    }

    // changer hours to String if hours<10
    let h = hours < 10 ? "0" + hours : hours;
    // changer minutes to String if minutes<10
    let m = minutes < 10 ? "0" + minutes : minutes;
    // changer seconds to String if seconds<10
    let s = seconds < 10 ? "0" + seconds : seconds;
    // changer milliseconds to String if millisecondss<10
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    // display timer
    displayTime.innerHTML = h + ":" + m + ":" + s + "." + ms;
}

// create a function to start the StopWatch
function watchStart(){
    // if any ongoing interval is present (or running) stop it and then restart it 
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 10);
}

// create a function to stop the StopWatch
function watchStop(){
    // clear the previous interval
    clearInterval(timer);
}

// create a function to reset the StopWatch
function watchReset(){
    clearInterval(timer);
    // clear the previous interval and assign the default values to the timer 
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    displayTime.innerHTML = "00:00:00.000"
}