const body = document.body;

const navMenu = document.querySelector(".navigations");
const navOpen = document.querySelector(".nav-open");
const navClose = document.querySelector(".nav-close");

const featNav = document.querySelectorAll(".feat-nav");

const faq = document.querySelectorAll(".faq-ques");

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("nv")) {
		navMenu.classList.remove("navigations-active");
		body.classList.remove("no-scroll");
		navOpen.style.opacity = "1";
		navOpen.style.transition = "0.3s";
	}
});

navOpen.addEventListener("click", () => {
	navMenu.classList.add("navigations-active");
	body.classList.add("no-scroll");
	navOpen.style.opacity = "0";
	navOpen.style.transition = "1s";
});

navClose.addEventListener("click", () => {
	navMenu.classList.remove("navigations-active");
	body.classList.remove("no-scroll");
	navOpen.style.opacity = "1";
	navOpen.style.transition = "0.3s";
});

featNav.forEach((i) => {
	const featOne = document.querySelector(".feature-one");
	const featTwo = document.querySelector(".feature-two");
	const featThree = document.querySelector(".feature-three");
	i.addEventListener("click", () => {
		let val = i.getAttribute("num");
		featNav.forEach((i) => {
			i.classList.remove("feat-active");
		});
		i.classList.add("feat-active");

		if (val == 1) {
			featOne.classList.remove("feat-d-none");
			featTwo.classList.add("feat-d-none");
			featThree.classList.add("feat-d-none");
		} else if (val == 2) {
			featOne.classList.add("feat-d-none");
			featTwo.classList.remove("feat-d-none");
			featThree.classList.add("feat-d-none");
		} else if (val == 3) {
			featOne.classList.add("feat-d-none");
			featTwo.classList.add("feat-d-none");
			featThree.classList.remove("feat-d-none");
		}
	});
});

faq.forEach((i) => {
	i.addEventListener("click", (e) => {
		if (!e.target.classList.contains("show-ans")) {
			faq.forEach((x) => {
				x.classList.remove("show-ans");
			});
			i.classList.add("show-ans");
		} else {
			i.classList.remove("show-ans");
		}
	});
});
