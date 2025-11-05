const jobs = [
    { title: "Tailor Assistant", type: "part-time", location: "Lagos", description: "Assist in sewing and fabric cutting for customers." },
    { title: "Remote Graphic Designer", type: "remote", location: "Online", description: "Create logo and brand designs for artisan shops." },
    { title: "Carpenter", type: "part-time", location: "Abuja", description: "Craft furniture and repair wooden structures." },
    { title: "Online Craft Instructor", type: "remote", location: "Online", description: "Teach online classes for pottery and handcraft." },
    { title: "Painter", type: "part-time", location: "Ibadan", description: "Assist in interior and exterior house painting projects." },
    { title: "developer",type: "remote", location: "ogun", description: "Helps in buildind both frontend and backend project"},
    { title: "deliverer", type:" part-time", location: "imo", description: "Aid in delivery of good to customers"},
    { title: "driver", type: "remote", location: "anambra", description: "transportation of person from a geographical area to the other"}
];

const jobList = document.getElementById('jobList');

// Display all jobs initiallyx
function displayJobs(filteredJobs) {
    jobList.innerHTML = "";
    filteredJobs.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('job-card');
        card.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Type:</strong> ${job.type}</p>
          <p><strong>Location:</strong> ${job.location}</p>
          <p>${job.description}</p>
        `;
        jobList.appendChild(card);
    });
}

function filterJobs() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const jobType = document.getElementById('jobType').value;

    const filtered = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchText) || job.description.toLowerCase().includes(searchText);
        const matchesType = (jobType === 'all') || (job.type === jobType);
        return matchesSearch && matchesType;
    });

    displayJobs(filtered);
}

// Show all jobs on page load
displayJobs(jobs);




const button2 = document.getElementById("button2");
button2.addEventListener("click", function(){

    if(document.body.classList.contains("dark-mode")) {
        document.body.classList.remove('dark-mode');
        button2.textContent = `☀️`;

    }else{
        document.body.classList.add('dark-mode');
        button2.textContent=`👌`
    }

});




