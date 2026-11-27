document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                successMessage.textContent = '⚠️ Please fill in all fields before sending.';
                successMessage.style.color = '#d9534f';
            } else if (!email.includes('@') || !email.includes('.')) {
                successMessage.textContent = '⚠️ Please enter a valid email address.';
                successMessage.style.color = '#d9534f';
            } else {
                successMessage.textContent = '✅ Thank you, ' + name + '! Your message has been sent.';
                successMessage.style.color = '#0b2e1d';
                form.reset(); 
            }
        });
    }

    const socialLinks = document.querySelectorAll('.socials a');
    
    const urls = [
        "https://www.facebook.com/groups/770404523905806/permalink/2080714689541443/?mibextid=rS40aB7S9Ucbxw6v",
        "https://vm.tiktok.com/ZS9Pbhw8RcBwd-OeI8R/",
        "https://www.instagram.com/chuka_university_rover_scouts?jplx=Zm4wcDlpYW1hazBtS",
        "https://whatsapp.com/channel/0029VbBtcKr4CrfnZjdCju3L"
    ];
    socialLinks.forEach(function(link, index) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            window.open(urls[index], '_blank'); 
        });
    });

});