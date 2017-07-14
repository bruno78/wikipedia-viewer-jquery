let titleToLink = (title)=> {
  let link = ''
  for(var i = 0; i < title.length; i++) {
    if(title[i] === " ") {
      link += "_"
    }
    else {
      link += title[i]
    }
  }
  return link
}


$(document).ready(()=> {

  $("input").keypress((e)=> {
    let code = e.keyCode || e.which;
    if (code == 13) {
       let searchTerm = $("input").val()
       if(searchTerm === "") {
         alert("Value cannot be empty")
       }
       else {
         let wikiURL = "https://en.wikipedia.org/w/api.php?"
         let data = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + searchTerm + "&format=json&callback=?"

         $.getJSON(data, (data)=> {
           let results = data.query.search
           let = items = []
           for(let i = 0; i < results.length; i++) {
             let link = "https://en.wikipedia.org/wiki/" + titleToLink(results[i].title)
             items.push("<li><a href=" + '"' + link + '"' + " target=\"_blank\"><h2>" + results[i].title + "</h2>" +
                             "<p>" + results[i].snippet +"</p></a></li>")
           }
           $("<ul/>", {
             "class":"display-list",
             html: items.join("")
           }).appendTo(".display")
         })
       }
    }
  })
})
