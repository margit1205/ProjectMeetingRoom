package com.controller;

import com.model.Available;
import com.payload.CheckAvailablity;
import com.payload.LoginPayload;
import com.services.AvailableService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;

@RestController
@CrossOrigin(value = "http://127.0.0.1:5555/")
@RequestMapping(value="/Check")
public class AvailableController {
    private static  final Logger logger = LoggerFactory.getLogger(com.controller.UserController.class);
    @Autowired
    AvailableService availableService;
    @GetMapping("/checkavail")
    public boolean isAvailable(@RequestBody CheckAvailablity checkAvailablity){
        logger.info("check avail");
        return  availableService.isAvailable(checkAvailablity);
    }

}
