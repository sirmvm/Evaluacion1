class TaxesController {
  // Star constructor for using "this" in other files
  constructor () {
    this.renderSimpleTaxes = this.renderSimpleTaxes.bind(this)
  }
  // formula to calculate simple interest
  // x = c * (i/100) * n

  calculateTax (capital, tax, years) {
    return capital * (tax / 100) * years
  }

  renderTaxes (req, res) {
    res.render('taxes')
  }

  renderSimpleTaxes (req, res) {
    // payload = carga util
    const payload = req.body
    console.log(payload)
    res.render('taxes', {
      // command that allows you to keep the data on the screen
      capital: payload.capital,
      tax: payload.tax,
      years: payload.years,
      // command that transforms into integers and sends the values to class CalculateTax
      simpleTaxes: this.calculateTax(parseInt(payload.capital), parseInt(payload.tax), parseInt(payload.years))
    })
  }
}

module.exports = TaxesController
