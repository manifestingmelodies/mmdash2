// Chat message data - testimonials from real people
const chatMessages = [
  { user: "Maria J.", content: "The melody helped me manifest $1,000 last night! Found a forgotten check in my drawer!", time: "Just now", avatar: "#9370DB", likes: 5 },
  { user: "Jason T.", content: "Day 9 - already seeing amazing results! My business is up 27% this month", time: "1m ago", avatar: "#8A2BE2", likes: 3 },
  { user: "Debbie K.", content: "First night without seeing 3AM in 15 years after listening to this melody!", time: "3m ago", avatar: "#6A0DAD" },
  { user: "Thomas W.", content: "Lost 3 pounds this week just by listening to the melody daily!", time: "4m ago", avatar: "#BA55D3" },
  { user: "Jennifer S.", content: "Dropped two dress sizes without trying! This actually works people!", time: "5m ago", avatar: "#9932CC", likes: 8 },
  { user: "Wesley V.", content: "Generated a million-dollar idea on day 7. Already started implementing!", time: "6m ago", avatar: "#8B008B" },
  { user: "Elizabeth K.", content: "My blood pressure is down 15 points in just 5 days of listening!", time: "8m ago", avatar: "#800080" },
  { user: "Jason M.", content: "Found forgotten $27,840 check in an old box after day 5!", time: "11m ago", avatar: "#4B0082", likes: 12 }
];

// More messages that can be dynamically added
const additionalMessages = [
  { user: "Greg L.", content: "Day 21 complete! Got a $5,430 unexpected refund today!", avatar: "#9370DB" },
  { user: "Tom K.", content: "Anyone notice improved relationship with spouse after using this?", avatar: "#8A2BE2" },
  { user: "Angela T.", content: "@Tom - Yes! It's like we're dating again after 15 years of marriage!", avatar: "#6A0DAD" },
  { user: "Olivia M.", content: "Just logged week 3 results. Found two new clients worth $2,800 monthly!", avatar: "#BA55D3" },
  { user: "Paul M.", content: "Make sure to play the melody with headphones for best results.", avatar: "#9932CC" },
  { user: "Sarah K.", content: "Just referred my sister. This is too good not to share!", avatar: "#8B008B" },
  { user: "Ryan D.", content: "Morning everyone! Day 5 and already feeling the difference in my mood!", avatar: "#800080" },
  { user: "William T.", content: "Blood sugar down 42 points since starting. Doctor is amazed!", avatar: "#4B0082" },
  { user: "Laura M.", content: "I've tried everything for sleep. This is the ONLY thing that's worked!", avatar: "#9370DB" },
  { user: "Michael C.", content: "Business idea at 4:37am exactly like the testimonial said. Weird!", avatar: "#8A2BE2" },
  { user: "Jessica R.", content: "I feel so much lighter and happier after just 3 days of listening!", avatar: "#6A0DAD" },
  { user: "Daniel H.", content: "Found a forgotten $1,200 check in my drawer yesterday. This actually works!", avatar: "#BA55D3" },
  { user: "Karen L.", content: "Dropped 3 dress sizes without even trying! This is amazing!", avatar: "#9932CC" },
  { user: "Robert A.", content: "My business is up 34% since I started listening last month!", avatar: "#8B008B" },
  { user: "Sophia W.", content: "First night without seeing 3AM in 15 years. Thank you!", avatar: "#800080" }
];

// Activity data for the Melody player
const activityData = [
  "Karen just played 60-Second Melody",
  "Ron just played 60-Second Melody",
  "Michelle just played 60-Second Melody",
  "James just played 60-Second Melody",
  "David just played 60-Second Melody",
  "Susan just played 60-Second Melody",
  "Mark just played 60-Second Melody",
  "Lisa just played 60-Second Melody",
  "Steven just played 60-Second Melody",
  "Amy just played 60-Second Melody",
  "Brian just played 60-Second Melody",
  "Jennifer just played 60-Second Melody",
  "Thomas just played 60-Second Melody",
  "Linda just played 60-Second Melody",
  "John just played 60-Second Melody"
];

// Create a chat message element
function createChatMessage(message) {
  const chatMessage = document.createElement('div');
  chatMessage.className = 'chat-message';
  
  // Create avatar
  const avatar = document.createElement('div');
  avatar.className = 'chat-avatar';
  avatar.style.backgroundColor = message.avatar;
  avatar.textContent = message.user.charAt(0);
  
  // Create message bubble
  const bubble = document.createElement('div');
  bubble.className = 'chat-bubble';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'chat-header-info';
  
  const username = document.createElement('span');
  username.className = 'chat-username';
  username.textContent = message.user;
  
  const time = document.createElement('span');
  time.className = 'chat-time';
  time.textContent = message.time || 'Just now';
  
  header.appendChild(username);
  header.appendChild(time);
  
  // Create content
  const content = document.createElement('div');
  content.className = 'chat-content';
  content.textContent = message.content;
  
  // Combine elements
  bubble.appendChild(header);
  bubble.appendChild(content);
  
  // Add likes if present
  if (message.likes) {
    const likes = document.createElement('div');
    likes.className = 'chat-likes';
    
    const likesIcon = document.createElement('span');
    likesIcon.className = 'chat-likes-icon';
    likesIcon.textContent = '❤️';
    
    likes.appendChild(likesIcon);
    likes.appendChild(document.createTextNode(` ${message.likes} likes`));
    
    bubble.appendChild(likes);
  }
  
  chatMessage.appendChild(avatar);
  chatMessage.appendChild(bubble);
  
  return chatMessage;
}

