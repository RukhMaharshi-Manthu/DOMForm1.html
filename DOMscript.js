function getRadioValue(theRadioGroup) {
        var elements = document.getElementsByName(theRadioGroup);
        for (var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].checked) {
                return elements[i].value;
            }
        }
    }


function getCheckBox(thisCheckBoxGroup) {
    var checkedValue = [];   
        var inputElements = document.getElementsByName(thisCheckBoxGroup);
        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                 checkedValue.push(inputElements[i].value);              
            }

        } return checkedValue;
    }
  


function res(){
  let x=document.getElementById("fnametxt").value;
   let y =document.getElementById("lnametxt").value;
 let z=getRadioValue('gender'); 
   let a=document.getElementById("msgtxt").value;
  let b=document.getElementById('code').value;
  let c=document.getElementById("country").value;;
let d=document.getElementById("state").value;
 let e= getCheckBox("chk") ;
 
  var table = document.getElementById("result");
  var row = table.insertRow(-1);
  
  var cell1 = row.insertCell(-1);
            var cell2 = row.insertCell(-1);
            var cell3 = row.insertCell(-1);
            var cell4 = row.insertCell(-1);
            var cell5 = row.insertCell(-1);
            var cell6 = row.insertCell(-1);
            var cell7 = row.insertCell(-1);
            var cell8 = row.insertCell(-1);
  cell1.innerHTML = x;
  cell2.innerHTML = y;
  cell3.innerHTML = z;
            cell4.innerHTML = a;
            cell5.innerHTML = b;
            cell6.innerHTML = c;
            cell7.innerHTML = d;
            cell8.innerHTML = e;
 document.getElementById("myForm").reset();
 
}