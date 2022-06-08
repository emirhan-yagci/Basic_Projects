let btnStart = document.querySelector(".btnStart");
let btnStop = document.querySelector(".btnStop");
let btnReset = document.querySelector(".btnRes");

let $splitsecond = document.querySelector(".splitscnd");
let $second = document.querySelector(".second");
let $munite = document.querySelector(".minute");
let $hour = document.querySelector(".hour");

$splitsecond.textContent = "00";
$second.textContent = "00";
$munite.textContent = "00";
$hour.textContent = "00";

var stopWatch;
let split_second, second, munite, hour;
[split_second, second, munite, hour] = ["00", "00", "00", "00"];

btnStart.addEventListener("click", () => {


    stopWatch = setInterval(function () {
        //Salise
        split_second++;
        if (split_second < 10) {
            $splitsecond.textContent = `0${split_second}`;
        } else {
            $splitsecond.textContent = split_second;
        }
        //Saniye
        if (split_second == 60) {

            split_second = 0;
            second++;
            if (second < 10) {
                $second.textContent = `0${second}`;
            } else {
                $second.textContent = second;
            }
        }
        //Dakika
        if (second == 60) {
            second = 0;
            munite++;
            if (munite < 10) {
                $munite.textContent = `0${munite}`;
            } else {
                $munite.textContent = munite;
            }
        };
        //Saat
        if (munite == 60) {
            munite = 0;
            hour++;
            if (hour < 10) {
                $hour.textContent = `0${hour}`
            } else {
                $hour.textContent = hour;
            }
        }

    }, 16, 6)
});
btnStop.addEventListener("click", () => {
    clearInterval(stopWatch);
});
btnReset.addEventListener("click", () => {
    clearInterval(stopWatch);
    $splitsecond.innerHTML = "00";
    $second.textContent = "00";
    $munite.textContent = "00";
    $hour.textContent = "00"
});