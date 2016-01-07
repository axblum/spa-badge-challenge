window.onload = function () {
  var peopleSource = document.getElementById("people-template").innerHTML;
  var peopleTemplate = Handlebars.compile(peopleSource);
  // $(".full-badges-index")[0].innerHTML = ""


  miniQuery("h1").ajax({
    type: "GET",
    url: "http://localhost:3000"
  }).then(function(data){

    var people = JSON.parse(data)
    var context = {people}
    var output = peopleTemplate(context)

   $("ul")[0].innerHTML = output
    // console.log(output)
    var ul = $("ul")[0]
    // for(var person of people ){
    //   var li = document.createElement("li")
    //   var a = document.createElement("a")
    //   a.setAttribute("href", person.id)
    //   var textnode = document.createTextNode(person.name)
    //   a.appendChild(textnode)
    //   li.appendChild(a)
    //   ul.appendChild(li)
    // }
    miniQuery("li").on("click", function(event){
      event.preventDefault()
      $("ul")[0].innerHTML = ""
      getStudentInfo(this.children[0].getAttribute("href"))
      miniQuery(".full-badges-index").show()
    })

  }).catch(function(){
    console.log()
  })

}


var getStudentInfo = function(id){
  miniQuery("h1").ajax({
    type: "GET",
    url: "http://localhost:3000/students/" + id
  }).then(function(data){
    console.log(data)

    var studentSource = document.getElementById("student-name-template").innerHTML;
    var studentTemplate = Handlebars.compile(studentSource);

    var student = JSON.parse(data)
    var context = {student}
    var output = studentTemplate(context)
    console.log(output)
    console.log($(".student-name"))
    $(".show-user")[0].innerHTML = output

    getStudentBadges(id)
  })
}

var getStudentBadges  = function(id){
  miniQuery("h1").ajax({
    type: "GET",
    url: "http://localhost:3000/students/" + id +"/badges"
  }).then(function(data){
    console.log(data)
    console.log($("#badges-template"))

    miniQuery(".students-index").hide()
    var badgesSource = document.getElementById("badges-template").innerHTML;
    var badgesTemplate = Handlebars.compile(badgesSource);

    var badges = JSON.parse(data)
    var context = {badges}
    var output = badgesTemplate(context)
    $(".badges-index")[0].innerHTML = output
  })
}
