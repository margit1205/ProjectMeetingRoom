package com.services;

import com.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    SessionFactory sessionFactory;
    User user;

    @Override
    public User Register(User user) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(user);
        transaction.commit();
        session.close();
        return user;
    }

    @Override
    public List<User> getUser(){
        Session session =sessionFactory.openSession();
        Transaction transaction= session.beginTransaction();
        List<User>userList =session.createQuery("from User",User.class).list();
        transaction.commit();
        session.clear();
        return  userList;

    }

    @Override
    public User updateUser(User user) {
        this.user= user;
        Session session=sessionFactory.openSession();
        Transaction transaction=session.beginTransaction();
        session.saveOrUpdate(user);
        transaction.commit();
        session.close();
        return user;
    }





}
