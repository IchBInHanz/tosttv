let body_elm = document.getElementsByTagName('body')[0]
let ext_imgs = ["https://cdn.betterttv.net/emote/5b0da25016252035ad06900e/3x", "https://cdn.betterttv.net/emote/5a848920c577c33d3e375af0/3x"]
let model_url = "https://teachablemachine.withgoogle.com/models/Vh0hNhGN8/"
let model
let unsafe_imgs = []


chrome.storage.sync.get('isEnabled', async (isEnabled) => {
    if (isEnabled.isEnabled) {
        console.log('%c TOSTTV Enabled', 'color: #15847b; font-size: 3rem;')
        start()
    } else {
        console.log('%c TOSTTV Disabled', 'color: #d32254; font-size: 3rem;')
    }
})


const start = async () => {
    await initBanner()
    await loadModel(model_url)
    engine()
}