// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('type').addEventListener('change', function (eventData) {
        let info = document.getElementById('testOutput');
        info.innerText = eventData.target.value;
        changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("typeForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let info = document.getElementById('type');
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;

    });
    // Log readiness to console
    console.log("Ready");

    function changeCert(value) {
        let certificate = document.getElementById('certificate');
        certificate.classList = ""; // clear classes on each function call
        switch (value) {
            case 'lecture':
                certificate.classList.add('lecture');
                break;
            case 'beans':
                certificate.classList.add('beans');
                break;
            case 'quality':
                certificate.classList.add('quality');
                break;
            case 'finishing':
                certificate.classList.add('finishing');
                break;
        }
    }
});

//date
/*
let theDate = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})
let dateBox = document.getElementById('theDate');
dateBox.innerText = theDate;
*/