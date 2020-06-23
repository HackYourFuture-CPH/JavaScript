
let num = 4;
let ans = num / 0;


if isFinite(ans) { //isFinite not available in node.
    console.log(ans);
} else {
    console.log("ans is not finite");
}


