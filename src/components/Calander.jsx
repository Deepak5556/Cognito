import React from 'react';

const Calendar = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();

    const monthName = new Date(currentYear, currentMonth, 1).toLocaleString('default', { month: 'long' });
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    // Adjusting to start the calendar from Monday
    const adjustedFirstDay = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;

    const renderDays = () => {
        let dayCounter = 1;
        const totalDays = days.length + adjustedFirstDay;
        const rows = [];
        let currentRow = [];

        for (let i = 0; i < totalDays; i++) {
            if (i < adjustedFirstDay) {
                currentRow.push(<div key={`empty-${i}`} className="p-2 text-center"></div>);
            } else {
                const day = dayCounter;
                const isToday = (day === currentDate && currentMonth === today.getMonth() && currentYear === today.getFullYear());
                currentRow.push(
                    <div
                        key={day}
                        className={`p-2 text-center ${isToday ? 'bg-green-500 text-white rounded-full' : ''}`}
                    >
                        {day}
                    </div>
                );
                dayCounter++;
            }

            if ((i + 1) % 7 === 0) {
                rows.push(<div key={`row-${i / 7}`} className="flex">{currentRow}</div>);
                currentRow = [];
            }
        }

        // Add the last row if it's not complete
        if (currentRow.length > 0) {
            rows.push(<div key={`row-last`} className="flex">{currentRow}</div>);
        }

        return rows;
    };

    return (
        <div className="w-fit p-4">
            <div className="text-center font-semibold text-lg mb-4">{monthName}</div>
            <div className="grid grid-cols-7 gap-2 text-center font-medium">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
                <div>Sun</div>
            </div>
            <div>
                {renderDays()}
            </div>
        </div>
    );
};

export default Calendar;
