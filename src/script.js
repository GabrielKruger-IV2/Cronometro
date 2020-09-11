var ss = 0
var mm = 0
var hh = 0
var hora =(hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
var crono = 0
var lap = 1
var contStart = 0

$("#btnIniciar").click(function () {
    if (contStart == 0) {
        crono = setInterval(() => {
            ss++
            if (ss == 59) {
                mm++;
                ss = 0
                if (mm == 59) {
                    mm = 0;
                    hh++;
                }
            }
            hora = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
            $("#pTempo").text(hora)
        }, 1000)
        contStart = 1
    }
})
$("#btnPausar").click(function () {
    clearInterval(crono)
    contStart = 0
})

$("#btnReiniciar").click(function () {
    clearInterval(crono)
    ss = 0
    mm = 0
    hh = 0
    hora = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    lap = 1
    contStart = 0
    $("#pTempo").text(hora)

    var table = document.getElementById("table")
    table.innerHTML = `
    <tr>
         <td>
             <p>Lap</p>
         </td>
         <td>
             <p>Time</p>
          </td>
        </tr>`

})
$("#btnLap").click(function () {
    var table = document.getElementById("table")
    table.innerHTML += `<tr>
                    <td>
                         <p>${lap}</p>
                    </td>
                    <td>
                        <p>${hora}</p>
                    </td>
                </tr>`
    lap++
})