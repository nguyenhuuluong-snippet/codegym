//Bai2
// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// let num = parseInt(prompt("Nhập vào một số nguyên bất kỳ:"));
// let lower = num - 1;
// let upper = num + 1;

// while (!isPrime(lower)) lower--;
// while (!isPrime(upper)) upper++;

// document.write(`Cặp số nguyên tố bao quanh ${num} là: ${lower} và ${upper}`);
// Bai1
// let n = parseInt(prompt("Nhập số lượng phần tử của mảng (6 - 20):"));
// while (n < 6 || n > 20 || isNaN(n)) {
//   n = parseInt(prompt("Vui lòng nhập lại (6 - 20):"));
// }

// let arr = [];
// for (let i = 0; i < n; i++) {
//   arr.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`)));
// }

// document.write("Mảng ban đầu:", arr);
// Bai 3
// let num1 = +prompt('Nhập số thứ nhất');
// let num2 = +prompt('Nhập số thứ 2');
// if (isNaN(num1) || isNaN(num2)) {
//   alert('Nhập đúng');
// }
// function abs(x) {
//   return x < 0 ? -x : x;
// }

// function ucln(num1, num2) {
//   num1 = abs(num1);
//   num2 = abs(num2);
//   while (num2 !== 0) {
//     let temp = num2;
//     num2 = num1 % num2;
//     num1 = temp;
//   }
//   return num1;
// }
// function bcnn(num1, num2) {
//   if(num1 === 0 || num2 === 0) return 0;
//   let product = num1 * num2;
//   return abs(product) / ucln(num1, num2);
// }
// document.write(`ước chung lớn nhất của ${num1} và ${num2} là ${ucln(num1, num2)} <br>`);
// document.write(`bội chung nhỏ nhất của ${num1} và ${num2} là ${bcnn(num1, num2)}`);
// bai4
// let a = [1, 2, 3, 4]
// let b = [];
// let prefixSums = 0;
// for(let i = 0; i < a.length;i++){
//   prefixSums += a[i];
//   b.push(prefixSums);
// }
// document.write(b);
// bài 5
// let a = [7,2,5,3,5,3];
// let b = [7,2,5,4,6,3,5,3];
// let missingValue = [];
// for(let i = 0; i < b.length; i++ ){
//   let result = false;
//   for(let j = 0; j < a.length; j++){
//       if(b[i] === a[j] ){
//         result = true;
//         break;
//       }
//   }
//   if(!result){
//     missingValue.push(b[i]);
//   }
// }
// document.write(missingValue);
// bai6
let s = 'cabcare';

function differentSymbolsNaive(s) {
  let count = 0;
  let seen = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if(!seen[char]){ // seen = [cabcare]
      seen[char] = true;
      count++;
      document.write(char + '<br>')
    }
  }
  return count;
}
let result = differentSymbolsNaive(s);
document.write('các ký tự khác nhau là ' + result);