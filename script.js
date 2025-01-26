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
    removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`;
    removeButton.className = "remove-btn";
    removeButton.onclick = function () {
        table.deleteRow(newRow.rowIndex);
    };
    c4.appendChild(removeButton);

    document.getElementById("subject").value="";
    document.getElementById("credit").value="";
    document.getElementById("grade").value="";
}

function giveResult(){
    function getgradep(grade){
        let gradep;
        if(grade=="A+"){
            gradep=10;
        }
        else if(grade=="A"){
            gradep=9;
        }
        else if(grade=="B+"){
            gradep=8;
        }
        else if(grade=="B"){
            gradep=7;
        }
        else if(grade=="C+"){
            gradep=6;
        }
        else if(grade=="C"){
            gradep=5;
        }
        else if(grade=="D"){
            gradep=4;
        }   
        else{
            gradep=0;
        }
        return gradep;
    }
    
    let rows = document.getElementsByTagName("tr");
    const crdarr = [];
    const grdarr = [];


    for(let i = 1; i < rows.length; i++){
        let credit = parseInt(rows[i].cells[1].textContent.trim())
        crdarr.push(credit)


        var gradecell = rows[i].cells[2].textContent.trim();
        var gradepoint = getgradep(gradecell);
        grdarr.push(gradepoint);
    }
    
    const pointpro = [];
    for(let i = 0; i < crdarr.length; i++){
        pointpro.push(crdarr[i]*grdarr[i]);
    }
    
    function arrsum(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
          total += arr[i];
        }
        return total;
    }
    let crsum = arrsum(crdarr);
    let prosum = arrsum(pointpro);
    
    let result = prosum/crsum;
    document.getElementById("result").innerHTML = "Your SGPA is " + result.toFixed(2);
}

function clearResult(){
    let rows = document.getElementsByTagName("tr");

    var rowCount = rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }  
    
    document.getElementById("result").textContent="";
}
