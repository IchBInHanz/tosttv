const loadModel = async (model_url) => {
    model = await ml5.imageClassifier(model_url + 'model.json');
}