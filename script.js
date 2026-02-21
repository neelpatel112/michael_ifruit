class MichaelPhone {
    constructor() {
        this.currentScreen = 'home';
        this.currentChat = null;
        this.messages = {
            'Jimmy': [
                { text: 'Dad, can I borrow the car?', sent: false, time: '10:30 AM' },
                { text: 'No, get a job.', sent: true, time: '10:31 AM' },
                { text: 'But dad! Everyone else has one!', sent: false, time: '10:32 AM' }
            ],
            'Amanda': [
                { text: 'Don\'t forget dinner tonight', sent: false, time: '9:00 AM' },
                { text: 'I remember', sent: true, time: '9:05 AM' }
            ],
            'Tracey': [
                { text: 'Dad, I need money for fame', sent: false, time: 'Yesterday' },
                { text: 'Get a real job', sent: true, time: 'Yesterday' }
            ],
            'Lester': [
                { text: 'Got a new job for you', sent: false, time: '2 days ago' },
                { text: 'I\'m listening...', sent: true, time: '2 days ago' }
            ]
        };
        
        this.contacts = [
            { name: 'Amanda', relationship: 'Wife', initial: 'A' },
            { name: 'Jimmy', relationship: 'Son', initial: 'J' },
            { name: 'Tracey', relationship: 'Daughter', initial: 'T' },
            { name: 'Lester Crest', relationship: 'Associate', initial: 'L' },
            { name: 'Trevor Philips', relationship: 'Old Friend', initial: 'T' },
            { name: 'Franklin Clinton', relationship: 'Partner', initial: 'F' },
            { name: 'Dave Norton', relationship: 'Contact', initial: 'D' },
            { name: 'Solomon', relationship: 'Director', initial: 'S' }
        ];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderContacts();
        this.renderConversations();
        this.updateTime();
        window.phone = this; // Make globally accessible
    }
    
    setupEventListeners() {
        // App icons click
        document.querySelectorAll('.app-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const app = e.currentTarget.dataset.app;
                this.openApp(app);
            });
        });
        
        // Home button
        document.getElementById('homeButton').addEventListener('click', () => {
            this.goHome();
        });
    }
    
    openApp(appName) {
        switch(appName) {
            case 'contacts':
                this.showScreen('contactsScreen');
                break;
            case 'messages':
                this.showScreen('messagesScreen');
                break;
            case 'phone':
                this.showScreen('phoneApp');
                break;
            case 'internet':
                this.showScreen('internetApp');
                break;
            case 'camera':
                alert('📷 Camera app - Take photos like a movie director!');
                break;
            case 'photos':
                alert('🖼️ Photos - All your Snapmatic memories');
                break;
            case 'snapmatic':
                alert('📸 Snapmatic - Share your best shots!');
                break;
            case 'maps':
                alert('🗺️ Maps - Where to? Los Santos?');
                break;
            case 'music':
                alert('🎵 Music - Time to listen to some Vinewood hits');
                break;
            case 'clock':
                alert('⏰ Clock - Don\'t be late for the heist!');
                break;
            case 'mail':
                alert('✉️ Mail - Check your emails');
                break;
            case 'settings':
                alert('⚙️ Settings - Change your wallpaper (more Michael?)');
                break;
            default:
                alert(`${appName} app opening...`);
        }
    }
    
    showScreen(screenId) {
        // Hide all app screens
        document.querySelectorAll('.app-screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show selected screen
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
        }
        
        // Hide home screen
        document.getElementById('homeScreen').style.display = 'none';
    }
    
    goHome() {
        document.querySelectorAll('.app-screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById('homeScreen').style.display = 'flex';
        this.currentScreen = 'home';
    }
    
    renderContacts() {
        const contactsList = document.getElementById('contactsList');
        if (!contactsList) return;
        
        contactsList.innerHTML = this.contacts.map(contact => `
            <div class="contact-item" onclick="phone.showChat('${contact.name}')">
                <div class="contact-avatar">${contact.initial}</div>
                <div class="contact-info">
                    <h3>${contact.name}</h3>
                    <p>${contact.relationship}</p>
                </div>
            </div>
        `).join('');
    }
    
    renderConversations() {
        const conversationsList = document.getElementById('conversationsList');
        if (!conversationsList) return;
        
        const conversations = Object.keys(this.messages).map(contact => {
            const lastMsg = this.messages[contact][this.messages[contact].length - 1];
            return {
                name: contact,
                lastMessage: lastMsg.text,
                time: lastMsg.time,
                initial: contact[0]
            };
        });
        
        conversationsList.innerHTML = conversations.map(conv => `
            <div class="conversation-item" onclick="phone.showChat('${conv.name}')">
                <div class="conversation-avatar">${conv.initial}</div>
                <div class="conversation-details">
                    <div class="conversation-header">
                        <span class="conversation-name">${conv.name}</span>
                        <span class="conversation-time">${conv.time}</span>
                    </div>
                    <div class="conversation-preview">${conv.lastMessage}</div>
                </div>
            </div>
        `).join('');
    }
    
    showChat(contactName) {
        this.currentChat = contactName;
        document.getElementById('chatContactName').textContent = contactName;
        
        const chatMessages = document.getElementById('chatMessages');
        const messages = this.messages[contactName] || [];
        
        chatMessages.innerHTML = messages.map(msg => `
            <div class="message ${msg.sent ? 'sent' : 'received'}">
                ${msg.text}
                <div style="font-size: 10px; opacity: 0.7; margin-top: 5px;">${msg.time}</div>
            </div>
        `).join('');
        
        // Hide messages screen and show chat
        document.getElementById('messagesScreen').classList.remove('active');
        document.getElementById('chatScreen').classList.add('active');
    }
    
    showMessages() {
        document.getElementById('chatScreen').classList.remove('active');
        document.getElementById('messagesScreen').classList.add('active');
    }
    
    sendMessage() {
        const input = document.getElementById('messageInput');
        const messageText = input.value.trim();
        
        if (messageText && this.currentChat) {
            const time = new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            
            // Add message
            const newMessage = {
                text: messageText,
                sent: true,
                time: time
            };
            
            if (!this.messages[this.currentChat]) {
                this.messages[this.currentChat] = [];
            }
            
            this.messages[this.currentChat].push(newMessage);
            
            // Update chat display
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.innerHTML += `
                <div class="message sent">
                    ${messageText}
                    <div style="font-size: 10px; opacity: 0.7; margin-top: 5px;">${time}</div>
                </div>
            `;
            
            input.value = '';
            
            // Auto response from family members
            if (this.currentChat === 'Jimmy' || this.currentChat === 'Amanda' || this.currentChat === 'Tracey') {
                setTimeout(() => {
                    this.autoReply(this.currentChat);
                }, 2000);
            }
        }
    }
    
    autoReply(contact) {
        const replies = {
            'Jimmy': ['Come on dad!', 'You never let me do anything!', 'Fine, I\'ll ask mom'],
            'Amanda': ['Don\'t start with me Michael', 'We need to talk later', 'Fine...'],
            'Tracey': ['Dad!', 'I\'m serious about fame!', 'Whatever']
        };
        
        const replyOptions = replies[contact] || ['Okay', 'Talk later'];
        const reply = replyOptions[Math.floor(Math.random() * replyOptions.length)];
        
        const time = new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        this.messages[contact].push({
            text: reply,
            sent: false,
            time: time
        });
        
        const chatMessages = document.getElementById('chatMessages');
        chatMessages.innerHTML += `
            <div class="message received">
                ${reply}
                <div style="font-size: 10px; opacity: 0.7; margin-top: 5px;">${time}</div>
            </div>
        `;
    }
    
    updateTime() {
        setInterval(() => {
            const time = new Date().toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            document.querySelectorAll('.time').forEach(el => {
                el.textContent = time;
            });
        }, 1000);
    }
}

// Initialize phone when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MichaelPhone();
}); 