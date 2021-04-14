const grabImgs = async (parent) => {
    var all_imgs_urls = []
    var all_elms = Array.from(parent.getElementsByTagName("*"))
    for(var elm of all_elms) {
        bgImg = window.getComputedStyle(elm).backgroundImage
        if (bgImg.substring(0, 5) == "url(\"" && bgImg.substring(bgImg.length-2, bgImg.length) == "\")") {
            bgImg = bgImg.substring(5).slice(0, -2)
            end = bgImg.split('?')[0]
            end = end.substring(end.length, end.length-5)
            if (!ext_imgs.includes(bgImg) && !end.includes('.svg') && !bgImg.includes(' ')) {
                all_imgs_urls.push(bgImg)
            }
        }
    }

    var imgs_elms = Array.from(parent.getElementsByTagName('img'))
    await imgs_elms.forEach(img => {
        if (!ext_imgs.includes(img.src) && !img.src.includes('.svg') && !img.src.includes('data:image') && !img.src.includes(' ')) {
            all_imgs_urls.push(img.src)
        }
    })
    return all_imgs_urls
}




// Credits to https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
      '((\\d{1,3}\\.){3}\\d{1,3}))'+
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+
      '(\\#[-a-z\\d_]*)?$','i')
    return !!pattern.test(str);
}