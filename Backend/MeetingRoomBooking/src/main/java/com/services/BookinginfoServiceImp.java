package com.services;

import com.model.Bookinginfo;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookinginfoServiceImp implements BookinginfoService {

    @Autowired
    SessionFactory sessionFactory;
    @Override
    public Bookinginfo doBooking(Bookinginfo bookinginfo) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(bookinginfo);
        transaction.commit();
        session.close();
        return bookinginfo;

    }

}
