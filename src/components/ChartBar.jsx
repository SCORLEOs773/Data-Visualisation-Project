import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Chart as ChartJS } from "chart.js/auto";

const chartContainerStyle = {
  padding: "16px",
  width: "80vw",
  height: "90vh",
  margin: "auto",
};

const headingStyle = {
  marginBottom: "16px",
};

const ChartBar = () => {
  const [chartData, setChartData] = useState({});
  const [selectedTimeRange, setSelectedTimeRange] = useState("12 Months");

  const getChartDataByTimeRange = (timeRange) => {
    // Replace this with your actual data fetching logic
    // For now, using dummy data for demonstration

    const dummyData = {
      "12 Months": {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: `Number of Users (12 Months)`,
            data: [150, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580], // Example: Increasing trend
            backgroundColor: "rgba(75,192,192,0.5)",
            borderColor: "rgba(75,192,192,1)",
            borderWidth: 1,
          },
        ],
      },
      "6 Months": {
        labels: [
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: `Number of Users (6 Months)`,
            data: [320, 360, 400, 440, 480, 520], // Example: Increasing trend
            backgroundColor: "rgba(153, 102, 255, 0.5)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      "7 Days": {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: `Number of Users (7 Days)`,
            data: [50, 70, 90, 110, 130, 150, 170], // Example: Fluctuating trend
            backgroundColor: "rgba(255, 205, 86, 0.5)",
            borderColor: "rgba(255, 205, 86, 1)",
            borderWidth: 1,
          },
        ],
      },
      "24 Hours": {
        labels: ["Morning", "Afternoon", "Evening"],
        datasets: [
          {
            label: `Number of Users (24 Hours)`,
            data: [20, 40, 60], // Example: Increasing trend
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      // Add more dummy data as needed
    };

    return dummyData[timeRange] || {}; // Return empty object for unknown time ranges
  };

  const fetchData = (timeRange) => {
    const data = getChartDataByTimeRange(timeRange);
    setChartData(data);
  };

  useEffect(() => {
    fetchData(selectedTimeRange);
  }, [selectedTimeRange]);

  const handleTimeRangeClick = (timeRange) => {
    fetchData(timeRange);
    setSelectedTimeRange(timeRange);
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Paper style={chartContainerStyle}>
        <Typography variant="h5" style={headingStyle}>
          Chart Heading
        </Typography>

        {Object.keys(chartData).length > 0 ? (
          <Bar
            data={chartData}
            options={{
              scales: {
                x: {
                  type: "category",
                  title: {
                    display: true,
                    text: "X-Axis Label",
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: "Y-Axis Label",
                  },
                },
              },
            }}
          />
        ) : (
          <p>Loading...</p>
        )}

        <ButtonGroup style={{ marginTop: "16px" }}>
          <Button onClick={() => handleTimeRangeClick("12 Months")}>
            12 Months
          </Button>
          <Button onClick={() => handleTimeRangeClick("6 Months")}>
            6 Months
          </Button>
          <Button onClick={() => handleTimeRangeClick("7 Days")}>7 Days</Button>
          <Button onClick={() => handleTimeRangeClick("24 Hours")}>
            24 Hours
          </Button>
          {/* Add buttons for other time ranges */}
        </ButtonGroup>
      </Paper>
    </ThemeProvider>
  );
};

export default ChartBar;
