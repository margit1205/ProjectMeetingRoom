const datebook = document.getElementById("dateinp");
datebook.min = new Date().toLocaleDateString("fr-ca");
// const date =new Date()
// const month=("0"+(date.getMonth()+1).slice(-2))
// const year=date.getFullYear()
// datebook.value=`${year}-${month}`;
// datebook.min=`${year}-${month}`;

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Month starts from 0
const day = ("0" + currentDate.getDate()).slice(-2);
const today = year + "-" + month + "-" + day;
document.getElementById("dateinp").value = today;

fetch(`http://localhost:8080/MeetingRoom/Timeslot/getTimeslot`)
  .then((response) => response.json())
  .then((slot) => {
    const newslot = slot.sort((a, b) => {
      if (a.slotId < b.slotId) {
        return -1;
      } else if (a.slotId > b.slotId) {
        return 1;
      } else {
        return 0;
      }
    });

    // const newslot= slot.sort((a, b) => a.slotName.localeCompare(b.slotName));
    // console.log(newslot);

    for (let i = 0; i < newslot.length; i++) {
      const select = document.getElementById("slot-option");
      const option = document.createElement("option");
      option.textContent = newslot[i].slotName;
      select.style.borderBottom = "1.5px solid #162938";

      select.appendChild(option);
    }
  });

fetch(`http://localhost:8080/MeetingRoom/Meetingroom/getRoom`)
  .then((response) => response.json())
  .then((room) => {
    for (let i = 0; i < room.length; i++) {
      const newselect = document.getElementById("room-option");
      const newoption = document.createElement("option");
      newoption.textContent = room[i].roomName;
      newselect.style.borderBottom = "1.5px solid #162938";
      // console.log(room[i].roomName)
      newselect.appendChild(newoption);
    }
  });

