$(document).ready(function(){
  //contains 定义数组里是否包含元素
  Array.prototype.contains = function(needle) {
    for(i in this) {
      if(this[i] == needle) return true;   
    }
    return false;
  }

  //检测登录 PS:这个请求会在登出后点击后退是服务器端接收一个get /user的请求？？
  $.ajax({
    url: '/users',
    type: 'GET',
    success: function(data) {
      console.log(data.name);
    },
    error: function(data) {
      console.log("未登录");
      //添加用户弹窗
      $("#login-modal").modal("show",{
        keyboard: true
      });
    }
  })
  
  function addUser(){
    var name = $("#name-edit").val();
    $("#login-modal").modal("hide");
    var data = {
      name: name
    };
    $.ajax({
      url: '/users/addUser',
      type: 'POST',
      data: data,
      success: function(data) {
        alert("添加用户成功");
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  };
  // 获取所有用户
  function getAllUser() {
    $.ajax({
      url: '/users/queryAll',
      type: 'POST',
      success: function(data) {
        console.log(data.users);
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 获取某个用户
  function getOneUser() {
    $.ajax({
      url: '/users/queryByName',
      type: 'POST',
      success: function(data) {
        console.log(data.data);
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 获取航班数据
  function getFlightData() {
    $.ajax({
      url: '/getFlightData',
      type: 'POST',
      success: function(data) {
        console.log(data.data);
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 获取宾馆数据
  function getHotelData() {
    $.ajax({
      url: '/getHotelData',
      type: 'POST',
      success: function(data) {
        console.log(data.data);
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 获取大巴数据
  function getBusData() {
    $.ajax({
      url: '/getBusData',
      type: 'POST',
      success: function(data) {
        console.log(data.data);
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 添加航班数据
  function addFlightData(data) {
    $.ajax({
      url: '/addFlightData',
      type: 'POST',
      data: data,
      success: function(data) {
        alert(data.msg);
        updateData();
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 添加宾馆数据
  function addHotelData(data) {
    $.ajax({
      url: '/addHotelData',
      type: 'POST',
      data: data,
      success: function(data) {
        alert(data.msg);
        updateData();
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 添加大巴数据
  function addBusData(data) {
    $.ajax({
      url: '/addBusData',
      type: 'POST',
      data: data,
      success: function(data) {
        alert(data.msg);
        updateData();
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 修改航班数据
  function modFlightData(data) {
    $.ajax({
      url: '/modFlightData',
      type: 'POST',
      data: data,
      success: function(data) {
        alert(data.msg);
        updateData();
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 修改宾馆数据
  function modHotelData(data) {
    $.ajax({
      url: '/modHotelData',
      type: 'POST',
      data: data,
      success: function(data) {
        alert(data.msg);
        updateData();
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }
  // 修改大巴数据
  function modBusData(data) {
    $.ajax({
      url: '/modBusData',
      type: 'POST',
      data: data,
      success: function(data) {
        alert(data.msg);
        updateData();
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }

  // 添加数据事件
  $("[name='addFlightData']").click(function(e) {
    $("#addModal").modal("show",{
      keyboard: true
    });
    var html = '<tr target="1">' +
        '<th>航班编号</th>'+
        '<th>价格</th>'+
        '<th>座位</th>'+
        '<th>剩余座位</th>'+
        '<th>From</th>'+
        '<th>To</th>'+
      '</tr>'+
      '<tr>' +
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
      '</tr>';
    $("#addModal tbody").html(html);
  })
  $("[name='addHotelData']").click(function(e) {
    $("#addModal").modal("show",{
      keyboard: true
    });
    $("#addModal button.btn-primary").addClass("addHotel");
    var html = '<tr target="2">' +
        '<th>宾馆编号</th>'+
        '<th>地区</th>'+
        '<th>价格</th>'+
        '<th>房间数</th>'+
        '<th>剩余房间</th>'+
      '</tr>'+
      '<tr>' +
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
      '</tr>';
    $("#addModal tbody").html(html);
  });
  $("[name='addBusData']").click(function(e) {
    $("#addModal").modal("show",{
      keyboard: true
    });
    $("#addModal button.btn-primary").addClass("addBus");
    var html = '<tr target="3">' +
        '<th>大巴编号</th>'+
        '<th>地区</th>'+
        '<th>价格</th>'+
        '<th>座位</th>'+
        '<th>剩余座位</th>'+
      '</tr>'+
      '<tr>' +
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
        '<td><input type="text" value=""/></td>'+
      '</tr>';
    $("#addModal tbody").html(html);
  })
  $("#addModal button.btn-primary").click(function(e) {
    var type = $($("#addModal tr")[0]).attr("target");
    console.log(type);
    if(type == 1) {
      var val = $("#addModal").find("input");
      $("#addModal").modal("hide");
      var data = {
        fli_num: $(val[0]).val(),
        price: $(val[1]).val(),
        fli_numseats: $(val[2]).val(),
        fli_numavail: $(val[3]).val(),
        fromcity: $(val[4]).val(),
        arr_city: $(val[5]).val()
      };
      addFlightData(data);
    } else if(type == 2) {
      var val = $("#addModal").find("input");
      $("#addModal").modal("hide");
      var data = {
          hot_num: $(val[0]).val(),
          location: $(val[1]).val(),
          hot_price: $(val[2]).val(),
          hot_romNum: $(val[3]).val(),
          hot_avaNum: $(val[4]).val()
        };
      addHotelData(data);
    } else if(type == 3) {
      var val = $("#addModal").find("input");
      $("#addModal").modal("hide");
      var data = {
          bus_num: $(val[0]).val(),
          location: $(val[1]).val(),
          bus_price: $(val[2]).val(),
          bus_busNum: $(val[3]).val(),
          bus_avaNum: $(val[4]).val()
      };
      addBusData(data);
    }
  })
  $("#modModal button.btn-primary").click(function(e) {
    var type = $($("#modModal tr")[0]).attr("target");
    console.log(type);
    var val = $("#modModal").find("input");
    $("#modModal").modal("hide");
    if(type == 1) {
      var data = {
        fli_num: $(val[0]).val(),
        price: $(val[1]).val(),
        fli_numseats: $(val[2]).val(),
        fli_numavail: $(val[3]).val(),
        fromcity: $(val[4]).val(),
        arr_city: $(val[5]).val()
      };
      modFlightData(data);
    } else if(type == 2) {
      var data = {
          hot_num: $(val[0]).val(),
          location: $(val[1]).val(),
          hot_price: $(val[2]).val(),
          hot_romNum: $(val[3]).val(),
          hot_avaNum: $(val[4]).val()
        };
      modHotelData(data);
    } else if(type == 3) {
      var data = {
          bus_num: $(val[0]).val(),
          location: $(val[1]).val(),
          bus_price: $(val[2]).val(),
          bus_busNum: $(val[3]).val(),
          bus_avaNum: $(val[4]).val()
      };
      modBusData(data);
    }
  })



  //刷新数据
  function updateData() {
    //flight
    $.ajax({
      url: '/getFlightData',
      type: 'POST',
      success: function(data) {
        showData(data.data,1);
      },
      error: function(data) {
        alert(data.msg);
      }
    });
    //hotel
    $.ajax({
      url: '/getHotelData',
      type: 'POST',
      success: function(data) {
        showData(data.data,2);
      },
      error: function(data) {
        alert(data.msg);
      }
    })
    //bus
    $.ajax({
      url: '/getBusData',
      type: 'POST',
      success: function(data) {
        showData(data.data,3);
      },
      error: function(data) {
        alert(data.msg);
      }
    })
  }

  //数据处理
  function showData(data, type) {
    var html;
    if(type == 1) {
      var tbody = $(".showFlight tbody");
      tbody.find("tr").remove();
      for (var i = 0; i < data.length; i++) {
         tbody.append('<tr target="1">' +
        '<td>' + data[i].fli_num + '</td>' +
        '<td>' + data[i].price + '</td>' +
        '<td>' + data[i].fli_numseats + '</td>' +
        '<td>' + data[i].fli_numavail + '</td>' +
        '<td>' + data[i].fromcity + '</td>' +
        '<td>' + data[i].arr_city + '</td>' +
        '<td><button type="button" name="modifi">修改</button></td>'+
        '<td><button type="button" name="delete">删除</button></td>'+
        '</tr>');
      };
      var citys = Array();
      for (var i = 0; i < data.length; i++) {
        if(!citys.contains(data[i].fromcity)) {
          citys.push(data[i].fromcity);
        }
        if(!citys.contains(data[i].arr_city)) {
          citys.push(data[i].arr_city);
        }
      };
      console.log(citys);
      var queFrom = $(".queFrom");
      queFrom.find("option").remove();
      for(var i = 0; i < citys.length; i++) {
        queFrom.append(
          '<option value="option">'+ citys[i] +'</option>'
          );
      }
      var queTo = $(".queTo");
      queTo.find("option").remove();
      for(var i = 0; i < citys.length; i++) {
        queTo.append(
          '<option value="option">'+ citys[i] +'</option>'
          );
      }

    } else if(type == 2) {
      var tbody = $(".showHotel tbody");
      tbody.find("tr").remove();
      for (var i = 0; i < data.length; i++) {
         tbody.append('<tr target="2">' +
        '<td>' + data[i].hot_num + '</td>' +
        '<td>' + data[i].location + '</td>' +
        '<td>' + data[i].hot_price + '</td>' +
        '<td>' + data[i].hot_romNum + '</td>' +
        '<td>' + data[i].hot_avaNum + '</td>' +
        '<td><button type="button" name="modifi">修改</button></td>'+
        '<td><button type="button" name="delete">删除</button></td>'+
        '</tr>');
      };
    } else if(type == 3) {
      var tbody = $(".showBus tbody");
      tbody.find("tr").remove();
      for (var i = 0; i < data.length; i++) {
         tbody.append('<tr target="3">' +
        '<td>' + data[i].bus_num + '</td>' +
        '<td>' + data[i].location + '</td>' +
        '<td>' + data[i].bus_price + '</td>' +
        '<td>' + data[i].bus_busNum + '</td>' +
        '<td>' + data[i].bus_avaNum + '</td>' +
        '<td><button type="button" name="modifi">修改</button></td>'+
        '<td><button type="button" name="delete">删除</button></td>'+
        '</tr>');
      };
    } else {
      return alert("error");
    }
  }

  

  
  //init modal
  function initModal(tr, type) {
    var html;
    if(type == 1) {
      html = '<tr target="1">' +
        '<th>航班编号</th>'+
        '<th>价格</th>'+
        '<th>座位</th>'+
        '<th>剩余座位</th>'+
        '<th>From</th>'+
        '<th>To</th>'+
      '</tr>'+
      '<tr>' +
        '<td class="cantMod"><input type="text" value="'+$($(tr).find("td")[0]).text()+'" readonly="readonly"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[1]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[2]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[3]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[4]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[5]).text()+'"/></td>'+
      '</tr>';
    } else if(type == 3) {
      html = '<tr target="3">' +
        '<th>大巴编号</th>'+
        '<th>地区</th>'+
        '<th>价格</th>'+
        '<th>座位</th>'+
        '<th>剩余座位</th>'+
      '</tr>'+
      '<tr>' +
        '<td class="cantMod"><input type="text" value="'+$($(tr).find("td")[0]).text()+'" readonly="readonly"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[1]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[2]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[3]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[4]).text()+'"/></td>'+
      '</tr>';
    } else if(type == 2) {
      html = '<tr target="2">' +
        '<th>宾馆编号</th>'+
        '<th>地区</th>'+
        '<th>价格</th>'+
        '<th>房间数</th>'+
        '<th>剩余房间</th>'+
      '</tr>'+
      '<tr>' +
        '<td class="cantMod"><input type="text" value="'+$($(tr).find("td")[0]).text()+'" readonly="readonly"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[1]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[2]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[3]).text()+'"/></td>'+
        '<td><input type="text" value="'+$($(tr).find("td")[4]).text()+'"/></td>'+
      '</tr>';
    } else {
      return alert("error");
    }
    console.log("ok");
    $("#modModal tbody").html(html);
  }
  // deleteData
  function deleteData(tr, type) {
    var num = $($(tr).find("td")[0]).text();
    console.log(num);
    if(type == 1) {
      var data = {
        fli_num: num
      };
      $.ajax({
        url: '/deleteFlight',
        type: 'DELETE',
        data: data,
        success: function(data) {
          alert(data.msg);
        },
        error: function(data) {
          alert(data.msg);
        }
      })
    } else if(type == 2){
      var data = {
        hot_num: num
      };
      $.ajax({
        url: '/deleteHotel',
        type: 'DELETE',
        data: data,
        success: function(data) {
          alert(data.msg);
        },
        error: function(data) {
          alert(data.msg);
        }
      })
    } else if(type == 3) {
      var data = {
        bus_num: num
      };
      $.ajax({
        url: '/deleteBus',
        type: 'DELETE',
        data: data,
        success: function(data) {
          alert(data.msg);
        },
        error: function(data) {
          alert(data.msg);
        }
      })
    }
  }
  function showFlightLine(From,To,arrcity) {
    for (var i = 0; i < From.length; i++) {
        arrcity.push(From[i].arr_city);
        if(From[i].arr_city == To) return;
        queFlightLine(From[i].arr_city,To,arrcity);
    }

  }
  //查询航线
  function queFlightLine(queFrom,queTo,arrcity){
    var data = {
      fromcity: queFrom,
      arrcity: queTo
    };
    $.ajax({
      url: '/queFlightLine',
      type: 'POST',
      data: data,
      success: function(data) {
        showFlightLine(data.From,queTo,arrcity);
      },
      error: function(data) {
        return 0;
      }
    })
  }





  updateData();
  // 点击事件监听
  $(window).click(function() {
    // 修改数据
    if($(event.target).is('button[name="modifi"]')){
      var table = $(event.target).parents('table')[0];
      var type = $(table).attr("target");
      console.log(type);
      var tr = $(event.target).parents('tr');
      initModal(tr,type);
      $("#modModal").modal("show",{
        keyboard: true
      });
      updateData();
    }
    // 删除数据
    if($(event.target).is('button[name="delete"]')) {
      var table = $(event.target).parents('table')[0];
      var type = $(table).attr("target");
      console.log(type);
      var tr = $(event.target).parents('tr');
      deleteData(tr, type);
      updateData();
    }
    // 添加用户
    if($(event.target).is('#applyNameBtn')) {
      addUser();
    }
    //查询航线
    if($(event.target).is('.queFlightLine')) {
      var queFrom = $('.queFrom').find('option:selected').text(); 
      console.log(queFrom);
      var queTo = $('.queTo').find('option:selected').text();
      var arrcity = Array();
      arrcity.push(queFrom);
      queFlightLine(queFrom,queTo,arrcity);
      console.log(arrcity);
    }
});
})
