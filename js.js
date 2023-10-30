function express(operand1, operand2, operator) {
    let op1 = parseInt(operand1, 2);
    let op2 = parseInt(operand2, 2);
    let res;
 
    //dodanie operatora do wyboru
    switch(operator) {
        //jesli klikniety + to dodawanie
        case '+':
            res = op1+op2;
            break;
            //jesli klikniety - to odejmowanie
        case '-':
            res = op1-op2;
            break;
            //jesli klikniety * to mnozenia
        case '*':
            res = op1*op2;
            break;
            //jesli klikniety / to dzielenie
        case '/':
            res = op1/op2;
            break;
    }
    return res.toString(2);
}
//gdy klikniemy operator to zalacza sie wybrana funkcja pod niego przypisana
let operand1="", operand2="", operator="", myres="", opvis=false;
document.getElementById('btnEql').onclick = function() {
    //wyswietlenie operatora
    myres = express(operand1, operand2, operator);
    document.getElementById('res').innerHTML = myres;
}
//wyswietlanie wyniku
function showex() {
    document.getElementById('res').innerHTML = operand1+operator+operand2;
}

//clearowanie znakow
document.getElementById('btnClr').onclick = function() {
    myres = "";
    operand1 = "";
    operand2 = "";
    operator = "";
    opvis = false;
    document.getElementById('res').innerHTML = myres;
}

// rozne funkcjonalne buttony

// dzialanie buttona jak sie kliknie + to dodawanie
document.getElementById('btnSum').onclick = function() {
    operator = '+';
    opvis = true;
    showex();
}

// dzialanie buttona jak sie kliknie - to  odejmowanie
document.getElementById('btnSub').onclick = function() {
    operator = '-';
    opvis = true;
    showex();
}

// dzialanie buttona jak sie kliknie * to mnozenie
document.getElementById('btnMul').onclick = function() {
    operator = '*';
    opvis = true;
    showex();
}

// dzialanie buttona jak sie kliknie / to dzielenie
document.getElementById('btnDiv').onclick = function() {
    operator = '/';
    opvis = true;
    showex();
}

document.getElementById('btn0').onclick = function() {
    if (opvis === true) {
        operand2 += '0';
    } else {
        operand1 += '0';
    }
    showex();
}

document.getElementById('btn1').onclick = function() {
    if (opvis === true) {
        operand2 += '1';
    } else {
        operand1 += '1';
    }
    showex();
}
