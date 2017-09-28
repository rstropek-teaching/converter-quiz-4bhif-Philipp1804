// In order to get the tests green, rename `converter.js` to `convert.js`

// Consider parsing the parameter with `parseFloat` in the next line. You can check the result
// for falsynes to find out if the parameter is a float.
var num = process.argv[2];
var akt = process.argv[3];
var to = process.argv[5];
var help = num;

// Why didn't you use another `switch` instead of the many if's here?
if(akt == 'm'){
    switch(to){
        case 'mm': num=num*10;
        case 'cm': num = num*100;break;
    }
}
if(akt == 'cm'){
    switch(to){
        case 'm': num=num/100;break;
        case 'mm': num=num*10;break;
    }
}
if(akt == 'mm'){
    switch(to){
        case 'cm': num=num/100;break;
        case 'm': num=num/1000;break;
    }
}

if(akt == 'kg'){
    if(to == 'g')num=num*1000;
}

if(akt == 'g'){
    if(to == 'kg')num=num/1000;
}
if(num == help){
    // Requirements contained a different error message.
    console.error("Statement is false");
}else{
   console.log(num+" "+to); 
}

