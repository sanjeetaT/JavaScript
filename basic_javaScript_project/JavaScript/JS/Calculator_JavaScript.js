// creates an object  tokeep track of values 
const Calculator = {
    // this is display 0 in the screen
    Display_Value: '0',
    // this will hold the first operand 
    First_Operand: null,
    // this is check weather or not the second operand
    Wait_Second_Operand: false,
    // this will hold the operator
    operator: null,
};

// this modifies values each time a button is clicked
function Input_Digit(digit){
    const{ Display_Value, Wait_Second_Operand} = Calculator;
    //we are checking to see if wait second operand is true and set
    // display value to key that was clicked.
    if (Wait_Second_Operand === true){
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else{
        // this overwrites display value if the current value is 0
        // otherwise it adds ontoit
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit;
    }
    }
    
    // this section hendle decimal points
    function Input_Decimal(dot){
        // this ensure that accidental clicking of the decimal point 
        // doesn't cause bug in your operation
        if(Calculator.Wait_Second_Operand === true) return;
        if(!Calculator.Display_Value.includes(dot)) {
            // we are saying that display value does not contain a decimal point 
            // we want to add a decimal point
            Calculator.Display_Value += dot;
        }
    }  

    // this section handle operators
    function Handle_Operator(Next_Operator) {
        const { First_Operand, Display_Value, operator} = Calculator
        //
        //
        //
        const Value_Of_Input = parseFloat(Display_Value);
        //
        //
        if(operator && Calculator.Wait_Second_Operand){
            Calculator.operator = Next_Operator;
            return;
        }

        if (First_Operand == null) {
            Calculator.First_Operand = Value_Of_Input;

        }  else if (operator) { // check if operator already exist
            const Value_Now = First_Operand || 0;
            //
            //
            //
            let result =  Perform_Calculation[operator] (Value_Now, Value_Of_Input);
            //
            result = Number(result).toFixed(9)
            //
            result = (result * 1).toString()
            Calculator.Display_Value = parseFloat(result);
            Calculator.First_Operand = parseFloat(result);
        }
        Calculator.Wait_Second_Operand = true;
        Calculator.operator = Next_Operator;
    }

    const Perform_Calculation = {
        '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,

        '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,

        '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,

        '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,

        '=': (First_Operand, Second_Operand) =>  Second_Operand,
    };

    function Calculator_Reset(){
      Calculator.Display_Value =  '0';
      Calculator.First_Operand = null;
      Calculator.Wait_Second_Operand = false;
      Calculator.operator = null;
    }

    //
    function Update_Display() {
        const display = document.querySelector('.calculator-screen');
        display.value = Calculator.Display_Value;
    }


Update_Display();
//
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //
    //
    const { target } = event;
    //
    if(!target.matches('button')) {
        return
    }

    if(target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if(target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //
    if(target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
} )
        
    
