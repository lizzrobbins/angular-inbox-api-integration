(function() {
  angular.module('inboxApp')
  .component('navBar', {
    templateUrl: '/js/navBar/NavBar.template.html',
    bindings: {
      binding: "="
    }
  })
})()
