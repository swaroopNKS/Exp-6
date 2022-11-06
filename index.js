function display() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var period = "AM";

    if (h > 12) {
        period = "PM";
    }

    var time = h + ":" + m + ":" + s + " " + period;
    document.getElementById('time').innerHTML = time;
}

function start() {
    setInterval("display()", 1000);
}

function color_ch() {
    var red = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var color = "rgb(" + red + "," + green + "," + blue + ")";

    document.getElementsByClassName("dynamic_bg")[0].style = "background-color:" + color;
    setTimeout(color_ch, 2000);
}
color_ch();

function incSize() {
    document.getElementById('para1').style.fontSize = "28px";
}

function decSize() {
    document.getElementById('para1').style.fontSize = "15px";
}


// method1
function init() {
    imgobj = document.getElementById('c-img');
    imgobj.style.left = '0px';
}

function moveRight() {
    imgobj.style.left = parseInt(imgobj.style.left) + 1 + 'px';
    animate = setTimeout('moveRight()', 10);

    if (parseInt(imgobj.style.left) >= 1300) {
        stop();
    }
}

function stop() {
    clearTimeout(animate);
}

// method2
/*function start() {
    imgobj = document.getElementById('c-img');
    imgobj.style.left = '0px';
}
function moveRight(){
    imgobj.style.left = parseInt(imgobj.style.left) + 10 + 'px';
}
function stop(){
    imgobj.style.left = '0px';
}*/



function student() {
    var stu_obj = [
        { name: 'Swaroop', r_num: '123', dob: '20-apr-1995' },
        { name: 'NKS', r_num: '456', dob: '05-jan-1998' },
        {name: 'John', r_num: '789', dob: '05-jan-2001'}
    ];

    for (var i = 0; i < stu_obj.length; i++) {
        var n = stu_obj[i].name;
        var r = stu_obj[i].r_num;
        var d = stu_obj[i].dob;
        console.log(stu_obj[i].dob.slice(-4))
        if(parseInt(stu_obj[i].dob.slice(-4)) > 2000){


            document.getElementById("boxForStu1").innerHTML += "Name: " + n + "<br>" + "Register Number: " + r + "<br>" + "Date Of Birth: " + d + "<br><br><br>";
        }
        else{
            document.getElementById("boxForStu2").innerHTML += "Name: " + n + "<br>" + "Register Number: " + r + "<br>" + "Date Of Birth: " + d + "<br><br><br>";
        }

    }
}