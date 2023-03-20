package com.services;

import com.model.Login;
import com.model.User;
import com.payload.LoginPayload;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoginServiceImp implements LoginService {

    @Autowired
    SessionFactory sessionFactory;

    @Override
    public User LoginUser(LoginPayload loginPayload) {

        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        List<User> LoginList = session.createQuery("from User", User.class).list();
        String email=loginPayload.getEmail();
        String password=loginPayload.getPassword();

        for (User user : LoginList) {

            if (user.getEmail().equalsIgnoreCase(email) && user.getPassword().equals(password)) {
                return user;
            }
        }

        transaction.commit();
        session.clear();
        return null;

    }


}
