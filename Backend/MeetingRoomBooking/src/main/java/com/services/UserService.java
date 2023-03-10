package com.services;

import com.model.User;

import java.util.List;

public interface UserService {
     User Register(User user);
     List<User> getUser();

     User updateUser(User user);


}
