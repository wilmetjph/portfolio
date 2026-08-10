const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
	let currentSection = "";

	sections.forEach((section) => {
		if(window.scrollY >= section.offsetTop) {
			currentSection = section.id;
		}
	});

	navLinks.forEach((navLink) => {

		if(currentSection == navLink.getAttribute("href").replace("#", "")) {
			navLink.classList.add("active");
		} else {
			navLink.classList.remove("active");
		}
	});

})

const backToTop = document.querySelector("#backToTop");
backToTop.addEventListener("click", () => {
	window.scrollTo({top: 0, behavior: 'smooth'});
})