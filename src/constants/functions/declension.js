//Функция склонения слова, получает массив вида ['год', 'года', 'лет']
//и отдает нужный вариант, в зависимости от переданого числа number.
//Например, 1 год, 3 года, 5 лет.
//Если передать параметр TitleOnly - функция вернет только склоняемое слово.
//Например, год, года, лет.

export function declension(arrayOfTitles, number, TitleOnly) {
  number = Math.abs(number);
  let cases = [2, 0, 1, 1, 1, 2];
  return(
    TitleOnly
      ? arrayOfTitles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]
      : `${number} ${arrayOfTitles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]}`
  )

}
