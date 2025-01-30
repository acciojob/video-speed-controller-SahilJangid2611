 // Get video element and other controls
    const video = document.getElementById('video');
    const playerButton = document.getElementById('player__button');
    const progressBar = document.getElementById('progress');
    const progressFilled = document.getElementById('progress__filled');
    const volumeControl = document.getElementById('volume');
    const playbackSpeedControl = document.getElementById('playbackSpeed');
    const rewindButton = document.getElementById('rewind');
    const skipButton = document.getElementById('skip');

    // JS Skeleton: Input event listener for volume and playback speed
    const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      if (this.name === 'volume') {
        video.volume = this.value;
      } else if (this.name === 'playback-speed') {
        video.playbackRate = this.value;
      }
    }

    // Add event listeners for inputs
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

    // Toggle between play and pause
    playerButton.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        playerButton.textContent = '❚ ❚'; // Change to pause symbol
      } else {
        video.pause();
        playerButton.textContent = '►'; // Change to play symbol
      }
    });

    // Update the progress bar as the video plays
    video.addEventListener('timeupdate', () => {
      const progress = (video.currentTime / video.duration) * 100;
      progressFilled.style.width = `${progress}%`;
    });

    // Click on the progress bar to seek the video
    progressBar.addEventListener('click', (e) => {
      const progressBarWidth = progressBar.offsetWidth;
      const clickPosition = e.offsetX;
      const seekTime = (clickPosition / progressBarWidth) * video.duration;
      video.currentTime = seekTime;
    });

    // Rewind 10 seconds
    rewindButton.addEventListener('click', () => {
      video.currentTime -= 10;
    });

    // Skip 25 seconds
    skipButton.addEventListener('click', () => {
      video.currentTime += 25;
    });