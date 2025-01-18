function addSubject(){
    let table = document.getElementById("table");

    let sub = document.getElementById("subject").value;
    let crd = document.getElementById("credit").value;
    let grd = document.getElementById("grade").value;

    let newRow = table.insertRow();

    let c1 = newRow.insertCell(0);
    let c2 = newRow.insertCell(1);
    let c3 = newRow.insertCell(2);
    let c4 = newRow.insertCell(3);

    c1.textContent = sub;
    c2.textContent = crd;
    c3.textContent = grd;
    
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove Subject";
    removeButton.className = "remove-btn";
    removeButton.onclick = function () {
        table.deleteRow(newRow.rowIndex);
    };
    c4.appendChild(removeButton);

    document.getElementById("subject").value="";
    document.getElementById("credit").value="";
    document.getElementById("grade").value="";
}

if(document.getElementById("grade")==document.getElementById("A+")){
    var gradep=10;
}
else if(document.getElementById("grade")==document.getElementById("A")){
    var gradep=9;
}
else if(document.getElementById("grade")==document.getElementById("B+")){
    var gradep=8;
}
else if(document.getElementById("grade")==document.getElementById("B")){
    var gradep=7;
}
else if(document.getElementById("grade")==document.getElementById("C+")){
    var gradep=6;
}
else if(document.getElementById("grade")==document.getElementById("C")){
    var gradep=5;
}
else if(document.getElementById("grade")==document.getElementById("D")){
    var gradep=4;
}
else{
    var gradep=0;
}

const crdarr = [];
for(let i = 1; i < rows.length; i++){
    crdarr.push(rows[i].textContent)
}
