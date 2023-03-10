package com.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;
import java.sql.Time;

@Entity
@Table(name="available")
public class Available {

    @Id
    @Column(name ="id")
    private  int availId;

    @Column(name = "room_id")
    private  int roomId;

    @Column(name = "checkdate")
    private Date checkdate;

    @Column(name = "checkin")
    private Time checkin;

    @Column(name = "checkout")
    private Time checkout;

    @Column(name = "isAvailable")
    private boolean isAvail;

    public int getAvailId() {
        return availId;
    }

    public void setAvailId(int availId) {
        this.availId = availId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public Date getCheckdate() {
        return checkdate;
    }

    public void setCheckdate(Date checkdate) {
        this.checkdate = checkdate;
    }

    public Time getCheckin() {
        return checkin;
    }

    public void setCheckin(Time checkin) {
        this.checkin = checkin;
    }

    public Time getCheckout() {
        return checkout;
    }

    public void setCheckout(Time checkout) {
        this.checkout = checkout;
    }

    public boolean isAvail() {
        return isAvail;
    }

    public void setAvail(boolean avail) {
        isAvail = avail;
    }

    @Override
    public String toString() {
        return "Available{" +
                "availId=" + availId +
                ", roomId=" + roomId +
                ", checkdate=" + checkdate +
                ", checkin=" + checkin +
                ", checkout=" + checkout +
                ", isAvail=" + isAvail +
                '}';
    }
}

