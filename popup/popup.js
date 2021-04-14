const doc = document
const inputEnabled = doc.getElementById("enabled")

chrome.storage.sync.get('isEnabled', function(data) {
    inputEnabled.checked = data.isEnabled
})

inputEnabled.addEventListener("input", () => {
    chrome.storage.sync.set({ "isEnabled": inputEnabled.checked });
})