const btn = document.getElementById("availbtn");
btn.addEventListener("click", (e) => {
  e.preventDefault();

  //  console.log(bookdate);
  fetch(`http://localhost:8080/MeetingRoom/Timeslot/getTimeslot`)
    .then((response) => response.json())
    .then((slot) => {
      fetch(`http://localhost:8080/MeetingRoom/Meetingroom/getRoom`)
        .then((response) => response.json())
        .then((room) => {
          const bookdate = document.getElementById("dateinp").value;
          const newroomname = document.getElementById("room-option").value;
          const newslotname = document.getElementById("slot-option").value;
          const newslot = slot.find((s) => s.slotName === newslotname);
          const newroom = room.find((s) => s.roomName === newroomname);
          // console.log(bookdate,newroomname,newslotname,newslot,newroom);

          fetch(
            `http://localhost:8080/MeetingRoom/Booking/checkavail/${newslot.slotId}/${bookdate}/${newroom.roomId}`,
            {
              method: "Get",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
            .then((response) => response.json())
            .then((check) => {
              if (check.length > 0) {
                // alert("Slot is already booked");
                var modal = document.getElementById("myModal");
                modal.style.display = "block";

                var span = document.getElementsByClassName("close")[0];

                span.onclick = function () {
                  modal.style.display = "none";
                };

                
                window.onclick = function (event) {
                  if (event.target == modal) {
                    modal.style.display = "none";
                  }
                };
              } else {
                // alert("Slot is available to book ");
                var modal2 = document.getElementById("myModal2");
                modal2.style.display = "block";

                var span2 = document.getElementsByClassName("close2")[0];
                // var para=document.getElementById('modalp');
                // para.toggleAttribute="Slot is available to book";

                span2.onclick = function () {
                  modal2.style.display = "none";
                };

                window.onclick = function (event) {
                  if (event.target == modal2) {
                    modal2.style.display = "none";
                  }
                };
              }
            });
        });
    });
});

const newimgfunction = document.getElementById("room-option");
newimgfunction.onchange = function () {
  fetch(`http://localhost:8080/MeetingRoom/Meetingroom/getRoom`)
    .then((response) => response.json())
    .then((room) => {
      const newroomname = document.getElementById("room-option").value;
      const newroom = room.find((s) => s.roomName === newroomname);

      fetch(`http://localhost:8080/MeetingRoom/Meetingroom/${newroom.roomId}`)
        .then((response) => response.json())
        .then((roominfo) => {
          console.log(roominfo);
          var img = document.getElementById("bookimage");

          img.setAttribute("src", roominfo.imagePath);
          console.log(roominfo.path);

          var val = document.getElementById("capacity");
          val.textContent = roominfo.capacity;
        });
    });
};

const checkavailForm = document.getElementById("checkavail");
const bookingnowForm = document.getElementById("bookingnow");
const bookbtn = document.getElementById("bookbtn");

fetch(`http://localhost:8080/MeetingRoom/Employee/getEmployee`, {
  method: "Get",

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((employee) => {
    // const inputField = document.getElementById('employeeIdInput');
    const resultsDiv = document.getElementById("results");

    function filterEmployeesByEmployeeIdDigit(digit) {
      return employee.filter((e) => e.employeeId.toString().includes(digit));
    }

    function showResults() {
      const newempId = bookingnowForm.querySelector(
        'input[name="empId"]'
      ).value;
      const filteredEmployees = filterEmployeesByEmployeeIdDigit(newempId);

      resultsDiv.innerHTML = "";

      if (filteredEmployees.length > 0) {
        const ul = document.createElement("ul");
        ul.style.listStyleType = "none";
        filteredEmployees.forEach((e) => {
          const li = document.createElement("li");
          li.textContent = e.employeeId;
          li.style.cursor = "pointer";
          li.addEventListener("click", () => {
            var newempId = bookingnowForm.querySelector('input[name="empId"]');
            newempId.value = li.textContent;
            resultsDiv.style.display = "none";
            // resultsDiv.style.visibility="hidden";
          });

          ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
      } else {
        resultsDiv.textContent = "No results found.";
      }
    }
    // const newempId = bookingnowForm.querySelector('input[name="empId"]').value;
    const empidinput = bookingnowForm.querySelector('input[name="empId"]');

    empidinput.addEventListener("input", () => {
      showResults();
      // resultsDiv.style.visibility="visible";
      resultsDiv.style.display = "block";
    });
  });

bookbtn.addEventListener("click", submitForm);

function submitForm(event) {
  event.preventDefault();

  fetch("http://localhost:8080/MeetingRoom/Timeslot/getTimeslot", {
    method: "Get",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((slot) => {
      fetch(`http://localhost:8080/MeetingRoom/Meetingroom/getRoom`, {
        method: "Get",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((room) => {
          const bookingDate = checkavailForm.querySelector("#dateinp").value;
          const empId = bookingnowForm.querySelector(
            'input[name="empId"]'
          ).value;
          const slotName = bookingnowForm.querySelector("#slot-option").value;
          const roomName = checkavailForm.querySelector("#room-option").value;
          const newslot = slot.find((s) => s.slotName === slotName);
          const newroom = room.find((s) => s.roomName === roomName);

          const slotid = newslot.slotId;
          const roomid = newroom.roomId;

          const date = new Date(bookingDate);
          const options = { year: "numeric", month: "short", day: "numeric" };
          const formattedDate = date.toLocaleDateString("en-US", options);

          if (empId == "") {
            alert("Please enter employee id");
          } 
          // else if (bookingDate == "") {
          //   alert("Please select date");
          // } else if (roomName == "") {
          //   alert("Please enter the room no");
          // }

          // if(empId=="" || bookingDate=="" || roomName==""){
          //   alert('Please enter all the fields');
          // }
          var post = {
            bookingDate: formattedDate,
            slotId: slotid,
            empId: empId,
            roomId: roomid,
          };
          // console.log(post)
          // send booking information to API
          fetch("http://localhost:8080/MeetingRoom/Booking/doBooking", {
            method: "Post",
            body: JSON.stringify(post),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              console.log(response);

              if (response.ok) {
                alert("Room booked successfully!");
              } else {
                alert("Please check availblity first.");
              }
            })
            .catch((error) => {
              console.error("Error booking room:", error);
              // alert("Please check availblity first.");
            });
        });
    });

  fetch(`http://localhost:8080/MeetingRoom/Employee/getEmployee`, {
    method: "Get",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((employee) => {
      const newempId = bookingnowForm.querySelector(
        'input[name="empId"]'
      ).value;
      // console.log(newempId);
      let checkuser = employee.find((e) => e.employeeId == newempId);
      console.log(checkuser);
      if (!checkuser) {
        alert("you are not registered");
      }
    });
}
