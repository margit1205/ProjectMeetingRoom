package com.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Time;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.sql.Date;

@Entity
@Table(name="booking")
public class Booking {
    @Id
    @Column(name = "id")
    private  int bookingId;

    @Column(name = "user_id")
    private  int userId;
    @Column(name = "room_id")
    private  int roomId;
    @Column(name = "no_guest")
    private  int noguest;

    @Column(name = "booking_date")
    private  Date bdate;
    @Column(name = "checkin")
    private Time checkintime;

    @Column(name = "checkout")
    private  Time checkouttime;


    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public int getNoguest() {
        return noguest;
    }

    public void setNoguest(int noguest) {
        this.noguest = noguest;
    }

    public Date getBdate() {
        return bdate;
    }

    public void setBdate(Date bdate) {
        this.bdate = bdate;
    }

    public Time getCheckintime() {
        return checkintime;
    }

    public void setCheckintime(Time checkintime) {
        this.checkintime = checkintime;
    }

    public Time getCheckouttime() {
        return checkouttime;
    }

    public void setCheckouttime(Time checkouttime) {
        this.checkouttime = checkouttime;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "bookingId=" + bookingId +
                ", userId=" + userId +
                ", roomId=" + roomId +
                ", noguest=" + noguest +
                ", bdate=" + bdate +
                ", checkintime=" + checkintime +
                ", checkouttime=" + checkouttime +
                '}';
    }
}


