window.addEventListener("scroll", () => {
    if (window.scrollY >= 1600) {
        document.querySelector(".first").classList.remove("hidden-box");
        document.querySelector(".first").classList.add("animate-first");

        document.querySelector(".second").classList.remove("hidden-box");
        document.querySelector(".second").classList.add("animate-second");

        document.querySelector(".third").classList.remove("hidden-box");
        document.querySelector(".third").classList.add("animate-third");

        document.querySelector(".fourth").classList.remove("hidden-box");
        document.querySelector(".fourth").classList.add("animate-fourth");

        document.querySelector(".fifth").classList.remove("hidden-box");
        document.querySelector(".fifth").classList.add("animate-fifth");

        document.querySelector(".sixth").classList.remove("hidden-box");
        document.querySelector(".sixth").classList.add("animate-sixth");

        document.querySelector(".seventh").classList.remove("hidden-box");
        document.querySelector(".seventh").classList.add("animate-seventh");

        document.querySelector(".eighth").classList.remove("hidden-box");
        document.querySelector(".eighth").classList.add("animate-eighth");
    }
});

function toggleMenu() {
    const el = document.getElementById("mid-sec");
    if (el) el.classList.toggle("show");
}


const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const statusEl = document.getElementById("form-status");
        const submitBtn = document.getElementById("submit-btn");
        if (!statusEl || !submitBtn) return;

        const name = (contactForm.querySelector('[name="name"]') || {}).value.trim();
        const email = (contactForm.querySelector('[name="email"]') || {}).value.trim();
        const message = (contactForm.querySelector('[name="message"]') || {}).value.trim();

        statusEl.textContent = "";
        statusEl.className = "form-status mb-3";

        if (!name) {
            statusEl.textContent = "Please enter your name.";
            statusEl.className = "form-status mb-3 form-status--error";
            contactForm.querySelector('[name="name"]').focus();
            return;
        }
        if (name.length < 2) {
            statusEl.textContent = "Name must be at least 2 characters.";
            statusEl.className = "form-status mb-3 form-status--error";
            contactForm.querySelector('[name="name"]').focus();
            return;
        }
        if (!email) {
            statusEl.textContent = "Please enter your email.";
            statusEl.className = "form-status mb-3 form-status--error";
            contactForm.querySelector('[name="email"]').focus();
            return;
        }
        if (!message) {
            statusEl.textContent = "Please enter your message.";
            statusEl.className = "form-status mb-3 form-status--error";
            contactForm.querySelector('[name="message"]').focus();
            return;
        }
        if (message.length < 10) {
            statusEl.textContent = "Message must be at least 10 characters.";
            statusEl.className = "form-status mb-3 form-status--error";
            contactForm.querySelector('[name="message"]').focus();
            return;
        }

        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending...";
        statusEl.textContent = "";
        statusEl.className = "form-status mb-3";

        const formData = new FormData(contactForm);
        try {
            const res = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: { Accept: "application/json" },
            });
            const data = await res.json();
            if (data.ok) {
                statusEl.textContent = "Thanks! Your message was sent.";
                statusEl.className = "form-status mb-3 form-status--success";
                contactForm.reset();
            } else {
                statusEl.textContent = data.error || "Something went wrong. Please try again.";
                statusEl.className = "form-status mb-3 form-status--error";
            }
        } catch (err) {
            statusEl.textContent = "Network error. Please check your connection and try again.";
            statusEl.className = "form-status mb-3 form-status--error";
        }
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    });
}
const eduItems = document.querySelectorAll('.edu-item');
const eduObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, i * 180);
        }
    });
}, { threshold: 0.15 });

eduItems.forEach(item => eduObserver.observe(item));