// Yılbaşı tarihini belirliyoruz
const targetDate = new Date('2025-12-31T23:59:59').getTime();

// Geri sayımı başlatan fonksiyon
function startCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        showCelebration();
    }
}

// Kutlama mesajını ve konfeti animasyonunu gösteren fonksiyon
function showCelebration() {
    document.getElementById("countdown").style.display = 'none';
    document.getElementById("message").style.display = 'block';

    // Konfeti efekti: küçük bir animasyon (basit şekilde)
    const confetti = document.getElementById("confetti");
    confetti.style.animation = "confetti 3s ease-in-out forwards";
}

// Geri sayımı her saniye güncelliyoruz
const countdownInterval = setInterval(startCountdown, 1000);
