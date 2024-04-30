react router 3rd party kutuphanedir.




React router multipage application sagliyor

CSR (client side renderin) =>{
    servar tarafi uygulamayi document olarak gonderiyor,client browser bu uygulamayi parse ediyor ete kemige burunduyor sonra client tarafina gonderiyor
    eger disaridan bir api cagirisi yoksa serverdan getirilecek bir data yoksa 
    onun disnda hersey client tarafinda icinde gosteriyor
}

SSR (server side renderin)  =>{
    herbir sayfa gecislerinde servera talep edilir
    browsera hazir sayfa basiyor
    -si -her bir sayfa gecisinde kullanicinin beklemesi.sayfa gecisi kesintiye ugrayor 
}