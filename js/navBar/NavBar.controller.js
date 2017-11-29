angular.module('inboxApp')
.controller('navController', navBarFun)

function navBarFun() {
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

  vm.markAsRead = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected==true) {
        mail[i].read = true
      }
    }
  }

  vm.markAsUnread = function(mail) {
    for (var i = 0; i < mail.length; i++) {
      if (mail[i].selected==true) {
        mail[i].read = false
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
