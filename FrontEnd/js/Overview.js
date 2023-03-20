

fetch('http://localhost:8080/MeetingRoom/Booking/getBooking')
  .then(response => response.json())
  .then(bookings => {

    
    const roomIds = bookings.map(booking => booking.roomId);
    // console.log(roomIds);


    const roomCounts = {};
  
    roomIds.forEach(roomId => {
      if (roomCounts[roomId]) {
        roomCounts[roomId]++;
      } else {
        roomCounts[roomId] = 1;
      }
    });

   
    fetch('http://localhost:8080/MeetingRoom/Meetingroom/getRoom')
      .then(response => response.json())
      .then(rooms => {

       
        const roomNames = {};
        rooms.forEach(room => {
          roomNames[room.roomId] = room.roomName;
        });

       
        const data = [];
        Object.keys(roomCounts).forEach(roomId => {
          data.push({
            roomName: roomNames[roomId],
            count: roomCounts[roomId]
          });
        });

       
        data.sort((a, b) => b.count - a.count);

       
        const labels = data.map(room => room.roomName);
        const counts = data.map(room => room.count);
        const ctx = document.getElementById('myChart').getContext('2d');
      
        const myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{
              data: counts,
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 2
            }],
            options: {
              legend: {
                position: 'top',
                  labels: {
                      fontSize: 25
                      
                  }
              }
          }
           
          },
          options: {
            title: {
              display: true,
              text: 'Most Booked Rooms'
            }
          }
        });

      });

  });


  fetch('http://localhost:8080/MeetingRoom/Booking/getBooking')
  .then(response => response.json())
  .then(booking => {
        
    // console.log(booking)
    const bookings=booking;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const bookingsByDay = {
      Sunday: 0,
      Monday: 0,
      Tuesday: 0,
      Wednesday: 0,
      Thursday: 0,
      Friday: 0,
      Saturday: 0
    };

    bookings.forEach(booking => {
      const bookingDate = new Date(booking.bookingDate);
      const dayOfWeek = daysOfWeek[bookingDate.getDay()];
      bookingsByDay[dayOfWeek]++;
    });

    const totalBookings = bookings.length;

    const percentagesByDay = {};
    for (const dayOfWeek in bookingsByDay) {
      percentagesByDay[dayOfWeek] = (bookingsByDay[dayOfWeek] / totalBookings) * 100;
       }


      
       const progressBarsContainer = document.querySelector('.maindiv');
      for (const dayOfWeek in percentagesByDay) {
      const percentage = percentagesByDay[dayOfWeek];
      const progressBarHtml = `
    <div class="progress">
      <div class="  progress-bar" style="width: ${percentage}%;"></div>
      <div class="progress-bar-label">${dayOfWeek}</div>
    </div>
        `;


      progressBarsContainer.innerHTML += progressBarHtml;
}


  });


  // Rating


  function countRating() {
    const stars = document.querySelectorAll('.rating-cont .glyphicon-star');
    return stars.length;
  }
  const stars = document.querySelectorAll('#first .glyphicon');
stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.remove('glyphicon-star-empty');
      stars[i].classList.add('glyphicon-star');
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].classList.remove('glyphicon-star');
      stars[i].classList.add('glyphicon-star-empty');
    }
  });
});


const stars1 = document.querySelectorAll('#second .glyphicon');
stars1.forEach((star, index) => {
  star.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      stars1[i].classList.remove('glyphicon-star-empty');
      stars1[i].classList.add('glyphicon-star');
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars1[i].classList.remove('glyphicon-star');
      stars1[i].classList.add('glyphicon-star-empty');
    }
  });
});



const stars2 = document.querySelectorAll('#third .glyphicon');
stars2.forEach((star, index) => {
  star.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      stars2[i].classList.remove('glyphicon-star-empty');
      stars2[i].classList.add('glyphicon-star');
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars2[i].classList.remove('glyphicon-star');
      stars2[i].classList.add('glyphicon-star-empty');
    }
  });
});


const stars3 = document.querySelectorAll('#fourth .glyphicon');
stars3.forEach((star, index) => {
  star.addEventListener('click', () => {
    for (let i = 0; i <= index; i++) {
      stars3[i].classList.remove('glyphicon-star-empty');
      stars3[i].classList.add('glyphicon-star');
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars3[i].classList.remove('glyphicon-star');
      stars3[i].classList.add('glyphicon-star-empty');
    }
  });
});