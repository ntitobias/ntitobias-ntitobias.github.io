function changeColor(className){
    //Ändra alla till svart
    for(i=0;i<document.getElementsByClassName("yall").length; i++)
    {
        document.getElementsByClassName("yall")[i].style.color = "Black";
    }
    //Ändra färg på kurser för valt år.
    for(i=0;i<document.getElementsByClassName(className).length; i++)
    {
        document.getElementsByClassName(className)[i].style.color = "Blue";
    }
}

