package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="bookedroom")
public class Bookedroom {
    @Id
    @Column(name = "id")
    private  int bookedroomId;

    @Column(name = "book_id")
    private  int bookingId;

    public int getBookedroomId() {
        return bookedroomId;
    }

    public void setBookedroomId(int bookedroomId) {
        this.bookedroomId = bookedroomId;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    @Override
    public String toString() {
        return "Bookedroom{" +
                "bookedroomId=" + bookedroomId +
                ", bookingId=" + bookingId +
                '}';
    }
}
