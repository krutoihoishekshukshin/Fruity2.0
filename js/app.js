const burger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.of');

const btnprofile = document.getElementById('profile')
const modalAuth = document.getElementById('modalAuth')
const btnClose = document.getElementById('modalclose')
const buybtn = document.getElementById('buybutton')
const btnClose2 = document.getElementById('modalclose2')

const modalProduct = document.getElementById('modalProduct')
const productBtnClose = document.getElementById('productBtnClose')
const btnsBuy = document.querySelectorAll('.btn-buy')

const modalName = modalProduct.querySelector('h3')
const modalPrice = modalProduct.querySelector('.coast')
const modalWeight = modalProduct.querySelector('.weight')

btnsBuy.forEach(btn => {
   btn.addEventListener('click', () => {
      const card = btn.closest('.card')
      const name = card.querySelector('.card-name').textContent
      const price = card.querySelector('.coast').textContent
      const weightProduct = card.querySelector('.weight').textContent

      modalName.textContent = name;
      modalPrice.textContent = price;
      modalWeight.textContent = weightProduct;

      modalProduct.classList.add('modalopen')
   })
})

btnprofile.addEventListener('click', () => {
   modalAuth.classList.add('modalopen')
})

btnClose.addEventListener('click', () => {
   modalAuth.classList.remove('modalopen')
})

buybtn.addEventListener('click', () => {
   modalProduct.classList.add('modalopen')
})

burger.addEventListener('click', function (e) {
   burgerMenu.classList.toggle('of');
   burgerMenu.classList.toggle('burger-navigation-on');
   burger.classList.toggle('on');
})

btnClose2.addEventListener('click', () => {
   modalProduct.classList.remove('modalopen')
})