module.exports = (app) => {
    app.route('/').get((req, res) => {
        res.send('Hello world');
    });
}