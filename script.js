// Movie Data with Unique Unlock Codes - 30 Movies
const moviesData = [
    {
        id: 1,
        title: "Winners & Sinners",
        description: "Fresh from prison, five friends try to stay crime free but inadvertently find themselves caught in a Triad war.",
        genre: "action",
        year: 1983,
        language: "DJ AFRO",
        duration: "1h 46m",
        thumbnail: "https://i.ibb.co/WWrWN8bq/Capture.png",
        featured: true,
        price: 10,
        videoUrl: "https://dai.ly/x9sqiha",
        unlockCode: "DJAFRO2024XYZ789",
        sticker: "DJ AFRO",
        quality: "HD"
    },
    {
        id: 2,
        title: "House of the Raising Sun",
        description: "An ex-con security guard seeks to prove his innocence after a fatal nightclub robbery exposes his past. With both police and mobsters suspecting him, he races to find the real killer.",
        genre: "action",
        year: 2011,
        language: "DJ AFRO",
        duration: "1h 30m",
        thumbnail: "https://i.ibb.co/q3c4b5MN/house-of-raising-sun.jpg",
        featured: true,
        price: 10,
        videoUrl: "https://www.dailymotion.com/embed/video/x9svc4e",
        unlockCode: "LAGOS456ABC123",
        sticker: "DJ AFRO",
        quality: "HD"
    },
    {
        id: 3,
        title: "Universal Soldier: Day of Reckoning",
        description: "John looks to take down Luc Deveraux after a home invasion claims his wife and daughter. The fight pits John against Andrew Scott and an army of genetically enhanced warriors; meanwhile, he must contend with a UniSol in relentless pursuit.",
        genre: "action",
        year: 2012,
        language: "DJ AFRO",
        duration: "1h 46m",
        thumbnail: "https://i.ibb.co/vCQzrykm/Universal-Soldier-Day-of-Reckoning.jpg",
        featured: true,
        price: 10,
        videoUrl: "https://www.dailymotion.com/embed/video/x9svsmm",
        unlockCode: "NAIROBI789DEF456",
        sticker: "DJ AFRO",
        quality: "HD"
    },
    {
        id: 4,
        title: "Precious Cargo",
        description: "A crime boss tries to make off with loot that belongs to another thief.",
        genre: "action",
        year: 2016,
        language: "DJ AFRO",
        duration: "1h 26m",
        thumbnail: "https://i.ibb.co/99qJVmPy/Precious-Cargo.jpg",
        featured: true,
        price: 10,
        videoUrl: "https://www.dailymotion.com/embed/video/x9svc4i",
        unlockCode: "SAFARI123GHI789",
        sticker: "DJ AFRO",
        quality: "HD"
    },
    {
        id: 5,
        title: "Tulsa King 1",
        description: "After being released from prison after 25 years, New York Mafia capo Dwight The General Manfredi is exiled to Tulsa, Oklahoma.",
        genre: "action",
        year: 2022,
        language: "DJ AFRO",
        duration: "1h 18m",
        thumbnail: "https://i.ibb.co/Y7XLXbT7/Tulsa-King.jpg",
        price: 10,
        videoUrl: "https://www.dailymotion.com/embed/video/EnMUkb7nS0q9E6Yfu",
        unlockCode: "KINGRETURN789",
        sticker: "DJ AFRO",
        quality: "HD"
    },
    {
        id: 6,
        title: "Ghost Rider: Spirit of Vengeance",
        description: "Johnny Blaze, tortured by the Ghost Rider's curse, gets a chance of redemption through protecting the Devil's son, whose father is pursuing him.",
        genre: "action",
        year: 2011,
        language: "DJ AFRO",
        duration: "1h 33m",
        thumbnail: "https://i.ibb.co/5h2KwZRH/ghost-rider.jpg",
        price: 10,
        videoUrl: "https://rumble.com/embed/v6ys28k/?pub=mly0d",
        unlockCode: "CITYDREAMS456",
        sticker: "DJ AFRO",
        quality: "HD"
    },
    {
        id: 7,
                title: "LOCK-OUT",
                description: "A thrilling DJ Afro–translated action movie packed with intense battles, explosive missions, and unstoppable heroics. Follow a fearless U.S. commando as he takes on dangerous enemies, fights for justice, and delivers nonstop entertainment with DJ Afro’s signature humor and commentary..",
                genre: "Action",
                year: 2012,
                language: "DJ AFRO",
                duration: "1h 27m",
                thumbnail: "https://i.ibb.co/Gv2PynBk/LOCK-OUT.jpg",
                price: 10,
                videoUrl: "https://rumble.com/embed/v6ywbom/?pub=mly0d",
                unlockCode: "lockedOUT321",
                sticker: "DJ AFRO"
    },
    {
       id: 8,
                title: "Donnie Yen: The Warriors",
                description: "DJ AFRO LATEST ACTION MOVIE 2024 | | DONNIE YEN AN EMPRESS AND THE WARRIORS | NEW MOVIE RELEASE.",
                genre: "DJ AFRO",
                year: 2008,
                language: "english",
                duration: "1h 32m",
                thumbnail: "https://i.ibb.co/qMRjyYD9/the-warriors.jpg",
                price: 10,
                videoUrl: "https://rumble.com/embed/v6ywbki/?pub=mly0d",
                unlockCode: "HEARTBEAT123",
                sticker: "DJ AFRO"
    },
    {
        id: 9,
                title: "Ice Man part 1",
                description: "A high-speed thriller about a detective chasing a mysterious criminal.",
                genre: "action",
                year: 2014,
                language: "DJ AFRO",
                duration: "1h 41m",
                thumbnail: "https://i.ibb.co/xtNqqjHj/Ice-Man-2014.jpg",
                price: 10,
                videoUrl: "https://www.dailymotion.com/embed/video/x9sqiha",
                unlockCode: "MIDNIGHT456",
                sticker: "DJ AFRO"
    },
    {
          id: 10,
    title: "Bang Bang",
    description: "A young bank receptionist gets mixed up with Rajveer Nanda, a man who has a mysterious background in this high-octane action thriller.",
    genre: "action",
    year: 2014,
    language: "DJ AFRO",
    duration: "2h 11m",
    thumbnail: "https://i.ibb.co/gLp9r59j/bangbang.jpg",
    price: 10,
    videoUrl: "https://rumble.com/embed/v6yux9a/?pub=mly0d",
    unlockCode: "BANGBANG456",
    sticker: "DJ AFRO",
    quality: "HD"
    },
    {
          id: 11,
    title: "The Suicide Squad",
    description: "Supervillains Harley Quinn, Bloodsport, Peacemaker, and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
    genre: "action",
    year: 2021,
    language: "english",
    duration: "2h 01m",
    thumbnail: "https://i.ibb.co/bgKP5RmG/91-Sy-My8-Q1-L-AC-UF894-1000-QL80.jpg",
    price: 10,
    videoUrl: "https://rumble.com/embed/v6yvzvm/?pub=mly0d",
    unlockCode: "SUICIDESQUAD11",
    sticker: "DJ AFRO",
    quality: "HD"
    },
    {
         id: 12,
    title: "The Commuter",
    description: "An insurance salesman/ex-cop is caught up in a life-threatening conspiracy during his daily commute home.",
    genre: "action",
    year: 2018,
    language: "DJ AFRO",
    duration: "1h 38m",
    thumbnail: "https://i.ibb.co/xSRPgbdK/the-commuter.jpg",
    price: 10,
    videoUrl: "https://rumble.com/embed/v6yw2me/?pub=mly0d",
    unlockCode: "COMMUTER20",
    sticker: "DJ AFRO",
    quality: "HD"
    },
    {
           id: 13,
    title: "Sahasam",
    description: "Gautham Varma, an A.T.M security guard, goes on a treasure hunt for the diamonds hidden by his grandfather in the Hinglaj temple during the time of the India - Pakistan partition.",
    genre: "action",
    year: 2013,
    language: "DJ AFRO",
    duration: "1h 57m",
    thumbnail: "https://i.ibb.co/60FjFfgx/SAHASAM.jpg",
    price: 10,
    videoUrl: "https://rumble.com/embed/v6yw2sc/?pub=mly0d",
    unlockCode: "SAHASAM20NEW",
    sticker: "DJ AFRO",
    quality: "HD"
    },
    {
           id: 14,
    title: "Force",
    description: "A vengeful gangster targets and terrorizes an entire police unit and their families.",
    genre: "action",
    year: 2011,
    language: "DJ AFRO",
    duration: "1h 59m",
    thumbnail: "https://i.ibb.co/Cp47dKsy/force.jpg",
    price: 10,
    videoUrl: "https://rumble.com/embed/v6yw41g/?pub=mly0d",
    unlockCode: "F0RC3S3CUR3",
    sticker: "DJ AFRO",
    quality: "HD"
    },
   
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

// Enhanced movie card creation with quality badges
function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.setAttribute('data-id', movie.id);
    
    // Determine quality badge
    const qualityBadge = movie.quality || 'HD';
    
    movieCard.innerHTML = `
        <div class="movie-card-inner">
            <div class="movie-thumbnail">
                <img src="${movie.thumbnail}" alt="${movie.title}" loading="lazy">
                <div class="quality-badge">${qualityBadge}</div>
                <div class="dj-sticker">${movie.sticker}</div>
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <div class="movie-meta">
                    <span class="movie-year">${movie.year}</span>
                    <span class="movie-price">Ksh ${movie.price}</span>
                </div>
            </div>
        </div>
    `;
    
    movieCard.addEventListener('click', () => {
        window.location.href = `movie-detail.html?id=${movie.id}`;
    });
    
    return movieCard;
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
        const movieCard = createMovieCard(movie);
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
                const movieCard = createMovieCard(movie);
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