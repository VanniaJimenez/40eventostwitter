var tarea = document.getElementById("tarea");
var lista = document.getElementById ("lista");
var boton = document.getElementById("boton");


boton.onclick = function(){
	funcional();
};


function crear(){
	var box=document.createElement("input");
	box.type = "checkbox";
  	var li = document.createElement("li");
  	var t = document.createTextNode(tarea.value);
  
   	//
    var borrar = document.createElement("SPAN");
	var borrar_txt = document.createTextNode("\u00D7");
	borrar.className = "close";
	borrar.appendChild(borrar_txt);
    
	
	li.appendChild(box);
   	li.appendChild(t);
   	li.appendChild(borrar);
	lista.appendChild(li);
	
	
	  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
	  }
	


	tarea.value = "";
	
};

function funcional() {
  console.log(tarea.value);
  if (tarea.value == "") {
  		alert("introduce una tarea");
  } else{
  	crear();
  }
};


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}



var checked = document.getElementById("input");

checked.addEventListener('click', function(ev) {

	alert("CHECKED");
}, false);
