package com.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "meetingroom")
public class Room {

    @Id
    @Column(name = "id")
    private  int meetingId;

    @Column(name="name")
    private String roomName;

    @Column(name = "city_id")
    private  int  cityId;

    @Column(name = "capacity")
    private  int capacity;

    public int getMeetingId() {
        return meetingId;
    }

    public void setMeetingId(int meetingId) {
        this.meetingId = meetingId;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    @Override
    public String toString() {
        return "Room{" +
                "meetingId=" + meetingId +
                ", roomName='" + roomName + '\'' +
                ", cityId=" + cityId +
                ", capacity=" + capacity +
                '}';
    }
}
