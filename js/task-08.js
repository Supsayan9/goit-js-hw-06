const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(loginForm);
      const formValues = {};

      
      formData.forEach((value, key) => {
        if (value.trim() === '') {
          alert('All fields must be filled in.');
          return;
        }
        formValues[key] = value;
      });

      console.log(formValues);

      
      loginForm.reset();
    });
