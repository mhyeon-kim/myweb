document.addEventListener('DOMContentLoaded', () => {
    
    // 1. "더 알아보기" 버튼 스크롤 액션
    const contactBtn = document.getElementById('contact-btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. 모달 제어 로직
    const timelineItems = document.querySelectorAll('.timeline-item');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButtons = document.querySelectorAll('.close-btn');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const targetModal = document.getElementById(targetId);
            
            if (modalOverlay && targetModal) {
                modalOverlay.style.display = 'flex';
                targetModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // 뒤 메인스크롤 방지
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    function closeModal() {
        if (modalOverlay) {
            modalOverlay.style.display = 'none';
            document.body.style.overflow = 'auto';
            const allContents = document.querySelectorAll('.modal-content');
            allContents.forEach(content => {
                content.style.display = 'none';
            });
        }
    }
});