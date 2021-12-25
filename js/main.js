//FizzBuzz
//O'zgaruvchilarni topib olamiz
var elForm = document.querySelector('.js-form-fizz-buzz');
var elInputAmount = elForm.querySelector('.js-form-amount');
var elOutput = elForm.querySelector('.js-output-amount-fizz-buzz');

//Formani ketib qolishini oldini olamiz
elForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  //Shartni yozamiz
  //Agar kiritilgan son 3 ga va 5 ga qoldiqiz bo'linsa ekranda FizzBuzz so'zi chiqadi
  if (Number(elInputAmount.value % 3 === 0) && Number(elInputAmount.value % 5 === 0)) {
    elOutput.textContent = 'FizzBuzz';
  }
  //Agar kiritilgan son 5 ga qoldiqiz bo'linsa ekranda Buzz so'zi chiqadi
  else if (Number(elInputAmount.value % 5 === 0)) {
    elOutput.textContent = 'Buzz';
  }
  //Agar kiritilgan son 3 ga qoldiqiz bo'linsa ekranda Fizz so'zi chiqadi
  else if (Number(elInputAmount.value % 3 === 0)) {
    elOutput.textContent = 'Fizz';
  }
  //Agar kiritilgan son 5ga ham 3ga ham bo'linmasa ekranda kiritilgan son chiqadi
  else {
    elOutput.textContent = elInputAmount.value;
  }
});


