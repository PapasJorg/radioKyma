function showSchedule(day, clickedBtn) {
    document.querySelectorAll(".day-button").forEach(btn => {
      btn.classList.remove("bg-indigo-600", "text-white");
      btn.classList.add("bg-gray-200");
    });
    clickedBtn.classList.add("bg-indigo-600", "text-white");
    clickedBtn.classList.remove("bg-gray-200");
  
    const container = document.getElementById("schedule-container");
    container.innerHTML = "<p class='text-gray-500'>Φόρτωση προγράμματος...</p>";
  
    fetch(`${day}.html`)
      .then(response => {
        if (!response.ok) throw new Error("Δεν βρέθηκε το πρόγραμμα.");
        return response.text();
      })
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const scheduleSection = doc.querySelector('.day-schedule');
  
        if (scheduleSection) {
          container.innerHTML = scheduleSection.outerHTML;
        } else {
          container.innerHTML = "<p class='text-red-500'>Δεν βρέθηκε περιεχόμενο για την ημέρα.</p>";
        }
      })
      .catch(error => {
        console.error(error);
        container.innerHTML = `<p class='text-red-500'>⚠️ ${error.message}</p>`;
      });
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    const defaultBtn = document.querySelector(".day-button");
    showSchedule("monday", defaultBtn);
  });
  