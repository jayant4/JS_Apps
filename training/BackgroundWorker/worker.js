let _flag = false;
let _count = 0;

onmessage = function (e) {
  _flag = e.data;
  Run();
}




function Run() {

  while (_flag) {
    ++_count;
    postMessage(_count);
  }


}
