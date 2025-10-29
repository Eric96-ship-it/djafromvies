// Movie Data with Unique Unlock Codes - 30 Movies
const moviesData = [
    {
        id: 1,
        title: "DJ AFRO: Winners and Sinners",
        description: "A dramatic tale of a king who returns to reclaim his throne after years in exile.",
        genre: "drama",
        year: 2024,
        language: "english",
        duration: "1h 46m",
        thumbnail: "https://i.ibb.co/WWrWN8bq/Capture.png",
        featured: true,
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "DJAFRO2024XYZ789",
        sticker: "DJ AFRO"
    },
    {
        id: 2,
        title: "Lagos Nights",
        description: "A thrilling action movie set in the vibrant nightlife of Lagos.",
        genre: "action",
        year: 2024,
        language: "english",
        duration: "1h 48m",
        thumbnail: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80",
        featured: true,
        price: 10,
        videoUrl: "https://youtu.be/EKREBrDigNE",
        unlockCode: "LAGOS456ABC123",
        sticker: "DJ AFRO"
    },
    {
        id: 3,
        title: "Love in Nairobi",
        description: "A romantic comedy about two strangers who meet in Nairobi and find love.",
        genre: "romance",
        year: 2024,
        language: "english",
        duration: "1h 55m",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2050&q=80",
        featured: true,
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "NAIROBI789DEF456",
        sticker: "DJ AFRO"
    },
    {
        id: 4,
        title: "Safari Adventure",
        description: "An adventurous journey through the African wilderness.",
        genre: "adventure",
        year: 2024,
        language: "english",
        duration: "2h 5m",
        thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        featured: true,
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "SAFARI123GHI789",
        sticker: "DJ AFRO"
    },
    {
        id: 5,
        title: "The King's Return",
        description: "A powerful king returns to his kingdom after a long exile to reclaim his throne.",
        genre: "drama",
        year: 2024,
        language: "english",
        duration: "2h 15m",
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=2059&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "KINGRETURN789",
        sticker: "DJ AFRO"
    },
    {
        id: 6,
        title: "City of Dreams",
        description: "A young man moves to the city to pursue his dreams against all odds.",
        genre: "drama",
        year: 2024,
        language: "english",
        duration: "1h 58m",
        thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2050&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "CITYDREAMS456",
        sticker: "DJ AFRO"
    },
    {
        id: 7,
        title: "Laugh Out Loud",
        description: "A hilarious comedy about a family's misadventures during a vacation.",
        genre: "comedy",
        year: 2024,
        language: "english",
        duration: "1h 42m",
        thumbnail: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "LAUGHOUT789",
        sticker: "DJ AFRO"
    },
    {
        id: 8,
        title: "Heartbeat",
        description: "A touching romance story about two doctors falling in love in a busy hospital.",
        genre: "romance",
        year: 2024,
        language: "english",
        duration: "2h 2m",
        thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "HEARTBEAT123",
        sticker: "DJ AFRO"
    },
    {
        id: 9,
        title: "Midnight Chase",
        description: "A high-speed thriller about a detective chasing a mysterious criminal.",
        genre: "thriller",
        year: 2024,
        language: "english",
        duration: "1h 53m",
        thumbnail: "https://images.unsplash.com/photo-1489599809505-7c8e4516da75?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "MIDNIGHT456",
        sticker: "DJ AFRO"
    },
    {
        id: 10,
        title: "Family Ties",
        description: "A heartwarming family drama about reconnecting with loved ones.",
        genre: "family",
        year: 2024,
        language: "english",
        duration: "1h 47m",
        thumbnail: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "FAMILYTIES789",
        sticker: "DJ AFRO"
    },
    {
        id: 11,
        title: "The Last Stand",
        description: "An action-packed film about soldiers defending their homeland.",
        genre: "action",
        year: 2023,
        language: "english",
        duration: "2h 8m",
        thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "LASTSTAND123",
        sticker: "DJ AFRO"
    },
    {
        id: 12,
        title: "Whispers in the Dark",
        description: "A psychological thriller about secrets that come back to haunt a family.",
        genre: "thriller",
        year: 2023,
        language: "english",
        duration: "1h 59m",
        thumbnail: "https://images.unsplash.com/photo-1478720568477-b2709ad0b8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "WHISPERS456",
        sticker: "DJ AFRO"
    },
    {
        id: 13,
        title: "Sunset Love",
        description: "A beautiful romance that blossoms during a vacation in Zanzibar.",
        genre: "romance",
        year: 2023,
        language: "english",
        duration: "1h 51m",
        thumbnail: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "SUNSETLOVE789",
        sticker: "DJ AFRO"
    },
    {
        id: 14,
        title: "Comedy Central",
        description: "A stand-up comedian's journey to fame and the challenges he faces.",
        genre: "comedy",
        year: 2023,
        language: "english",
        duration: "1h 44m",
        thumbnail: "https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "COMEDY123",
        sticker: "DJ AFRO"
    },
    {
        id: 15,
        title: "Mountain Quest",
        description: "An adventure film about explorers searching for a lost treasure.",
        genre: "adventure",
        year: 2023,
        language: "english",
        duration: "2h 12m",
        thumbnail: "https://images.unsplash.com/photo-1464822759844-d2d9724d3b83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "MOUNTAIN456",
        sticker: "DJ AFRO"
    },
    {
        id: 16,
        title: "Broken Promises",
        description: "A dramatic story about betrayal and redemption in a wealthy family.",
        genre: "drama",
        year: 2023,
        language: "english",
        duration: "2h 5m",
        thumbnail: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "BROKEN789",
        sticker: "DJ AFRO"
    },
    {
        id: 17,
        title: "Family Vacation",
        description: "A comedy about a family's disastrous but memorable vacation.",
        genre: "family",
        year: 2023,
        language: "english",
        duration: "1h 49m",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "VACATION123",
        sticker: "DJ AFRO"
    },
    {
        id: 18,
        title: "Street Fighter",
        description: "An action film about martial artists competing in underground fights.",
        genre: "action",
        year: 2023,
        language: "english",
        duration: "1h 56m",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "STREET456",
        sticker: "DJ AFRO"
    },
    {
        id: 19,
        title: "The Proposal",
        description: "A romantic comedy about mistaken identity and unexpected love.",
        genre: "romance",
        year: 2022,
        language: "english",
        duration: "1h 52m",
        thumbnail: "https://images.unsplash.com/photo-1519145436-5c7d7750d5c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "PROPOSAL789",
        sticker: "DJ AFRO"
    },
    {
        id: 20,
        title: "Jungle Expedition",
        description: "An adventure film about explorers in the Congo rainforest.",
        genre: "adventure",
        year: 2022,
        language: "english",
        duration: "2h 7m",
        thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "JUNGLE123",
        sticker: "DJ AFRO"
    },
    {
        id: 21,
        title: "Laugh Riot",
        description: "A comedy about a struggling comedian who finally gets his big break.",
        genre: "comedy",
        year: 2022,
        language: "english",
        duration: "1h 45m",
        thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "LAUGHRIOT456",
        sticker: "DJ AFRO"
    },
    {
        id: 22,
        title: "Family Matters",
        description: "A family drama about siblings reuniting after their father's death.",
        genre: "family",
        year: 2022,
        language: "english",
        duration: "2h 3m",
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "FAMILY789",
        sticker: "DJ AFRO"
    },
    {
        id: 23,
        title: "The Heist",
        description: "A thriller about a group of thieves planning the perfect bank robbery.",
        genre: "thriller",
        year: 2022,
        language: "english",
        duration: "2h 11m",
        thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "HEIST123",
        sticker: "DJ AFRO"
    },
    {
        id: 24,
        title: "Desert Storm",
        description: "An action film about soldiers surviving in the harsh desert environment.",
        genre: "action",
        year: 2022,
        language: "english",
        duration: "1h 58m",
        thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "DESERT456",
        sticker: "DJ AFRO"
    },
    {
        id: 25,
        title: "Second Chance",
        description: "A romantic drama about lovers reuniting after ten years apart.",
        genre: "romance",
        year: 2021,
        language: "english",
        duration: "2h 4m",
        thumbnail: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "SECOND789",
        sticker: "DJ AFRO"
    },
    {
        id: 26,
        title: "Funny Business",
        description: "A comedy about a businessman who inherits a struggling comedy club.",
        genre: "comedy",
        year: 2021,
        language: "english",
        duration: "1h 47m",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2067&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "FUNNY123",
        sticker: "DJ AFRO"
    },
    {
        id: 27,
        title: "Mountain Rescue",
        description: "An adventure film about a rescue team saving climbers from a dangerous peak.",
        genre: "adventure",
        year: 2021,
        language: "english",
        duration: "2h 9m",
        thumbnail: "https://images.unsplash.com/photo-1464822759844-d2d9724d3b83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "RESCUE456",
        sticker: "DJ AFRO"
    },
    {
        id: 28,
        title: "Family Reunion",
        description: "A heartwarming family film about relatives coming together for a special occasion.",
        genre: "family",
        year: 2021,
        language: "english",
        duration: "1h 55m",
        thumbnail: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "REUNION789",
        sticker: "DJ AFRO"
    },
    {
        id: 29,
        title: "Undercover Agent",
        description: "A thriller about a police officer going undercover in a criminal organization.",
        genre: "thriller",
        year: 2021,
        language: "english",
        duration: "2h 6m",
        thumbnail: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "UNDERCOVER123",
        sticker: "DJ AFRO"
    },
    {
        id: 30,
        title: "Final Round",
        description: "An action film about a martial arts tournament with high stakes.",
        genre: "action",
        year: 2020,
        language: "english",
        duration: "1h 59m",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "FINAL456",
        sticker: "DJ AFRO"
    }
];

