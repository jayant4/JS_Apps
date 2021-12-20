let _flag = false;
let _count = 0;

function start() {
    if (_flag) return;
    
    _flag = true;
    _count = 0;
    Run();
}
function pause() {
    _flag = false;
    Run();
    document.getElementById("output").innerHTML = `${_count}`;
    
}
function resume() {
    if (_flag) return;
    
    _flag = true;
    Run();
    document.getElementById("output").innerHTML = `${_count}`;
}
const stop = () => {
    _flag = false;
    _count = 0;
    Run();

    document.getElementById("output").innerHTML = `${_count}`;
}



const worker = new Worker("worker.js");
const Run = () => {
    worker.postMessage(_flag);
    console.log("Message posted to worker");

}

worker.onmessage = (e) => {
    _count = e.data;
    document.getElementById("output").innerHTML = `${e.data}`;
}



