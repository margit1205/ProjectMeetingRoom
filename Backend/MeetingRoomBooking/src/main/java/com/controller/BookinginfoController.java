package com.controller;

import com.model.Bookinginfo;
import com.services.BookinginfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://127.0.0.1:5555/")
@RequestMapping(value="/bookinginfo")
public class BookinginfoController {

    private static  final Logger logger = LoggerFactory.getLogger(com.controller.UserController.class);
    @Autowired
    BookinginfoService bookinginfoService;

    @PostMapping("/doBooking")
    Bookinginfo doBooking(@RequestBody Bookinginfo bookinginfo) {
        return  bookinginfoService.doBooking(bookinginfo);
    }


}
