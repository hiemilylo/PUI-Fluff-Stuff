products = document.getElementsByClassName('image-content')
prod_image = document.getElementById('chosen-product')
prod_header = document.getElementById('prod-header')
prod_desc = document.getElementById('prod-preview-desc')

const desc = {
    'Couch Pillow': 'Larger pillow, perfect for decorative purposes on couches.',
    'Bed Pillow': 'Sleeping pillows, guaranteed to help you sleep better or money back.',
    'Round Pillow': 'General purpose pillows, great for seat cushions or decorations.',
    'Floor Pillow': 'Our most popular product, multi-purpose for indoor seating or decorative purposes.'
}
for (const product of products) {
    product.onclick = () => {
        for (const otherProduct of products) {
            otherProduct.classList.remove('selected')
        }
        product.classList.toggle('selected')
        prod_image.src = product.querySelector('img').src
        console.log(product.querySelector('h2'))
        prod_header.innerHTML =
            `<h3>${product.querySelector('h2').innerHTML}</h3><h3>$15</h3>`
        prod_desc.innerHTML = desc[product.querySelector('h2').innerHTML]
    }
}