const express = require('express')
const PageController = require('./controllers/PageController')
const TaxesController = require('./controllers/TaxesController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const taxesController = new TaxesController()

// Routes - Change the first page '/' to '/taxes'
router.get('/', taxesController.renderTaxes)
router.post('/', taxesController.renderSimpleTaxes)

router.get('*', pageController.renderNotFound)

module.exports = router
