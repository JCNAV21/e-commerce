document.addEventListener ("DOMContentLoaded",  () =>  {
console.log("DOm cargado")
})

const themeIcom = document.getElementById ("theme-btn")

themeIcom.addEventListener ("click", () =>{
  document.body.classList.toggle("dark")
  if(themeIcom.classList.contains("bx-moon")){
    themeIcom.classList.replace("bx-moon", "bx-sun")
  }else{
    themeIcom.classList.replace("bx-sun", "bx-moon")
  }
})




const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

