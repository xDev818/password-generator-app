const 
  form = document.querySelector('form'),
  rangeInput = form['range'],
  upperCase = form['uppercase'],
  lowerCase = form['lowercase'],
  numbers = form['number'],
  _symbol = form['symbol'],
  _rangeValue = form.querySelector(".character_length h2");
  
let 
  _data_box_value = document.querySelector(".wrapper .data_box input"),
  _copy_data_value = document.querySelector(".wrapper .data_box button"),
  strengthIndicator = form.querySelector(".strength .spans_container h3"),
  strengthBar = form.querySelectorAll(".strength .spans_container span"),
  generatePasswordButton = form.querySelector("button"),
  UpperCaseMethod = "QWERTYUIOPASDFGHJKLZXCVBNM",
  LowerCaseMethod = "qwertyuiopasdfghjklzxcvbnm",
  numbersMethod = "1234567890",
  SymbolsMethod = "!@#$%^&*()-",
  rangeValue = 5;
  _methods = [];

// Regular Function
function rangeColor (data) {

  rangeInput.style.background = `linear-gradient(to right, #f50 ${data}%, #ccc ${data}%)`;

}

function strengthChecker(arg) {

  
}

// Class Function
class CheckBox {

  constructor (data, number) {
    
    this.checkBoxName = data;
    this.checkedBox = number;

  }

  checkedBoxChecker () {

    switch(this.checkBoxName === this.checkBoxName) {

      case this.checkBoxName === 'uppercase' : this.upperCaseFunc();

          break;

      case this.checkBoxName === 'lowercase' : this.lowerCaseFunc();

          break;

      case this.checkBoxName === 'number' : this.numberFunc();

          break;

      case this.checkBoxName === 'symbol' : this.symbolFunc();

          break;

      default : ''

          break;

    }

  }

  upperCaseFunc () {
    
    if(upperCase.checked === true) {
      
      _methods.push(UpperCaseMethod);
      
    } else {
      
      _methods = _methods.filter(m => m !== UpperCaseMethod);
      
    }
    
    this.strengthMeter();

  }

  lowerCaseFunc () {

    if(lowerCase.checked === true) {
      
      _methods.push(LowerCaseMethod);
      
    } else {
      
      _methods = _methods.filter(m => m !== LowerCaseMethod);
      
    }
    
    this.strengthMeter();

  }

  numberFunc () {

    if(numbers.checked === true) {
      
      _methods.push(numbersMethod);
      
    } else {
      
      _methods = _methods.filter(m => m !== numbersMethod);
      
    }
    
    this.strengthMeter();

  }

  symbolFunc () {

    if(_symbol.checked === true) {
      
      _methods.push(SymbolsMethod);
      
    } else {
      
      _methods = _methods.filter(m => m !== SymbolsMethod);
      
    }
    
    this.strengthMeter();

  }

  strengthMeter () {

    switch(this.checkedBox === this.checkedBox) {

      case this.checkedBox === 0 :

        strengthIndicator.textContent = "none";

        this.strengthBar(this.checkedBox, 'none');

          break;

      case this.checkedBox === 1 :

        strengthIndicator.textContent = "Bad";

        this.strengthBar(this.checkedBox, 'bad');

          break;

      case this.checkedBox === 2 :

        strengthIndicator.textContent = "Weak";

        this.strengthBar(this.checkedBox, 'weak');

          break;

      case this.checkedBox === 3 :

        strengthIndicator.textContent = "Good";

        this.strengthBar(this.checkedBox, 'good');

          break;

      case this.checkedBox === 4 :

        strengthIndicator.textContent = "Perfect";

        this.strengthBar(this.checkedBox, 'perfect');

          break;

      default : ''

          break;

    }

  }

  strengthBar (number, string) {

    switch(number === number) {

      case number === 0 :
        
        this.removeStrengthBarColor();
        strengthBar[0].classList.add(string);

          break;

      case number === 1 :
        
        this.removeStrengthBarColor();
        strengthBar[0].classList.add(string);

          break;

      case number === 2 :
        
        this.removeStrengthBarColor();
        strengthBar[1].classList.add(string);

          break;

      case number === 3 :
        
        this.removeStrengthBarColor();
        strengthBar[2].classList.add(string);

          break;

      case number === 4 :
        
        this.removeStrengthBarColor();
        strengthBar[3].classList.add(string);

          break;

    }

  }

  removeStrengthBarColor () {

    strengthBar.forEach(s => {

      switch(this.checkedBox === this.checkedBox) {

        case this.checkedBox === 0 :

          s.classList.remove('bad');

            break;

        case this.checkedBox === 1 :

          s.classList.remove('weak');

            break;

        case this.checkedBox === 2 :

          s.classList.remove('good');

            break;

        case this.checkedBox === 3 :

          s.classList.remove('perfect');

            break;

        default : '';

            break;

      }

    })

  }

}

// Range Input Function
rangeInput.oninput = e => {

  __rangeValue = e.target.value;

  _rangeValue.textContent = e.target.value;

  rangeValue = parseInt(e.target.value);

  switch(__rangeValue === __rangeValue) {

    case parseInt(__rangeValue) === 5 : rangeColor(0);

      break;

    case parseInt(__rangeValue) === 6 : rangeColor(12);

      break;

    case parseInt(__rangeValue) === 7 : rangeColor(21);

      break;

    case parseInt(__rangeValue) === 8 : rangeColor(32);

      break;

    case parseInt(__rangeValue) === 9 : rangeColor(40);

      break;

    case parseInt(__rangeValue) === 10 : rangeColor(50);

      break;

    case parseInt(__rangeValue) === 11 : rangeColor(60);

      break;

    case parseInt(__rangeValue) === 12 : rangeColor(70);

      break;

    case parseInt(__rangeValue) === 13 : rangeColor(80);

      break;

    case parseInt(__rangeValue) === 14 : rangeColor(90);

      break;

    case parseInt(__rangeValue) === 15 : rangeColor(100);

      break;

    case parseInt(__rangeValue) === 6 : rangeColor(12);

      break;

    case parseInt(__rangeValue) === 6 : rangeColor(12);

      break;

    case parseInt(__rangeValue) === 6 : rangeColor(12);

      break;

    case parseInt(__rangeValue) === 6 : rangeColor(12);

      break;

    default: '';

      break;

  }

}

// CheckBox Function
form.querySelectorAll('input[type=checkbox]').forEach(c => {

  c.onclick = e => {

    const checkbox = new CheckBox(e.target.name, Array.from(form.querySelectorAll('input[type=checkbox]')).filter(data => data.checked === true).length);
    checkbox.checkedBoxChecker();

  }

})

generatePasswordButton.onclick = e => {

  if(_methods.length === 0) {

    _data_box_value.value = '';
    generatePasswordButton.disabled = true;
    generatePasswordButton.disabled = false;

  } else {

    generatePasswordButton.disabled = false;

    let generatedPassword = '';

    for(let i = 1; i < rangeValue + 1; i++) {

      generatedPassword += _methods.join('')[Math.floor(Math.random() * _methods.join('').length)];

    }

    _data_box_value.value = generatedPassword;

  }

}

// Copy Function
_copy_data_value.onclick = e => {

  if(_data_box_value.value.length === 0) {

    _copy_data_value.disabled = true;
    
    _copy_data_value.disabled = false;
    
  } else {
    
    e.target.textContent = 'copied!';

    setTimeout(() => e.target.textContent = 'copy', 1000);

    _copy_data_value.disabled = false;

    _data_box_value.select();

    _data_box_value.setSelectionRange(0, 999999);

    document.execCommand('copy');

  }

}