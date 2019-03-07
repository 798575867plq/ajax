$(function() {
  console.log('jq的ajax请求演示');

  //服务器地址
  var serverUrl = 'http://demo.huhuiyu.top/projectsdataservice';

  $.ajax({
    url: serverUrl + '/',
    data: { echo: '测试jq' },
    dataType: 'json',
    method: 'POST'
  }).done(function(data) {
    console.log('调用后台接口', data);
  });

  $('#btn1').click(function() {
    $.ajax({
      url: serverUrl + '/',
      data: { echo: $('#text').val() },
      dataType: 'json',
      method: 'POST'
    }).done(function(data) {
      $('#dv').html(JSON.stringify(data));
    });
  });

  $('#btn2').click(function() {
    $.ajax({
      url: serverUrl + '/teachtype/queryAll',
      data: {},
      dataType: 'json',
      method: 'POST'
    }).done(function(data) {
      $('#dv').html("<pre>"+huhuiyu.formatJson(data,true)+"</pre>");
    });
  });
});
