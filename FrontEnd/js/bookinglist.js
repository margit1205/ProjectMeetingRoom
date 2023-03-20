

var searchArray=[];

fetch('http://localhost:8080/MeetingRoom//Booking/getBooking',{
method:'Get',
headers: {
    "Content-Type": "application/json",
     Accept: "application/json",
  },
})
.then(response => response.json())
.then(Booking => {

  const newbooking=Booking.sort((a, b) => {
    if (a.bookingId < b.bookingId) {
      return -1;
    } else if (a.bookingId> b.bookingId) {
      return 1;
    } else {
      return 0;
      
    }
    
  });
    console.log(newbooking);
 
    
  for(let i=0 ;i<newbooking.length;i++ ) {
    
        fetch(`http://localhost:8080/MeetingRoom/Meetingroom/${newbooking[i].roomId}`)
          .then(response => response.json())
          .then(room => {
          
            fetch(`http://localhost:8080/MeetingRoom/Timeslot/${newbooking[i].slotId}`)
              .then(response => response.json())
              .then(slot => {

                fetch(`http://localhost:8080/MeetingRoom/Employee/getEmployee`)
                .then(response => response.json())
                .then(employee => {
                // console.log(Booking[i].roomId);
                // console.log(Booking[i].slotId);
                // console.log(employee);
                // console.log(room);
                // console.log(slot);
                // console.log(employee.empId)
                // Create a table row for this Bookings
              

              
                
                const row = document.createElement('tr');

            
                const employeeIdCell = document.createElement('th');
                employeeIdCell.textContent = newbooking[i].empId;
                var employeeidForsearch=employeeIdCell.textContent;
                employeeIdCell.style.paddingLeft="25px";
                row.appendChild(employeeIdCell);

                const roomNameCell = document.createElement('td');
                roomNameCell.textContent = room.roomName;
                var roomnameForsearch=roomNameCell.textContent;
                roomNameCell.style.paddingLeft="30px";
                row.appendChild(roomNameCell);
      
                const employeeNameCell = document.createElement('td');
                const employeeName = employee.find(e => e.employeeId === newbooking[i].empId);
                if(employeeName){
                employeeNameCell.textContent =employeeName.empName;
                var employeenameForsearch=employeeNameCell.textContent;
                }
                employeeNameCell.style.paddingLeft="30px";
                row.appendChild(employeeNameCell);

                const bookingDateCell = document.createElement('td');
                bookingDateCell.textContent = newbooking[i].bookingDate;
                var bookdateForsearch=bookingDateCell.textContent;
                bookingDateCell.style.paddingLeft="30px";
                row.appendChild(bookingDateCell);

                const slotNameCell = document.createElement('td');
                slotNameCell.textContent = slot.slotName;
                var slotnameForsearch=slotNameCell.textContent;
                slotNameCell.style.paddingLeft="30px";
                // slotNameCell.style.backgroundColor="Green";
                row.appendChild(slotNameCell);
                document.querySelector('table').appendChild(row);


                 
                  
                  searchArray[i]={employeeidForsearch,roomnameForsearch,employeenameForsearch,bookdateForsearch,slotnameForsearch};
                 
                  
                
               
              });
              
          });
         
      });
      
  };



});








// console.log(searchArray);
const searchBtn = document.getElementById('searchFrm');
searchBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchName = document.getElementById('searchName').value;
  const searchResults = searchArray.filter(e => e.employeenameForsearch === searchName);
  // console.log(searchResults);

  const searchDiv = document.getElementById('searchdiv');
  searchDiv.textContent = ''; // Clear previous search results
//   while (searchDiv.firstChild) {
//   searchDiv.removeChild(searchDiv.firstChild);
// }
    searchDiv.style.display="block";

    const closediv=document.createElement('div');
    closediv.classList.add('icon-close3');
    const icon=document.createElement('ion-icon');
    icon.setAttribute('name','close');
    
    closediv.appendChild(icon);
    searchDiv.appendChild(closediv);

    icon.addEventListener('click',()=>{
      searchDiv.style.display='none';
    })
 

  if (searchResults.length > 0) {
    const searchList = document.createElement('ul');
    let i=0;
    searchResults.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent =(i+1)+")"+" "+"Room No :  "+`   `+ result.roomnameForsearch +`   `+" Booking date :  "+result.bookdateForsearch +`   `+"  Time slot :  "+ result.slotnameForsearch;
      // listItem.style.borderBottom="1px solid black";
      listItem.style.background="#AEC4EB";
      searchList.appendChild(listItem);
      i++;
    });
    searchDiv.appendChild(searchList);
  } else {
    const noResults = document.createElement('p');
    noResults.textContent = 'No results found.';
    searchDiv.appendChild(noResults);
    
  }
});


