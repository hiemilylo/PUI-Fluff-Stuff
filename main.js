products = document.getElementsByClassName('image-content')
for (const product of products) {
    product.onclick = () => {
        for (const otherProduct of products) {
            otherProduct.classList.remove('selected')
        }
        product.classList.toggle('selected')
    }
}