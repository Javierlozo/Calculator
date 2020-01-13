/*JRS Coding School 
Calculator
Name: Luis Lozoya - 01/12/20*/
var state = {
        firstVal: '',
        secondVal:'',
        operation: undefined,
}

function reset() {
    state.firstVal = '',
    state.secondVal = '',
    state.operation = undefined,
    document.getElementById("result").value = state.firstVal
}

function backspace() {
    var back = result.value;
    result.value = back.substring(0,back.length-1);
}

function buttonPressed(value) {
//If value is the equals symbol, call onEqualPressed()
    if (value === "=") {
        onEqualPressed()
    }

//If it is a number or it is decimal ->, update state firstVal or secondVal
    else if (typeof value === "number") {
        if (state.operation !== undefined) {
            state.secondVal = state.secondVal + String(value)
            document.getElementById("result").value = state.secondVal
        }

        else {
            state.firstVal = state.firstVal + String(value)
            document.getElementById("result").value = state.firstVal
        }
        
    }
    
//If it is an operator, we want to operate state.operation
    else if (typeof value === "string") {
        state.operation = String(value)
        document.getElementById("result").value = ''
    }
}

function onEqualPressed() {
    if (state.operation === '+'){
        var newVal = (parseInt(state.firstVal) + parseInt(state.secondVal))
        document.getElementById("result").value = newVal;
        state.firstVal = result.value
        state.operation = undefined
        state.secondVal = ''
        }

    else if (state.operation === '-'){
        var newVal = (parseInt(state.firstVal) - parseInt(state.secondVal))
        document.getElementById("result").value = newVal;
        state.firstVal = result.value
        state.operation = undefined
        state.secondVal = ''
        }

    else if (state.operation === '*'){
        var newVal = (parseInt(state.firstVal) * parseInt(state.secondVal))
        document.getElementById("result").value = newVal;
        state.firstVal = result.value
        state.operation = undefined
        state.secondVal = ''
        }

    else if (state.operation === '/'){
        var newVal = (parseInt(state.firstVal) / parseInt(state.secondVal))
        document.getElementById("result").value = newVal;
        state.firstVal = result.value
        state.operation = undefined
        state.secondVal = ''
        }
}