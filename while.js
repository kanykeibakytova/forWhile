// ЦИКЛЫ

// цикл позволяет сделать одну и ту же задачу в несколько раз

// while, do while, for

// старт, условие выхода из цикла (работы), шаг

// 1 цикл While

// let countStudents =20
// let i = 1, i < 20, i++

// let i = 0;
//
// while (i < 10){
//     i++
//     console.log(i)
// }

// let name = 'Kanykei'
//
// let i = 0
//
// while(i < name.length){
//     console.log(name[i])
//     i++
// }


// let arr =[2,5,6,8,10,2]
//
// let i = 0
//
// while (i < arr.length){
//     console.log(arr[i])
//     i++
// }

// получить только четные числа
// let arr =[2,5,6,8,10,2]
//
// let i = 0
//
// while (i < arr.length){
//     if(arr[i] % 2 ===0){
//         console.log(arr[i])
//     }
//     i++
// }

// 2.цикл do while

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 50)



// 3.цикл FOR

// for (let i = 0;  i<=10; i++){
//     console.log(i)
// }

// 10 санынын жарымына чейин алуу

// let count = 10
// for( let i = 0; i <= count/2; i++){
//     console.log(i)
// }

// break - остановить, останови

// let count = 10
//
// for (let i = 0; i<= count; i++){
//     console.log(i)
//     if (i === 4){
//         break
//     }
// }

// continue - пропускать

// let count = 10
//
// for (let i = 0; i<= count; i++){
//     if (i === 4){
//         continue
//     }
//     console.log(i)
// }



// метод сверху вниз

// for (let i = 10; i>0; i--){
//     console.log(i)
// }



// найти сумму всех чисел в промежутке от 5 до 10

// let total = 0
//
// for (let i =5; i <= 10; i++){
//     total = total+i
// }
// console.log(total)

// total = total+i ды кыскартып  total+=i деп койсок болот



// получить буквы только в верхнем регистре

// let str = 'AbraCadABRA'
// let str2 =''                // ACABRA
//
// for (let i = 0; i < str.length; i++){
//     if (str[i] === str[i].toUpperCase()){
//         str2 += str[i]
//     }
// }
//
// console.log(str2)


// вывести только положительные числа

// let arr =[1, -2, 3, 4, 5, -6, 10, -8]
// let sum = 0
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]>0){
//         sum +=arr[i]
//     }
// }
// console.log(sum)

// next task
// let str = ['muslim', 'ruslin', 'malik','janybek', 'maksat']
// for (let i = 0; i<str.length; i++){
//     if(str[i].includes('a')){
//         console.log(str[i])
//     }
// }


// делает строку наоборот
// let arr = ['muslim', 'ruslan', 'malik','janybek', 'maksat']
// let arr2 = []
// for (let i = 0; i < arr.length; i++){
//     arr2.unshift(arr[i])
// }
// console.log(arr2)
// second variant

// let arr = ['muslim', 'ruslan', 'malik','janybek', 'maksat']
// console.log(arr.reverse())


// получить те элементы у которых длина четный
// let a =['Messi', 'Benzema', 'Ronaldo', 'Mbappe']
// for(let i =0; i < a.length; i++){
//     if(a[i].length % 2 ===0){
//         console.log(a[i])
//     }
// }


// получить отдельно каждые буквы
// let a = 'Abracadabra'
// for (let i =0; i < a.length; i++){
//     console.log(a[i])
// }

// получить из обьекта только значение с циклом

// let a ={
//     name: 'Maks',
//     age: 23,
//     gender:'man'
// }
// let arr = Object.values(a)
//
// for(let i =0; i < arr.length; i++){
//     console.log(arr[i])
// }
// более проще c for in

// let obj ={
//     name: 'Maks',
//     age: 23,
//     gender:'man'
// }
// for (let key in obj){
//     console.log(obj[key])
// }










//1. Выведите столбец чисел от 1 до 50.

// for(let i = 1; i <=50; i++){
//     console.log(i)
// }

// 2. Создайте переменную с пустым массивом, заполните массив 10-ю элементами X с помощью цикла.

// let arr=[]
// for(let i = 0; i<=10; i++){
//     arr.push('x')
// }
// console.log(arr)

// 3. Вам дан массив с элементами [5, 3, 1, 2, 7]. С помощью цикла for выведите все
// эти элементы в консоль.

// let arr =[5, 3, 1, 2, 7]
// for (let i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// 4. Вам дан массив с элементами [5, 2, 1, 2]. С помощью цикла for найдите
// произведение элементов этого массива.

// let arr = [5, 2, 1, 2]
// let a=1
// for(let i =0; i < arr.length; i++){
//     a = a*arr[i]
//       a*=arr[i]
// }
// console.log(a)


// 5. Выведите в консоль столбец четных чисел в промежутке от 0 до 100.

// for (let i = 0; i < 100; i++){
//     if(i % 2 ===0){
//         console.log(i)
//     }
// }

// 6. С помощью цикла найдите сумму чисел от 1 до 100 и выведите в консоль.

// let a = 0
// for (let i = 1; i <=100; i++){
//     a = a+i
       // либо a+=i
// }
// console.log(a)

// 7. Вам дан массив с элементами [2, 4, 5, 6, 8]. С помощью цикла for найдите сумму
// элементов этого массива. Запишите ее в переменную result.

// let arr =[2, 4, 5, 6, 8]
// let result = 0
// for(let i = 0; i < arr.length; i++){
//     result =result+arr[i]
// }
// console.log(result)

// 8. Вам дан массив [3, 4, 6, 12, 3, 5]. С помощью цикла for и оператора if выведите
// на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// let arr =[3, 4, 6, 12, 3, 5]
// for(let i =0; i < arr.length; i++){
//     if(arr[i]>3 && arr[i]<10){
//         console.log(arr[i])
//     }
// }

// 9. Вам дан массив с числами. Числа могут быть положительными и отрицательными.
// Найдите сумму положительных элементов массива.

// let arr =[1, 2, -3, 4, -5, 6]
// let sum = 0
// for (let i = 0; i < arr.length; i++){
//     if(arr[i]>0){
//         sum+=arr[i]
//     }
// }
// console.log(sum)


// 10. Вам дан массив с числами [5, 1, 3, 7, 6, 15, 3, 20]. С помощью цикла for и
// оператора if проверьте есть ли в массиве элемент со значением, равным 4.
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.


// let arr =[5, 1, 3, 7, 6, 15, 3, 20]
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] === 4){
//         console.log('yes')
//







// function addLength(str) {
//     return str.split(' ').map(el =>{
//         return el + ' ' + el.length
//     })
// }
//
// console.log(addLength('apple ban'))

// ['apple 5', 'ban 3']


// let num =[15]
// console.log(num.map(el =>{
//     return el*6.71
// }))

//
// function myFn (arr){
//     return arr.map(el =>{
//         return el*6.71
//     })
// }
//
// console.log(myFn([15])

// const reverseSeg = n =>{
//     const result = []
//     for(let i = n; i >=1; i--){
//         result.push(i)
//     }
//     return result;
// };
// console.log(reverseSeg(5))

