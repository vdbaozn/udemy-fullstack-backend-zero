const getHomepage = (req, res) => {
    res.send('Hello World! Page Home')
}

const getABC = (req, res) => {
    res.send('Check ABC')
}

const getHoiDanIT = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, getHoiDanIT
}