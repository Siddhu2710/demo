
// document.getElementById("password-check-button").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     var password = document.getElementById("password").value;
//     var confirm_password = "22042018";
//     const message = document.getElementById('message');
//     const body = document.body; 

//     if (password == confirm_password) {
//         message.textContent = "Hi Anjali!!";
//         message.style.animation = "fadeIn 2s ease-in-out forwards";
//         body.style.backgroundImage = "url('/img/login-success.png')";
//         body.style.backgroundPosition = "center"; // Apply the same background-position
//         //body.style.backgroundSize = "cover";   // Apply the same background-size

//         // Disable interaction
//         var inputs = document.querySelectorAll('input, button');
//         inputs.forEach(input => {
//             input.disabled = true;
//         });

//         setTimeout(function() {
//             location.assign("wish.html");
//         }, 6000); 
//     } else {
//         message.textContent = "Yaaru saamy nee?";
//     }
// });

// document.getElementById("password-check-button").addEventListener("click", function(event) {
//     event.preventDefault(); // Prevent the default form submission

//     var password = document.getElementById("password").value;
//     var confirm_password = "22042018";
//     const message = document.getElementById("message");
//     const body = document.body;
//     const loginForm = document.getElementById("whole-login-form");

//     if (password === confirm_password) {
//         // Display success message
//         message.textContent = "Hi Anjali!!";
//         message.style.animation = "fadeIn 2s ease-in-out forwards";

//         // Wait 2 seconds before fading out the success message
//         setTimeout(function() {
//             message.classList.add("hidden-message");
//         }, 2000);

//         // Fade out login form after message disappears
//         setTimeout(function() {
//             loginForm.classList.add("hidden-form");
//         }, 2000); // Start fading the form after message begins to fade

//         // Wait for full fade-out before changing background image
//         setTimeout(function() {
//             let screenWidth = window.innerWidth;
//             if (screenWidth > 800) {
//                 body.style.backgroundImage = "url('/img/login-success.png')";
//             } else {
//                 body.style.backgroundImage = "url('/img/login-success-mobile.png')";
//             }
//             body.style.backgroundPosition = "center";
//         }, 6000); // Change background after fade-out is complete

//         // Redirect after additional 3 seconds (9 seconds total)
//         setTimeout(function() {
//             location.assign("wish.html");
//         }, 9000);
//     } else {
//         message.textContent = "Yaaru saamy nee?";
//     }
// });

document.getElementById("password-check-button").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission

    var password = document.getElementById("password").value;
    var confirm_password = "22042018";
    const message = document.getElementById("message");
    const body = document.body;
    const loginForm = document.getElementById("whole-login-form");

    if (password === confirm_password) {
        // **✅ Store authentication flag**
        sessionStorage.setItem("authenticated", "true");

        // Display success message
        message.textContent = "Hi Anjali!!";
        message.style.opacity = "1"; 
        message.style.fontFamily = "Courier New', Courier, monospace";
        message.style.transition = "opacity 2s ease-in-out";

        setTimeout(function() {
            message.style.opacity = "0";
        }, 2000);

        let screenWidth = window.innerWidth;

        if (screenWidth < 800) {
            setTimeout(function() {
                loginForm.style.transition = "opacity 4s ease-in-out";
                loginForm.style.opacity = "0";
            }, 2000);

            setTimeout(function() {
                loginForm.style.display = "none";
                body.style.backgroundImage = "url('login-success-mobile.png')";

                setTimeout(function() {
                    location.assign("wish.html");
                }, 2000);
            }, 3000);

        } else {
            setTimeout(function() {
                body.style.backgroundImage = "url('login-success.png')";
                setTimeout(function() {
                    location.assign("wish.html");
                }, 2000);
            }, 2000);
        }

    } else {
        message.textContent = "Yaaru saamy nee?";
    }
});
function togglePassword() {
    var passwordInput = document.getElementById("password");
    var eyeIcon = document.getElementById("eyeIcon");
    var eyeOffIcon = document.getElementById("eyeOffIcon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.style.display = 'none';
        eyeOffIcon.style.display = 'inline-block'; // Use inline-block to properly display inline elements
    } else {
        passwordInput.type = "password";
        eyeIcon.style.display = 'inline-block'; // Use inline-block to properly display inline elements
        eyeOffIcon.style.display = 'none';
    }
}
