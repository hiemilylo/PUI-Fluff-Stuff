imgs = document.getElementById('product-preview-list').children
prod_image = document.getElementById('product-preview-large')
for (const image of imgs) {
    image.onclick = () => {
        for (const otherImg of imgs) {
            otherImg.classList.remove('chosen-preview')
        }
        image.classList.toggle('chosen-preview')
        prod_image.src = image.src
    }
}