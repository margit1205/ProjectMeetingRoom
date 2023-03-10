package com.services;

import com.model.Booking;
import com.model.User;

import java.util.List;

public interface BookingService {

    List<Booking> BookigInfo();

    Booking doBooking(Booking booking);
    Booking updateBooking(Booking booking);

}
