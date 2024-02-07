// On load of page

myToDoList = [] ;

myToDoList = document.getElementsByTagName("li") ;

var i  ;

for (i = 0; i < myToDoList.length; i++) {

    var myNewSpan = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    myNewSpan.appendChild(txt);
    myNewSpan.className='clDelList' ;
    
    myNewSpan.onclick="delTask()" ;

    console.log(myNewSpan) ;

    myToDoList[i].appendChild(myNewSpan);

}

function delTask() {
    console.log("Inside delete)")
    var i = this.parentElent ;
    i.style.display = "none" ;
}
    
function addTask() {
    // Code to be executed
    // Create a new list
    console.log("Inside add Task Function") ;

    var myNewList = document.createElement("li");
    // check input task and take those task

    var taskDetail = document.getElementById("idIMain").value;

    var txt2 = document.createTextNode(taskDetail);

    myNewList.appendChild(txt2);
    
    myNewList.className="clLiView"

    // Add the tasl to the new list
    myNewList.value=taskDetail;

    // Find the last existing list
   
    document.getElementById("idUView").appendChild(myNewList);

     // Add a new delete button and attach to the new list

     var myNewSpan1 = document.createElement("span");
     var txt1 = document.createTextNode("\u00D7");
     myNewSpan1.appendChild(txt1);
     myNewSpan1.className='clDelList' ;
     myNewList.appendChild(myNewSpan1);

     // Blak out the input field
     document.getElementById("idIMain").value = " "


}