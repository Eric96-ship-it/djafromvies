// Movie Data with Unique Unlock Codes
const moviesData = [
    {
        id: 1,
        title: "The King's Return",
        description: "A dramatic tale of a king who returns to reclaim his throne after years in exile.",
        genre: "drama",
        year: 2023,
        language: "english",
        duration: "2h 15m",
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80",
        featured: true,
        price: 10,
        videoUrl: "https://youtu.be/qkBT-_-Zq8A.mp4",
        // UNIQUE UNLOCK CODE - Change this for each customer
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
        // UNIQUE UNLOCK CODE - Change this for each customer
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
        // UNIQUE UNLOCK CODE - Change this for each customer
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
        // UNIQUE UNLOCK CODE - Change this for each customer
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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check which page we're on and initialize accordingly
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
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

// Set up common event listeners
function setupCommonEventListeners() {
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            if (mainNav) {
                mainNav.classList.toggle('active');
            }
        });
    }
    
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