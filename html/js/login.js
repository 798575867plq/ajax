(function() {
  var app = new Vue({
    el: '#app',
    data: {
      tbAdmin: {
        username: '',
        password: ''
      },
      error: ''
    },
    methods: {
      login: function() {
        if (!this.tbAdmin.password) {
          app.error = '密码必须输入';
          return;
        }
        this.tbAdmin.password = huhuiyu.md5(this.tbAdmin.password);

        DataService.sendAjax('/TbAdmin/login', { tbAdmin: this.tbAdmin }, function(data) {
          app.tbAdmin.password='';
          if(data.success){
            location='main.html';
            return;
          }
          app.error = data.message;
        });
      }
    }
  });
})();
