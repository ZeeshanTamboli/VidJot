if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://zeeshan:zeeshan@ds113358.mlab.com:13358/vidjot-prod' }
} else {
  module.exports = {
    mongoURI: 'mongodb://localhost/vidjot-dev'
  }
}