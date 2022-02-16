const product = document.querySelector('.product')

const arrPr = [
    {
        id: 1,
        name: 'BOLT JACKET - CREAM',
        price: '200.000',
        src: "https://product.hstatic.net/1000344185/product/9934_0156f3bc736449d99ae6ec4958db5669_master.jpg",
    },
    {
        id: 2,
        name: 'SWE DENIM VARSITY JACKET - BLACK',
        price: '300.000',
        src: 'https://product.hstatic.net/1000344185/product/8454_e752249c7b864bc8890d09cfd0e6fb92_master.jpg',
    },
    {
        id: 3,
        name: 'SWE ZIP COACH JACKET - TAN',
        price: '400.000',
        src: 'https://product.hstatic.net/1000344185/product/9986_63ecbe46e1804c2eb8b4c824345cd740_master.jpg'
    }
]

let prRender = []

arrPr.forEach(item => {
    prRender.push(
      ` 
      <ul class="product-main">
        <li class="product-item">
            <img class="product-img" src="${item.src}" alt="#">
            <div class="product-info">
                <h1 class="name">${item.name}</h1>
                <div class="price">${item.price}</div>
            </div>  
            <button class="pay">Mua</button>
        </li>
      </ul>
      `
    )
})
product.innerHTML = prRender

const btnCart = document.querySelector('.btn-cart')
const btnPay = document.querySelectorAll('.pay')

btnPay.forEach(item => {
  item.onclick = function () {
      // total number of products in product-number
    const productNumber = document.querySelector('.product-number')
    let number = parseInt(productNumber.innerHTML)
    number++
    productNumber.innerHTML = number

      // total price in total-price-number
      const totalPrice = document.querySelector('.total-price-number')
      const price = this.parentNode.parentNode.querySelector('.price').innerText
      const priceNumber = parseInt(price.replace(/\D/g, ''))
      const totalPriceNumber = parseInt(totalPrice.innerText.replace(/\D/g, ''))
      totalPrice.innerText = totalPriceNumber + priceNumber
    };
})

btnCart.onclick = () => {
    alert('Bạn đã mua Sản phẩm')
}