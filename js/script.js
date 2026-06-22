/*Name of this external file: script.js*/

function upDate(previewPic){

    console.log("[+] Preview Text: " + previewPic.alt);
    console.log("[+] Preview Image URL: " + previewPic.src);

    document.getElementById('image').style.backgroundImage = "url('"+ previewPic.src+"')"
    document.querySelector('#image').innerText = previewPic.alt;
}


function unDo(){
    console.log("[-] Prevew Text Reset");
    console.log("[-] Preview Image URL Reset");

	document.querySelector('#image').innerText = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')"
}

function addListeners() {
    console.log('[+] Adding Tab Index for all photos')
    const previews = document.querySelectorAll('.photo');
    previews.forEach(function(preview) {
        preview.addEventListener('mouseover', function() {
            upDate(preview);
        });
        preview.addEventListener('focus', function() {
            upDate(preview);
        });
        preview.addEventListener('blur', function() {
            unDo();
        });
        preview.setAttribute('tabindex', "0")
        console.log('[+][=>] Adding TabIndex to:',preview.alt)
    });
}