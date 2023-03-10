package com.services;

import com.model.Booking;
import com.model.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImp implements BookingService{


    @Autowired
    SessionFactory sessionFactory;
    Booking booking;
    @Override
    public List<Booking> BookigInfo() {

            Session session =sessionFactory.openSession();
            Transaction transaction= session.beginTransaction();
            List<Booking>bookingList =session.createQuery("from Booking",Booking.class).list();
            transaction.commit();
            session.clear();
            return  bookingList;

    }

    @Override
    public Booking doBooking(Booking booking) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        session.save(booking);
        transaction.commit();
        session.close();
        return booking;

    }

    @Override
    public Booking updateBooking(Booking booking) {
        this.booking= booking;
        Session session=sessionFactory.openSession();
        Transaction transaction=session.beginTransaction();
        session.update(booking);
        transaction.commit();
        session.close();
        return booking;
    }


}
