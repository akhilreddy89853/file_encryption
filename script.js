(function() {

var f = document.getElementById('f');
if (f.files.length)
  processFile();

f.addEventListener('change', processFile, false);


function processFile(e) {
  console.log(e)
  var file = f.files[0];
  var size = file.size;
  var content = f.files[0];
  
// any kind of extension (.txt,.cpp,.cs,.bat)
  var filename = "hello";

  var blob = new Blob([content], {type:"application/octet-stream"});
    var a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = this.filename;
        a.click();
    this.progress.complete();
}
})();
