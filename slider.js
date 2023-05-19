var num=0;
var imageArr=["0.jpg","1.jpg","2.jpg"]
var headerTag=document.querySelector("header")

function autoslide()
{
    num++;
    if(num<=imageArr.length-1)
    {
        headerTag.style.backgroundImage= `url(${imageArr[num]})`
    }
    else{
        num=0;
        headerTag.style.backgroundImage= `url(${imageArr[num]})`

    }  
    setTimeout(autoslide,3000)  
}
autoslide()

function slideRight()
{
    num++;
    if(num<=imageArr.length-1)
    {
        headerTag.style.backgroundImage= `url(${imageArr[num]})`
    }
    else{
        num=0;
        headerTag.style.backgroundImage= `url(${imageArr[num]})`

    }
}
function slideLeft()
{
    num--;
    if(num<0)
    {
        num=imageArr.length-1;
        headerTag.style.backgroundImage= `url(${imageArr[num]})`
    }
    else{
        headerTag.style.backgroundImage= `url(${imageArr[num]})`

    }
}