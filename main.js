function preload()
{
}

function setup()
{
    canvas = createCanvas(680,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide()
    
    tint_color = ""
}

function draw()
{

    fill(0,255,0);
    rect(50,35,580,30);

    fill(0,255,0);
    rect(620,50,30,400);

    fill(0,255,0);
    rect(50,410,580,30);

    fill(0,255,0);
    rect(40,50,30,400);

    fill(255,0,0);
    circle(50,50,70);

    fill(255,0,0);
    circle(630,50,70);

    fill(255,0,0);
    circle(630,430,70);

    fill(255,0,0);
    circle(50,430,70);



    image(video,200,90,300,300);
    tint(tint_color);
}

function take_snapshot()
{
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}