

/* * * * * * * Random Number Generator* * * * * * * * */

        function getRandomNumber(min,max){
            min=min-1;
            var diff=max-min;
            var randomNum=Math.floor(Math.random()*diff+(min+1));
            return randomNum;
        }
 /* * * * * * * * * * * * * * * * * * * * * * * * * * */

var specialCharStr="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var getRandomUpperCase={
    unicodeStart: 65,
    unicodeEnd: 90,
    name:"UpperCases",
    includeInPassword: false,

    getChar : function() {
        var ranNumber=getRandomNumber(this.unicodeStart,this.unicodeEnd);
        return String.fromCharCode(ranNumber);
    }
};

var getRandomLowerCase={
    unicodeStart: 97,
    unicodeEnd: 122,
    name:"LowerCases",
    includeInPassword: false,

    getChar : function() {
        var ranNumber=getRandomNumber(this.unicodeStart,this.unicodeEnd);
        return String.fromCharCode(ranNumber);
    }
};

var getRandomDigit={
    unicodeStart: 48,
    unicodeEnd: 57,
    name:"Numbers",
    includeInPassword: false,

    getChar : function() {
        var ranNumber=getRandomNumber(this.unicodeStart,this.unicodeEnd);
        return String.fromCharCode(ranNumber);
    }
};

var getRandomSpecialChar={
    name:"SpecialCharacters",
    includeInPassword: false,
    getChar : function() {
        var ranNumber=getRandomNumber(0,specialCharStr.length-1);
        return specialCharStr.charAt(ranNumber);
    }
};



/* * * * * * MAIN FUNCTION * * * * * */
function generatePassword(){
        var AllObjectArray=[getRandomUpperCase,getRandomLowerCase,getRandomDigit,getRandomSpecialChar];
        var selectedObjects=[];
        var finalPassword="";

        /* Getting the user inputs */

        var passwordLength=prompt("What is the LENGTH of the password?");
        if(passwordLength==0){alert("Error: Invalid entry. Password length must be greater than 0."); return;}

        getRandomUpperCase.includeInPassword=confirm("Do you want to include UPPER CASE?")
        getRandomLowerCase.includeInPassword=confirm("Do you want to include LOWER CASE?");
        getRandomDigit.includeInPassword=confirm("Do you want to include NUMBER?");
        getRandomSpecialChar.includeInPassword=confirm("Do you want to include SPECIAL CHARACTERS?");

        /* adding the user choices into the selectedObject array */
        var selectedStr="";
        for(var i=0; i<AllObjectArray.length; i++){
            if(AllObjectArray[i].includeInPassword==true){
               selectedObjects.push(AllObjectArray[i]);
               selectedStr+=AllObjectArray[i].name+", ";
            }
        }

        if(selectedObjects.length==0){alert("Error: At least 1 input type must be selected."); return;}

        alert("Your secure password length will be: "+passwordLength+"\nContains: "+selectedStr);
    

        /* forming the final password */
        for(var i=0; i<passwordLength; i++){
            finalPassword+=selectedObjects[getRandomNumber(0,selectedObjects.length-1)].getChar();
        }

       document.getElementById('log').innerText =  finalPassword;

    }

    function copyToClipBoard(){
        var text=document.getElementById('log');
        text.select();
        document.execCommand("copy");
        alert("Copied");
    }

    var btn=document.getElementById("generate-password");
    btn.addEventListener("click",generatePassword);

    var btn=document.getElementById("Copy-password");
    btn.addEventListener("click",copyToClipBoard);



/*
TODO
-inhance the user input UI
-enable "copy to clickboard"
*/
