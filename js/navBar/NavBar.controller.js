angular.module('inboxApp')
.controller('navController', navBarFun)

function navBarFun($http) {
  const vm = this;

  vm.selectAll = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = true
    }
  }

  vm.selectNone = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      mail[i].selected = false
    }
  }

  vm.totalSelected = function(mail) {
    var counter = 0

    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected == true) {
        counter++
      }
    }
    return counter
  }

  vm.markAsRead = function(mail, boolean) {
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected==true) {
        console.log('read loop is working');

        let data = {
          "messageIds": [ mail[i].id ],
          "command": "read",
          "read": true
        }

        $http.patch('https://floating-refuge-12080.herokuapp.com/api/messages', data).then(function(response) {
          $http.get('https://floating-refuge-12080.herokuapp.com/api/messages')
          .then(function(response){
            mail = response.data._embedded.messages
          })
        })

      }
    }
  }

  vm.markAsUnread = function(mail, boolean) {
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected==true) {
        console.log('unread loop is working');

        let data = {
          "messageIds": [ mail[i].id ],
          "command": "read",
          "read": false
        }

        $http.patch('https://floating-refuge-12080.herokuapp.com/api/messages', data)
        // .then(function(response) {
        //   $http.watchCollection('obj', function(newValue, oldValue) {
        //     $http.msgObj = {
        //       time: Date.now(),
        //       newValue: clone(newValue),
        //       oldValue: clone(oldValue)
        //     }
        //
        //   })
        //
        //
        // })

      }
    }
  }

  vm.deleteMessage = function(mail) {
    for (var i = mail.length-1; i >= 0; i--) {
      if (mail[i].selected==true) {
        mail.splice(i,1)
      }
    }
  }

  vm.allLabels = [{
      "id": 1,
      "label": "dev",
    },
    {
      "id": 2,
      "label": "personal",
    },
    {
      "id": 3,
      "label": "school",
  }]

  vm.applyLabel = function(selected) {
    console.log(selected);
  }

  vm.removeLabel = function(selected) {
    console.log(selected);
  }
}
