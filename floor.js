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

function openTab(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }