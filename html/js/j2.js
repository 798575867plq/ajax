(function() {
  var serverUrl = 'http://demo.huhuiyu.top/projectsdataservice';
  console.log('in j2.js====>', serverUrl);

  var testJson = { echo: 'axios发送请求' };
  var testJsonQs = huhuiyu.jsonToQueryString(testJson);
  console.log(testJsonQs);

  axios
    .post(serverUrl + '/', testJsonQs)
    .then(function(resp) {
      console.log(resp);
    })
    .catch(function(error) {
      console.log(error);
    });

  function sendAjax(url, params, callback) {
    axios
      .post(serverUrl + url, huhuiyu.jsonToQueryString(params))
      .then(function(resp) {
        callback(resp.data);
      })
      .catch(function(error) {
        callback(error);
      });
  }

  sendAjax('/', { echo: 'axios发送请求' }, function(data) {
    console.log(data);
  });

  var a1 = new Vue({
    el: '#a1',
    data: {
      echo: 'vue发送echo数据',
      result: '',
      types: []
    },
    methods: {
      test01: function() {
        sendAjax('/', { echo: this.echo }, function(data) {
          a1.result = huhuiyu.formatJson(data, true);
        });
      },
      query: function() {
        sendAjax('/teachtype/queryAll', {}, function(data) {
          if (!data.success) {
            alert(data.message);
            return;
          }
          a1.types = data.datas.list;
        });

        DataService.sendAjax('/teachtype/queryAll', {}, function(data) {
          console.log(data);
        });
      }
    }
  });
})();