// DOM Elements
const searchInput = document.getElementById('search-input');
const moviesGrid = document.getElementById('movies-grid');
const featuredSlider = document.getElementById('featured-slider');
const genreFilter = document.getElementById('genre-filter');
const yearFilter = document.getElementById('year-filter');
const languageFilter = document.getElementById('language-filter');
const categoryCards = document.querySelectorAll('.category-card');
const categoryResults = document.getElementById('category-results');
const categoryTitle = document.getElementById('category-title');
const categoryMoviesGrid = document.getElementById('category-movies-grid');
const contactForm = document.getElementById('contact-form');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainNav = document.getElementById('main-nav');

// Enhanced Mobile Navigation System
function setupMobileNavigation() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const body = document.body;
    
    // Create overlay element if it doesn't exist
    let navOverlay = document.getElementById('nav-overlay');
    if (!navOverlay) {
        navOverlay = document.createElement('div');
        navOverlay.id = 'nav-overlay';
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
    }
    
    // Create close button if it doesn't exist
    let mobileMenuClose = document.getElementById('mobile-menu-close');
    if (!mobileMenuClose && mobileMenuToggle) {
        mobileMenuClose = document.createElement('button');
        mobileMenuClose.id = 'mobile-menu-close';
        mobileMenuClose.className = 'mobile-menu-close';
        mobileMenuClose.innerHTML = '<i class="fas fa-times"></i>';
        mobileMenuClose.setAttribute('aria-label', 'Close menu');
        mobileMenuClose.style.display = 'none';
        document.body.appendChild(mobileMenuClose);
    }
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isActive = mainNav.classList.contains('active');
        
        if (isActive) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        mainNav.classList.add('active');
        navOverlay.classList.add('active');
        if (mobileMenuClose) mobileMenuClose.style.display = 'flex';
        body.style.overflow = 'hidden';
        
        // Update menu toggle button
        if (mobileMenuToggle) {
            mobileMenuToggle.innerHTML = '<i class="fas fa-times"></i>';
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
        }
    }
    
    function closeMobileMenu() {
        mainNav.classList.remove('active');
        navOverlay.classList.remove('active');
        if (mobileMenuClose) mobileMenuClose.style.display = 'none';
        body.style.overflow = '';
        
        // Update menu toggle button
        if (mobileMenuToggle) {
            mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    }
    
    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

// Display movies in the grid
function displayMovies(movies) {
    if (!moviesGrid) return;
    
    moviesGrid.innerHTML = '';
    
    if (movies.length === 0) {
        moviesGrid.innerHTML = '<p class="no-results">No movies found matching your criteria.</p>';
        return;
    }
    
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.setAttribute('data-id', movie.id);
        
        movieCard.innerHTML = `
            <div class="movie-card-inner">
                <div class="movie-thumbnail">
                    <img src="${movie.thumbnail}" alt="${movie.title}">
                    <div class="dj-sticker">${movie.sticker}</div>
                </div>
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span class="movie-price">Ksh ${movie.price}</span>
                    </div>
                    <button class="watch-btn">
                        <i class="fas fa-key"></i> Pay & Get Code to Watch
                    </button>
                    <div class="payment-notice">
                        <small><i class="fas fa-info-circle"></i> Contact 0742774083 after payment</small>
                    </div>
                </div>
            </div>
        `;
        
        movieCard.addEventListener('click', () => {
            window.location.href = `movie-detail.html?id=${movie.id}`;
        });
        
        moviesGrid.appendChild(movieCard);
    });
}

