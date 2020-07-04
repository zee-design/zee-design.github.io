function myCopy() {
    /* Get the text field */
    var copyLink = document.getElementById("myPage");
  
    /* Select the text field */
    copyLink.select();
    copyLink.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the link: " + copyLink.value);
  } 