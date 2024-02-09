let goofyString = `for dubble chEcking company pROducTs since January 1st, 1970`;
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

    function changeCert(value) {
        let textSection = document.getElementById('textSection');
        textSection.classList = ""; // clear classes on each function call
        document.getElementById(`topCornerimgReg`).style.rotate = `0deg`;
        document.getElementById(`leafLogo`).style.rotate = `0deg`;
        document.getElementById(`leaf`).style.opacity = 1;
        let lastString = ``;
        switch (value) {
            case 'lecture':
                document.getElementById('certDetails').innerText = "Being inconsiderate during a JavaScript lecture";
                document.getElementById(`certDetails`).style.fontSize = '48px';
                document.getElementById('explanation').innerHTML = `<h3 id="explanation">For failing to give due attention to the speaker during a JavaScript 
                lecture on the day of <span>${new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span></h3>`;
                document.getElementById('explanation').style.fontSize = '20px';
                textSection.classList.add('lecture');
                break;
            case 'beans':
                document.getElementById('certDetails').innerText = "Bean Keeper";
                document.getElementById(`certDetails`).style.fontSize = '50px';
                document.getElementById('explanation').innerHTML = `<h3 id="explanation">For being a volunteer bean keeper since <span>${new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span></h3>`;
                document.getElementById('explanation').style.fontSize = '20px';
                textSection.classList.add('beans');
                break;
            case 'quality':
                document.getElementById('certDetails').innerHTML = `<h2 id="certDetails">low q<span style="font-family: 'Roboto', sans-serif;">a</span><span style="font-family: 'Dancing Script', cursive;"></span>lity assurance</h2>`;
                document.getElementById(`certDetails`).style.fontSize = '38px';
                                
                for (let i = 0; i < goofyString.length; i++) {
                    let chance = Math.floor(Math.random() * 5);
                    if (chance === 2 && goofyString.charAt(i) !== ` `) {
                        lastString += goofyString.charAt(i).toUpperCase();
                    } else if(chance !== 2 && goofyString.charAt(i) !== ` `) {
                        lastString += goofyString.charAt(i).toLowerCase();
                    } else if(goofyString.charAt(i) === ` `) {
                        lastString += goofyString.charAt(i);
                    }
                }
                document.getElementById(`explanation`).innerText = lastString;
                //document.getElementById('explanation').innerHTML = `<h3 id="explanation">for dubble chEcking company pROducTs since <span>${new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span></h3>`;
                textSection.classList.add('quality');
                break;
            case 'finishing':
                document.getElementById('certDetails').innerText = `Not Finishing Your`;
                document.getElementById(`certDetails`).style.fontSize = '50px';
                document.getElementById('explanation').innerHTML = `<h3 id="explanation">For being the world’s biggest procrastinator since <span>${new Date().toLocaleDateString('en-us', {weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span></h3>`;
                textSection.classList.add('finishing');
                document.getElementById(`leaf`).style.opacity = 0;
                document.getElementById(`leafLogo`).style.rotate = `6deg`;
                document.getElementById(`topCornerimgReg`).style.rotate = `180deg`;
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