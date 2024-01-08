import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

export default function DateApp(){
    const [selectedDate, setSelectedDate] = useState(new Date());
    return(
    <div className="DateApp">
        <DatePicker 
        selected={selectedDate} onChange={date => setSelectedDate(date)} placeholderText="Mes/Dia/Ano"/>
    </div>
    )
}