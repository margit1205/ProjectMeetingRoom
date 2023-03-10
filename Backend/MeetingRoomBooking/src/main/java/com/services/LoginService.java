package com.services;

import com.model.Login;
import com.model.User;
import com.payload.LoginPayload;

public interface LoginService {

    User LoginUser(LoginPayload loginPayload);
}
