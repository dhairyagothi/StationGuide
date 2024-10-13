document.getElementById('submitBtn').addEventListener('click', function() {
    document.getElementById('timetable').innerHTML = '';
    let pnr = document.getElementById('pnr').value;
    
    // Validate PNR input (PNR numbers are usually 10 digits)
    if (pnr.length !== 10 || isNaN(pnr)) {
        document.getElementById('output').innerHTML = "<p id='error'>Please enter a valid 10-digit PNR number.</p>";
        return;
    }

    fetchPNRStatus(pnr);
});

async function fetchPNRStatus(pnr) {
    const url = `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b0075d9fa8msh81b2609e08877a8p14ff09jsn738ea7672cad', // Replace with your API key if necessary
            'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse the result as JSON
        displayPNRData(result);
    } catch (error) {
        document.getElementById('output').innerHTML = "<p id='error'>Error fetching PNR status. Please try again later.</p>";
        console.error(error);
    }
}

function displayPNRData(data) {
    if (data.success && data.data) {
        const journeyDetails = data.data;

        let passengerRows = journeyDetails.passengerList.map(passenger => `
            <tr>
                <td>${passenger.passengerSerialNumber}</td>
                <td>${passenger.bookingStatusDetails}</td>
                <td>${passenger.currentStatusDetails}</td>
            </tr>
        `).join('');

        let output = `
            <h2>PNR Status Details</h2>
            <table border="1" cellpadding="10">
                <tr>
                    <th>PNR Number</th>
                    <td>${journeyDetails.pnrNumber}</td>
                </tr>
                <tr>
                    <th>Date of Journey</th>
                    <td>${journeyDetails.dateOfJourney}</td>
                </tr>
                <tr>
                    <th>Train Number</th>
                    <td>${journeyDetails.trainNumber}</td>
                </tr>
                <tr>
                    <th>Train Name</th>
                    <td>${journeyDetails.trainName}</td>
                </tr>
                <tr>
                    <th>Source Station</th>
                    <td>${journeyDetails.sourceStation}</td>
                </tr>
                <tr>
                    <th>Destination Station</th>
                    <td>${journeyDetails.destinationStation}</td>
                </tr>
                <tr>
                    <th>Boarding Point</th>
                    <td>${journeyDetails.boardingPoint}</td>
                </tr>
                <tr>
                    <th>Journey Class</th>
                    <td>${journeyDetails.journeyClass}</td>
                </tr>
                <tr>
                    <th>Chart Status</th>
                    <td>${journeyDetails.chartStatus}</td>
                </tr>
                <tr>
                    <th>Total Distance</th>
                    <td>${journeyDetails.distance} km</td>
                </tr>
                <tr>
                    <th>Fare</th>
                    <td>₹${journeyDetails.bookingFare}</td>
                </tr>
            </table>

            <h3>Passenger Details</h3>
            <table border="1" cellpadding="10">
                <tr>
                    <th>Passenger No.</th>
                    <th>Booking Status</th>
                    <th>Current Status</th>
                </tr>
                ${passengerRows}
            </table>
        `;

        document.getElementById('output').innerHTML = output;
    } else {
        document.getElementById('output').innerHTML = "<p id='error'>No data found for the provided PNR number.</p>";
    }
}


async function getTrainTimetable() {
    document.getElementById('output').innerHTML = '';
    const trainNumber = document.getElementById('train-number').value;
    const timetableContainer = document.getElementById('timetable');

    // Clear any existing timetable
    timetableContainer.innerHTML = '';

    if (!trainNumber) {
        timetableContainer.innerHTML = '<p>Please enter a train number.</p>';
        return;
    }

    // API URL (note: make sure the correct train number is being used in the API)
    const url = `https://indian-railway-irctc.p.rapidapi.com/api/trains-search/v1/train/${trainNumber}?isH5=true&client=web`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b0075d9fa8msh81b2609e08877a8p14ff09jsn738ea7672cad',
            'x-rapidapi-host': 'indian-railway-irctc.p.rapidapi.com',
            'x-rapid-api': 'rapid-api-database'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();  // Parse the result as JSON
        console.log(result);  // Log the result to see the structure

        if (result.body && result.body.length > 0 && result.body[0].trains && result.body[0].trains.length > 0) {
            const train = result.body[0].trains[0];
            let tableHTML = `<h3>${train.trainName} (${train.trainNumber})</h3>`;
            tableHTML += '<table><tr><th>Serial No.</th><th>Station</th><th>Arrival</th><th>Departure</th><th>Distance (km)</th></tr>';

            // Iterate over each station's schedule and populate the table
            train.schedule.forEach(schedule => {
                tableHTML += `<tr>
                                <td>${schedule.stnSerialNumber}</td>
                                <td>${schedule.stationName} (${schedule.stationCode})</td>
                                <td>${schedule.arrivalTime || '--'}</td>
                                <td>${schedule.departureTime || '--'}</td>
                                <td>${schedule.distance || '0'}</td>
                              </tr>`;
            });

            tableHTML += '</table>';
            timetableContainer.innerHTML = tableHTML;
        } else {
            timetableContainer.innerHTML = '<p>No timetable found for the entered train number.</p>';
        }
    } catch (error) {
        console.error('Error fetching timetable:', error);
        timetableContainer.innerHTML = '<p>There was an error fetching the timetable. Please try again later.</p>';
    }
}
