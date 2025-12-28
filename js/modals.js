document.addEventListener("DOMContentLoaded", () => {

  const typeFilter = document.getElementById("typeFilter");
  const dateFilter = document.getElementById("dateFilter");
  const events = document.querySelectorAll(".event-card");

  if (!typeFilter || !dateFilter || !events.length) {
    console.error("HTML elements not found. Check IDs or class names.");
    return;
  }

  function applyFilters() {
    const selectedType = typeFilter.value;
    const selectedDate = dateFilter.value;

    events.forEach(event => {
      const typeMatch =
        selectedType === "all" || event.dataset.type === selectedType;

      const dateMatch =
        selectedDate === "all" || event.dataset.date === selectedDate;

      event.classList.toggle("hide", !(typeMatch && dateMatch));
    });
  }

  typeFilter.addEventListener("change", applyFilters);
  dateFilter.addEventListener("change", applyFilters);

});
