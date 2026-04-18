const menuList = document.getElementById("menu-list");
const yearSpan = document.getElementById("year");

yearSpan.textContent = new Date().getFullYear();

async function loadMenu() {
  try {
    const response = await fetch("/api/menu");
    const items = await response.json();

    menuList.innerHTML = items
      .map(
        (item) => `
          <li>
            <span>${item.name}</span>
            <strong>KES ${item.price}</strong>
          </li>
        `
      )
      .join("");
  } catch (error) {
    menuList.innerHTML = "<li>Menu is temporarily unavailable.</li>";
  }
}

loadMenu();
