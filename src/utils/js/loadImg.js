async function loadImage(url){
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.crossOrigin = "anonymous"
        img.onload = () => resolve(img);
        img.onerror = reject;
    });
}