// Display featured movies
function displayFeaturedMovies(featuredMovies) {
    if (!featuredSlider) return;
    
    featuredSlider.innerHTML = '';
    
    featuredMovies.forEach(movie => {
        const featuredItem = document.createElement('div');
        featuredItem.className = 'featured-item';
        
        featuredItem.innerHTML = `
            <img src="${movie.thumbnail}" alt="${movie.title}">
            <div class="featured-info">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <button class="cta-button watch-now-btn" data-id="${movie.id}">
                    <i class="fas fa-key"></i> Pay & Get Code to Watch
                </button>
            </div>
        `;
        
        featuredSlider.appendChild(featuredItem);
    });
    
    // Add event listeners to watch now buttons
    document.querySelectorAll('.watch-now-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const movieId = this.getAttribute('data-id');
            window.location.href = `movie-detail.html?id=${movieId}`;
        });
    });
}

// Apply filters to movies
function applyFilters() {
    const genre = genreFilter ? genreFilter.value : 'all';
    const year = yearFilter ? yearFilter.value : 'all';
    const language = languageFilter ? languageFilter.value : 'all';
    
    let filteredMovies = moviesData;
    
    if (genre !== 'all') {
        filteredMovies = filteredMovies.filter(movie => movie.genre === genre);
    }
    
    if (year !== 'all') {
        filteredMovies = filteredMovies.filter(movie => movie.year.toString() === year);
    }
    
    if (language !== 'all') {
        filteredMovies = filteredMovies.filter(movie => movie.language === language);
    }
    
    if (moviesGrid) {
        displayMovies(filteredMovies);
    }
}

