package com.services;

import com.model.Available;
import com.payload.CheckAvailablity;

import java.sql.Date;
import java.sql.Time;

public interface AvailableService {

    Boolean isAvailable(CheckAvailablity checkAvailablity);
}
