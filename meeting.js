document.addEventListener("DOMContentLoaded", function () {
    loadMeetings();
});

function scheduleMeeting() {
    let meetingTime = document.getElementById("meetingTime").value;
    
    if (!meetingTime) {
        alert("Please select a date and time.");
        return;
    }

    let meetings = JSON.parse(localStorage.getItem("meetings")) || [];
    meetings.push({ time: meetingTime });
    localStorage.setItem("meetings", JSON.stringify(meetings));

    alert("Meeting scheduled successfully!");
    loadMeetings();
}

function loadMeetings() {
    let meetings = JSON.parse(localStorage.getItem("meetings")) || [];
    let meetingList = document.getElementById("meetingList");

    meetingList.innerHTML = ""; // Clear before adding meetings

    if (meetings.length === 0) {
        meetingList.innerHTML = "<p>No meetings scheduled.</p>";
        return;
    }

    meetings.forEach((meeting, index) => {
        let meetingItem = document.createElement("div");
        meetingItem.classList.add("meeting");

        meetingItem.innerHTML = `
            <span>📅 ${new Date(meeting.time).toLocaleString()}</span>
            <button class="cancel-btn" onclick="cancelMeeting(${index})">Cancel</button>
        `;

        meetingList.appendChild(meetingItem);
    });
}

function cancelMeeting(index) {
    let meetings = JSON.parse(localStorage.getItem("meetings")) || [];
    meetings.splice(index, 1);
    localStorage.setItem("meetings", JSON.stringify(meetings));
    loadMeetings(); // Refresh list
}
