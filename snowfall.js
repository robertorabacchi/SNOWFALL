/**
 * Snowfall Bookmarklet - Traditional Snow (❄)
 * Make it snow on ANY website!
 * 
 * Usage: Drag the bookmarklet button to your bookmarks bar
 * Click it on any page to make it snow!
 */

(function() {
  // Check if snow already exists
  if (document.getElementById('titan-snow-effect')) {
    // Remove existing snow
    document.getElementById('titan-snow-effect').remove();
    document.getElementById('titan-snow-styles').remove();
    return;
  }

  // Add CSS styles
  const style = document.createElement('style');
  style.id = 'titan-snow-styles';
  style.textContent = `
    #titan-snow-effect {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999999;
      overflow: hidden;
    }
    
    .titan-snowflake {
      position: absolute;
      top: -10%;
      font-size: 1.5rem;
      color: #fff;
      opacity: 0.8;
      user-select: none;
      animation: titan-snowfall linear infinite;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
      will-change: transform, opacity;
      transform: translateZ(0);
    }
    
    @keyframes titan-snowfall {
      0% {
        transform: translateY(0) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.8;
      }
      90% {
        opacity: 0.8;
      }
      100% {
        transform: translateY(110vh) translateX(100px) rotate(360deg);
        opacity: 0;
      }
    }
    
    @media (max-width: 768px) {
      .titan-snowflake {
        font-size: 1.2rem;
      }
    }
  `;
  document.head.appendChild(style);

  // Create snow container
  const container = document.createElement('div');
  container.id = 'titan-snow-effect';
  
  // Generate 100 snowflakes
  for (let i = 0; i < 100; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'titan-snowflake';
    snowflake.textContent = '❄';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDelay = Math.random() * 10 + 's';
    snowflake.style.animationDuration = (6 + Math.random() * 6) + 's';
    container.appendChild(snowflake);
  }
  
  document.body.appendChild(container);
  
  // Show notification
  const notification = document.createElement('div');
  notification.textContent = '❄️ Snow activated! Click again to stop.';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    z-index: 9999999;
    animation: titan-fade-in 0.3s ease-out;
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transition = 'opacity 0.3s';
    notification.style.opacity = '0';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
})();
