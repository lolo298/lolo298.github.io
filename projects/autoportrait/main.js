async function restart(id, url, Sparks) {
    var img = document.getElementById(id);
    img.src = "";
    img.src = url;
    img = document.getElementById(id);
    img.style.opacity = '1';
    Sparks = document.getElementById(Sparks);
    Sparks.style.opacity = '0';
    await delay(4570);
    Sparks.style.opacity = '1';

}

async function easein(id, Sparks) {
    var gif = document.getElementById(Sparks);
    var tempG = window.getComputedStyle(gif);

    var img = document.getElementById(id);
    temp = window.getComputedStyle(img);

    var opacity = parseFloat(temp.getPropertyValue("opacity"));
    console.log(typeof(opacity));
    if (opacity < 0.9) {
        while (opacity < 0.9) {
            var gifOpacity = 0;
            opacity = opacity + 0.1;
            img.style.opacity = opacity.toString();
            gif.style.opacity = gifOpacity.toString();

            console.log(opacity);
            console.log('waiting')
            await delay(100);
        }
    } else if (opacity >= 0.9) {
        while (opacity > 0.1) {
            gifOpacity = 1;
            opacity = opacity - 0.1;
            gif.style.opacity = gifOpacity.toString();
            img.style.opacity = opacity.toString();
            console.log(opacity);
            console.log('waiting')
            await delay(100);
        }
    }
}

function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

function show(id) {
    var img = document.getElementById(id);
    img.style.opacity = '1';
}
var bloom = false;
async function time(clock, time) {
    bloom = false;

    var Disable = document.getElementById('SparksF');
    Disable.style.display = 'none';

    Disable = document.getElementById('SparksV');
    Disable.style.display = 'none';

    Disable = document.getElementById('Trigger');
    Disable.style.display = 'none';

    var Clock = document.getElementById(clock);
    var Time = document.getElementById(time);
    Clock.style.display = 'Inline';
    Time.style.display = 'Inline';
    var rotation = 180;
    Time.style.transform = "rotate(" + rotation + "deg)";

    for (var i = 0; i < 12; i++) {
        rotation = rotation + 30;
        Time.style.transform = "rotate(" + rotation + "deg)";
        console.log(Time.style.transform);
        await delay(500);
    }

    Clock.style.display = 'none';
    Time.style.display = 'none';
    Disable = document.getElementById('SparksF');
    Disable.style.display = 'inline';
    Disable = document.getElementById('SparksV');
    Disable.style.display = 'inline';
    Disable = document.getElementById('Trigger');
    Disable.style.display = 'block';
    bloom = true;

}