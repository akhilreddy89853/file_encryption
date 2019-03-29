var content = import('node_modules\crypto-js');
(function() {

var f = document.getElementById('f');
if (f.files.length)
  processFile();

f.addEventListener('change', processFile, false);


function processFile(e) {
  alert(e);
  var file = f.files[0];
  var size = file.size;
    console.log(size);
  
  
    
        reader = new FileReader();

    reader.onload = function(e) {
        var data = e.target.result,
            iv = crypto.getRandomValues(new Uint8Array(16));
      
 var enc_file = crypto.subtle.generateKey({ 'name': 'AES-CBC', 'length': 256 }, false, ['encrypt', 'decrypt'])
            .then(key => crypto.subtle.encrypt({ 'name': 'AES-CBC', iv }, key, data) )
            .then(encrypted => {
                console.log(encrypted);
                
                alert('The encrypted data is ' + encrypted.byteLength + ' bytes long'); // encrypted is an ArrayBuffer
                 var blob = new Blob([encrypted], {type:"application/octet-stream"});
    var a = document.createElement("a");
    document.body.appendChild(a);
    var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = this.filename;
        a.click();
    this.progress.complete();
            })
 
            .catch(console.error);
    }
alert('In encrypt function');
    reader.readAsArrayBuffer(file);   

    
 

 
}
})();
