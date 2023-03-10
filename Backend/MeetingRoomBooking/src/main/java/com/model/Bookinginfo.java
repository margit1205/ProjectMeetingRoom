package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="boookingDeatils")
public class Bookinginfo {

        @Id
        @Column(name = "id")
        private  int binfoId;

        @Column(name = "name")
        private  String name;
        @Column(name = "mail")
        private  String  email;
        @Column(name = "phone")
        private String phone;

        @Column(name = "guest")
        private  int guest;


    public int getBinfoId() {
        return binfoId;
    }

    public void setBinfoId(int binfoId) {
        this.binfoId = binfoId;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getGuest() {
        return guest;
    }

    public void setGuest(int guest) {
        this.guest = guest;
    }

    @Override
    public String toString() {
        return "BookingInfo{" +
                "binfoId=" + binfoId +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", guest=" + guest +
                '}';
    }
}
