let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();
    // Getting hour, minute, and second
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculating rotations
    let hRotation = 30 * hh + mm / 2; // 30 degrees for each hour
    let mRotation = 6 * mm;          // 6 degrees for each minute
    let sRotation = 6 * ss;          // 6 degrees for each second

    // Applying rotations to hands
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

// Update clock every second
setInterval(displayTime, 1000);

// Initial call to set correct time on page load
displayTime();
