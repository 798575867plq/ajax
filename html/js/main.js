(function() {
  var app = new Vue({
    el: '#app',
    data: {
      loginuser: {}
    },
    methods: {
      logout: function() {
        DataService.sendAjax('/TbAdmin/logout', {}, function(data) {
          location = 'login.html';
        });
      }
    }
  });

  //查询登陆用户信息
  DataService.sendAjax('/TbAdmin/getAdminInfo', {}, function(data) {
    console.log(data);
    if (data.datas && data.datas.admin) {
      app.loginuser = data.datas.admin;
    } else {
      alert('需要登陆');
      location = 'login.html';
    }
  });
})();
