var zucctest = Math.floor(Math.random() * 100) + 1;
var zucclist = ['Mega Zucc', 'Maybe Zucc', 'No Zucc'];
var colors = ["red","gold","lightgreen"];
    var j = 0;
    var p = 0;
    window.setInterval(function(){
        if(j<25){
            document.getElementById("zuccresult").innerText = zucclist[p];
            document.getElementById("zuccresult").style.color = colors[p];
            p++;
            if (p+1==4) {
                p = 0;
                peapea = 0;
            }
            j++;
        }else {
            if(zucctest <= 33) {
                document.getElementById("nozucc").src = "nozucc.png";
                document.getElementById("zuccresult").innerText = zucclist[2]
                document.getElementById("zuccresult").style.color = "red";
            } else if(zucctest <= 66) {
                document.getElementById("nozucc").src = 'maybezucc.png';
                document.getElementById("zuccresult").innerText = zucclist[1]
                document.getElementById("zuccresult").style.color = "gold";
            } else if(zucctest <= 100) {
                document.getElementById("nozucc").src = "zucc.png";
                document.getElementById("zuccresult").innerText = zucclist[0]
                document.getElementById("zuccresult").style.color = "lightgreen";
            }
            clearInterval();
        }
    },100);



console.log(zucctest)

