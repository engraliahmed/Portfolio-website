const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.style.right = "0"; // show sidebar
  overlay.style.opacity = "1"; // show overlay
  overlay.style.visibility = "visible";
});

overlay.addEventListener("click", () => {
  sidebar.style.right = "-250px"; // hide sidebar
  overlay.style.opacity = "0";
  overlay.style.visibility = "hidden";
});

// Counter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // lower = faster

  function runCounter(counter) {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCount = () => {
      const increment = Math.ceil(target / speed);
      if (count < target) {
        count += increment;
        counter.innerText = count;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target; // stop exactly at target
      }
    };

    updateCount();
  }

  // Hover par reset + animate
  counters.forEach((counter) => {
    counter.parentElement.addEventListener("mouseenter", () => {
      counter.innerText = "0"; // reset
      runCounter(counter); // run again
    });
  });

  // First time page load par bhi run ho
  counters.forEach((counter) => runCounter(counter));
});
