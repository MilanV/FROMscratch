var Metalsmith = require('metalsmith');
var markdown   = require('metalsmith-markdown');
var templates  = require('metalsmith-templates');
var collections = require('metalsmith-collections');


Metalsmith(__dirname)
	.use(markdown())
	.use(templates({
		engine: 'handlebars',
		partials: {
			header: 'partials/header',
			footer: 'partials/footer',
			menutop: 'partials/menu-top'
		}
	}))
	.use(collections({
		menutop: {
			pattern: '*.md',
			refer: false,
		}
	}))
	.metadata({
		title: "Kostky.org - CZ & SK sdružení dospělých fanoušků LEGO",
		description: "Chcete se podívat na naše výstavy, dozvědět se víc nebo se dokonce k nám přidat?",
		generator: "Metalsmith",
		url: "http://www.metalsmith.io/"
	})
	.source('./src')
	.destination('./build')
	.build(function (err) { if(err) console.log(err) })

