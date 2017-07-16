let items = []
let results = ''

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

let search = ()=> {
  let value = $('#search').val()
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + value,
    dataType: 'jsonp',
    type: 'GET',
    headers: {
      'Api-User-Agent': 'Example/1.0'
    },
    success: (data)=> {

      // Clearing the children from previous searches
      $('.display-results').empty()
      // Clearing the array containing the results
      let results = data.query.search
      items.length = 0
      for(let i = 0; i < results.length; i++) {
        let link = "https://en.wikipedia.org/wiki/" + titleToLink(results[i].title)
        items.push("<li class=\"collection-item\"><a href=" + '"' + link + '"' + " target=\"_blank\"><h4>" + results[i].title + "</h4>" +
                        "<p>" + results[i].snippet +"</p></a></li>")
      }

      result = $("<ul/>", {
        "class":"collection",
        html: items.join("")
      })

      $('#wikipedia-viewer').animate({top: '10%'}, ()=>{
        $(result).hide().appendTo(".display-results").fadeIn(1000)
      })
    } // .success
  })
}

$(document).ready(()=> {

  $("input").keypress((e)=> {
    let code = e.keyCode || e.which
    if (code == 13) {
       let searchTerm = $("#search").val()
       if(searchTerm === "") {
         let $toastContent = $('<p>Heya, put some text! :D</p>')
         Materialize.toast($toastContent, 2000, 'alert')
       }
       else {
         search()
       }
    }
  })
})
