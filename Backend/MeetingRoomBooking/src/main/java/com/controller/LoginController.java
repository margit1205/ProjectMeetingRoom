package com.controller;

import com.model.User;
import com.payload.LoginPayload;
import com.services.LoginService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(value = "http://127.0.0.1:5555/")
@RequestMapping(value="/LoginCheck")
public class LoginController {

    @Autowired
    LoginService loginService;
        private static  final Logger logger = LoggerFactory.getLogger(com.controller.UserController.class);

    @PostMapping("/Login")
    public User LoginUser(@RequestBody LoginPayload login){

        logger.info("Login check");
        return  loginService.LoginUser(login);
    }
}
