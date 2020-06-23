function fun() {
    hun();
    console.log("fun");
}
function gun() {
    fun();
    console.log("gun");
}
function hun() {
    console.log("hun");
}
gun();