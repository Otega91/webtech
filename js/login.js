    function Login() {
      var mail = document.getElementById('mail').value;
      var pw = document.getElementById('pw').value;

      var Username = localStorage.getItem('mail');
      var Password = localStorage.getItem('pw');

      if (mail === Username && pw === Password) {
		  window.location.href='homepage.html';
      } else {
        alert('Invalid username or password. Please try again.');
      }
    }
