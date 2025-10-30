
const toggleBtn = document.getElementById('toggleServices');
const extraServices = document.getElementById('extra-services');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
	if (extraServices.style.display === 'block') {
		extraServices.style.display = 'none';
		icon.classList.remove('fa-chevron-up');
		icon.classList.add('fa-chevron-down');
	} else {
		extraServices.style.display = 'block';
		icon.classList.remove('fa-chevron-down');
		icon.classList.add('fa-chevron-up');
	}
});