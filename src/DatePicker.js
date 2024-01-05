import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

export default function DateApp(){
    const [selectedDate, setSelectedDate] = useState(null)
    return(
    <div className="DateApp">
        Data: <DatePicker selecter={selectedDate} on change={date => setSelectedDate(date)} placeholderText="Mes/Dia/Ano"/>
    </div>
    )
}