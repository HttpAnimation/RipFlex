document.querySelector('form').onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
    }).then(response => response.text())
      .then(result => {
          console.log(result);
          alert("Upload successful!");
          event.target.reset();
      }).catch(err => {
          console.error('Error:', err);
          alert("Failed to upload.");
      });
};
