const inputElement = document.getElementById('js-input');
 
let calculation;


const buttonElement = document.querySelector('.js-calculate');

function calculateAge (todayDate) {
  const inputValue = inputElement.value;
  
  if (inputValue === ''){
     alert('Please enter your birthday')
     
  }
  else{
    const age = getAge(inputValue);
    console.log(age);
     document.querySelector('.js-show-result')
      .innerHTML = `You are ${age} years old`;
  }

  inputValue = '';
}

function getAge(inputValue) {
  const currentDate = new Date();
  const todayDate = new Date(inputValue);

  const age = currentDate.getFullYear() - 
  todayDate.getFullYear();

  const month = currentDate.getMonth() - 
  todayDate.getMonth();

  if (month<0 || (month === 0 && currentDate.getDate() < todayDate.getDate())) {
    age --;
  }

  return age ;
}

buttonElement.addEventListener('click', () => {
    calculateAge();
});
