// search funtion  by roomno...

const searchform = document.getElementById('searchRoom');
searchform.addEventListener('submit', (e)=>{
    e.preventDefault();

  //   const searchformData = new FormData(searchform);
  // let formDataObject = Object.fromEntries(searchformData.entries());

  //   // Format the plain form data as JSON
  //   let formDataJsonString = JSON.stringify(formDataObject);


  fetch(`http://localhost:8080/MeetingRoom/Meetingroom/getRoom`,{
    method:"Get",
         
headers: {
"Content-Type": "application/json",
 Accept: "application/json",
},

  })
  .then(response => response.json())
  .then(roomsearch => {
    // console.log(roomsearch)
   let  neroomid="";
  for(let i=0;i<roomsearch.length;i++){
    const roomNo= document.getElementById('search-bar').value;
    // console.log(roomNo);
    neroomid=roomsearch.find(e => e.roomName === roomNo);
    // console.log(roomid);
  }
  
fetch(`http://localhost:8080/MeetingRoom/Meetingroom/${neroomid.roomId}`,{
method:'Get',
headers: {
    "Content-Type": "application/json",
     Accept: "application/json",
  },
})
.then(response => response.json())
.then(roombyid => {

    // console.log(roombyid);
    // console.log(roombyid.imagePath);
  
let mainDiv = document.getElementById('containerforimg');
// mainDiv.style.width="400px";
mainDiv.style.visibility="visible";
let imageDiv = document.getElementById('imgDiv');
// imageDiv.style.height="200px";
// imageDiv.style.width="300px";




imageDiv.setAttribute("src",roombyid.imagePath);
let roomNameDiv = document.getElementById('roomnamediv');
roomNameDiv.textContent = `Room No: ${roombyid.roomName}`;
let roomfeature=document.createElement('h5');
roomfeature.textContent="Meeting room , Wavemaker";
roomNameDiv.appendChild(roomfeature);
roomNameDiv.style.marginTop="30PX";
roomNameDiv.style.fontWeight="bolder";
roomNameDiv.style.fontSize="1.3rem";
roomNameDiv.style.textAlign="center";
let capacityDiv = document.getElementById('capacitydiv');
capacityDiv.textContent = `Capacity: ${roombyid.capacity}`;
capacityDiv.style.fontWeight="600";
capacityDiv.style.fontSize="1.3rem"
let bookbtn = document.getElementById('bookbtnsearch');
bookbtn.innerText="Book";
bookbtn.addEventListener('click',()=>{
  window.location.href="Booking.html";
});

bookbtn.style.padding="10px 15px 10px 15px";
bookbtn.style.marginTop="30px";
bookbtn.style.marginBottom="30px";
bookbtn.style.borderRadius="8px";
bookbtn.style.backgroundColor="#0065bd";
bookbtn.style.cursor="pointer";
bookbtn.style.color="white";
mainDiv.appendChild(imageDiv);
mainDiv.appendChild(roomNameDiv);
mainDiv.appendChild(capacityDiv);
mainDiv.appendChild(bookbtn);
let searchBtn=document.querySelector('.icon-close2');
searchBtn.addEventListener('click',()=>{
 
  mainDiv.style.visibility="hidden";

});


});
  
  });
});


// }
// });






// search button funtion ...

