function displayBirthdayMessage() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 5, 2); // Month is 0-indexed (0 for January, 5 for June)
  
    const messageElement = document.getElementById('message');
  
    if (today < birthday) {
      messageElement.textContent = "Advance Happie Birthday🌼!";
    } else if (today.toDateString() === birthday.toDateString()) {
      messageElement.textContent = "Happie Birthday🌼!";
    } else {
      messageElement.textContent = "Belated Happie Birthday🌼!";
    }
  }
  
  // Call this function when the script runs (when the page loads)
  displayBirthdayMessage();
  
  function deep_talk() {
    const today = new Date();
    const birthday = new Date(today.getFullYear(),5,2); 
  
    
    if (today < birthday) {
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "This might not be the correct time da😬, please check after your birthday! ";
      } else if (today.toDateString() === birthday.toDateString()) {
        const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "This might not be the correct time da😬, please check tomorrow! ";
      } else {
       location.assign("deeptalk.html");
      }
    //   const errorMessage = document.getElementById("error-message");
    //   errorMessage.textContent = "This might be not the correct time da, please check after May 13th.";
    }
  