import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDays: []
    };
  }
  handleDayClick = (day, { selected, disabled }) => {
    if (disabled) {
      return window.alert("Please choose a valid date from today.");
    }
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex(selectedDay =>
        DateUtils.isSameDay(selectedDay, day)
      );
      selectedDays.splice(selectedIndex, 1);
    } else {
      selectedDays.push(day);
    }
    this.setState({ selectedDays });
    this.props.handlePickDate(selectedDays);
  };
  getSelectedDay() {
    return this.state.selectedDay;
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <DayPicker
          selectedDays={this.state.selectedDays}
          onDayClick={this.handleDayClick}
          disabledDays={{ before: new Date() }}
        />
        <p>
          {this.state.selectedDay
            ? this.state.selectedDay.toLocaleDateString()
            : "Please select a day 👻"}
        </p>
      </div>
    );
  }
}

export default DatePicker;