const searchform2 = document.getElementById('nowsearch');
searchform2.addEventListener('click', (e)=>{
    e.preventDefault();

  //   const searchformData = new FormData(searchform);
  // let formDataObject = Object.fromEntries(searchformData.entries());

  //   // Format the plain form data as JSON
  //   let formDataJsonString = JSON.stringify(formDataObject);


  fetch(`http://localhost:8080/MeetingRoom/Meetingroom/getRoom`,{
    method:"Get",
         
headers: {
"Content-Type": "application/json",
 Accept: "application/json",
},

  })
  .then(response => response.json())
  .then(roomsearch => {
    // console.log(roomsearch)
   var  roomid="";
  for(let i=0;i<roomsearch.length;i++){
    const roomNo= document.getElementById('search-bar').value;
    // console.log(roomNo);
    roomid=roomsearch.find(e => e.roomName === roomNo);
    // console.log(roomid);
  }
  

fetch(`http://localhost:8080/MeetingRoom/Meetingroom/${roomid.roomId}`,{
method:'Get',
headers: {
    "Content-Type": "application/json",
     Accept: "application/json",
  },
})
.then(response => response.json())
.then(roombyid => {

    // console.log(roombyid);
    // console.log(roombyid.imagePath);
  
let mainDiv = document.getElementById('containerforimg');
// mainDiv.style.width="400px";
mainDiv.style.visibility="visible";
let imageDiv = document.getElementById('imgDiv');
// imageDiv.style.height="200px";
// imageDiv.style.width="300px";




imageDiv.setAttribute("src",roombyid.imagePath);
let roomNameDiv = document.getElementById('roomnamediv');
roomNameDiv.textContent = `Room No: ${roombyid.roomName}`;
roomNameDiv.style.marginTop="40PX";
roomNameDiv.style.fontWeight="bolder";
roomNameDiv.style.fontSize="2rem";
let capacityDiv = document.getElementById('capacitydiv');
capacityDiv.textContent = `Capacity: ${roombyid.capacity}`;
capacityDiv.style.fontWeight="500";
capacityDiv.style.fontSize="1.5rem"
let bookbtn = document.getElementById('bookbtnsearch');
bookbtn.innerText="Book";
bookbtn.addEventListener('click',()=>{
  window.location.href="Booking.html";
});

bookbtn.style.padding="10px 15px 10px 15px";
bookbtn.style.marginTop="40px";
bookbtn.style.marginBottom="30px"
bookbtn.style.borderRadius="8px";
bookbtn.style.backgroundColor="#0065bd";
bookbtn.style.cursor="pointer";
bookbtn.style.color="white";
mainDiv.appendChild(imageDiv);
mainDiv.appendChild(roomNameDiv);
mainDiv.appendChild(capacityDiv);
mainDiv.appendChild(bookbtn);
let searchBtn=document.querySelector('.icon-close2');
searchBtn.addEventListener('click',()=>{
 
  mainDiv.style.visibility="hidden";

});


});
  
  });
});


// }
// });




// search funtion by capacity...

const searchform4 = document.getElementById('searchRoom');
searchform4.addEventListener('submit', (e)=>{
    e.preventDefault();

  //   const searchformData = new FormData(searchform);
  // let formDataObject = Object.fromEntries(searchformData.entries());

  //   // Format the plain form data as JSON
  //   let formDataJsonString = JSON.stringify(formDataObject);


  fetch(`http://localhost:8080/MeetingRoom/Meetingroom/getRoom`,{
    method:"Get",
         
headers: {
"Content-Type": "application/json",
 Accept: "application/json",
},

  })
  .then(response => response.json())
  .then(roomsearch => {
    // console.log(roomsearch)
    let  newroomid="";
  for(let i=0;i<roomsearch.length;i++){
    const roomcap= document.getElementById('search-bar').value;
    console.log(roomcap);
     let roomcap2=parseInt(roomcap);
    newroomid=roomsearch.find(e => e.capacity === roomcap2);
   
  }
  // console.log(newroomid.roomId);

fetch(`http://localhost:8080/MeetingRoom/Meetingroom/${newroomid.roomId}`,{
method:'Get',
headers: {
    "Content-Type": "application/json",
     Accept: "application/json",
  },
})
.then(response => response.json())
.then(roombyid => {

    // console.log(roombyid);
    // console.log(roombyid.imagePath);
  
let mainDiv = document.getElementById('containerforimg');
// mainDiv.style.width="400px";
mainDiv.style.visibility="visible";
let imageDiv = document.getElementById('imgDiv');
// imageDiv.style.height="200px";
// imageDiv.style.width="300px";






imageDiv.setAttribute("src",roombyid.imagePath);
let roomNameDiv = document.getElementById('roomnamediv');
roomNameDiv.textContent = `Room No: ${roombyid.roomName}`;
let roomfeature=document.createElement('h5');
roomfeature.textContent="Meeting room , Wavemaker";
roomNameDiv.appendChild(roomfeature);
roomNameDiv.style.marginTop="30PX";
roomNameDiv.style.fontWeight="bolder";
roomNameDiv.style.fontSize="1.3rem";
roomNameDiv.style.textAlign="center";
let capacityDiv = document.getElementById('capacitydiv');
capacityDiv.textContent = `Capacity: ${roombyid.capacity}`;
capacityDiv.style.fontWeight="600";
capacityDiv.style.fontSize="1.3rem"
let bookbtn = document.getElementById('bookbtnsearch');
bookbtn.innerText="Book";
bookbtn.addEventListener('click',()=>{
  window.location.href="Booking.html";
});

bookbtn.style.padding="10px 15px 10px 15px";
bookbtn.style.marginTop="30px";
bookbtn.style.marginBottom="30px";
bookbtn.style.borderRadius="8px";
bookbtn.style.backgroundColor="#0065bd";
bookbtn.style.cursor="pointer";
bookbtn.style.color="white";
mainDiv.appendChild(imageDiv);
mainDiv.appendChild(roomNameDiv);
mainDiv.appendChild(capacityDiv);
mainDiv.appendChild(bookbtn);
let searchBtn=document.querySelector('.icon-close2');
searchBtn.addEventListener('click',()=>{
 
  mainDiv.style.visibility="hidden";

});


});
  
  });
});


