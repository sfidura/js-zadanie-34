var str1 = "Uwielbiam JavaScript";
var str2 = "Jestem świetnym programistą";

function porownajNapisy(napis1, napis2){
    if(napis1.length > napis2.lenght){
        wynik = napis1;
    }
    else{
        wynik = napis2;
    }
    return wynik;
}

console.log(porownajNapisy(str1, str2));