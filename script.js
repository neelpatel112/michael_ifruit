class MichaelPhone {
    constructor() {
        this.currentScreen = 'home';
        this.currentChat = null;
        this.currentPhotoIndex = 0;
        this.totalPhotos = 10;
        
        this.browserHistory = ['eyefind'];
        this.browserIndex = 0;
        
        // Radio state
        this.currentStation = null;
        this.isPlaying = false;
        this.audioElement = null;
        this.currentFilter = 'all';
        
        // Settings state
        this.selectedRingtone = 1; // Default ringtone
        this.selectedWallpaper = 'default'; // Default wallpaper
        this.ringtoneAudio = null;
        
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
        
        // ==================== REAL WORKING RADIO STATIONS ====================
        this.radioStations = [
            // POP Stations
            { 
                id: 'kiis', 
                name: 'KIIS FM Los Angeles', 
                frequency: '102.7 FM', 
                genre: 'pop', 
                icon: '🎤',
                stream: 'https://live.amperwave.net/direct/audacy-kiisfmaac-imc',
                category: 'pop',
                description: 'Today\'s Hit Music'
            },
            { 
                id: 'amp', 
                name: 'Amp Radio', 
                frequency: '97.1 FM', 
                genre: 'pop', 
                icon: '🎤',
                stream: 'https://live.amperwave.net/direct/audacy-kampfmaac-imc',
                category: 'pop',
                description: 'LA\'s Pop Station'
            },
            { 
                id: '1043', 
                name: '104.3 MyFM', 
                frequency: '104.3 FM', 
                genre: 'pop', 
                icon: '🎵',
                stream: 'https://live.amperwave.net/direct/audacy-kbigfmaac-imc',
                category: 'pop',
                description: 'More Music, Less Talk'
            },
            
            // ROCK Stations
            { 
                id: 'kroq', 
                name: 'KROQ', 
                frequency: '106.7 FM', 
                genre: 'rock', 
                icon: '🎸',
                stream: 'https://live.amperwave.net/direct/audacy-kroqfmaac-imc',
                category: 'rock',
                description: 'World Famous KROQ - Alternative Rock'
            },
            { 
                id: 'klos', 
                name: 'KLOS', 
                frequency: '95.5 FM', 
                genre: 'rock', 
                icon: '🎸',
                stream: 'https://live.amperwave.net/direct/merlin-klosfmaac-ibc1',
                category: 'rock',
                description: 'Classic Rock That Rocks'
            },
            { 
                id: 'kearth', 
                name: 'K-EARTH 101', 
                frequency: '101.1 FM', 
                genre: 'rock', 
                icon: '🎸',
                stream: 'https://live.amperwave.net/direct/audacy-krthfmaac-imc',
                category: 'rock',
                description: 'Classic Hits'
            },
            
            // HIP HOP Stations
            { 
                id: 'power106', 
                name: 'Power 106', 
                frequency: '105.9 FM', 
                genre: 'hiphop', 
                icon: '🎧',
                stream: 'https://live.amperwave.net/direct/merlin-kpowfmaac-ibc1',
                category: 'hiphop',
                description: 'LA\'s Hip-Hop & R&B'
            },
            { 
                id: 'realm', 
                name: 'Real 92.3', 
                frequency: '92.3 FM', 
                genre: 'hiphop', 
                icon: '🎧',
                stream: 'https://live.amperwave.net/direct/audacy-krllfmaac-imc',
                category: 'hiphop',
                description: 'Real Hip-Hop'
            },
            
            // ALTERNATIVE/COLLEGE Stations
            { 
                id: 'kcrw', 
                name: 'KCRW', 
                frequency: '89.9 FM', 
                genre: 'alternative', 
                icon: '🎵',
                stream: 'https://live.amperwave.net/direct/kcrw-kcrwfmaac-ibc1',
                category: 'alternative',
                description: 'NPR & Eclectic Music'
            },
            { 
                id: 'kxl', 
                name: 'KXLU', 
                frequency: '88.9 FM', 
                genre: 'college', 
                icon: '🎓',
                stream: 'https://kxlu.streamguys1.com/kxlu-hi',
                category: 'college',
                description: 'Loyola Marymount - Freeform Radio'
            },
            { 
                id: 'kjazz', 
                name: 'KJAZZ', 
                frequency: '88.1 FM', 
                genre: 'jazz', 
                icon: '🎷',
                stream: 'https://live.amperwave.net/direct/cusu-kkjzfmaac-ibc2',
                category: 'jazz',
                description: 'Smooth Jazz & More'
            }
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
        this.initRingtonePlayer();
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
            case 'photos':
                this.showScreen('photosApp');
                this.loadPhotos();
                break;
            case 'radio':
                this.showScreen('radioApp');
                this.initRadio();
                break;
            case 'internet':
                this.showScreen('internetApp');
                this.showEyeFind();
                break;
            case 'settings':
                this.showScreen('settingsApp');
                this.updateSettingsUI();
                break;
            case 'camera':
                alert('📷 Camera app - Say cheese! Michael style!');
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
    
    // ==================== SETTINGS APP METHODS ====================
    
    initRingtonePlayer() {
        this.ringtoneAudio = new Audio();
        this.ringtoneAudio.volume = 0.5;
    }
    
    playRingtone(index) {
        // Stop any currently playing ringtone
        if (this.ringtoneAudio) {
            this.ringtoneAudio.pause();
            this.ringtoneAudio.currentTime = 0;
        }
        
        // Play the selected ringtone
        this.ringtoneAudio.src = `ringtones/${index}.mp3`;
        this.ringtoneAudio.play().catch(e => {
            console.log('Ringtone playback failed:', e);
            alert(`Ringtone ${index}.mp3 not found! Please make sure the file exists in the ringtones folder.`);
        });
        
        // Highlight the playing ringtone
        document.querySelectorAll('.ringtone-item').forEach(item => {
            item.classList.remove('playing');
        });
        document.getElementById(`ringtone${index}`).classList.add('playing');
    }
    
    selectRingtone(index) {
        this.selectedRingtone = index;
        
        // Update UI to show selected ringtone
        document.querySelectorAll('.ringtone-item').forEach(item => {
            item.classList.remove('selected');
        });
        document.getElementById(`ringtone${index}`).classList.add('selected');
        
        // Update current ringtone display
        const ringtoneNames = ['Classic Tone', 'Vintage Ring', 'Digital Beep'];
        document.getElementById('currentRingtone').innerHTML = 
            `Current: ${ringtoneNames[index-1]} (${index}.mp3)`;
        
        // Play a preview
        this.playRingtone(index);
    }
    
    setWallpaper(wallpaperId) {
        let wallpaperSrc = '';
        let wallpaperName = '';
        
        if (wallpaperId === 'default') {
            wallpaperSrc = 'wallpaper.jpg';
            wallpaperName = 'Default';
            this.selectedWallpaper = 'default';
        } else {
            wallpaperSrc = `wallpaper${wallpaperId}.jpg`;
            const names = ['Vinewood', 'Los Santos', 'Michael\'s House'];
            wallpaperName = names[wallpaperId - 1];
            this.selectedWallpaper = wallpaperId;
        }
        
        // Update home screen wallpaper
        document.getElementById('wallpaperImg').src = wallpaperSrc;
        
        // Update UI in settings
        document.querySelectorAll('.wallpaper-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        // Find and select the correct wallpaper option
        const selector = wallpaperId === 'default' ? 
            '.wallpaper-option[onclick*="default"]' : 
            `.wallpaper-option[onclick*="${wallpaperId}"]`;
        
        const selectedOption = document.querySelector(selector);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
        
        // Update check indicators
        document.querySelectorAll('[id^="check-"]').forEach(check => {
            check.innerHTML = '';
        });
        
        if (wallpaperId === 'default') {
            document.getElementById('check-default').innerHTML = '✓';
        } else {
            document.getElementById(`check-${wallpaperId}`).innerHTML = '✓';
        }
        
        // Update current wallpaper display
        document.getElementById('currentWallpaper').innerHTML = 
            `Current: ${wallpaperName}`;
    }
    
    updateSettingsUI() {
        // Update selected ringtone
        document.querySelectorAll('.ringtone-item').forEach(item => {
            item.classList.remove('selected');
        });
        document.getElementById(`ringtone${this.selectedRingtone}`).classList.add('selected');
        
        // Update ringtone display
        const ringtoneNames = ['Classic Tone', 'Vintage Ring', 'Digital Beep'];
        document.getElementById('currentRingtone').innerHTML = 
            `Current: ${ringtoneNames[this.selectedRingtone-1]} (${this.selectedRingtone}.mp3)`;
        
        // Update selected wallpaper
        document.querySelectorAll('.wallpaper-option').forEach(option => {
            option.classList.remove('selected');
        });
        
        document.querySelectorAll('[id^="check-"]').forEach(check => {
            check.innerHTML = '';
        });
        
        if (this.selectedWallpaper === 'default') {
            document.querySelector('.wallpaper-option[onclick*="default"]').classList.add('selected');
            document.getElementById('check-default').innerHTML = '✓';
            document.getElementById('currentWallpaper').innerHTML = 'Current: Default';
        } else {
            const selector = `.wallpaper-option[onclick*="${this.selectedWallpaper}"]`;
            document.querySelector(selector).classList.add('selected');
            document.getElementById(`check-${this.selectedWallpaper}`).innerHTML = '✓';
            
            const names = ['Vinewood', 'Los Santos', 'Michael\'s House'];
            document.getElementById('currentWallpaper').innerHTML = 
                `Current: ${names[this.selectedWallpaper-1]}`;
        }
    }
    
    // ==================== RADIO METHODS ====================
    
    initRadio() {
        if (!this.audioElement) {
            this.audioElement = new Audio();
            this.audioElement.volume = 0.7;
            
            this.audioElement.addEventListener('play', () => {
                this.isPlaying = true;
                this.updateRadioUI();
                document.getElementById('radioStatus').textContent = '🔊 Playing - Connected';
                document.getElementById('radioStatus').style.color = '#4cd964';
            });
            
            this.audioElement.addEventListener('pause', () => {
                this.isPlaying = false;
                this.updateRadioUI();
                document.getElementById('radioStatus').textContent = '⏸️ Paused';
                document.getElementById('radioStatus').style.color = '#ff9500';
            });
            
            this.audioElement.addEventListener('ended', () => {
                this.isPlaying = false;
                this.updateRadioUI();
            });
            
            this.audioElement.addEventListener('error', (e) => {
                console.log('Stream error, but trying to recover...', e);
                document.getElementById('radioStatus').textContent = '⚠️ Stream issue - Retrying...';
                document.getElementById('radioStatus').style.color = '#ff3b30';
                
                if (this.currentStation && this.isPlaying) {
                    setTimeout(() => {
                        if (this.currentStation && this.isPlaying) {
                            this.playStation(this.currentStation.id);
                        }
                    }, 2000);
                }
            });
            
            this.audioElement.addEventListener('waiting', () => {
                document.getElementById('radioStatus').textContent = '⏳ Buffering...';
            });
            
            this.audioElement.addEventListener('canplay', () => {
                document.getElementById('radioStatus').textContent = '🔊 Connected';
            });
        }
        
        this.renderStations();
        this.updateRadioUI();
    }
    
    renderStations() {
        const stationsList = document.getElementById('stationsList');
        if (!stationsList) return;
        
        const filteredStations = this.currentFilter === 'all' 
            ? this.radioStations 
            : this.radioStations.filter(s => s.category === this.currentFilter);
        
        stationsList.innerHTML = filteredStations.map(station => `
            <div class="station-item ${this.currentStation?.id === station.id && this.isPlaying ? 'playing' : ''}" 
                 onclick="phone.playStation('${station.id}')">
                <div class="station-icon">${station.icon}</div>
                <div class="station-details">
                    <div class="station-name">${station.name}</div>
                    <div class="station-frequency">${station.frequency}</div>
                    <div class="station-genre">${station.description}</div>
                </div>
                ${this.currentStation?.id === station.id && this.isPlaying ? 
                    '<div class="play-indicator">🔊 LIVE</div>' : ''}
            </div>
        `).join('');
    }
    
    playStation(stationId) {
        const station = this.radioStations.find(s => s.id === stationId);
        if (!station) return;
        
        if (this.isPlaying) {
            this.audioElement.pause();
        }
        
        this.currentStation = station;
        
        document.getElementById('stationLogo').textContent = station.icon;
        document.getElementById('currentStation').textContent = station.name;
        document.getElementById('currentFrequency').textContent = station.frequency;
        document.getElementById('currentGenre').textContent = station.description;
        document.getElementById('radioStatus').textContent = '🔄 Connecting to stream...';
        
        this.audioElement.src = station.stream;
        this.audioElement.load();
        
        const playPromise = this.audioElement.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.isPlaying = true;
                this.updateRadioUI();
                document.getElementById('radioStatus').textContent = '🔊 Connected - Streaming Live';
            }).catch(error => {
                console.log('Playback failed:', error);
                document.getElementById('radioStatus').textContent = '⚠️ Click PLAY to start';
                this.isPlaying = false;
                this.updateRadioUI();
            });
        }
        
        this.renderStations();
    }
    
    togglePlay() {
        if (!this.currentStation) {
            if (this.radioStations.length > 0) {
                this.playStation(this.radioStations[0].id);
            }
            return;
        }
        
        if (this.isPlaying) {
            this.audioElement.pause();
            this.isPlaying = false;
        } else {
            const playPromise = this.audioElement.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    this.isPlaying = true;
                    this.updateRadioUI();
                }).catch(() => {
                    this.audioElement.load();
                    this.audioElement.play().then(() => {
                        this.isPlaying = true;
                        this.updateRadioUI();
                    }).catch(e => {
                        console.log('Play failed:', e);
                    });
                });
            }
        }
        
        this.updateRadioUI();
    }
    
    stopRadio() {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
        this.isPlaying = false;
        
        document.getElementById('radioStatus').textContent = '⏹️ Stopped';
        this.updateRadioUI();
        this.renderStations();
    }
    
    setVolume(volume) {
        if (this.audioElement) {
            this.audioElement.volume = volume / 100;
        }
    }
    
    filterStations(filter) {
        this.currentFilter = filter;
        
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.textContent.toLowerCase().includes(filter) || 
                (filter === 'all' && btn.textContent === 'ALL')) {
                btn.classList.add('active');
            }
        });
        
        this.renderStations();
    }
    
    updateRadioUI() {
        const playPauseBtn = document.getElementById('playPauseBtn');
        const nowPlayingIndicator = document.getElementById('nowPlayingIndicator');
        const equalizer = document.getElementById('equalizer');
        
        if (playPauseBtn) {
            playPauseBtn.innerHTML = this.isPlaying ? '⏸️ PAUSE' : '▶️ PLAY';
            playPauseBtn.classList.toggle('playing', this.isPlaying);
        }
        
        if (nowPlayingIndicator) {
            nowPlayingIndicator.innerHTML = this.isPlaying ? '🔊 LIVE' : '⏹️ Stopped';
        }
        
        if (equalizer) {
            equalizer.style.display = this.isPlaying ? 'flex' : 'none';
        }
        
        this.renderStations();
    }
    
    // ==================== PHOTOS APP METHODS ====================
    
    loadPhotos() {
        const photoGrid = document.getElementById('photoGrid');
        if (!photoGrid) return;
        
        let photosHtml = '';
        for (let i = 1; i <= this.totalPhotos; i++) {
            photosHtml += `
                <div class="photo-item" onclick="phone.openPhoto(${i})">
                    <img src="photos/${i}.jpg" alt="Photo ${i}" onerror="this.src='https://via.placeholder.com/200/1a6a3a/ffffff?text=Photo+${i}'">
                </div>
            `;
        }
        
        photoGrid.innerHTML = photosHtml;
        document.getElementById('photoCount').textContent = `${this.totalPhotos} photos`;
    }
    
    openPhoto(index) {
        this.currentPhotoIndex = index;
        document.getElementById('fullscreenPhoto').src = `photos/${index}.jpg`;
        document.getElementById('photoName').textContent = `Photo ${index}`;
        document.getElementById('photoCounter').textContent = `${index}/${this.totalPhotos}`;
        
        const dates = ['Jan 15', 'Jan 23', 'Feb 1', 'Feb 14', 'Mar 3', 'Mar 18', 'Apr 2', 'Apr 20', 'May 5', 'May 12'];
        document.getElementById('photoDate').textContent = dates[index - 1] || 'Today';
        
        document.getElementById('photosApp').classList.remove('active');
        document.getElementById('photoViewer').classList.add('active');
    }
    
    closePhotoViewer() {
        document.getElementById('photoViewer').classList.remove('active');
        document.getElementById('photosApp').classList.add('active');
    }
    
    prevPhoto() {
        if (this.currentPhotoIndex > 1) {
            this.currentPhotoIndex--;
            this.updatePhotoViewer();
        }
    }
    
    nextPhoto() {
        if (this.currentPhotoIndex < this.totalPhotos) {
            this.currentPhotoIndex++;
            this.updatePhotoViewer();
        }
    }
    
    updatePhotoViewer() {
        document.getElementById('fullscreenPhoto').src = `photos/${this.currentPhotoIndex}.jpg`;
        document.getElementById('photoName').textContent = `Photo ${this.currentPhotoIndex}`;
        document.getElementById('photoCounter').textContent = `${this.currentPhotoIndex}/${this.totalPhotos}`;
        
        const dates = ['Jan 15', 'Jan 23', 'Feb 1', 'Feb 14', 'Mar 3', 'Mar 18', 'Apr 2', 'Apr 20', 'May 5', 'May 12'];
        document.getElementById('photoDate').textContent = dates[this.currentPhotoIndex - 1] || 'Today';
    }
    
    // ==================== BROWSER METHODS ====================
    
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