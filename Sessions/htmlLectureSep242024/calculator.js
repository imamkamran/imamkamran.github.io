function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch {
        document.getElementById('result').value = 'Error';
    }
}

// Math functions
function square() {
    let value = eval(document.getElementById('result').value)
    document.getElementById('result').value = value**2;
}

function cube() {
    let value = eval(document.getElementById('result').value)
    document.getElementById('result').value = value**3;
}

function power() {
    let base = prompt("Enter base:");
    let exponent = prompt("Enter exponent:");
    let result = Math.pow(base, exponent);
    document.getElementById('result').value = result;
}

function sqrt() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.sqrt(value);
}

function cubeRoot() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.cbrt(value);
}

function nthRoot() {
    let base = prompt("Enter base:");
    let n = prompt("Enter root value:");
    let result = Math.pow(base, 1 / n);
    document.getElementById('result').value = result;
}

function sin() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.sin(value);
}

function cos() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.cos(value);
}

function tan() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.tan(value);
}

function arctan() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.atan(value);
}

function arcsin() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.asin(value);
}

function arccos() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.acos(value);
}

function log() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.log10(value);
}

function antiLog() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = Math.pow(10, value);
}

function factorial() {
    let value = eval(document.getElementById('result').value);
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }
    document.getElementById('result').value = result;
}

function inverse() {
    let value = eval(document.getElementById('result').value);
    document.getElementById('result').value = 1/value;
}

    function appendToResult(value) {
        document.getElementById('result').value += value;
    }

    function clearResult() {
        document.getElementById('result').value = '';
    }

    function calculateResult() {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    }

    // Listen for keydown events to make the buttons typeable
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];

        if (validKeys.includes(key)) {
            appendToResult(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Backspace') {
            clearResult();
        }
    });
