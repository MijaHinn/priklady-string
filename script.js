console.log('%c Příklady na práci s textem ', 'background:black;color:yellow;');
/*
Textové řetězce v 'apostrofech', "uvozovkách" nebo uvnitř  `backticků`.

Backticky → template string, lze interpolovat výrazy/proměnné uvnitř
`Byla jednou jedna ${jmeno} a bylo jí ${vek} let.`

Dokumentace k datovému typu String:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

Získat vstup od uživatele:
const jmeno = prompt('Zadej svoje jméno');
*/


// 1) Zjisti, jak dlouhé je jméno (kolik má písmen).
// Délku vypiš do konzole. Je-li jméno delší než 6 znaků,
// napiš do konzole i text "týjo, to je ale dlouhé jméno"
// Nezapomeň svůj program řádně otestovat - tj. spusť program
// několikrát s různým jménem a vyzkoušej, zda program
// správně reaguje na všechny možnosti.
const jmeno = 'Kateřina';



// 2) Jen podle příjmení odhadni, zda se jedná o ženu nebo muže.
// Zjednodušíme si venkovní svět a budeme tvrdit,
// že ženské příjmení vždy končí na "ová" nebo "ná".
// Cokoliv, co nekončí na "ová" nebo "ná" bude muž.
// Podle příjmení do konzole vypiš např.:
// - Nováková je asi žena.
// - Novotný je asi muž.
// Vyzkoušej víc možností, ať ověříš správnost svého programu.
const prijmeni = 'Jasnozřivá';



// BONUS:
// Vezmi předchozí příklad 2) a napiš testování jména jako
// funkci, do které můžeš příjmení předat jako parametr.
// Funkce vrátí true, pokud jde o ženské příjmení,
// nebo false, jde-li o mužské příjmení.
// Pak můžeš otestovat různá jména jednoduše voláním funkce.



// 3) Nech uživatele, aby zadal text - použij metodu prompt(...)
// a její výsledek si ulož do proměnné.
// Zjisti, jestli se v zadaným textu někde vyskytuje slovo "pes".
// Při hledání, by nemělo záležet na velikosti písmen - pokud zadaný
// text obsahuje "Pes", "PES", ... nebo jakoukoliv jinou variantu
// velikosti písmen, pořád by se měl výsledek vyhodnotit jako kladný.
// Podle výsledku do konzole vypiš:
// - Máme psa! Haf. 🐶
// - Pes nenalezen. 😥



// 4) Nech uživatele, aby zadal text - opět pomocí prompt().
// Slovo "mrkev" v textu nahraď za "banán".
// Vyměňovat mrkve za banány je schopnost, která se ti bude
// v životě hodit!


// BONUS:
// Víš, co je regulární výraz? A jak s jeho pomocí nahradíš
// *všechny* mrkve v textu za banány?
// Mrkni na první odstavec a příklad pod ním:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace




// 5) Napiš funkci, která přijme dva řetězce a vrátí true,
// pokud je druhý řetězec subřetězcem prvního, tj. vyskytuje
// se někde uprostřed.
// např. pro 'kokosové mléko' a 'kos' vrátí true



// 6) Nech uživatele, aby zadal text - opět pomocí prompt().
// Zjisti, zda je text dlouhý 5 nebo více znaků.
// Pokud ano, tak vypiš na obrazovku 3 písmena ve středu textu.
// Jinak napiš "Moc krátký text".
// Budeš potřebovat:
// - délku textu
// - matematiku - dělení, zaokrouhlování, odčítání, přičítání
// - metodu slice() textového řetězce

