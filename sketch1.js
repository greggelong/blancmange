let cnv;
let y=[]
let y1=[]
let y2 =[]
k = 0;
function setup() {
  cnv =createCanvas(600, 600);
  cx = (windowWidth-cnv.width)/2
  cy = (windowHeight-cnv.height)/2
  cnv.position(cx,cy)

  angleMode(DEGREES);
  background(0);
  strokeWeight(2);
  translate(width / 2, height / 2); // move to center
  plotaxis();
  // s
  stroke(0,255,0)

  getplot(y,s,5);  // (array, function, value of global k)
  plotit(y,-1)
  plotit(y,1)
  // s1

  getplot(y1,s1,2) // (array, function, value of global k)
  stroke(0,255,255)
  plotit(y1,-1)
  plotit(y1,1)
  print(y)
  // blanc
  stroke(255,255,0)
  getplot(y2,bl,12); // (array, function, value of global k)
  plotit(y2,-1)
  plotit(y2, 1)
}

function plotaxis() {
  //axis
  stroke(255, 0, 0);
  line(0, -height / 2, 0, height);
  line(-width / 2, 0, width, 0);
}

function getplot(arr, fun, nk){
    // gets 600 values and puts them in an array (array, function, value of global k)
    // the width of the canvas is also 600 
    k= nk  // sets global value in the functions it calls
    let ind =0;
    for(let x= -1; x<1;x+=0.003334){
        
       arr[ind] = fun(x)
       ind++
    }
}

function s(x){
    //return abs(x)
    return abs(floor(x+1/2)-x)
}

function s1(x){
    return s(2**k*x)/2**k
}

function bl(x){
    // function does the summing 
    result =0
    for(let n =0; n<k;n++){
        result+= s((2**n)*x)/2**n

    }
    return result
}


function plotit(arr,u){
    noFill();
    beginShape()
    for(let i = 0; i<arr.length;i++){
        let y = arr[i]*(height/2)*u 
        let x = -(width/2)+i
        print(x,y)
        //point(x,y)
        vertex(x,y)

    }
    endShape()
}