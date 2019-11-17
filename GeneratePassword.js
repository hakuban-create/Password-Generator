

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
    name:"UpperCase",
    includeInPassword:false,

    getChar : function() {
        var ranNumber=getRandomNumber(this.unicodeStart,this.unicodeEnd);
        return String.fromCharCode(ranNumber);
    }
};

var getRandomLowerCase={
    unicodeStart: 97,
    unicodeEnd: 122,
    name:"LowerCase",
    includeInPassword:false,

    getChar : function() {
        var ranNumber=getRandomNumber(this.unicodeStart,this.unicodeEnd);
        return String.fromCharCode(ranNumber);
    }
};

var getRandomDigit={
    unicodeStart: 48,
    unicodeEnd: 57,
    name:"Number",
    includeInPassword:false,

    getChar : function() {
        var ranNumber=getRandomNumber(this.unicodeStart,this.unicodeEnd);
        return String.fromCharCode(ranNumber);
    }
};

var getRandomSpecialChar={
    name:"SpecialCharacters",
    includeInPassword:false,
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

        getRandomUpperCase.includeInPassword=prompt("Do you want to include UPPER CASE??")
        getRandomLowerCase.includeInPassword=prompt("Do you want to include LOWER CASE");
        getRandomDigit.includeInPassword=prompt("Do you want to include NUMBER?");
        getRandomSpecialChar.includeInPassword=prompt("Do you want to include SPECIAL CHARACTERS?");

        /* adding the user choices into the selectedObject array */
        var selectedStr="";
        for(var i=0; i<AllObjectArray.length; i++){
            if(AllObjectArray[i].includeInPassword=="true"){
               selectedObjects.push(AllObjectArray[i]);
               selectedStr+=AllObjectArray[i].name+" | ";
            }
        }

        if(selectedObjects.length==0){alert("Error: At least 1 input type must be selected."); return;}

        alert("Password length: "+passwordLength+" \nContains: "+selectedStr);
    

        /* forming the final password */
        for(var i=0; i<passwordLength; i++){
            finalPassword+=selectedObjects[getRandomNumber(0,selectedObjects.length-1)].getChar();
        }

        alert("Your password is: "+finalPassword);

    }

    var btn=document.getElementById("generate-password");
    btn.addEventListener("click",generatePassword);


