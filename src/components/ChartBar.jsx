import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Chart as ChartJS } from "chart.js/auto";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "60vw",
  height: "60vh",
  margin: "auto",
  marginTop: "20px",
  border: "1px solid black",
  padding: "20px", // Added padding for spacing
  borderRadius: "10px", // Rounded corners
};

const chartStyle = {
  width: "100%",
  flex: 1, // Allow the chart to take up remaining space
  marginBottom: "20px", // Added margin at the bottom for spacing
  padding: "20px",
};

const buttonStyle = {
  width: "150px", // Fixed width for consistency
  borderRadius: "5px",
  margin: "0 30px 0 30px",
};

const ChartBar = ({ dataset }) => {
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
            data: [150, 180, 200, 170, 190, 220, 200, 230, 250, 220, 270, 260], // Example: Fluctuating trend
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
            data: [320, 350, 340, 360, 330, 380], // Example: Fluctuating trend
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
            data: [50, 70, 60, 80, 70, 90, 80], // Example: Fluctuating trend
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
            data: [20, 40, 30], // Example: Fluctuating trend
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
      <div style={containerStyle}>
        <Paper style={chartStyle}>
          <Typography
            variant="h4"
            style={{ marginBottom: "16px", marginLeft: "320px" }}
          >
            Data Visualisation
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
        </Paper>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            style={buttonStyle}
            variant="contained"
            color="primary"
            onClick={() => handleTimeRangeClick("12 Months")}
          >
            12 Months
          </Button>
          <Button
            style={buttonStyle}
            variant="contained"
            color="warning"
            onClick={() => handleTimeRangeClick("6 Months")}
          >
            6 Months
          </Button>
          <Button
            style={buttonStyle}
            variant="contained"
            color="info"
            onClick={() => handleTimeRangeClick("7 Days")}
          >
            7 Days
          </Button>
          <Button
            style={buttonStyle}
            variant="contained"
            color="success"
            onClick={() => handleTimeRangeClick("24 Hours")}
          >
            24 Hours
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ChartBar;
