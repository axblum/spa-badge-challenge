/*!
 * minQuery
 */
var miniQuery = (function(tag){
  var SweetSelector = function(){
    if (tag.substring(0,1) === "#"){
      var domElement = document.getElementById(tag.substring(1));
      return domElement;
    } else if (tag.substring(0,1) === ".") {
      tagArray = tag.split(" ")
      var domElement = document.getElementsByClassName(tag.substring(1));
      return domElement;
    } else {
      var domElement = document.getElementsByTagName(tag);
      return domElement;
    }
    };
  var element = SweetSelector(tag);

 return {
  hide: function(){
    for(var i = 0; i < element.length; i++){
      element[i].style.visibility = "hidden";
    }
  },
  show: function(){
     for(var i = 0; i < element.length; i++){
      element[i].style.visibility = "visible";
      console.log("*************************************")
      console.log(element[i].style.visibility)
    }
  },
  addClass: function(newTag){
    for(var i = 0; i <element.length; i++){
      element[i].classList.add(newTag)
    }
  },
  removeClass: function(newTag){
    for(var i = 0; i <element.length; i++){
      element[i].classList.remove(newTag)
    }
  },
  on: function(event, eventFunc) {
     for(var i = 0; i < element.length; i++) {
      element[i].addEventListener(event, eventFunc);
    }
  },
  trigger: function(event) {
    var e = new Event(event)
    for(var i = 0; i < element.length; i++) {
      element[i].dispatchEvent(e);
    }
  },
  ajax: function(options){
        var xhr = new XMLHttpRequest();
        var p1= new Promise(function(resolve,reject){
          xhr.onreadystatechange = function(){
            if (xhr.readyState !== 4){
              return;
            }
            if (xhr.status !== 200){
              console.log("HERE 200")
              return reject(xhr.response);
            }
          resolve(xhr.response);
          }
          xhr.open(options['type'], options['url'], true)
          xhr.send();
        })
         return p1
      },
  show: function(){
    return element
  }
}
});

var $ = function(tag){
  return miniQuery(tag).show();
}
