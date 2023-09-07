# function plot in p5js

 I read an article about number theory being built in to our genetic code

 https://www.sciencealert.com/scientists-discover-pure-math-is-written-into-evolutionary-genetics

 The blancmange curve was mentioned.  It has a fractal like quality.

 it is described with math functions.  

Here I am calculating and plotting the functions

I used a different approach than earlier function plots

I am collecting y coordinates in an array.  I am collecting 600 points from -1 to 1 using a for loop

```javascript
let ind =0;
    for(let x= -1; x<1;x+=0.003334){ // give 600 values
        
       arr[ind] = fun(x)
       ind++
    }

```

then I plot those y values as a height at an x