// Show movies by category
function showCategoryMovies(category) {
    const categoryMovies = moviesData.filter(movie => movie.genre === category);
    
    // Update category title
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    if (categoryTitle) {
        categoryTitle.innerHTML = `${categoryName} <span>Movies</span>`;
    }
    
    // Display category movies
    if (categoryMoviesGrid) {
        categoryMoviesGrid.innerHTML = '';
        
        if (categoryMovies.length === 0) {
            categoryMoviesGrid.innerHTML = '<p class="no-results">No movies found in this category.</p>';
        } else {
            categoryMovies.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.setAttribute('data-id', movie.id);
                
                movieCard.innerHTML = `
                    <div class="movie-card-inner">
                        <div class="movie-thumbnail">
                            <img src="${movie.thumbnail}" alt="${movie.title}">
                            <div class="dj-sticker">${movie.sticker}</div>
                        </div>
                        <div class="movie-info">
                            <h3>${movie.title}</h3>
                            <p>${movie.description}</p>
                            <div class="movie-meta">
                                <span>${movie.year}</span>
                                <span class="movie-price">Ksh ${movie.price}</span>
                            </div>
                            <button class="watch-btn">
                                <i class="fas fa-key"></i> Pay & Get Code to Watch
                            </button>
                            <div class="payment-notice">
                                <small><i class="fas fa-info-circle"></i> Contact 0742774083 after payment</small>
                            </div>
                        </div>
                    </div>
                `;
                
                movieCard.addEventListener('click', () => {
                    window.location.href = `movie-detail.html?id=${movie.id}`;
                });
                
                categoryMoviesGrid.appendChild(movieCard);
            });
        }
    }
    
    // Show category results section
    if (categoryResults) {
        categoryResults.style.display = 'block';
        
        // Scroll to category results
        setTimeout(() => {
            categoryResults.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
}

// Set up common event listeners
function setupCommonEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            if (searchTerm.length > 2) {
                const filteredMovies = moviesData.filter(movie => 
                    movie.title.toLowerCase().includes(searchTerm) || 
                    movie.description.toLowerCase().includes(searchTerm)
                );
                if (moviesGrid) {
                    displayMovies(filteredMovies);
                }
            } else if (searchTerm.length === 0 && moviesGrid) {
                displayMovies(moviesData);
            }
        });
    }
}

// Set up home page event listeners
function setupHomePageEventListeners() {
    // Filter functionality
    if (genreFilter) {
        genreFilter.addEventListener('change', applyFilters);
    }
    
    if (yearFilter) {
        yearFilter.addEventListener('change', applyFilters);
    }
    
    if (languageFilter) {
        languageFilter.addEventListener('change', applyFilters);
    }
}

// Set up categories page event listeners
function setupCategoriesPageEventListeners() {
    // Category selection
    if (categoryCards) {
        categoryCards.forEach(card => {
            card.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                showCategoryMovies(category);
            });
        });
    }
}

// Set up contact page event listeners
function setupContactPageEventListeners() {
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would submit to FormsFree
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and initialize accordingly
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    // Set up enhanced mobile navigation
    setupMobileNavigation();
    
    // Set up event listeners that are common to all pages
    setupCommonEventListeners();
    
    // Page-specific initialization
    if (page === 'index.html' || page === '' || page === '/') {
        // Home page
        displayMovies(moviesData);
        displayFeaturedMovies(moviesData.filter(movie => movie.featured));
        setupHomePageEventListeners();
    } else if (page === 'categories.html') {
        // Categories page
        setupCategoriesPageEventListeners();
    } else if (page === 'contact.html') {
        // Contact page
        setupContactPageEventListeners();
    }
});