// }
// });






// search button funtion ...

const searchform3 = document.getElementById('nowsearch');
searchform3.addEventListener('click', (e)=>{
    e.preventDefault();

  //   const searchformData = new FormData(searchform);
  // let formDataObject = Object.fromEntries(searchformData.entries());

  //   // Format the plain form data as JSON
  //   let formDataJsonString = JSON.stringify(formDataObject);


  fetch(`http://localhost:8080/MeetingRoom/Meetingroom/getRoom`,{
    method:"Get",
         
headers: {
"Content-Type": "application/json",
 Accept: "application/json",
},

  })
  .then(response => response.json())
  .then(roomsearch => {
    // console.log(roomsearch)
   let newroomid="";
  for(let i=0;i<roomsearch.length;i++){
    const roomcap= document.getElementById('search-bar').value;
    let roomcap3=parseInt(roomcap);
    // console.log(roomNo);
    newroomid=roomsearch.find(e => e.capacity === roomcap3);
   
  }
  

fetch(`http://localhost:8080/MeetingRoom/Meetingroom/${newroomid.roomId}`,{
method:'Get',
headers: {
    "Content-Type": "application/json",
     Accept: "application/json",
  },
})
.then(response => response.json())
.then(roombyid => {

    // console.log(roombyid);
    // console.log(roombyid.imagePath);
  
let mainDiv = document.getElementById('containerforimg');
// mainDiv.style.width="400px";
mainDiv.style.visibility="visible";
let imageDiv = document.getElementById('imgDiv');
// imageDiv.style.height="200px";
// imageDiv.style.width="300px";




imageDiv.setAttribute("src",roombyid.imagePath);
let roomNameDiv = document.getElementById('roomnamediv');
roomNameDiv.textContent = `Room No: ${roombyid.roomName}`;
roomNameDiv.style.marginTop="40PX";
roomNameDiv.style.fontWeight="bolder";
roomNameDiv.style.fontSize="2rem";
let capacityDiv = document.getElementById('capacitydiv');
capacityDiv.textContent = `Capacity: ${roombyid.capacity}`;
capacityDiv.style.fontWeight="500";
capacityDiv.style.fontSize="1.5rem"
let bookbtn = document.getElementById('bookbtnsearch');
bookbtn.innerText="Book";
bookbtn.addEventListener('click',()=>{
  window.location.href="Booking.html";
});

bookbtn.style.padding="10px 15px 10px 15px";
bookbtn.style.marginTop="40px";
bookbtn.style.marginBottom="30px"
bookbtn.style.borderRadius="8px";
bookbtn.style.backgroundColor="#0065bd";
bookbtn.style.cursor="pointer";
bookbtn.style.color="white";
mainDiv.appendChild(imageDiv);
mainDiv.appendChild(roomNameDiv);
mainDiv.appendChild(capacityDiv);
mainDiv.appendChild(bookbtn);
let searchBtn=document.querySelector('.icon-close2');
searchBtn.addEventListener('click',()=>{
 
  mainDiv.style.visibility="hidden";

});


});
  
  });
});


// }
// });
