import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './App.css';

export default function DateApp(){
    const [selectedDate, setSelectedDate] = useState(null)
    return(
    <div className="DateApp">
        <DatePicker selecter={selectedDate} on change={date => setSelectedDate(date)} />
    </div>
    )
}