// Initialize chat
function initializeChat() {
  const chatContainer = document.getElementById('chat-container');
  if (!chatContainer) return;
  
  // Add initial messages
  chatMessages.forEach(message => {
    chatContainer.appendChild(createChatMessage(message));
  });
  
  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
  
  // Set up interval to add new messages
  setInterval(addNewMessage, Math.random() * 5000 + 3000); // Every 3-8 seconds
}

// Function to add a new message
function addNewMessage() {
  const chatContainer = document.getElementById('chat-container');
  if (!chatContainer) return;
  
  // Get a random message from the additional messages
  const randomIndex = Math.floor(Math.random() * additionalMessages.length);
  const newMessage = { ...additionalMessages[randomIndex], time: 'Just now' };
  
  // Create and add the message element
  const messageElement = createChatMessage(newMessage);
  chatContainer.insertBefore(messageElement, chatContainer.firstChild);
  
  // Update time on other messages
  Array.from(chatContainer.querySelectorAll('.chat-time')).forEach((timeElement, index) => {
    if (index === 0) return; // Skip the new message
    
    const prevText = timeElement.textContent;
    if (prevText === 'Just now') {
      timeElement.textContent = '1m ago';
    } else {
      const matches = prevText.match(/(\d+)m/);
      if (matches && matches[1]) {
        const newTime = parseInt(matches[1]) + 1;
        timeElement.textContent = `${newTime}m ago`;
      }
    }
  });
  
  // Remove oldest message if there are too many
  if (chatContainer.children.length > 8) {
    chatContainer.removeChild(chatContainer.lastChild);
  }
}

// Update time display
function updateTimeDisplay() {
  const timeElement = document.getElementById('current-time');
  if (!timeElement) return;
  
  let time = timeElement.textContent;
  let [minutes, seconds] = time.split(':').map(part => parseInt(part, 10));
  
  seconds = (seconds + 1) % 60;
  if (seconds === 0) {
    minutes = (minutes + 1) % 1;
  }
  
  timeElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Update listener counts
function updateListenerCounts() {
  // Update main listener count - make it more dynamic with bigger changes
  const activeListeners = document.getElementById('active-listeners');
  if (activeListeners) {
    const currentCount = parseInt(activeListeners.textContent.replace(/,/g, ''));
    if (!isNaN(currentCount)) {
      // Occasionally make a bigger jump to create FOMO
      let change;
      if (Math.random() > 0.9) {
        // Bigger jump 10% of the time
        change = Math.floor(Math.random() * 20) - 5;
      } else {
        // Normal smaller changes
        change = Math.floor(Math.random() * 7) - 2;
      }
      const newCount = Math.max(1000, currentCount + change).toLocaleString();
      activeListeners.textContent = newCount;
    }
  }
  
  // Update online members count
  const onlineMembers = document.getElementById('online-members');
  if (onlineMembers) {
    const currentCount = parseInt(onlineMembers.textContent);
    if (!isNaN(currentCount)) {
      // Occasionally make a bigger jump
      let change;
      if (Math.random() > 0.85) {
        // Bigger jump 15% of the time
        change = Math.floor(Math.random() * 8) - 2;
      } else {
        // Normal smaller changes
        change = Math.floor(Math.random() * 3) - 1;
      }
      const newCount = Math.max(200, currentCount + change);
      onlineMembers.textContent = newCount;
    }
  }
}

// Update activity feed
function updateActivityFeed() {
  const activityFeed = document.getElementById('live-activity');
  if (!activityFeed) return;
  
  // Get a random activity
  const randomIndex = Math.floor(Math.random() * activityData.length);
  const activity = activityData[randomIndex];
  
  // Create new element
  const activityItem = document.createElement('div');
  activityItem.className = 'activity-item';
  activityItem.textContent = activity;
  
  // Add to feed
  activityFeed.innerHTML = '';
  activityFeed.appendChild(activityItem);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Initialize chat
  initializeChat();
  
  // Start time updates
  setInterval(updateTimeDisplay, 1000);
  
  // Start listener count updates
  setInterval(updateListenerCounts, 3000);
  
  // Start activity feed updates
  setInterval(updateActivityFeed, 4000);
  
  // Add periodic animation to the chat box to draw attention
  const chatPanel = document.querySelector('.chat-panel');
  if (chatPanel) {
    setInterval(() => {
      chatPanel.style.animation = 'highlight 2s';
      setTimeout(() => {
        chatPanel.style.animation = '';
      }, 2000);
    }, 15000); // Every 15 seconds
  }
  
  // Make sure new messages briefly highlight
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach((node) => {
          if (node.classList && node.classList.contains('chat-message')) {
            node.style.animation = 'highlight 2s';
            setTimeout(() => {
              node.style.animation = '';
            }, 2000);
          }
        });
      }
    });
  });
  
  observer.observe(document.getElementById('chat-container'), { childList: true });
});