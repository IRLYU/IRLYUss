    let AllPrice = 0;
    let typeSite = prompt("Какой вы сайт хотите: Лендинг(1400р) or Многостраничный(2000р)")
    if(typeSite === "Лендинг" || typeSite === "Многостраничный"){ 
    }else{
        do{
            alert("Пожалуйста введите корректный ответ")
            typeSite = prompt("Какой вы сайт хотите: Лендинг or Многостраничный")
        }while(typeSite != "Лендинг" && typeSite != "Многостраничный")
    }

    
    let typeLayout = prompt("Какой тип вёрстки Вы хотите: Адаптивный(500р) or Cтатичный(100р)")
    if(typeLayout === "Адаптивный" || typeLayout === "Статичный"){ 
    }else{
        do{
            alert("Пожалуйста введите корректный ответ")
            typeLayout = prompt("Какой тип вёрстки Вы хотите: Адаптивный(500р) or Cтатичный(100р)")
        }while(typeLayout != "Адаптивный" && typeLayout != "Статичный")
    }
let Calcul = {
    MasTypeSite: ["Лендинг", "Многостраничный"],
    MasTypeLayout: ["Адаптивный", "Статичный"],
    MasPriceSite: [1400, 2000],
    MasPriceLayout: [500, 100]
}
let index = 0
for(let i = 0; i < Calcul.MasTypeSite.length;i++){
    if(Calcul.MasTypeSite[i] == typeSite){
      index = i
    }
}

for(let i = 0; i < Calcul.MasPriceSite.length;i++){
    if(i === index){
        AllPrice += Calcul.MasPriceSite[i]
    }
}
index = 0
for(let i = 0; i < Calcul.MasTypeLayout.length;i++){
    if(Calcul.MasTypeLayout[i] == typeLayout){
      index = i
    }
}

for(let i = 0; i < Calcul.MasPriceLayout.length;i++){
    if(i === index){
        AllPrice += Calcul.MasPriceLayout[i]
    }
}
alert(`Вся цена за наши услуги ${AllPrice}`)