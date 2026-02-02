document.addEventListener('DOMContentLoaded', () => {
    const API_KEY = '5b80bc1d29924d00838f7edbb9737da9';
    const interests = ['K-Pop', 'K-Drama', 'K-Food', 'K-Beauty'];
    const interestsContainer = document.querySelector('.interests-container');
    const feedContainer = document.querySelector('.feed-container');
    let selectedInterests = [];

    // --- API & Data Handling ---

    async function fetchNews(interest) {
        const query = encodeURIComponent(interest);
        // To ensure variety and relevance, let's add related keywords.
        const searchKeywords = interest === 'K-Pop' ? `"${query}" OR "kpop"` : `"${query}"`;
        const url = `https://newsapi.org/v2/everything?q=${searchKeywords}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                // If we get a 4xx/5xx error, it's better to know why
                const errorData = await response.json();
                throw new Error(`API Error: ${errorData.message}`);
            }
            const data = await response.json();
            return data.articles;
        } catch (error) {
            console.error(`Failed to fetch news for ${interest}:`, error);
            return null; // Return null to indicate failure
        }
    }

    // --- UI Creation ---

    function createNewsArticle(article) {
        // Basic validation for essential article data
        if (!article.title || !article.url) {
            return null;
        }

        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');

        const placeholderImage = 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=2574&auto=format&fit=crop';
        const imageUrl = article.urlToImage || placeholderImage;

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('article-image');
        imageDiv.style.backgroundImage = `url(${imageUrl})`;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('article-content');

        const title = document.createElement('h3');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description || 'No description available.';

        const link = document.createElement('a');
        link.textContent = 'Read More';
        link.href = article.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer'; // Security best practice

        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        contentDiv.appendChild(link);
        articleDiv.appendChild(imageDiv);
        articleDiv.appendChild(contentDiv);

        return articleDiv;
    }

    function displayMessage(message) {
        feedContainer.innerHTML = '';
        const placeholder = document.createElement('div');
        placeholder.classList.add('placeholder-message');
        placeholder.textContent = message;
        feedContainer.appendChild(placeholder);
    }

    // --- Main Display Logic ---

    async function displayNews() {
        feedContainer.innerHTML = ''; // Clear existing news

        if (selectedInterests.length === 0) {
            displayMessage('관심있는 K-컬처 주제를 선택하고 최신 소식을 받아보세요!');
            return;
        }

        // Show a loading indicator while fetching
        displayMessage('Loading the latest K-Culture buzz...');

        const fetchPromises = selectedInterests.map(interest => fetchNews(interest));
        const results = await Promise.all(fetchPromises);

        const allArticles = results.flat().filter(article => article !== null);
        
        // Remove duplicates that might come from different queries
        const uniqueArticles = Array.from(new Map(allArticles.map(a => [a.url, a])).values());
        
        // Sort by the most recent publish date
        uniqueArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

        feedContainer.innerHTML = ''; // Clear loading message
        if (uniqueArticles.length === 0) {
            displayMessage('No recent articles found for your selection. Please try again later.');
            return;
        }

        uniqueArticles.forEach(articleData => {
            const articleElement = createNewsArticle(articleData);
            if (articleElement) {
                feedContainer.appendChild(articleElement);
            }
        });
    }

    // --- Initialization ---

    function initialize() {
        interestsContainer.innerHTML = ''; // Clear any placeholders
        interests.forEach(interest => {
            const button = document.createElement('button');
            button.classList.add('interest-btn');
            button.textContent = interest;
            button.dataset.interest = interest;
            interestsContainer.appendChild(button);

            button.addEventListener('click', () => {
                button.classList.toggle('active');
                const interestValue = button.dataset.interest;

                if (button.classList.contains('active')) {
                    selectedInterests.push(interestValue);
                } else {
                    selectedInterests = selectedInterests.filter(i => i !== interestValue);
                }
                displayNews();
            });
        });

        // Initial call to display the welcome message
        displayNews();
    }

    initialize();
});
