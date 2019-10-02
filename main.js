products = document.getElementsByClassName('image-content')
prod_image = document.getElementById('chosen-product')
prod_header = document.getElementById('prod-header')
for (const product of products) {
    product.onclick = () => {
        for (const otherProduct of products) {
            otherProduct.classList.remove('selected')
        }
        product.classList.toggle('selected')
        prod_image.src = product.querySelector('img').src
        prod_header.innerHTML =
            `<h2>${product.querySelector('h2').innerHTML}</h2><h2>$15<h2>`
    }
}