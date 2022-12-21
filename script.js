function loadCoupon()
{
    document.getElementsByClassName("coupon")[0].style.display='block';
    document.getElementsByClassName("onTop")[0].style.opacity='0.5';
    const collection = document.getElementsByClassName("c3");
    for(i=0;i<collection.length;i++)
    {
        collection[i].style.opacity='0.5';
    }
    // document.body.style.opacity="0.5";
}
const closeCoupon = () =>
{
    document.getElementsByClassName("coupon")[0].style.display='none';
    const collection1 = document.getElementsByClassName("c3");
    for(i=0;i<collection1.length;i++)
    {
        collection1[i].style.opacity='1';
    }
    // document.body.style.opacity="1";
}


function changeMode()
{
    // alert("hi");
    let mybody = document.body;
    mybody.classList.toggle('mydarkB');
    // let myclass = document.getElementsByClassName("mydiv")[0];
    // myclass.classList.toggle('mydark');
    
    const myCont = document.getElementsByClassName("Content1");
    for(i=0;i<myCont.length;i++)
    {
        myCont[i].classList.toggle('mydarkB');
    }
    const myCont2 = document.getElementsByTagName("h3");
    for(i=0;i<myCont2.length;i++)
    {
        myCont2[i].classList.toggle('mydarkH');
    }
    const myCont3 = document.getElementsByClassName("viewed");
    for(i=0;i<myCont3.length;i++)
    {
        myCont3[i].classList.toggle('mydarkB2');
    }
    const myCont4 = document.getElementsByClassName("viewed1");
    for(i=0;i<myCont4.length;i++)
    {
        myCont4[i].classList.toggle('mydarkB2');
    }
    const myCont5 = document.getElementsByClassName("product");
    for(i=0;i<myCont5.length;i++)
    {
        myCont5[i].classList.toggle('mydarkB2');
    }
    const myCont6 = document.getElementsByClassName("searchbar");
    myCont6.classList.toggle('mydarkB2');
    
    const myCont7 = document.getElementsByClassName("select1");
    for(i=0;i<myCont7.length;i++)
    {
        myCont7[i].classList.toggle('mydarkB2');
    }
    


}


