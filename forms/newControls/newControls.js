/* Changed the items listed within the checkbox and changed the header to "Select an item"*/
checkBox.onchange=function(){
  NSB.MsgBox("Value is " + checkBox.value)
}

/* Changed the button to say "Submit" and changed the size of the button to large */
/* Changed the value of the text within the box to nothing so it doesn't appear until the submit button is clicked and a message is displayed, and changed the background color to transparent so it would blend in with the background of the form */

btnSubmit1.onclick=function(){
  lbloutput.value = "Thank you for choosing an item"
  image.hidden = True
}