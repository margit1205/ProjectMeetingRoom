drop database meetingRoom;
create database meetingRoom;
use  meetingRoom;


create table user(
 id  int not null auto_increment primary key,
 username varchar(100),
 email varchar(100) ,
 password varchar(100),
 UNIQUE KEY (email,password)

);
insert into user(id ,username,email,password) values
(1,'aftab','aftab.raja@wavemaker.com','123'),
(2,'shivam','shivam@wavemaker.com','123'),
(3,'vivek','vivek@wavemaker.com','123'),
(4,'jagan','jagan@wavemaker.com','123');

create table admin(
 id  int not null auto_increment primary key,
user_id int unique key ,
foreign key(user_id)references user(id)
);
insert into admin(id,user_id) values (1,1);

create table  city(
id  int not null auto_increment primary key,
city_name varchar(100) not null,
state varchar(100) not null
);

insert into city(id,city_name,state) values(1,'Patna','Bihar'),
(2,'HitechCity','Hyderabad'),
(3,'Noida','Delhi'),
(4,'Sealdah','Kolkata'),
(5,'Saudanagar','Pune'),
(6,'EastMumbai','Maharastra');


create table  meetingRoom(
id  int not null auto_increment primary key,
name varchar(100) not null,
city_id int not null,
capacity int,
foreign key(city_id)references city(id)

);

insert into meetingRoom(id,name,city_id,capacity)values(1,'Presentation Room',5,5),
(2,'Conference Room',1,5),
(3,'Interview Room',1,5),
(4,'Presentation Room',3,5),
(5,'Presentation Room',4,5);

create table booking(
id  int not null auto_increment primary key,
user_id int not null,
Room_id int not null unique key,
no_guest int not null,
booking_date date,
checkin time,
checkout time,
foreign key(user_id)references user(id),
foreign key(Room_id)references meetingRoom(id)


);

insert into booking(id,user_id,Room_id,no_guest,booking_date,checkin,checkout) values
(1,2,1,4,'2022-12-11',"19:30:10","20:30:10"),
(2,3,2,4,'2022-12-11',"19:30:10","23:30:10");

CREATE TABLE available(
id  int not null auto_increment primary key,
room_id int,
isAvailable boolean,
FOREIGN key(room_id)REFERENCES meetingRoom(id)
);

INSERT INTO available(id,room_id,isAvailable) values(1,2,true);


create table partner(
id  int not null auto_increment primary key,
name varchar(100),
email varchar(100),
room_id int,
room_img blob null,
cost int ,
foreign key(room_id)references meetingRoom(id)
);
insert into partner(id,name,email,room_id,room_img,cost) values
(1,'stefen','st@wavemaker.in',3,0,2500),
(2,'damon','st@wavemaker.in',3,0,2500),
(3,'salvatore','st@wavemaker.in',3,0,2500);
