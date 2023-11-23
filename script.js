//Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

//parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
//parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }

function parseDate(date) {
 
  const day = date.slice(0, 2);
  const month = date.slice(3, 5);
  const year = date.slice(6);


  const dateObject = {
    day: day,
    month: month,
    year: year,
  };

  return dateObject;
}

console.log(parseDate('12.03.2015'));
console.log(parseDate('06.04.2021')); 
console.log(parseDate('23.11.2023'));