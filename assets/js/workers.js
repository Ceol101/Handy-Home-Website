document.addEventListener("DOMContentLoaded", () => {
	const modal = document.getElementById("workerModal");
	const closeBtn = document.querySelector(".close");
	const workerDetails = document.getElementById("workerDetails");

	const workers = {
		rodel: {
			name: "Rodel 'Del' Manalili",
			job: "Plumber",
			rating: 4.9,
			img: "images/worker1.png",
			qualifications: "TESDA NC II Certificate in Plumbing",
			skills:  ["Pipe installation", "Leak repair", "Fixture fitting"],
			achievements: ["Served 150+ satisfied households in Cebu","Maintained a 98% leak-free rate across all completed jobs."
,"Recognized for quick and clean emergency responses."],
			status: "TESDA-certified, NBI and barangay clearance verified.",
			feedbacks: [
	"“Si Kuya Del kay grabe ka-efficient, dali ra kaayo nahuman ang leak sa among kitchen. Wala pa gyud kalat!” – Jessa Mae, Talamban",
	"“Clean and organized kaayo iyang work, mura’g wala giayo kay limpyo kaayo tan-awon.” – Leo John, Bacayan",
	"“Friendly kaayo siya, mo-explain pa before mag-start para kabalo ka unsay buhaton.” – Cathy Rose, Apas"
]
		},
		jerome: {
	name: "Jerome 'Rome' Alvarado",
	job: "Plumber",
	rating: 4.8,
	img: "images/worker1.png",
	qualifications: "TESDA NC II Certificate in Plumbing",
	skills: ["Fixture installation", "Water heater setup", "Drainage maintenance"],
	achievements: [
		"Repaired and replaced over 70 household pipelines in 2023–2024",
		"Consistently praised for neat, long-lasting work",
		"Awarded 'Customer Favorite' badge for two consecutive months"
	],
	status: "Licensed plumber under Cebu City accreditation.",
	feedbacks: [
		"“On time kaayo si Kuya Rome. Pag-abot niya, diretso trabaho — no chika, trabaho dayon!” – Tina Joy, Apas",
		"“Na-ayo gyud niya among banyo, karon maayo na kaayo ang water pressure. Thank you kaayo!” – Earl James, Talamban",
		"“After sa repair, limpyo pa gyud ang area. You can tell nga sanay na kaayo siya sa trabaho.” – Ben Carlo, Apas"
	]
},

jomar: {
	name: "Jomar 'Joms' Dela Cruz",
	job: "Electrician",
	rating: 4.9,
	img: "images/worker2.png",
	qualifications: "TESDA NC II in Electrical Installation and Maintenance",
	skills: ["Wiring", "Circuit troubleshooting", "Safety inspections"],
	achievements: [
		"Completed 10+ full-house rewiring projects in Mabolo",
		"Passed all post-work inspections with zero violations",
		"Helped design safer breaker layouts for households"
	],
	status: "Licensed electrician; certificate validated by HandyHome Cebu.",
	feedbacks: [
		"“Professional ug paspas mo-troubleshoot. Naka-balik among kuryente in less than an hour!” – Rico Angelo, Talamban",
		"“Mo-explain gyud siya before mo-trabaho — dali ra sabton bisan dili ka techy.” – Jayden, Apas",
		"“Thankful kaayo ko kay wala na nag-brownout after iyang gi-fix. The best!” – Bea Ann, Talamban"
	]
},

reggie: {
	name: "Reggie 'Reg' Bautista",
	job: "Electrician",
	rating: 4.8,
	img: "images/worker2.png",
	qualifications: "TESDA NC II in Electrical Installation and Maintenance",
	skills: ["Wiring installation", "Lighting setup", "Electrical safety compliance"],
	achievements: [
		"Installed solar-ready systems for 8 homes in Lahug",
		"Maintained a 99% satisfaction rate with no service recalls",
		"Conducted safety workshops for new technicians"
	],
	status: "TESDA-certified and background checked.",
	feedbacks: [
		"“Si Kuya Reg maayo gyud — limpyo ug hapsay mo-wiring, wala’y labad sa ulo.” – Monica, Apas",
		"“Dili siya magdali, sure gyud nga safe tanan connections.” – Clara Joy, Bacayan",
		"“Nice siya mo-explain, friendly ug klaro mo-tubag kung naa kay pangutana.” – Faithlyn, Apas"
	]
},

arvin: {
	name: "Arvin 'Vin' Razon",
	job: "Air Conditioning Technician",
	rating: 4.8,
	img: "images/worker3.png",
	qualifications: "TESDA NC II in Refrigeration and Air-Conditioning",
	skills: ["AC diagnostics", "Refrigerant leak detection", "Cleaning and installation"],
	achievements: [
		"Serviced 250+ AC units in Cebu residences and offices",
		"Developed HandyHome’s 'QuickCool' preventive checklist",
		"95% of clients reported improved cooling efficiency"
	],
	status: "Police and barangay clearance verified.",
	feedbacks: [
		"“Si Kuya Vin maayo kaayo mo-limpyo ug AC, mura’g bag-o napalit.” – Rhea Mae, Talamban",
		"“Cool kaayo iyang service — literally! Haha.” – Bryan, Apas",
		"“Dili mamili ug trabaho, bisag simple cleaning lang, tarong gihapon buhat.” – Jane, Bacayan"
	]
},

ramon: {
	name: "Ramon 'Mon' Delos Reyes",
	job: "Air Conditioning Technician",
	rating: 4.7,
	img: "images/worker3.png",
	qualifications: "TESDA NC II in Refrigeration and Air-Conditioning",
	skills: ["Installation", "Compressor repair", "System testing"],
	achievements: [
		"Helped clients reduce power bills by 15–20% through proper servicing",
		"Installed and maintained AC units in 30+ commercial spaces",
		"Certified by major AC brands (Daikin, Panasonic)"
	],
	status: "TESDA certified; verified client endorsements.",
	feedbacks: [
		"“Gi-train daw siya sa Daikin, mao gyud nga expert sa mga brand-name ACs.” – Kenjie, Talamban",
		"“After iyang gi-check, wala na mo-leak among aircon. Thank you kaayo!” – Micaella, Apas",
		"“Magtinabangay siya ug explain unsay cause sa problema, very helpful kaayo.” – Paolo, Talamban"
	]
},

nestor: {
	name: "Nestor 'Nes' Alcaraz",
	job: "Repairman",
	rating: 4.9,
	img: "images/worker4.png",
	qualifications: "TESDA NC II in Carpentry",
	skills: ["Wood cutting", "Furniture installation", "Blueprint reading"],
	achievements: [
		"Built and installed 50+ custom cabinets for homes in Guadalupe",
		"Recognized for precision and smooth finishing",
		"Part of renovation teams for local cafés in Cebu"
	],
	status: "TESDA certified; ID and work references verified.",
	feedbacks: [
		"“Si Kuya Nes grabe ka-hapsay mo-cut ug wood, mura’g machine. Perfect ang fit sa among cabinets!” – April, Apas",
		"“Very professional and polite. Dili magdali pero sure ka nga quality gyud.” – Marco, Talamban",
		"“Among café renovation mas nindot pa sa plano kay maayo kaayo siya mo-detail.” – Jean, Bacayan"
	]
},

carlo: {
	name: "Carlo 'Caloy' Dimaano",
	job: "Repairman",
	rating: 4.8,
	img: "images/worker4.png",
	qualifications: "TESDA NC II in Carpentry",
	skills: ["Furniture repair", "Door framing", "Wooden structure construction"],
	achievements: [
		"Completed 40+ home repair projects in Talamban and Mandaue",
		"Known for fast yet clean carpentry work",
		"Awarded 'Best in Craftsmanship' by HandyHome Cebu (2025)"
	],
	status: "TESDA-certified; background check cleared.",
	feedbacks: [
		"“Fast and reliable carpenter, moabot gyud sa agreed time. Wala’y absent!” – James, Bacayan",
		"“Nice iyang workmanship, straight ug even cuts. Nindot kaayo tan-awon.” – Mira, Apas",
		"“Ang akong pultahan nga dili masira sauna, karon smooth na kaayo after niya gi-ayo.” – Ken, Talamban"
	]
}


	};

	document.querySelectorAll(".worker-card").forEach(card => {
		card.addEventListener("click", () => {
			const id = card.dataset.worker;
			const w = workers[id];
			if (w) {
				workerDetails.innerHTML = `
						<div class="worker-header">
							<img src="${w.img}" alt="${w.name}">
							<h3>${w.name}</h3>
							<p class="occupation"><strong>${w.job}</strong></p>
							<p class="rating">${w.rating} <span class="stars">${getStars(w.rating)}</span></p>
						</div>

						<div class="worker-info">
							<p><b>Qualifications:</b> ${w.qualifications}</p>
							<p><b>Skills:</b></p>
							<ul class="skills-list">
								${w.skills.map(skill => `<li>${skill}</li>`).join('')}
							</ul>
							<p><b>Achievements:</b></p>
							<ul class="skills-list">
								${w.achievements.map(achievements => `<li>${achievements}</li>`).join('')}
							</ul>
							<p><b>Verified Status:</b> ${w.status}</p>
							<p><b>Feedbacks:</b></p>
								<ul class="feedback-list">
									${w.feedbacks.map(fb => `<li>${fb}</li>`).join('')}
								</ul>

						</div>

						<center><button class="book-btn" onclick="redirectToService('${w.job}')">Book Service</button></center>
					`;

				modal.style.display = "block";
				

			}
		});
	});

	closeBtn.onclick = () => modal.style.display = "none";
	window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
});

function getStars(rating) {
	const fullStar  = '<span class="fas fa-star checked"></span>';         // solid filled
	const halfStar  = '<span class="fas fa-star-half-alt checked"></span>'; // solid half
	const emptyStar = '<span class="far fa-star"></span>';                 // outline empty

	let starsHTML = '';
	const totalStars = 5;

	// normalize rating to number (in case it's "3.0" string)
	const r = Number(rating) || 0;
	const fullStars = Math.floor(r);
	const hasHalf = (r - fullStars) >= 0.5;

	// Add full stars
	for (let i = 0; i < fullStars; i++) starsHTML += fullStar;

	// Add half star if needed
	if (hasHalf) starsHTML += halfStar;

	// Fill remaining with empty stars
	const used = fullStars + (hasHalf ? 1 : 0);
	for (let i = used; i < totalStars; i++) starsHTML += emptyStar;

	return starsHTML;
}
function redirectToService(job) {
	const serviceLinks = {
		"Plumber": "plumbing.html",
		"Electrician": "electrical.html",
		"Air Conditioning Technician": "aircon.html",
		"Repairman": "handyman.html"
	};

	const page = serviceLinks[job] || "services.html"; // fallback
	window.location.href = page;
}


