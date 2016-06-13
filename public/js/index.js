$(document).ready(function(){
  //init modal
  function initModal(tr, type) {
    var html;
    if(type == 1) {
      html = '<tr>' +
        '<th>航班编号</th>'+
        '<th>From</th>'+
        '<th>To</th>'+
        '<th>价格</th>'+
        '<th>座位</th>'+
        '<th>剩余座位</th>'+
      '</tr>'+
      '<tr>' +
        '<td><input type="text" value="'+$($(tr).find("td")[0]).text()+'" readonly="readonly"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[1]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[2]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[3]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[4]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[5]).text()+'"/></td>'+
      '</tr>';
    } else if(type == 2) {
      html = '<tr>' +
        '<th>大巴编号</th>'+
        '<th>地区</th>'+
        '<th>价格</th>'+
        '<th>座位</th>'+
        '<th>剩余座位</th>'+
      '</tr>'+
      '<tr>' +
        '<td><input type="text" value="'+$($(tr).find("td")[0]).text()+'" readonly="readonly"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[1]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[2]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[3]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[4]).text()+'"/></td>'+
      '</tr>';
    } else if(type == 3) {
      html = '<tr>' +
        '<th>宾馆编号</th>'+
        '<th>地区</th>'+
        '<th>价格</th>'+
        '<th>房间数</th>'+
        '<th>剩余房间</th>'+
      '</tr>'+
      '<tr>' +
        '<td><input type="text" value="'+$($(tr).find("td")[0]).text()+'" readonly="readonly"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[1]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[2]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[3]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[4]).text()+'"/></td>'+
      '</tr>';
    } else {
      return alert("error");
    }
    $("#slide1Modal tbody").html(html);
  }
  //slide1 modifi data
  $("[name='modifi']").click(function(e) {
    var tr = $(this).parents('tr')[0];
    console.log($($(tr).find("td")[0]).text());
    var type = $(tr).attr("target");
    console.log(type);
    initModal(tr,type);
    $("#slide1Modal").modal("show",{
      keyboard: true
    });
  })
})
