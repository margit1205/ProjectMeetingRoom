package com.payload;

import java.sql.Date;
import java.sql.Time;

public class CheckAvailablity {
    private Date bookingdate;

    private Time checkin;
    private  Time chekout;

    public Date getBookingdate() {
        return bookingdate;
    }

    public void setBookingdate(Date bookingdate) {
        this.bookingdate = bookingdate;
    }

    public Time getCheckin() {
        return checkin;
    }

    public void setCheckin(Time checkin) {
        this.checkin = checkin;
    }

    public Time getChekout() {
        return chekout;
    }

    public void setChekout(Time chekout) {
        this.chekout = chekout;
    }

    @Override
    public String toString() {
        return "CheckAvailablity{" +
                "bookingdate=" + bookingdate +
                ", checkin=" + checkin +
                ", chekout=" + chekout +
                '}';
    }
}
