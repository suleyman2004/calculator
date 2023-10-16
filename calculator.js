let first_number = document.getElementById("first_number");
let second_number = document.getElementById("second_number");
let mark = document.getElementById("mark");
let result = document.getElementById("result");
let a = 0;
function minus() {
  if (first_number.innerHTML != "") {
    first_number.style.display = "none";
    mark.innerHTML = "-";
    a = 0;
  } else {
    mark.innerHTML = "";
  }
}
function plus() {
  if (first_number.innerHTML != "") {
    first_number.style.display = "none";
    mark.innerHTML = "+";
    a = 0;
  } else {
    mark.innerHTML = "";
  }
}
function multiple() {
  if (first_number.innerHTML != "") {
    first_number.style.display = "none";
    mark.innerHTML = "*";
    a = 0;
  } else {
    mark.innerHTML = "";
  }
}
function divide() {
  if (first_number.innerHTML != "") {
    first_number.style.display = "none";
    mark.innerHTML = "/";
    a = 0;
  } else {
    mark.innerHTML = "";
  }
}
function dot() {
  if (mark.innerHTML == "") {
    result.innerHTML = " ";
    if (a == 0) {
      a += ".";
      first_number.innerHTML = a;
    } else {
      a = a + ".";
      first_number.innerHTML = a;
    }
  } else {
    if (a == 0) {
      a += ".";
      second_number.innerHTML = a;
    } else {
      a = a + ".";
      second_number.innerHTML = a;
    }
  }
}
function one() {
  if (mark.innerHTML == "") {
    result.innerHTML = " ";
    if (a == 0) {
      a = 1;
      first_number.innerHTML = a;
    } else {
      a = a + "1";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 1;
      second_number.innerHTML = a;
    } else {
      a = a + "1";
      second_number.innerHTML = a;
    }
  }
}
function two() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    if (a == 0) {
      a = 2;
      first_number.innerHTML = a;
    } else {
      a = a + "2";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 2;
      second_number.innerHTML = a;
    } else {
      a = a + "2";
      second_number.innerHTML = a;
    }
  }
}
function three() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    if (a == 0) {
      a = 3;
      first_number.innerHTML = a;
    } else {
      a = a + "3";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 3;
      second_number.innerHTML = a;
    } else {
      a = a + "3";
      second_number.innerHTML = a;
    }
  }
}
function four() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    if (a == 0) {
      a = 4;
      first_number.innerHTML = a;
    } else {
      a = a + "4";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 4;
      second_number.innerHTML = a;
    } else {
      a = a + "4";
      second_number.innerHTML = a;
    }
  }
}
function five() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    if (a == 0) {
      a = 5;
      first_number.innerHTML = a;
    } else {
      a = a + "5";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 5;
      second_number.innerHTML = a;
    } else {
      a = a + "5";
      second_number.innerHTML = a;
    }
  }
}
function six() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    if (a == 0) {
      a = 6;
      first_number.innerHTML = a;
    } else {
      a = a + "6";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 6;
      second_number.innerHTML = a;
    } else {
      a = a + "6";
      second_number.innerHTML = a;
    }
  }
}
function seven() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    if (a == 0) {
      a = 7;
      first_number.innerHTML = a;
    } else {
      a = a + "7";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 7;
      second_number.innerHTML = a;
    } else {
      a = a + "7";
      second_number.innerHTML = a;
    }
  }
}
function eight() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    if (a == 0) {
      a = 8;
      first_number.innerHTML = a;
    } else {
      a = a + "8";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 8;
      second_number.innerHTML = a;
    } else {
      a = a + "8";
      second_number.innerHTML = a;
    }
  }
}
function nine() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    if (a == 0) {
      a = 9;
      first_number.innerHTML = a;
    } else {
      a = a + "9";
      first_number.innerHTML = a;
    }
  } else {
    mark.style.display = "none";
    if (a == 0) {
      a = 9;
      second_number.innerHTML = a;
    } else {
      a = a + "9";
      second_number.innerHTML = a;
    }
  }
}
function zero() {
  if (mark.innerHTML == "") {
    result.innerHTML = "";
    a = a + "0";
    first_number.innerHTML = a;
  } else {
    mark.style.display = "none";
    a = a + "0";
    second_number.innerHTML = a;
  }
}
function clear1() {
  a = 0;
  first_number.innerHTML = "";
  second_number.innerHTML = "";
  mark.innerHTML = "";
  result.innerHTML = "";
  first_number.style.display = "inline";
  mark.style.display = "inline";
}

function equal() {
  if (
    first_number.innerHTML != "" &&
    second_number.innerHTML != "" &&
    mark.innerHTML != ""
  ) {
    let x1 = first_number.innerHTML;
    let x2 = second_number.innerHTML;
    let x3 = mark.innerHTML;
    clear1();
    if (x3 == "+") {
      result.innerHTML = Number(x1) + Number(x2);
    } else if (x3 == "-") {
      result.innerHTML = Number(x1) - Number(x2);
    } else if (x3 == "/") {
      result.innerHTML = Number(x1) / Number(x2);
    } else if (x3 == "*") {
      result.innerHTML = Number(x1) * Number(x2);
    }
  }else{}
} 
