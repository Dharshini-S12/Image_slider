var slider_image= document.querySelector('.slider_image');//for selecting the first element or a particular element
var images=['1.jpg','2.jpg','3.jpg','4.jpg'];
var i=0;// getting the current element

function prev(){
     if(i <=0 )
        i= images.length;
        i--;
        return setImg();
}
function next(){
    if(i >=images.length-1 )
       i= -1;
        i++;
        return setImg();
}


function setImg(){
    return slider_image.setAttribute('src','images/' +images[i]);
}