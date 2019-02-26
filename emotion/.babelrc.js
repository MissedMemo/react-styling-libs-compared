const isTest = String( process.env.NODE_ENV === 'test' )
const isProduction = String(process.env.NODE_ENV === 'production' )

module.exports = {
  presets: [
    "@babel/preset-react",
    ["@babel/preset-env", {
      modules: isTest ? "commonjs" : false,
      loose: true
    }]
  ],
  "plugins": [
    isProduction ? "emotion" : ["emotion", {"sourceMap": true}] // must be FIRST listed plugin
  ]
}