console.log("Test");    

//JS Type safe değil yani tip koruması yapmaz
let dolarDun = 9.20
let dolarBugun = 9.30
dolarDun = "Ankara"

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//Tekrar değişken atamayız hata
//euroDun = 11

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = [12,"Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi",["Araba Kredisi"]]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")    
}
console.log("</ul>")

console.log(konutKredileri)