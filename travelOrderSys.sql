-- 创建库

create database travelOrderSys121;
use travelOrderSys121;

-- 创建表

create table flight121 (
	fli_num varchar(40),
	price int,
	fli_numseats int,
	fli_numavail int,
	fromcity varchar(40),
	arr_city varchar(40)
);

create table hotels121(
	hot_num varchar(40),
	location varchar(40),
	hot_price int,
	hot_romNum int,
	hot_avaNum int
);

create table bus121 (
	bus_num varchar(40),
	location varchar(40),
	bus_price int,
	bus_busNum int,
	bus_avaNum int
);

create table customers121 (
	cus_name varchar(40)
);

create table reservations121 (
	cus_name varchar(40),
	res_type int,
	ord_no int
);
-- res_type指出预订的类型（1为预订航班，2为预订宾馆房间，3为预订大巴车）  
