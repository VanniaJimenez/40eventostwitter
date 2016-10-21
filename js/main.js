  
var tarea = document.getElementById("tarea");
var lista = document.getElementById ("lista");

var boton = document.getElementById("boton");

var close = document.getElementsByClassName("close");

var quitar = document.getElementsByTagName("li");







var adios = document.getElementById("lista").value = "";
 for (i = 0; i < close.length; i++) { 
 var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  adios[i].appendChild(span);
 };

boton.onclick = function(){
	funcional();
};

function crear(){
	var box=document.createElement("input");
	box.type = "checkbox";
  	var li = document.createElement("li");
  	var t = document.createTextNode(tarea.value);
   	li.appendChild(box);
   	li.appendChild(t);
   	lista.appendChild(li);
   	tarea.value = "";
}

function funcional() {
  console.log(tarea.value);
  if (tarea.value == "") {
  		alert("introduce una tarea");
  } else{
  	crear();
  }
};

 document.getElementById("tarea").value = "";
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }



