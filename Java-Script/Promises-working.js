const theTruth = new Promise((resolve, reject) => {
    let ob=0;
    let op=2;
    if(ob>op){
        resolve("The truth is out there");
    } else {
        reject("The truth is not out there");
    }
});

theTruth.then((message) => {
    console.log(message);
}   ).catch((message) => {
    console.log(message);
} ).finally(() => {
    console.log("The end of the truth");
});