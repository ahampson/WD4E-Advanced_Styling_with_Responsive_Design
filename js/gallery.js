/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
        1) change the url for the background image of the div with the id = "image" 
        to the source file of the preview image
    
        2) Change the text of the div with the id = "image" 
        to the alt text of the preview image 
    */

    console.log("[+] Preview Text: " + previewPic.alt);
    console.log("[+] Preview Image URL: " + previewPic.src);

    document.getElementById('image').style.backgroundImage = "url('"+ previewPic.src+"')"
    document.querySelector('#image').innerText = previewPic.alt;
}


function unDo(){
    /* In this function you should 
        1) Update the url for the background image of the div with the id = "image" 
        back to the orginal-image.  You can use the css code to see what that original URL was
    
        2) Change the text  of the div with the id = "image" 
        back to the original text.  You can use the html code to see what that original text was
    */

    console.log("[-] Prevew Text Reset");
    console.log("[-] Preview Image URL Reset");

	document.querySelector('#image').innerText = "Hover over an image below to display here.";
    document.getElementById('image').style.backgroundImage = "url('')"
}

function addListeners() {
    console.log('[+] Adding event listeners to the images for the keyboard controls')
    const previews = document.querySelectorAll('.preview');
    previews.forEach(function(preview) {
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