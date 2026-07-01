function showAlert() {
    alert("Welcome to Ocean Explorer! Enjoy your submarine  travel adventure.");
}

function handleFormSubmit(event) {
    event.preventDefault();

    let name = document.getElementById("username").value;
    let place = document.getElementById("tour").value;

    alert(
        "Thank you, " +
        name +
        "! Your booking for " +
        place +
        " has been submitted successfully."
    );

    document.getElementById("bookingForm").reset();

    return false;
}