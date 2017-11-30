angular.module('inboxApp')
.controller('messages', messages);

function messages($http) {
  const vm = this;

  $http.get('https://floating-refuge-12080.herokuapp.com/api/messages').then(function(response){
    vm.mail = response.data._embedded.messages
  })
}
