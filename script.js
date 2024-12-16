$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();

        if (name === '' || email === '' || phone === '') {
            alert('Please fill out all required fields.');
            return;
        }

        // Optional: Add further client-side validation here

        // Submit the form
        this.submit();
    });
});
