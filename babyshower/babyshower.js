document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('acceptCookies');
  const rejectBtn = document.getElementById('rejectCookies');

  // Use localStorage for persistent consent
  const cookieConsent = localStorage.getItem('cookieConsent');

  // Show banner if no consent decision yet
  if (!cookieConsent) {
    cookieBanner.classList.remove('hidden');
  }

  // Accept button
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.add('hidden');
    // You could enable analytics, etc., here
  });

  // Reject button
  rejectBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'rejected');
    cookieBanner.classList.add('hidden');
    // Optionally disable cookies/trackers here
  });
});
