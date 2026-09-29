document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const room = document.getElementById("room").value;

            alert(
                "Thank you, " + name +
                "! Your booking request for a " + room +
                " has been received."
            );

            bookingForm.reset();
        });
    }
});