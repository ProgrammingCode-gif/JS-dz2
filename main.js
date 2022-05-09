var age = +prompt('Введите свой возраст: ');
if(age <= 18){
    alert('Вы ещё молоды. Вам нужно учиться')
}else if(age <= 50 && age > 18){
    alert('Вам нужно работать')
}else if(age <= 59 && age > 50){
    alert('Вам скоро на пенсию')
}else if(age <= 150 && age > 59){
    alert('Вы пенсионер')
}else {
    alert('Что то пошло не так')
}