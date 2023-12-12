// Masalalar
// 1.
// let son1 = 3;
// let son2 = 6;
// let son3 = 10;

// let juftVa5Kopaytma = son1 * son2 * son3;
// console.log(juftVa5Kopaytma);

// 1.  3 ta son berilgan. Berilgan sonlar orasidan juft hamda 5 ga karralilarini kopaytmasini topuvchi algoritm yozing
// let a = 50;
// let b = 25;
// let c = 55;

// let sum = 1;
// if (a % 2 === 0 && a % 5 === 0) {
//   sum *= a;
// }
// if (b % 2 === 0 && b % 5 === 0) {
//   sum *= b;
// }
// if (c % 2 === 0 && c % 5 === 0) {
//   sum *= c;
// }
// console.log(sum); // Natija: 10

// 2. 4 ta son berilgan. Berilgan sonlar orasidan 3 ga yoki 7 ga karralilarining kopaytmasini topuvchi algoritmlar:

// let a = 8;
// let b = 5;
// let c = 10;
// let d = 3;

// let sum = 1;
// if (a % 3 === 0 || a % 7 === 0) {
//   sum *= a;
// }
// if (b % 3 === 0 || b % 7 === 0) {
//   sum *= b;
// }
// if (c % 3 === 0 || c % 7 === 0) {
//   sum *= c;
// }
// if (d % 3 === 0 || d % 7 === 0) {
//   sum *= d;
// }

// console.log(sum); // Natija: 126

// 4. 2 xonali son berilgan. Berilgan sonning o'nlar xonasidagi son juft bo'lsa uning kvadratini // aks holda kubini topuvchi algoritm yozing
// let number = 67;
// let tens = Math.floor(number / 10);
// if (tens % 2 === 0) {
//   console.log(tens * tens); // Natija: 36
// } else {
//   console.log(tens * tens * tens); // Natija: 216
// }

// 5.  3 xonali son berilgan. Uning o'nlar hamda yuzlar xonasidagi sonlarni topuvchi algoritm yozing.

// 6.  3 xonali son berilgan. Uning toq raqamlari raqamlari ko paytmasini topuvchi algoritm yozing
// let number = 345;
// let ones = number % 10;
// let hundreds = Math.floor(number / 100);

// console.log(ones * hundreds); // Natija: 12

// 7.  4 xonali son berilgan. Uning juft raqamlari sonini topuvchi algoritm yozing

// 8.  // Sizga to'g'ri to'rtburchakning tomonlari a va b beriladi, siz uning yuzasi va
// perametrini topib quyidagi shartga tekshirishingiz kerak bo'ladi. Agar yuzasi perimetridan katta bo'lsa  yuzasini aks holda peremetrini chiqaring.
// let a = 5;
// let b = 7;

// let area = a * b;
// let perimeter = 2 * (a + b);

// if (area > perimeter) {
//   console.log("Yuzasi: " + area);
// } else {
//   console.log("Perimetri: " + perimeter);
// }

// 9.  5 xonali son berilgan. Berilgan sondagi nollar sonini topuvchi algoritm yozing
// let number = 50000;
// let zero = 0;

// while (number > 0) {
//   if (number % 10 === 0) {
//     zero++;
//   }
//   number = Math.floor(number / 10);
// }
// console.log(zero); // Natija: 4.
//
// 10. Olimning poyezdi soat t da ketishi kerak edi. Lekin u T soat kechikdi. Olimning poyezdi soat nechada ketishini  topuvchi algoritm yozing. Bu yerda (0 < t < 23)
// let t = 22;
// let tureTime = (t + 24) % 24;

// console.log(tureTime);
// let T = 18;
// let t = 20;

// let hoursToWait = t - T;
// if (hoursToWait < 0) {
//   hoursToWait = 24 + hoursToWait;
// }

// console.log(hoursToWait); // Natija: 2
