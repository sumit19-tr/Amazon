function loadCoupon()
{
    document.getElementsByClassName("coupon")[0],style.display='block';
    document.getElementsByTagName("body").style.opacity="0.7";
}
const closeCoupon = () =>
{
    document.getElementsByClassName("coupon")[0],style.display='none';
    document.getElementsByTagName("body").style.opacity="1";
}