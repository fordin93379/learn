import Product from "./interfaces";
// в этом файле должны быть описаны товары для отрисовке чкерез store
let products : Array<Product> = [
    {name:"Небинарные", price : 9, img : "data:image/jpeg;base64,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"},
    {name:"Рекламные", price : 4, img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanzbVgqOCAIx-2Bpv8WxyAhTlHigtS8iEIg&usqp=CAU"},
    {name:"Олдовые", price : 1, img : "https://image-cdn.kazanexpress.ru/c7rnpp0knio289bqaeog/original.jpg"},
    {name:"Деловые", price : 7, img : "https://sc02.alicdn.com/kf/HTB12oJsapzsK1Rjy1Xbq6xOaFXav/in-stock-low-MOQ-wholesale-cheap-socks.jpg"},
    {name:"Для зожников", price : 6, img : "https://images.wbstatic.net/big/new/12110000/12112410-1.jpg"},
];
export default products