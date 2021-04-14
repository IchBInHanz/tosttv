const engine = async () => {
    var old_imgs_urls = []
    var unsafe = false

    var imgs_urls = await grabImgs(document)
    if (imgs_urls.length == 0) {
        safeBanner()
    }

    setInterval(async () => {
        var imgs_urls = await grabImgs(document)
        if (old_imgs_urls.length !== imgs_urls.length) {
            old_imgs_urls = imgs_urls
            for(var imgs_url of imgs_urls) {
                var img = await loadImage(imgs_url)
                await model.classify(img, async (error, results) => {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    if (results[0].label == 'unsafe') {
                        unsafe = true
                        console.log(imgs_url+': Unsafe')
                        img_info = {
                            src: imgs_url,
                            img: img,
                            results: results,
                            label: results[0].label
                        }
                        unsafe_imgs.push(img_info)
                    } else {
                        console.log(imgs_url+': Safe')
                    }
                });
            }
            if (unsafe) {
                unsafeBanner(unsafe_imgs)
            } else {
                safeBanner()
            }
        }
    }, 100);
}