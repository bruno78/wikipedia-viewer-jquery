$(document).ready(function() {

//https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json

  $("input").keypress(function(e) {
    let code = e.keyCode || e.which;
    if (code == 13) {
       let searchTerm = $("input").val()
       if(searchTerm === "") {
         alert("Value cannot be empty")
       }
       else {
         //https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json
         let wikiURL = "https://en.wikipedia.org/w/api.php?"
         let data = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&format=json&callback=?"


         $.getJSON(data, function(data) {
           let results = data.query.search
           console.log(results)
           let = items = []
           for(var i = 0; i < results.length; i++) {
             items.push("<li><h2>" + results[i].title + "</h2>" +
                             "<p>" + results[i].snippet +"</p></li>")
           }
           //$("#title").html(JSON.parse(JSON.stringify(results[i].title)))
           //$("#").html(JSON.parse(JSON.stringify(results[i].snippet)))
           $("<ul/>", {
             "class":"display-list",
             html: items.join("")
           }).appendTo(".display")
         })
         /*
         $.ajax({
            url: data,
            data: queryData,
            dataType: 'json',
            type: 'GET',
            headers: { 'Api-User-Agent': 'Example/1.0' },
            success: function(data) {
               // do something with data
               $("display").html(data)
            }
         }) */

       }
    }
  })
})
