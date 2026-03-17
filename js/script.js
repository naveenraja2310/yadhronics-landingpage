// ===== js/script.js =====
document.addEventListener('DOMContentLoaded', function () {

    // ── Mobile menu toggle ──────────────────────────────────────────────
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
        // Close menu on outside click
        document.addEventListener('click', function (e) {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // ── Smooth scroll for anchor links ─────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ── Fade-up on scroll ───────────────────────────────────────────────
    const faders = document.querySelectorAll('.fade-up');
    const appearOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };
    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeUp 0.8s forwards';
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

    // ── Enquiry / Contact form via EmailJS ──────────────────────────────
    // EmailJS Public Key & IDs — update these after setting up your EmailJS account
    // Service ID  : your EmailJS service ID  (e.g. "service_xxxxxxx")
    // Template ID : your EmailJS template ID (e.g. "template_xxxxxxx")
    // Public Key  : your EmailJS public key  (e.g. "xxxxxxxxxxxxxxxx")
    //
    // Template variables used: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
    // Make sure your EmailJS template sends TO: yadhronics.edukid@gmail.com

    const EMAILJS_PUBLIC_KEY  = 'IXMvPIlLOmOjM2XLB';   // ← replace
    const EMAILJS_SERVICE_ID  = 'service_2onr5jy';   // ← replace
    const EMAILJS_TEMPLATE_ID = 'template_qemm0tk';  // ← replace

    const enquiryForm = document.getElementById('enquiryForm');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn   = document.getElementById('submitBtn');
            const successMsg  = document.getElementById('formSuccess');
            const errorMsg    = document.getElementById('formError');

            submitBtn.disabled    = true;
            submitBtn.textContent = 'Sending…';
            if (successMsg) successMsg.style.display = 'none';
            if (errorMsg)   errorMsg.style.display   = 'none';

            const templateParams = {
                from_name  : document.getElementById('fname').value.trim(),
                from_email : document.getElementById('femail').value.trim(),
                from_phone : '+91 ' + document.getElementById('fphone').value.trim(),
                subject    : document.getElementById('fsubject').value,
                message    : document.getElementById('fmessage').value.trim(),
                to_email   : 'yadhronics.edukid@gmail.com'
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
                .then(function () {
                    if (successMsg) successMsg.style.display = 'block';
                    enquiryForm.reset();
                    submitBtn.disabled    = false;
                    submitBtn.textContent = 'Submit Enquiry';
                })
                .catch(function (err) {
                    console.error('EmailJS error:', err);
                    if (errorMsg) {
                        errorMsg.textContent = 'Oops! Something went wrong. Please try again or email us directly.';
                        errorMsg.style.display = 'block';
                    }
                    submitBtn.disabled    = false;
                    submitBtn.textContent = 'Submit Enquiry';
                });
        });
    }
});
