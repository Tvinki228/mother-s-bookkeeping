function processNumbers() {
  let first = document.getElementById("num1").valueAsNumber;
  let second = document.getElementById("num2").valueAsNumber;
  let OvalchenkoDay = document.getElementById("num3").valueAsNumber;
  let KapunosDay = document.getElementById("num4").valueAsNumber;
  let krumchaninaDay = document.getElementById("num5").valueAsNumber;
  let KovalenkoDay = document.getElementById("num6").valueAsNumber;
  let PelupenkoDay = document.getElementById("num7").valueAsNumber;
  let HarunaDay = document.getElementById("num8").valueAsNumber;

  // let first = prompt("цигарки оборот");
  // let second = prompt("Інші товри");
  let mainSum = (first * 2.5) / 100 + (second * 5) / 100;
  console.log(
    "Кількість грошей з яких вираховується зарплата: " + mainSum + " Грн"
  );

  document.getElementById("salary-after-culc").innerHTML =
    "Кількість грошей з яких вираховується зарплата:  " + mainSum + " Грн";

  // let OvalchenkoDay = +prompt("кількість робочих днів Овальченко");
  // // 26 Day
  // let KapunosDay = +prompt("кількість робочих днів Капинос");
  // // 26 Day
  // let krumchaninaDay = +prompt("кількість робочих днів Кримчаніна");
  // // 26 Day
  // let KovalenkoDay = +prompt("кількість робочих днів Коваленко");
  // // 20 Day
  // let PelupenkoDay = +prompt("кількість робочих днів Пелипенко");
  // // 26 Day
  // let HarunaDay = +prompt("кількість робочих днів Харина");
  // // 26 Day

  let sumDays =
    OvalchenkoDay +
    KapunosDay +
    krumchaninaDay +
    KovalenkoDay +
    PelupenkoDay +
    HarunaDay;
  console.log("Загальна кількість: " + sumDays);
  document.getElementById("total-number-of-days").innerHTML =
    "Загальна кількість робочих днів всіх робітників:  " + sumDays + " Днів";

  let DaySalary = mainSum / sumDays;

  let OvalchenkoFirstTax = (OvalchenkoDay * DaySalary * 18) / 100;
  console.log("18 відсотків у Овальченко" + OvalchenkoFirstTax);
  document.getElementById("eighteen-ovalchenko").innerHTML =
    "18 відсотків у Овальченко:  " + OvalchenkoFirstTax.toFixed(2) + " Грн";

  let KapunosFirstTax = (KapunosDay * DaySalary * 18) / 100;
  document.getElementById("eighteen-kapunos").innerHTML =
    "18 відсотків у Капинос:  " + KapunosFirstTax.toFixed(2) + " Грн";

  let krumchaninaFirstTax = (krumchaninaDay * DaySalary * 18) / 100;
  document.getElementById("eighteen-krumchanina").innerHTML =
    "18 відсотків у Кримчаніна:  " + krumchaninaFirstTax.toFixed(2) + " Грн";

  let KovalenkoFirstTax = (KovalenkoDay * DaySalary * 18) / 100;
  document.getElementById("eighteen-kovalenko").innerHTML =
    "18 відсотків у Коваленко:  " + KovalenkoFirstTax.toFixed(2) + " Грн";

  let PelupenkoFirstTax = (PelupenkoDay * DaySalary * 18) / 100;
  document.getElementById("eighteen-pelupenko").innerHTML =
    "18 відсотків у Пелипенко:  " + PelupenkoFirstTax.toFixed(2) + " Грн";

  let HarunaFirstTax = (HarunaDay * DaySalary * 18) / 100;
  document.getElementById("eighteen-haruna").innerHTML =
    "18 відсотків у Харина:  " + HarunaFirstTax.toFixed(2) + " Грн";

  let OvalchenkoSecondTax = (OvalchenkoDay * DaySalary * 1.5) / 100;
  console.log("1,5 відсотків у Овальченко" + OvalchenkoSecondTax);
  document.getElementById("half-percent-ovalchenko").innerHTML =
    "1,5 відсотків у Овальченко:  " + OvalchenkoSecondTax.toFixed(2) + " Грн";

  let KapunosSecondTax = (KapunosDay * DaySalary * 1.5) / 100;
  document.getElementById("half-percent-kapunos").innerHTML =
    "1,5 відсотків у Капинос:  " + KapunosSecondTax.toFixed(2) + " Грн";

  let krumchaninaSecondTax = (krumchaninaDay * DaySalary * 1.5) / 100;
  document.getElementById("half-percent-krumchanina").innerHTML =
    "1,5 відсотків у Кримчаніна:  " + krumchaninaSecondTax.toFixed(2) + " Грн";

  let KovalenkoSecondTax = (KovalenkoDay * DaySalary * 1.5) / 100;
  document.getElementById("half-percent-kovalenko").innerHTML =
    "1,5 відсотків у Коваленко:  " + KovalenkoSecondTax.toFixed(2) + " Грн";

  let PelupenkoSecondTax = (PelupenkoDay * DaySalary * 1.5) / 100;
  document.getElementById("half-percent-pelupenko").innerHTML =
    "1,5 відсотків у Пелипенко:  " + PelupenkoSecondTax.toFixed(2) + " Грн";

  let HarunaSecondTax = (HarunaDay * DaySalary * 1.5) / 100;
  document.getElementById("half-percent-haruna").innerHTML =
    "1,5 відсотків у Харина:  " + HarunaSecondTax.toFixed(2) + " Грн";

  let OvalchenkoSalary =
    OvalchenkoDay * DaySalary - OvalchenkoFirstTax - OvalchenkoSecondTax;
  let KapunosSalary =
    KapunosDay * DaySalary - KapunosFirstTax - KapunosSecondTax;
  let krumchaninaSelary =
    krumchaninaDay * DaySalary - krumchaninaFirstTax - krumchaninaSecondTax;
  let KovalenkoSalary =
    KovalenkoDay * DaySalary - KovalenkoFirstTax - KovalenkoSecondTax;
  let PelupenkoSalary =
    PelupenkoDay * DaySalary - PelupenkoFirstTax - PelupenkoSecondTax;
  let HarunaSalary = HarunaDay * DaySalary - HarunaFirstTax - HarunaSecondTax;

  console.log("Зарплата Овальченко: " + OvalchenkoSalary);
  document.getElementById("salary-ovalchenko").innerHTML =
    "Зарплата Овальченко:  " + OvalchenkoSalary.toFixed(2) + " Грн";

  console.log("Зарплата Капинос: " + KapunosSalary);
  document.getElementById("salary-kapunos").innerHTML =
    "Зарплата Капинос:  " + KapunosSalary.toFixed(2) + " Грн";

  console.log("Зарплата Кримчанін: " + krumchaninaSelary);
  document.getElementById("salary-krumchanina").innerHTML =
    "Зарплата Кримчаніна:  " + krumchaninaSelary.toFixed(2) + " Грн";

  console.log("Зарплата Коваленко: " + KovalenkoSalary);
  document.getElementById("salary-kovalenko").innerHTML =
    "Зарплата Коваленко:  " + KovalenkoSalary.toFixed(2) + " Грн";

  console.log("Зарплата Пелипенко: " + PelupenkoSalary);
  document.getElementById("salary-pelupenko").innerHTML =
    "Зарплата Пелипенко:  " + PelupenkoSalary.toFixed(2) + " Грн";

  console.log("Зарплата Харина: " + HarunaSalary);
  document.getElementById("salary-haruna").innerHTML =
    "Зарплата Харина:  " + HarunaSalary.toFixed(2) + " Грн";
}
