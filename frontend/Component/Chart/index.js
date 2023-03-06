import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Chart({ userData }) {

  const today_date = new Date().toJSON().slice(0, 10);
  
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  console.log(day,"day");
  const day_week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let sunday=12
  let monday=52
  let tuesday=20
  let wednesday=64
  let thursday=10
  let friday=43
  let saturday=29

  userData.map(({in_time})=>{

  })
  return (
    <Bar
      data={{
        // Name of the variables on x-axies for each bar
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Detail of a weekday',
            data: [sunday, monday, tuesday, wednesday, thursday, friday, saturday],
            backgroundColor: ['aqua', 'green', 'red', 'yellow', 'blue', 'magenta', 'cyan'],
            // Border color of each bar
            borderColor: ['aqua', 'green', 'red', 'yellow', 'blue', 'magenta', 'cyan'],
            borderWidth: 1.5,
          },
        ],
      }}
      // Height of graph
      height={300}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                // The y-axis value will start from zero
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 10,
          },
        },
      }}
    />
  );
}
export default Chart;
