(function() {
  var serverUrl = 'http://demo.huhuiyu.top/projectsdataservice';
  var DataService = {};
  var serverTokenKey = 'server.token';

  DataService.sendAjax = function(url, params, callback) {
    //发送token信息
    var token = localStorage.getItem(serverTokenKey);
    params.token = token;

    axios
      .post(serverUrl + url, huhuiyu.jsonToQueryString(params))
      .then(function(resp) {
        //如果存在token需要保存
        if (resp.data && resp.data.token) {
          localStorage.setItem(serverTokenKey, resp.data.token);
        }
        callback(resp.data);
      })
      .catch(function(error) {
        callback(error);
      });
  };

  window.DataService = DataService;
})();
