package com.controller;

import com.model.User;
import com.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@CrossOrigin(value = "http://127.0.0.1:5555/")
@RequestMapping(value="/userDetails")
public class UserController {
    private static  final Logger logger = LoggerFactory.getLogger(com.controller.UserController.class);
        @Autowired
        UserService userService;

        @PostMapping("/register")
        User Register(@RequestBody User user) {
            return userService.Register(user);

        }

        @GetMapping("/getUser")
        public List<User> getUser(){
            logger.info("User List");
            return  userService.getUser();
        }

    @PostMapping("/update")
    User userupdateUser(@RequestBody User user) {
        return userService.updateUser(user);

    }



}
