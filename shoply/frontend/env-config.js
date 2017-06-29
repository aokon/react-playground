const prod = process.env.NODE_ENV === 'production'

module.exports = {
  'API_URL': prod ? 'https://api.example.com' : 'http://api.shoply.dev'
}