package com.controller;

import com.model.Booking;
import com.model.User;
import com.services.BookingService;
import com.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(value = "http://127.0.0.1:5555/")
@RequestMapping(value="/booking")
public class BookingController {


    private static  final Logger logger = LoggerFactory.getLogger(com.controller.UserController.class);
    @Autowired
    BookingService bookingService;

    @PostMapping("/doBooking")
    Booking doBooking(@RequestBody Booking booking) {
           return  bookingService.doBooking(booking);
    }


    @PostMapping("/updateBooking")
    Booking updateBooking(@RequestBody Booking booking) {

         return  bookingService.updateBooking(booking);
    }

    @GetMapping("/bookingInfo")
    public List<Booking>bookinInfo(){
        logger.info("Booking List");
        return  bookingService.BookigInfo();
    }
}
