var wrap = document.getElementsByClassName('wrap')[0];
console.log(wrap);

var big = document.getElementsByClassName('big')[0];
console.log(big);

var cube = document.getElementsByClassName('cube')[0];
console.log(cube);


var wrapW = wrap.offsetWidth;
var wrapH = wrap.offsetHeight;

var wrapTop = wrap.offsetTop;
var wrapLeft = wrap.offsetLeft;

// 鼠标移动的事件处理函数
function fn1(e) {
    // console.log(e.clientX, e.clientY);

    // console.log(wrap.offsetTop, wrap.offsetLeft);

    big.style.display = 'block';
    cube.style.display = 'block';

    var cubeW = cube.offsetWidth;
    var cubeH = cube.offsetHeight;

    var x = e.clientX - wrapLeft;
    var y = e.clientY - wrapTop;

    console.log(x, y);

    // console.log(cubeH, cube.offsetWidth);


    if (x <= cubeW / 2) {
        cube.style.left = '0px';
    }

    if (x >= wrapW - cubeW / 2) {
        cube.style.left = (wrapW - cubeW) + 'px';
    }

    if (y <= cubeH / 2) {
        cube.style.top = '0px';
    }

    if (y >= wrapH - cubeH / 2) {
        cube.style.top = (wrapH - cubeH) + 'px';
    }


    // if (x > cubeW / 2 && x < wrapW - cubeW / 2 && y > cubeH / 2 && y < wrapH - cubeH / 2) {

    //     cube.style.top = (y - cubeH / 2) + 'px';
    //     cube.style.left = (x - cubeW / 2) + 'px';

    //     console.log(-(x - cubeW / 2) * 4 + 'px ' + -(y - cubeH / 2) * 4 + 'px');

    //     big.style.backgroundPosition = -(x - cubeW / 2) * 4 + 'px ' + -(y - cubeH / 2) * 4 + 'px';
    // }


    if (x > cubeW / 2 && x < wrapW - cubeW / 2) {
        cube.style.left = (x - cubeW / 2) + 'px';
        big.style.backgroundPositionX = -(x - cubeW / 2) * 4 + 'px';
    }

    if (y > cubeH / 2 && y < wrapH - cubeH / 2) {
        cube.style.top = (y - cubeH / 2) + 'px';
        big.style.backgroundPositionY = -(y - cubeH / 2) * 4 + 'px';
    }

}

// 鼠标移出的事件处理函数
function fn2() {
    big.style.display = 'none';
    cube.style.display = 'none';
}

wrap.addEventListener('mousemove', fn1);

wrap.addEventListener('mouseleave', fn2);