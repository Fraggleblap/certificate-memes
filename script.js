// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if (document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameLabel');
        // console.log(eventData);
        nameOutput.innerText = eventData.target.value;
    });

    document.getElementById('type').addEventListener('change', function (eventData) {
        console.log(eventData.target.value);
        changeCert(eventData.target.value);
    });

    // process form Data
    document.getElementById("typeForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); //stop page reload when form is submitted
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        //update certificate information when form is submitted:
        let info = document.getElementById('type');
        info.innerText = formData.type;

    });
    // Log readiness to console
    console.log("Ready");

    function getDate() {
        let theDate = new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})
        //let dateBox = document.getElementById('theDate');
        //dateBox.innerText = theDate;
        return theDate;
    }

    function changeCert(value) {
        let textSection = document.getElementById('textSection');
        textSection.classList = ""; // clear classes on each function call
        switch (value) {
            case 'lecture':
                document.getElementById('certDetails').innerText = "Being inconsiderate during a JavaScript lecture";
                document.getElementById(`certDetails`).style.fontSize = '48px';
                document.getElementById('explanation').innerText = `For failing to give due attention to the speaker during a JavaScript 
                lecture on the day of ${getDate}`;
                document.getElementById('explanation').style.fontSize = '20px';
                textSection.classList.add('lecture');
                break;
            case 'beans':
                document.getElementById('certDetails').innerText = "Bean Keeper";
                document.getElementById(`certDetails`).style.fontSize = '50px';
                textSection.classList.add('beans');
                break;
            case 'quality':
                document.getElementById('certDetails').innerHTML = `<h2 id="certDetails">low q<span style="font-family: 'Roboto', sans-serif;">a</span><span style="font-family: 'Dancing Script', cursive;"></span>lity assurance</h2>`;
                document.getElementById(`certDetails`).style.fontSize = '38px';
                textSection.classList.add('quality');
                break;
            case 'finishing':
                document.getElementById('certDetails').innerText = `Not Finishing Your`;
                document.getElementById(`certDetails`).style.fontSize = '50px';
                textSection.classList.add('finishing');
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