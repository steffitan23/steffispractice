var numberofClicks = 0;
var listNumber = 1;
window.onload=function(){
    var listTrack1 = document.getElementById("button1");
    var listTrack2 = document.getElementById("button2");
    var listTrack3 = document.getElementById("button3");
    var listTrack4 = document.getElementById("button4");
    var listTrack5 = document.getElementById("button5");

    listTrack1.addEventListener("click", function(){ removeListTrack(1); });
    listTrack2.addEventListener("click", function(){ removeListTrack(2); });
    listTrack3.addEventListener("click", function(){ removeListTrack(3); });
    listTrack4.addEventListener("click", function(){ removeListTrack(4); });
    listTrack5.addEventListener("click", function(){ removeListTrack(5); });
}

function keypressLog(event){
    var todoInput = document.getElementById("todoinput").value;
    alertMessage();
    if (event.keyCode == 13 || event.which == 13) {
        expressInputValue(todoInput);

    }
}

function expressInputValue(inputVal) {
    var listOutputNumber = 'list' + listNumber;
    document.getElementById(listOutputNumber).innerHTML = inputVal;
    alertMessage();
    listNumber++;
    listAppear(listNumber);
    clearInput('todoinput');
    return listNumber;
}

function listAppear(listNumber) {
    switch (listNumber) {
        case 2:
            line1.style.display = 'flex';
            break;
        case 3:
            line2.style.display = 'flex';
            break;
        case 4:
            line3.style.display = 'flex';
            break;
        case 5:
            line4.style.display = 'flex';
            break;
        case 6:
            line5.style.display = 'flex';
            break;
    }
}


function clearInput(clearedInput) {
    document.getElementById(clearedInput).value = '';
    return listNumber;
}

function alertMessage() {
    if (listNumber == 6) {
        alert("You can't add more than 5 items!")
    }
}

function removeListTrack(listTrackNumber) {
    var currentInputValue1 = document.getElementById("list1").innerHTML;
    var currentInputValue2 = document.getElementById("list2").innerHTML;
    var currentInputValue3 = document.getElementById("list3").innerHTML;
    var currentInputValue4 = document.getElementById("list4").innerHTML;
    var currentInputValue5 = document.getElementById("list5").innerHTML;
    switch (listTrackNumber) {
        case 1:
            document.getElementById("list1").innerHTML = currentInputValue2;
        case 2:
            document.getElementById("list2").innerHTML = currentInputValue3;
        case 3:
            document.getElementById("list3").innerHTML = currentInputValue4;
        case 4:
            document.getElementById("list4").innerHTML = currentInputValue5;
        case 5:
            document.getElementById("list5").innerHTML = '';
            numberofClicks++;
            deleteRemainingSelector();
            return numberofClicks;
}
}

function deleteRemainingSelector() {
    console.log(listNumber);
    switch(listNumber) {
        case 2:
            deleteRemaining1();
            alert("Great job!");
            listNumber = 1;
            confetti.start()
            setTimeout(function(){ confetti.stop(); }, 3000);
            break;
        case 3:
            deleteRemaining2();
            break;
        case 4:
            deleteRemaining3();
            break;
        case 5:
            deleteRemaining4();
            break;
        case 6:
            deleteRemaining5();
    }
        
}

function deleteRemaining1() {
    document.getElementById("line1").style.display = "none";
}

function deleteRemaining2() {
    document.getElementById("line2").style.display = "none";
    listNumber--;
}

function deleteRemaining3() {
    document.getElementById("line3").style.display = "none";
    listNumber--;
}

function deleteRemaining4() {
    document.getElementById("line4").style.display = "none";
    listNumber--;
}

function deleteRemaining5() {
    document.getElementById("line5").style.display = "none";
    listNumber--;
}
