let body_orig_style, banner_elm, banner_img


const initBanner = async () => {
    body_elm = document.getElementsByTagName('body')[0]
    body_orig_style = body_elm.style
    body_elm.style.overflow = "hidden"
    banner_elm = document.createElement('div')
    banner_elm.id = "tosttv-banner-div"
    banner_img = document.createElement('img')
    banner_img.id = "tosttv-banner-gif"
    banner_img.src = ext_imgs[0]
    banner_elm.appendChild(banner_img)
    body_elm.appendChild(banner_elm);
}

const unsafeBanner = async (unsafe_imgs) => {
    banner_img.src = ext_imgs[1]
    banner_img.classList.add("tosttv-banner-unsafe-gif")
    btnwrapper_elm = document.createElement('div')
    btnwrapper_elm.id = "tosttv-banner-unsafe-exit-wrapper"
    banner_elm.appendChild(btnwrapper_elm)
    exitbtn_elm = document.createElement('button')
    exitbtn_elm.classList.add('tosttv-banner-unsafe-exit-btn')
    exitbtn_elm.id = "tosttv-banner-unsafe-exit-btn"
    exitbtn_elm.innerHTML = "Continue Anyway"
    btnwrapper_elm.appendChild(exitbtn_elm)

    exitbtn_elm.addEventListener('click', () => {
        safeBanner()
    })
}


const safeBanner = async () => {
    banner_elm.style.display = "none"
    body_elm.style = body_orig_style
}