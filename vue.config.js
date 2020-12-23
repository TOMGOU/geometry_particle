const isProduction = process.env.RUN_ENV === 'production';
const baseUrl = '/www/';
module.exports = {
  baseUrl: isProduction ? baseUrl : '/',
  outputDir: 'www',
}
