const checkboxes = document.getElementsByClassName("toggle");
const navToggle = document.getElementsByClassName("nav-toggle")[0];

for(checkbox of checkboxes) {
    checkbox.addEventListener("change", function () {
        if (this.checked) {
          document.documentElement.setAttribute("data-theme", "dark");
          navToggle.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23222222'%3E%3Cpath d='M99,0A36.33,36.33,0,0,0,70,15,25,25,0,0,1,30,15,36.33,36.33,0,0,0,1,0H0V50H100V0Z'/%3E%3C/svg%3E")`;
        } else {
          document.documentElement.setAttribute("data-theme", "light");
          navToggle.style.backgroundImage = `url(
            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23ffff'%3E%3Cpath d='M99,0A36.33,36.33,0,0,0,70,15,25,25,0,0,1,30,15,36.33,36.33,0,0,0,1,0H0V50H100V0Z'/%3E%3C/svg%3E"
          )`;
        }
      });
      
}
