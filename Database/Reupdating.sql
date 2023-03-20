
drop database meetingroomnew;
create database meetingroomnew;
use meetingroomnew;
CREATE TABLE  employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  emp_id INT NOT NULL UNIQUE KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL

);

insert into employee(id,emp_id,name,email)values(1,1001,"Shivam","shivam@gmail.com"),
(2,1002,"Vivek","vivek@gmail.com");

CREATE TABLE meetingroom (
  id INT NOT NULL AUTO_INCREMENT primary key,
  roomname VARCHAR(100) NOT NULL unique key,
  capacity INT NOT NULL,
  imagepath VARCHAR(1024) not NULL
);

insert into meetingroom(id,roomname,capacity,imagepath)values(1,"501",10,"C:\\Users\\aftabrajamd_700033\\Desktop\\Project(Meeting Room)\\FrontEnd\images\\MeetingRoom (3).jpg"),
(2,"502",5,"C:\\Users\\aftabrajamd_700033\\Desktop\\Project(Meeting Room)\\FrontEnd\\images\\MeetingRoom (17).jpg");
update meetingroom set imagepath="./images/MeetingRoom (15).jpg" where id=1;
CREATE TABLE timeslot (
  id INT NOT NULL AUTO_INCREMENT primary key,
  slotname VARCHAR(100) NOT NULL unique key
  );
insert into timeslot(id,slotname)values(1,"9am - 10am"),
(2,"10am - 11am"),
(3,"11am - 12am"),
(4,"12pm - 1pm"),
(5,"1pm - 2pm"),
(6,"2pm - 3pm"),
(7,"3pm - 4pm"),
(8,"4pm - 5pm"),
(9,"5pm - 6pm"),
(10,"6pm - 7pm"),
(11,"7pm - 8pm");


CREATE TABLE booking (
  id INT NOT NULL AUTO_INCREMENT primary key,
  emp_id INT NOT NULL,
  meeting_room_id INT NOT NULL,
  slot_id INT NOT NULL,
  booking_date DATE NOT NULL,
    FOREIGN KEY (emp_id)
    REFERENCES employee (emp_id),
    FOREIGN KEY (meeting_room_id)
    REFERENCES meetingroom(id),
    FOREIGN KEY (slot_id)
    REFERENCES timeslot (id),
    unique key(meeting_room_id,slot_id,booking_date)
);

insert into booking(id,emp_id,meeting_room_id,slot_id,booking_date)values(1,1001,1,1,"2023-03-12");
CREATE TABLE message (
  id INT NOT NULL AUTO_INCREMENT primary key,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  subject VARCHAR(100) not null,
  message VARCHAR(1000) 
  );
  
  
  
  
