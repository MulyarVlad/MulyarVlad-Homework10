// Вивести на сторінку в один рядок через кому числа від 10 до 20.

for (let i = 10; i <= 20; i++) {
    console.log(i);
}

// Вивести квадрати чисел від 10 до 20.

for (let i = 10; i <= 20; i++) {
    console.log(i**2);
}

// Вивести таблицю множення на 7.

for (let i = 0; i <= 10; i++) {
    console.log(i * 7);
}

// Знайти суму всіх цілих чисел від 1 до 15.

const sum = 1;

for (let i = 1; i <= 15; i++) {
    sum = sum + i
}

console.log(sum);

// Знайти добуток усіх цілих чисел від 15 до 35.

const mult = 15;

for (let i = 15; i <= 35; i++) {
    mult = mult * i
}

console.log(mult);

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

const num = 0;

for (let i = 1; i <= 500; i++) {

    num += i

} console.log(num / 500);


// Вивести суму лише парних чисел в діапазоні від 30 до 80.

const sum = 30;

for (let i = 30; i <= 80; i=i+2) {
    sum = sum + i;
}

console.log(sum)

// Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let i = 100; i < 200; i++) {
    if (i % 3 == 0) console.log(i);
  }

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

const userNumber = +prompt("Enter any number you want!");

for (let i = 2; i / 2 <= userNumber; i++) {

  if (userNumber % i == 0) {

    console.log(`${i}`);
  }
}

// Визначити кількість його парних дільників.

const userNumber = +prompt("Enter any number you want!");

for (let i = 2; i * 2 <= userNumber; i++) {

  if (userNumber % i == 0) {

    console.log(`${i}`);
  }
}

// Знайти суму його парних дільників.

const number = 200;

for (i = 1; i <= number; i++) {

  if (i != 1 && i != number) {

       if (number % i === 0) {
          console.log(i);
        }
    }
}

// Надрукувати повну таблицю множення від 1 до 10.

const (let i = 1; i <= 10; i = i + 1) {

    for (let j = 1; j <= 10; j = j +1) {
        userNumber1 = i * j
        document.write(" " + userNumber1 + '');
    }

    document.write("<br>")
}