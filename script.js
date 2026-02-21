class MichaelPhone {
    constructor() {
        this.currentScreen = 'home';
        this.currentChat = null;
        this.browserHistory = ['eyefind'];
        this.browserIndex = 0;
        
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
        
        // Website database with all GTA V sites
        this.websites = {
            'eyefind': {
                title: 'EyeFind - Search Engine',
                content: 'homepage'
            },
            'lifeinvader': {
                title: 'Lifeinvader - Connect with Friends',
                content: `
                    <div class="website-page lifeinvader-page">
                        <div class="lifeinvader-header">
                            <h1>📱 Lifeinvader</h1>
                            <div>Michael De Santa</div>
                        </div>
                        <div class="lifeinvader-posts">
                            <div class="lifeinvader-post">
                                <strong>Jimmy De Santa</strong>
                                <p>Anyone want to play video games?</p>
                                <small>2 hours ago</small>
                            </div>
                            <div class="lifeinvader-post">
                                <strong>Tracey De Santa</strong>
                                <p>Check out my new audition tape! #Fame</p>
                                <small>5 hours ago</small>
                            </div>
                            <div class="lifeinvader-post">
                                <strong>Lester Crest</strong>
                                <p>Got a new heist planned. Discreet inquiries only.</p>
                                <small>1 day ago</small>
                            </div>
                            <div class="lifeinvader-post">
                                <strong>Franklin Clinton</strong>
                                <p>New whip! 🚗</p>
                                <small>2 days ago</small>
                            </div>
                        </div>
                    </div>
                `
            },
            'warstock': {
                title: 'Warstock Cache & Carry - Military Hardware',
                content: `
                    <div class="website-page warstock-page">
                        <h1>⚔️ WARSTOCK</h1>
                        <p>Cache & Carry</p>
                        
                        <div class="warstock-item">
                            <h3>Rhino Tank</h3>
                            <p>Military grade armored vehicle</p>
                            <div class="price">$3,000,000</div>
                            <button class="buy-btn" onclick="alert('Out of stock! Try again later.')">BUY NOW</button>
                        </div>
                        
                        <div class="warstock-item">
                            <h3>Buzzard Attack Chopper</h3>
                            <p>Rapid deployment helicopter</p>
                            <div class="price">$1,750,000</div>
                            <button class="buy-btn" onclick="alert('Need Lester\'s approval first!')">BUY NOW</button>
                        </div>
                        
                        <div class="warstock-item">
                            <h3>APC</h3>
                            <p>All terrain vehicle</p>
                            <div class="price">$2,200,000</div>
                            <button class="buy-btn" onclick="alert('Special order only')">BUY NOW</button>
                        </div>
                        
                        <div class="warstock-item">
                            <h3>Combat MG</h3>
                            <p>Fully automatic weapon</p>
                            <div class="price">$4,500</div>
                            <button class="buy-btn" onclick="alert('Need weapon license')">BUY NOW</button>
                        </div>
                    </div>
                `
            },
            'fleeca': {
                title: 'Fleeca Bank - Secure Banking',
                content: `
                    <div class="website-page fleeca-page">
                        <h1>🏦 FLEECA BANK</h1>
                        <p>Your trusted financial partner</p>
                        
                        <div class="account-balance">
                            Account: $4,200,000
                        </div>
                        
                        <div class="account-actions">
                            <button class="action-btn" onclick="alert('Transferring funds...')">Transfer</button>
                            <button class="action-btn" onclick="alert('Paying bills...')">Pay Bills</button>
                            <button class="action-btn" onclick="alert('Opening vault... Access denied')">Open Vault</button>
                        </div>
                        
                        <div class="recent-transactions">
                            <h3>Recent Transactions</h3>
                            <p>- Withdrawal: $500 (Jimmy)</p>
                            <p>- Deposit: $50,000 (Unknown)</p>
                            <p>- Transfer: $2,000 (Amanda)</p>
                        </div>
                        
                        <p style="margin-top:20px; color:#ffd700;">⚠️ Secure vault: 4 guards on duty</p>
                    </div>
                `
            },
            'poleposition': {
                title: 'Pole Position Club',
                content: `
                    <div class="website-page poleposition-page">
                        <h1>💃 POLE POSITION</h1>
                        <h2>Los Santos' Finest Entertainment</h2>
                        
                        <div class="featured-dancer">
                            <h3>Tonight's Featured Performance</h3>
                            <p>✧ DIAMOND ✧</p>
                            <p>9PM - 2AM</p>
                        </div>
                        
                        <div class="specials">
                            <h3>Happy Hour</h3>
                            <p>$5 Drinks until 8PM</p>
                            <p>VIP Booths Available</p>
                        </div>
                        
                        <button class="buy-btn" onclick="alert('Welcome to Pole Position! Michael wouldnt approve...')">Book VIP</button>
                        <p style="margin-top:20px;">*Must be 21+</p>
                    </div>
                `
            },
            'bawsaq': {
                title: 'BAWSAQ - Stock Exchange',
                content: `
                    <div class="website-page bawsaq-page">
                        <h1>📈 BAWSAQ</h1>
                        <p>Global Markets</p>
                        
                        <div class="stock-table">
                            <div class="stock-row">
                                <span>Ammu-Nation</span>
                                <span class="stock-up">▲ +2.4%</span>
                            </div>
                            <div class="stock-row">
                                <span>Cluckin' Bell</span>
                                <span class="stock-down">▼ -1.2%</span>
                            </div>
                            <div class="stock-row">
                                <span>FlyUS</span>
                                <span class="stock-up">▲ +5.7%</span>
                            </div>
                            <div class="stock-row">
                                <span>Gruppe Sechs</span>
                                <span class="stock-down">▼ -3.1%</span>
                            </div>
                            <div class="stock-row">
                                <span>Lifeinvader</span>
                                <span class="stock-up">▲ +8.3%</span>
                            </div>
                            <div class="stock-row">
                                <span>Maze Bank</span>
                                <span class="stock-up">▲ +1.8%</span>
                            </div>
                        </div>
                        
                        <div style="margin-top:20px;">
                            <p>Your Portfolio: $847,000</p>
                            <p>Today's Gain: +$12,400</p>
                        </div>
                    </div>
                `
            },
            'lcn': {
                title: 'LCN - Liberty City National',
                content: `
                    <div class="website-page lcn-page">
                        <h1>📊 LCN Exchange</h1>
                        <p>Liberty City National</p>
                        
                        <div class="stock-table">
                            <div class="stock-row">
                                <span>Liberty City Transit</span>
                                <span class="stock-down">▼ -0.8%</span>
                            </div>
                            <div class="stock-row">
                                <span>Piswasser</span>
                                <span class="stock-up">▲ +3.2%</span>
                            </div>
                            <div class="stock-row">
                                <span>Raine Insurance</span>
                                <span class="stock-up">▲ +6.1%</span>
                            </div>
                            <div class="stock-row">
                                <span>Vapid Motors</span>
                                <span class="stock-down">▼ -2.4%</span>
                            </div>
                        </div>
                        
                        <p>Market Status: Open</p>
                        <p>Volume: 2.4M shares</p>
                    </div>
                `
            },
            'weasel': {
                title: 'Weasel News - Breaking News',
                content: `
                    <div class="website-page weasel-page">
                        <div class="weasel-header">
                            <h1>📰 WEASEL NEWS</h1>
                        </div>
                        
                        <div class="news-article">
                            <h3>BREAKING: Massive Heist in Los Santos</h3>
                            <p>Union Depository targeted by unknown suspects. Police investigating.</p>
                            <small>2 hours ago</small>
                        </div>
                        
                        <div class="news-article">
                            <h3>Celebrity Chef Opens New Restaurant</h3>
                            <p>Vinewood's newest hotspot draws huge crowds.</p>
                            <small>5 hours ago</small>
                        </div>
                        
                        <div class="news-article">
                            <h3>Weather Alert: Heatwave Continues</h3>
                            <p>Temperatures expected to reach 95°F today.</p>
                            <small>1 day ago</small>
                        </div>
                        
                        <div class="news-article">
                            <h3>Mayor's New Initiative</h3>
                            <p>New tourism campaign launches next week.</p>
                            <small>2 days ago</small>
                        </div>
                    </div>
                `
            },
            'supersleep': {
                title: 'Super Sleep - Mattress Store',
                content: `
                    <div class="website-page supersleep-page">
                        <h1>😴 SUPER SLEEP</h1>
                        <p>Dream Better, Live Better</p>
                        
                        <div class="mattress-option">
                            <h3>Cloud Nine Deluxe</h3>
                            <p>Memory foam + cooling gel</p>
                            <p class="price">$899</p>
                            <button onclick="alert('Mattress delivered in 3 days!')">Buy Now</button>
                        </div>
                        
                        <div class="mattress-option">
                            <h3>Executive Dreamer</h3>
                            <p>Firm support, pillow top</p>
                            <p class="price">$1,299</p>
                            <button onclick="alert('Mattress delivered in 3 days!')">Buy Now</button>
                        </div>
                        
                        <div class="mattress-option">
                            <h3>Michael's Choice</h3>
                            <p>Premium luxury collection</p>
                            <p class="price">$2,499</p>
                            <button onclick="alert('Thats more like it! Delivery scheduled.')">Buy Now</button>
                        </div>
                        
                        <p>⭐ 4.5/5 from 12,000+ reviews</p>
                    </div>
                `
            },
            'epsilon': {
                title: 'Epsilon Program - Enlighten Yourself',
                content: `
                    <div class="website-page epsilon-page">
                        <h1>🔺 EPSILON</h1>
                        <h2>Program of Enlightened Minds</h2>
                        
                        <div class="epsilon-text">
                            "Kifflom, Brother-Brother"
                        </div>
                        
                        <div class="epsilon-levels">
                            <h3>Current Level: 3</h3>
                            <p>Donations needed for Level 4: $25,000</p>
                        </div>
                        
                        <button class="join-btn" onclick="alert('Kifflom! Thank you for your donation of $500. Your journey continues.')">
                            DONATE NOW
                        </button>
                        
                        <div class="epsilon-testimonials">
                            <p>"I found myself" - Cris Formage</p>
                            <p>"My aura is aligned" - Happy Member</p>
                        </div>
                        
                        <p style="margin-top:20px;">Join us. Transcend. Kifflom.</p>
                    </div>
                `
            },
            'eyepatch': {
                title: 'EyePatch - Video Sharing',
                content: `
                    <div class="website-page eyepatch-page">
                        <h1>🏴‍☠️ EyePatch</h1>
                        <p>Watch millions of videos</p>
                        
                        <div class="video-grid">
                            <div class="video-thumb">🎥 Heist Gone Wrong</div>
                            <div class="video-thumb">🎥 Vinewood Tour</div>
                            <div class="video-thumb">🎥 Car Meet 2025</div>
                            <div class="video-thumb">🎥 Funny Animals</div>
                        </div>
                        
                        <div class="trending">
                            <h3>Trending Now</h3>
                            <p>1. Police Chase in LS</p>
                            <p>2. New DLC Leak?</p>
                            <p>3. 10M Subscriber Special</p>
                        </div>
                    </div>
                `
            },
            'suspect': {
                title: 'Suspect Security - Home Protection',
                content: `
                    <div class="website-page suspect-page">
                        <h1>🔒 SUSPECT SECURITY</h1>
                        <p>We Never Sleep. Neither Should Your Security.</p>
                        
                        <div class="security-cam">
                            📹 ROCKFORD HILLS - All Clear
                        </div>
                        
                        <div class="security-cam">
                            📹 VINEWOOD - Motion Detected
                        </div>
                        
                        <div class="security-cam">
                            📹 MORNINGWOOD - Secure
                        </div>
                        
                        <h3>Your Systems</h3>
                        <p>✓ Alarm: Armed</p>
                        <p>✓ Cameras: Online (4)</p>
                        <p>✓ Motion Sensors: Active</p>
                        
                        <button onclick="alert('Police dispatched to your location! (Just kidding)')">
                            Emergency Alert
                        </button>
                    </div>
                `
            },
            'tongue': {
                title: 'Tongue - Dating App',
                content: `
                    <div class="website-page tongue-page">
                        <div class="tongue-header">👅 TONGUE</div>
                        <h2>Find Your Match</h2>
                        
                        <div class="matches">
                            <p>🔥 47 people near you</p>
                            <p>💕 3 mutual likes</p>
                            <p>⭐ 2 super likes</p>
                        </div>
                        
                        <div class="profile-card">
                            <h3>Sarah, 28</h3>
                            <p>Loves: Movies, Fitness, Dogs</p>
                            <button onclick="alert('Match request sent!')">👅 Like</button>
                        </div>
                        
                        <div class="profile-card">
                            <h3>Mike, 32</h3>
                            <p>Loves: Cars, Gym, Travel</p>
                            <button onclick="alert('Match request sent!')">👅 Like</button>
                        </div>
                        
                        <p style="margin-top:20px;">Michael would definitely not approve of this app...</p>
                    </div>
                `
            }
        };
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.renderContacts();
        this.renderConversations();
        this.updateTime();
        window.phone = this;
    }
    
    setupEventListeners() {
        document.querySelectorAll('.app-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const app = e.currentTarget.dataset.app;
                this.openApp(app);
            });
        });
        
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
                this.showEyeFind();
                break;
            case 'camera':
                alert('📷 Camera app - Say cheese! Michael style!');
                break;
            case 'photos':
                alert('🖼️ Photos - All your memories in one place');
                break;
            case 'snapmatic':
                alert('📸 Snapmatic - Share your best Vinewood moments!');
                break;
            case 'maps':
                alert('🗺️ Maps - Navigating Los Santos... "Where to, Michael?"');
                break;
            case 'music':
                alert('🎵 Music - Playing: Vinewood Boulevard Radio');
                break;
            case 'clock':
                alert('⏰ Clock - Time for some R&R... or a heist!');
                break;
            case 'mail':
                alert('✉️ Mail - You have 3 unread messages from Lester');
                break;
            case 'settings':
                alert('⚙️ Settings - Change wallpaper? More Michael? Always Michael!');
                break;
            default:
                alert(`${appName} app opening...`);
        }
    }
    
    showScreen(screenId) {
        document.querySelectorAll('.app-screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
        }
        
        document.getElementById('homeScreen').style.display = 'none';
    }
    
    goHome() {
        document.querySelectorAll('.app-screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById('homeScreen').style.display = 'flex';
        this.currentScreen = 'home';
    }
    
    // Browser Functions
    showEyeFind() {
        document.getElementById('eyefindHomepage').style.display = 'block';
        document.getElementById('websiteContainer').innerHTML = '';
        document.getElementById('urlInput').value = 'www.eyefind.info';
        this.browserHistory = ['eyefind'];
        this.browserIndex = 0;
    }
    
    navigateTo(siteKey) {
        if (this.websites[siteKey]) {
            document.getElementById('eyefindHomepage').style.display = 'none';
            document.getElementById('websiteContainer').innerHTML = this.websites[siteKey].content;
            document.getElementById('urlInput').value = `www.${siteKey}.com`;
            
            // Add to history
            this.browserHistory.push(siteKey);
            this.browserIndex = this.browserHistory.length - 1;
        }
    }
    
    handleSearch(event) {
        if (event.key === 'Enter') {
            this.performSearch();
        }
    }
    
    performSearch() {
        const searchTerm = document.getElementById('eyefindSearch').value.toLowerCase().trim();
        
        // Check if search matches any website
        if (searchTerm.includes('lifeinvader') || searchTerm.includes('social')) {
            this.navigateTo('lifeinvader');
        } else if (searchTerm.includes('warstock') || searchTerm.includes('weapon') || searchTerm.includes('gun')) {
            this.navigateTo('warstock');
        } else if (searchTerm.includes('fleeca') || searchTerm.includes('bank')) {
            this.navigateTo('fleeca');
        } else if (searchTerm.includes('pole') || searchTerm.includes('club')) {
            this.navigateTo('poleposition');
        } else if (searchTerm.includes('bawsaq') || searchTerm.includes('stock')) {
            this.navigateTo('bawsaq');
        } else if (searchTerm.includes('lcn') || searchTerm.includes('liberty')) {
            this.navigateTo('lcn');
        } else if (searchTerm.includes('weasel') || searchTerm.includes('news')) {
            this.navigateTo('weasel');
        } else if (searchTerm.includes('sleep') || searchTerm.includes('mattress')) {
            this.navigateTo('supersleep');
        } else if (searchTerm.includes('epsilon') || searchTerm.includes('kifflom')) {
            this.navigateTo('epsilon');
        } else if (searchTerm.includes('eyepatch') || searchTerm.includes('video')) {
            this.navigateTo('eyepatch');
        } else if (searchTerm.includes('suspect') || searchTerm.includes('security')) {
            this.navigateTo('suspect');
        } else if (searchTerm.includes('tongue') || searchTerm.includes('date')) {
            this.navigateTo('tongue');
        } else {
            alert(`No results found for "${searchTerm}". Try one of our featured sites!`);
        }
    }
    
    handleUrlSubmit(event) {
        if (event.key === 'Enter') {
            const url = event.target.value.toLowerCase();
            
            // Check if URL matches any site
            for (let key in this.websites) {
                if (url.includes(key)) {
                    this.navigateTo(key);
                    return;
                }
            }
            
            alert('Website not found! Try: lifeinvader, warstock, fleeca, poleposition, bawsaq, lcn, weasel, supersleep, epsilon, eyepatch, suspect, or tongue');
        }
    }
    
    browserGoBack() {
        if (this.browserIndex > 0) {
            this.browserIndex--;
            const previousSite = this.browserHistory[this.browserIndex];
            this.navigateTo(previousSite);
        } else {
            this.showEyeFind();
        }
    }
    
    refreshBrowser() {
        const currentSite = this.browserHistory[this.browserIndex];
        if (currentSite && currentSite !== 'eyefind') {
            this.navigateTo(currentSite);
        } else {
            this.showEyeFind();
        }
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
            
            const newMessage = {
                text: messageText,
                sent: true,
                time: time
            };
            
            if (!this.messages[this.currentChat]) {
                this.messages[this.currentChat] = [];
            }
            
            this.messages[this.currentChat].push(newMessage);
            
            const chatMessages = document.getElementById('chatMessages');
            chatMessages.innerHTML += `
                <div class="message sent">
                    ${messageText}
                    <div style="font-size: 10px; opacity: 0.7; margin-top: 5px;">${time}</div>
                </div>
            `;
            
            input.value = '';
            
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