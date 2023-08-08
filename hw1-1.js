window.addEventListener('load', main);

function main() {
  try {
    const firstNumber = ask('Введите число');
    const secondNumber = ask('Введите систему счисления');

    console.log(firstNumber.toString(secondNumber));
  } catch (err) {
    console.log('Некорректный ввод!');
  }
}

function ask(message) {
  const result = +prompt(message);

  if (typeof result === 'number') {
    return result;
  }

  throw new Error('Invalid input');
}
