const pwaInstallContainer = document.querySelector('.pwa-install-container');

// Implement custom install flow
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile.
  e.preventDefault();
  // Stash the event so it can be triggered later.
  window.deferredPrompt = e;

  // Update UI notify the user they can install the PWA
  if (pwaInstallContainer) {
    pwaInstallContainer.classList.remove('hidden');
  }
});

const handlePWAInstall = () => {
  const pwaInstallBtn = document.querySelector('.pwa-install-container > .btn');

  pwaInstallBtn.addEventListener('click', async (e) => {
    // disable the button, so it can't be called twice
    e.currentTarget.setAttribute('disabled', 'disabled');

    if (!window.deferredPrompt) {
      pwaInstallContainer.appendChild(
        document.createTextNode('The deferred prompt is not available.'),
      );

      return false;
    }

    // Show the install prompt.
    window.deferredPrompt.prompt();
    const result = await window.deferredPrompt.userChoice;

    // enable the button again
    pwaInstallBtn.removeAttribute('disabled');

    if (result.outcome === 'accepted') {
      window.deferredPrompt = null;
      // Hide the install button.
      pwaInstallContainer.classList.add('hidden');
    }

    return true;
  });
};

export default handlePWAInstall;