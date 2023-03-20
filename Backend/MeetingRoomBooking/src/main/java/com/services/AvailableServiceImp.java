package com.services;

import com.model.Available;
import com.model.Booking;
import com.payload.CheckAvailablity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.sql.Time;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class AvailableServiceImp implements AvailableService {
    @Autowired
    SessionFactory sessionFactory;
    @Override
    public Boolean isAvailable(CheckAvailablity checkAvailablity) {
        Session session = sessionFactory.openSession();
        Transaction transaction = session.beginTransaction();
        Date bookingdate =  checkAvailablity.getBookingdate();
        Time checkin = checkAvailablity.getCheckin();
        Time checkout = checkAvailablity.getChekout();
        List<Booking> bookingList = session.createQuery("from Booking", Booking.class).list();



        for(Booking booking : bookingList) {

            int datecomp=bookingdate.compareTo(booking.getBdate());
            int checkincomp =checkin.compareTo(booking.getCheckintime());
            int checkoutcomp=checkout.compareTo(booking.getCheckouttime());
            int checkoutincomp=checkout.compareTo(booking.getCheckintime());
            int checkinoutcomp=checkin.compareTo(booking.getCheckouttime());

            if(datecomp==0) {
                if (checkin == booking.getCheckintime() && checkout == booking.getCheckouttime()) {
                    return false;

                } else if (  checkincomp>0  && checkoutcomp< 0 ){
                    return false;

                } else if (checkincomp<0 && checkoutincomp<0) {

                    return true;

                } else if ( checkinoutcomp>0 && checkoutcomp>0) {
                    return true;

                }
                else if(checkincomp<0 && checkoutcomp>0){
                    return false;
                }

               }

        }
        transaction.commit();
        session.clear();
        return true;
    }
}
