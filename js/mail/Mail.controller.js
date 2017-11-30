angular.module('inboxApp')
.controller('messages', messages);

function messages($http) {
  const vm = this;

  $http.get('https://floating-refuge-12080.herokuapp.com/api/messages')
  .then(function(response){
    vm.mail = response.data._embedded.messages
  })

  vm.updateStarred = function(id, boolean) {
    let data = {
      "messageIds": [ id ],
      "command": "star",
      "star": boolean
    }

    $http.patch('https://floating-refuge-12080.herokuapp.com/api/messages', data).then(function(response) {
      $http.get('https://floating-refuge-12080.herokuapp.com/api/messages')
      .then(function(response){
        vm.mail = response.data._embedded.messages
      })
    })
  }

  vm.updateRead = function(id, boolean) {
    let data = {
      "messageIds": [ id ],
      "command": "read",
      "read": boolean
    }

    $http.patch('https://floating-refuge-12080.herokuapp.com/api/messages', data).then(function(response) {
      console.log('read patch is done!');

      $http.get('https://floating-refuge-12080.herokuapp.com/api/messages')
      .then(function(response){
        vm.mail = response.data._embedded.messages
      })
    })
  }

}
