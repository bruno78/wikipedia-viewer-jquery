$(document).ready(function() {


  $("input").keypress(function(e) {
    var code = e.keyCode || e.which;
    if (code == 13) {
       var query = $("input").val()
       if(query === "") {
         alert("Value cannot be empty")
       }
       else (
         alert("The value is: " + value)
         var wikiURL = "https://en.wikipedia.org/w/api.php?"
         var action = query
         
       )
    }
  })
})
