document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal_close');
    let isModalShown = false;

    function showModal() {
        if (!isModalShown) {
            modal.style.display = 'block';
            isModalShown = true;
        }
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    setTimeout(showModal, 10000);

    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            showModal();
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });
});