            function Registration(){
            var name = document.getElementById('name').value;
            var mail = document.getElementById('mail').value;
            var pw = document.getElementById('pw').value;
            var pw2 = document.getElementById('pw2').value;
			
      if (!name) {
        alert('Please Enter Your Name');
        return;
      }
	  if (!mail) {
        alert('Please Enter Your Email Address');
        return;
      }
	  if (!pw) {
        alert('Please Enter Your Password');
        return;
      }
	  if (!pw2) {
        alert('Please Retype Your Password');
        return;
      }

      localStorage.setItem('name', name);
      localStorage.setItem('mail', mail);
	  localStorage.setItem('pw', pw);
	  localStorage.setItem('pw2', pw2);
      window.location.href='homepage.html';
      alert('Registration successful!');
		}
        