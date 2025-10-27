// Movie Data with Unique Unlock Codes
const moviesData = [
    {
        id: 1,
        title: "DJ AFRO; WINNERS AND SINNERS FULL MOVIE",
        description: "DJ AFRO MOVIE EXCLUSIVE.",
        genre: "action",
        year: 2023,
        language: "english",
        duration: "1h 43m",
        thumbnail: "https://i.ibb.co/WWrWN8bq/Capture.png",
        featured: true,
        price: 10,
        videoUrl: "https://youtu.be/qkBT-_-Zq8A.mp4",
        unlockCode: "KING2023XYZ789"
    },
    {
        id: 2,
        title: "Lagos Nights",
        description: "A thrilling action movie set in the vibrant nightlife of Lagos.",
        genre: "action",
        year: 2023,
        language: "english",
        duration: "1h 48m",
        thumbnail: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2079&q=80",
        featured: true,
        price: 10,
        videoUrl: "Beauty.in.Black.S01E01.720p.NF.WEBRip.x264-GalaxyTV",
        unlockCode: "LAGOS456ABC123"
    },
    {
        id: 3,
        title: "Love in Nairobi",
        description: "A romantic comedy about two strangers who meet in Nairobi and find love.",
        genre: "romance",
        year: 2022,
        language: "english",
        duration: "1h 55m",
        thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2050&q=80",
        featured: false,
        price: 10,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        unlockCode: "NAIROBI789DEF456"
    },
    {
        id: 4,
        title: "Safari Adventure",
        description: "An adventurous journey through the African wilderness.",
        genre: "adventure",
        year: 2023,
        language: "english",
        duration: "2h 5m",
        thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        featured: false,
        price: 10,
        videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        unlockCode: "SAFARI123GHI789"
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

// Track used codes
let usedCodes = JSON.parse(localStorage.getItem('usedUnlockCodes')) || {};

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

// Eversend Payment Function
function processEversendPayment() {
    const button = document.querySelector('.eversend-pay-button');
    const loading = document.getElementById('eversend-loading');
    
    // Show loading animation
    button.disabled = true;
    button.style.opacity = '0.8';
    loading.style.display = 'block';
    
    // Get movie details for reference
    const movieTitle = document.getElementById('movie-title')?.textContent || 'Movie';
    const moviePrice = document.getElementById('movie-price')?.textContent || '10';
    
    // Simulate processing delay for better UX
    setTimeout(() => {
        // Redirect to Eversend payment link
        window.location.href = 'https://eversend.me/eric96';
        
        // Note: After Eversend payment, users should still contact you for the unlock code
    }, 1500);
}

// Payment Method Toggle
function setupPaymentMethodToggle() {
    const paymentTabs = document.querySelectorAll('.payment-option-tab');
    const paymentMethods = document.querySelectorAll('.payment-method-content');
    
    paymentTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const method = this.getAttribute('data-method');
            
            // Update active tab
            paymentTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding payment method
            paymentMethods.forEach(m => m.classList.remove('active'));
            document.getElementById(`${method}-method`).classList.add('active');
        });
    });
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
    } else if (page === 'movie-detail.html') {
        // Movie detail page
        setupPaymentMethodToggle();
    }
});

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

// Set up movie detail page
function setupMovieDetailPage() {
    // Movie detail page specific setup if needed
    console.log('Movie detail page loaded');
}

// Check if movie is unlocked
function isMovieUnlocked(movieId) {
    return localStorage.getItem(`movie_${movieId}_unlocked`) === 'true';
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
        const isUnlocked = isMovieUnlocked(movie.id);
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.setAttribute('data-id', movie.id);
        
        movieCard.innerHTML = `
            <div class="movie-card-inner">
                <div class="movie-thumbnail">
                    <img src="${movie.thumbnail}" alt="${movie.title}">
                    ${isUnlocked ? '<div class="unlocked-badge"><i class="fas fa-unlock"></i> Unlocked</div>' : ''}
                </div>
                <div class="movie-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <div class="movie-meta">
                        <span>${movie.year}</span>
                        <span class="movie-price">Ksh ${movie.price}</span>
                    </div>
                    <button class="watch-btn ${isUnlocked ? 'unlocked' : ''}">
                        ${isUnlocked ? 
                            '<i class="fas fa-play"></i> Watch Now' : 
                            '<i class="fas fa-key"></i> Pay & Get Code to Watch'
                        }
                    </button>
                    ${!isUnlocked ? `
                        <div class="payment-notice">
                            <small><i class="fas fa-info-circle"></i> Contact 0742774083 after payment</small>
                        </div>
                    ` : ''}
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
        const isUnlocked = isMovieUnlocked(movie.id);
        const featuredItem = document.createElement('div');
        featuredItem.className = 'featured-item';
        
        featuredItem.innerHTML = `
            <img src="${movie.thumbnail}" alt="${movie.title}">
            <div class="featured-info">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <button class="cta-button watch-now-btn ${isUnlocked ? 'unlocked' : ''}" data-id="${movie.id}">
                    ${isUnlocked ? 
                        '<i class="fas fa-play"></i> Watch Now' : 
                        '<i class="fas fa-key"></i> Pay & Get Code to Watch'
                    }
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
                const isUnlocked = isMovieUnlocked(movie.id);
                const movieCard = document.createElement('div');
                movieCard.className = 'movie-card';
                movieCard.setAttribute('data-id', movie.id);
                
                movieCard.innerHTML = `
                    <div class="movie-card-inner">
                        <div class="movie-thumbnail">
                            <img src="${movie.thumbnail}" alt="${movie.title}">
                            ${isUnlocked ? '<div class="unlocked-badge"><i class="fas fa-unlock"></i> Unlocked</div>' : ''}
                        </div>
                        <div class="movie-info">
                            <h3>${movie.title}</h3>
                            <p>${movie.description}</p>
                            <div class="movie-meta">
                                <span>${movie.year}</span>
                                <span class="movie-price">Ksh ${movie.price}</span>
                            </div>
                            <button class="watch-btn ${isUnlocked ? 'unlocked' : ''}">
                                ${isUnlocked ? 
                                    '<i class="fas fa-play"></i> Watch Now' : 
                                    '<i class="fas fa-key"></i> Pay & Get Code to Watch'
                                }
                            </button>
                            ${!isUnlocked ? `
                                <div class="payment-notice">
                                    <small><i class="fas fa-info-circle"></i> Contact 0742774083 after payment</small>
                                </div>
                            ` : ''}
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