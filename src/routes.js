// Create a router
const router = new Router()

router.route('/', function () {
  this.currentRoute = 'home'
  layout.home.render()
  document.querySelector('.search-engine').style.display = 'none'
})
router.route('search/code', function () {
  this.currentRoute = 'search'
  layout.searchList.render()
})
router.route(':owner/:repo/blob/:branch/:path(.*)', function () {
  this.currentRoute = 'blob'
  layout.viewer.render()
  document.querySelector('header').style.display = 'none'
})
router.route(':owner/:repo/tree/:branch/:path(.*)?', function () {
  this.currentRoute = 'tree'
  layout.folders.render()
})
router.route(':owner/:repo', function () {
  this.currentRoute = 'list'
  layout.folders.render()
})
router.route(':owner', function () {
  this.currentRoute = 'repos'
  layout.repos.render()
})
