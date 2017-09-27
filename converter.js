var num = process.argv[2];
var akt = process.argv[3];
var to = process.argv[5];
var help = num;

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
    console.error("Statement is false");
}else{
   console.log(num+" "+to); 
}

