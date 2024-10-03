document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const chatButton = document.getElementById('chatButton');
const chatBox = document.getElementById('chatBox');

chatButton.addEventListener('click', function () {
    if (chatBox.style.display === 'none' || chatBox.style.display === '') {
        chatBox.style.display = 'block';
    } else {
        chatBox.style.display = 'none';
    }
});

const sendButton = document.getElementById('sendButton');
const userMessage = document.getElementById('userMessage');
const chatContent = document.querySelector('.chat-content');

sendButton.addEventListener('click', function () {
    const message = userMessage.value.trim();
    if (message) {
        
        addMessageToChat('user', message);

        userMessage.value = '';

        setTimeout(() => {
            const botResponse = getBotResponse(message);
            addMessageToChat('bot', botResponse);
        }, 500);
    }
});


function addMessageToChat(sender, message) {
    const newMessage = document.createElement('p');
    newMessage.textContent = message;
    newMessage.classList.add(sender);  
    chatContent.appendChild(newMessage);
    chatContent.scrollTop = chatContent.scrollHeight;  
}


function getBotResponse(message) {
    
    const lowerCaseMessage = message.toLowerCase();
    
    if (lowerCaseMessage.includes('halo')) {
        return 'Halo! Ada yang bisa saya bantu?';
    } else if (lowerCaseMessage.includes('harga')) {
        return 'Harga layanan kami tergantung kebutuhan. Silakan kirim detail lebih lanjut!';
    } else if (lowerCaseMessage.includes('terima kasih')) {
        return 'Sama-sama! Jika ada pertanyaan lain, jangan ragu untuk bertanya.';
    } else {
        return 'Maaf, saya tidak mengerti. Bisa ulangi pertanyaannya?';
    }
}


let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            header.style.top = '-100px';
        } else {
            header.style.top = '0';
        }

        lastScrollTop = scrollTop;
    });

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
    
        let name = document.getElementById('name').value;
        let business = document.getElementById('business').value;
        let website = document.getElementById('website').value;
    
        let message = `Halo, saya ${name}. Saya memiliki usaha di bidang ${business}. Website perusahaan saya adalah ${website}.`;
    
        let whatsappMessage = encodeURIComponent(message);
    
        let whatsappURL = `https://wa.me/6281373072520?text=${whatsappMessage}`; 

        window.open(whatsappURL, '_blank');
    });

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const faqItem = question.parentElement; // Ambil elemen faq-item
    
            // Toggle visibility of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                faqItem.classList.remove('active'); // Hapus kelas aktif
            } else {
                answer.style.display = 'block';
                faqItem.classList.add('active'); // Tambahkan kelas aktif
            }
        });
    });
    