$(document).ready(function(){
  var flight=[];
  var hotel=[];
  var bus=[];
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
        $(".userName").html(name);
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
    // 获取所有用户
      $.ajax({
        url: '/users/queryAll',
        type: 'POST',
        success: function(data) {
          console.log(data.users);
          showUsers(data.users);
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
        flight[i] = {
          fromcity: data[i].fromcity,
          arr_city: data[i].arr_city,
          price: data[i].price,
          fli_numseats: data[i].fli_numseats,
          fli_numavail: data[i].fli_numavail,
          fli_num: data[i].fli_num
        };
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
        hotel[i] = {
          hot_num: data[i].hot_num,
          location: data[i].location,
          hot_price: data[i].hot_price,
          hot_romNum: data[i].hot_romNum,
          hot_avaNum: data[i].hot_avaNum
        };
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
      var locations = [];
      for (var i = 0; i < data.length; i++) {
        if(!locations.contains(data[i].location)) {
          locations.push(data[i].location);
        }
      };
      var queArea = $(".queArea");
      queArea.find("option").remove();
      for (var i = locations.length - 1; i >= 0; i--) {
        queArea.append(
          '<option value="option">'+ locations[i] +'</option>'
          )
      }
    } else if(type == 3) {
      var tbody = $(".showBus tbody");
      tbody.find("tr").remove();
      for (var i = 0; i < data.length; i++) {
        bus[i] = {
          bus_num: data[i].bus_num,
          location: data[i].location,
          bus_price: data[i].bus_price,
          bus_busNum: data[i].bus_busNum,
          bus_avaNum: data[i].bus_avaNum
        };
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
      var locations = [];
      for (var i = 0; i < data.length; i++) {
        if(!locations.contains(data[i].location)) {
          locations.push(data[i].location);
        }
      };
      var queLoc = $(".queLoc");
      queLoc.find("option").remove();
      for (var i = locations.length - 1; i >= 0; i--) {
        queLoc.append(
          '<option value="option">'+ locations[i] +'</option>'
          )
      }
    } else {
      return alert("error");
    }
  }
  // show user
  function showUsers(data){
    var queUser = $(".queUser");
    queUser.find("option").remove();
    for (var i = data.length - 1; i >= 0; i--) {
      queUser.append(
        '<option value="option">'+data[i].cus_name+'</option>'
        )
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
  // 获取航班价格
  function getPrice(From,To){
    var _price;
    for(var i=0;i< flight.length;i++){
      if(flight[i].fromcity == From&&flight[i].arr_city == To){
        _price = flight[i].price;
      }
    }
    console.log(From+" "+To+" "+_price);
    return _price;
  }
  // 处理航线
  function initFlightLine(line) {
    var price = 0;
    for(var i=0;i < line.length-1;i+=2) {
      price+=getPrice(line[i],line[i+2]);
    }
    console.log(price);
    var html = '';
    for(var i=0;i < line.length-1;i+=2){
      html+= line[i]+'——';
    }
    html+= line[line.length-1];
    var num = '';
    for(var i=1;i < line.length-2;i+=2){
      num+= line[i]+',';
    }
    num+= line[line.length-2];
    var show = $(".FlightLine tbody");
    show.append(
      '<tr target="1">'+
      '<td>'+ num +'</td>'+
      '<td>'+ html +'</td>'+
      '<td>'+ price +'</td>'+
      '<td><button class="orderBtn" type="button" name="orderFlight">预定</button></td>'+
      '</tr>'
      )
  }
  
  function showFlightLine(lines) {
    console.log(lines);
    initFlightLine(lines);
  }
  //查询航线
  function queFlightLine2(init,queFrom,queTo,lines){
    for (var i = flight.length - 1; i >= 0; i--) {
      if(flight[i].fromcity == queFrom) {
        var newlines = lines;
        console.log
        if(flight[i].arr_city == queTo) {   
          console.log(queFrom+" "+flight[i].arr_city)
          newlines.push(flight[i].fli_num);     
          newlines.push(flight[i].arr_city);
          showFlightLine(newlines);        
        } else if(!newlines.contains(flight[i].arr_city)){
          console.log(queFrom+" "+flight[i].arr_city)
          newlines.push(flight[i].fli_num);
          newlines.push(flight[i].arr_city);
          queFlightLine2(init,flight[i].arr_city,queTo,newlines);
        }
      }
    }
    lines.pop();
    lines.pop();
  }
  function queFlightLine(queFrom,queTo){
    for (var i = flight.length - 1; i >= 0; i--) {
      if(flight[i].fromcity == queFrom) {
        var lines=new Array();
        lines.push(queFrom);
        if(flight[i].arr_city == queTo) {
          console.log(queFrom+" "+flight[i].arr_city);
          lines.push(flight[i].fli_num);
          lines.push(flight[i].arr_city);
          showFlightLine(lines);        
        } else {
          console.log(queFrom+" "+flight[i].arr_city);
          lines.push(flight[i].fli_num);
          lines.push(flight[i].arr_city);
          queFlightLine2(queFrom,flight[i].arr_city,queTo,lines);
        }
      }
    }
  }

  //查询大巴
  function queBus(location) {
    var queBusResult = $(".queBusResult tbody");
    queBusResult.find("tr").remove();
    for (var i = bus.length - 1; i >= 0; i--) {
      if(bus[i].location == location) {
        queBusResult.append(
          '<tr target="3">'+
                    '<td>'+bus[i].bus_num +'</td>'+
                    '<td>'+ bus[i].bus_price+'</td>'+
                    '<td>'+ bus[i].bus_busNum+'</td>'+
                    '<td>'+bus[i].bus_avaNum +'</td>'+
                    '<td><button class="orderBtn" type="button" name="orderBus">预定</button></td>'+
                  '</tr>'
          )
      }
    }
  }
  //查询宾馆
  function queHotel(location) {
    var queHotelResult = $(".queHotelResult tbody");
    queHotelResult.find("tr").remove();
    for (var i = hotel.length - 1; i >= 0; i--) {
      if(hotel[i].location == location) {
        queHotelResult.append(
          '<tr target="2">'+
                    '<td>'+hotel[i].hot_num +'</td>'+
                    '<td>'+ hotel[i].hot_price+'</td>'+
                    '<td>'+ hotel[i].hot_romNum+'</td>'+
                    '<td>'+hotel[i].hot_avaNum +'</td>'+
                    '<td><button class="orderBtn" type="button" name="orderHot">预定</button></td>'+
                  '</tr>'
          )
      }
    }
  }
  //订航班
  function orderFlight(user,num) {
    var data={
      cus_name: user,
      res_type: 1,
      ord_no: num
    };
    $.ajax({
      url: '/orderFlight',
      type: 'POST',
      data: data,
      success: function(data) {
        alert("预定："+ num+"航班成功");
      },
      error: function(data) {
        alert("预定："+ num+"航班失败");
      }
    })
  }
  // 订大巴
  function orderBus(user,num) {
    var data={
      cus_name: user,
      res_type: 3,
      ord_no: num
    };
    $.ajax({
      url: '/orderBus',
      type: 'POST',
      data: data,
      success: function(data) {
        alert("预定："+ num+"大巴成功");
      },
      error: function(data) {
        alert("预定："+ num+"大巴失败");
      }
    })
  }
  // 订宾馆
  function orderHot(user,num) {
    var data={
      cus_name: user,
      res_type: 2,
      ord_no: num
    };
    $.ajax({
      url: '/orderHot',
      type: 'POST',
      data: data,
      success: function(data) {
        alert("预定："+ num+"宾馆成功");
      },
      error: function(data) {
        alert("预定："+ num+"宾馆失败");
      }
    })
  }
  // 获取订单信息
  function getReserveMsg(user) {
    var data= {
      cus_name: user
    };
    $.ajax({
      url: '/getReserveMsg',
      type: 'POST',
      data: data,
      success: function(data) {
        console.log(data.result);
        showOrderMsg(data.result);
      },
      error: function(data) {
        alert("获取订单信息失败");
      }
    })
  }
  // show 订单信息
  function showOrderMsg(data) {
    console.log(data);
    var _price =0;
    var flightMsg = $(".ordFlightMsg tbody");
    flightMsg.find("tr").remove();
    var busMsg = $(".ordBusMsg tbody");
    busMsg.find("tr").remove();
    var hotMsg = $(".ordHotMsg tbody");
    hotMsg.find("tr").remove();
    for (var j = data.length - 1; j >= 0; j--) {
      var type = data[j].res_type;
      var num = data[j].ord_no;
      console.log(i+ " " +type +" " +num);
      if(type == 1) {
        for (var i = 0; i < data.length; i++) {
          if(flight[i].fli_num == num) {
            _price += flight[i].price;
            flightMsg.append(
              '<tr target="1">'+
                            '<td>'+ flight[i].fli_num +'</td>'+
                            '<td>'+ flight[i].fromcity +'</td>'+
                            '<td>'+ flight[i].arr_city+'</td>'+
                            '<td>'+ flight[i].price+'</td>'+
                          '</tr>'
              )
          }
        }
      } else if(type == 2) {
        for (var i = hotel.length - 1; i >= 0; i--) {
          if(hotel[i].hot_num == num) {
            _price += hotel[i].hot_price;
            hotMsg.append(
              '<tr target="1">'+
                            '<td>'+ hotel[i].hot_num +'</td>'+
                            '<td>'+ hotel[i].location +'</td>'+
                            '<td>'+ hotel[i].hot_price+'</td>'+
                          '</tr>'
              )
          }
        }
    } else if(type == 3) {
      for (var i = bus.length - 1; i >= 0; i--) {
          if(bus[i].bus_num == num) {
            _price += bus[i].bus_price;
            busMsg.append(
              '<tr target="1">'+
                            '<td>'+ bus[i].bus_num +'</td>'+
                            '<td>'+ bus[i].location +'</td>'+
                            '<td>'+ bus[i].bus_price+'</td>'+
                          '</tr>'
              )
          }
        }
    }
  }
  $(".nowPrice span").text(_price);
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
      updateData();
    }
    //查询航线
    if($(event.target).is('.queFlightLine')) {
      var show = $(".FlightLine tbody");
      show.find("tr").remove();
      var queFrom = $('.queFrom').find('option:selected').text(); 
      console.log(queFrom);
      var queTo = $('.queTo').find('option:selected').text();
      if(queFrom == queTo) {
        alert("你在逗我？？？")
      } else {
        queFlightLine(queFrom,queTo);
      }  
    }
    //查询大巴
    if($(event.target).is('.queBus')) {
      var location = $('.queLoc').find('option:selected').text();
      queBus(location);
    }
    //查询宾馆
    if($(event.target).is('.queHotel')) {
      var location = $('.queArea').find('option:selected').text();
      queHotel(location);
    }
    //预定飞机
    if($(event.target).is('button[name="orderFlight"]')) {
      var tr = $(event.target).parents("tr");
      var text = $($(tr).find("td")[0]).text();
      var num = text.split(',');
      var user = $(".userName").html();
      console.log(user);
      if(!user) {
        alert("我还不知道你是谁？");
        //添加用户弹窗
        $("#login-modal").modal("show",{
          keyboard: true
        });
      } else {
        for (var i = num.length - 1; i >= 0; i--) {
          orderFlight(user,num[i]);
        }
      }   
      updateData();  
    }
    // 预定大巴
    if($(event.target).is('button[name="orderBus"]')) {
      var tr = $(event.target).parents("tr");
      var num = $($(tr).find("td")[0]).text();
      var user = $(".userName").html();
      console.log(user);
      if(!user) {
        alert("我还不知道你是谁？");
        //添加用户弹窗
        $("#login-modal").modal("show",{
          keyboard: true
        });
      } else {
          orderBus(user,num);
      }
      updateData();
    }
    // 预定宾馆
    if($(event.target).is('button[name="orderHot"]')) {
      var tr = $(event.target).parents("tr");
      var num = $($(tr).find("td")[0]).text();
      var user = $(".userName").html();
      console.log(user);
      if(!user) {
        alert("我还不知道你是谁？");
        //添加用户弹窗
        $("#login-modal").modal("show",{
          keyboard: true
        });
      } else {
          orderHot(user,num);
      }
      updateData();
    }
    // 查询用户
    if($(event.target).is('.queUserBtn')) {
      var user = $(".queUser").find("option:selected").text();
      console.log(user);
      $(".nowUser span").text(user);
      getReserveMsg(user);
    }
    
});
})
