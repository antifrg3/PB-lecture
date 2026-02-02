document.addEventListener('DOMContentLoaded', () => {
    const interests = ['Technology', 'Sports', 'Business', 'Health', 'Science', 'Entertainment'];
    const interestsContainer = document.querySelector('.interests-container');
    let selectedInterests = [];

    // 1. Generate Interest Buttons
    interests.forEach(interest => {
        const button = document.createElement('button');
        button.classList.add('interest-btn');
        button.textContent = interest;
        button.dataset.interest = interest;
        interestsContainer.appendChild(button);

        // 2. Add Click Listener for Selection
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const interest = button.dataset.interest;

            if (button.classList.contains('active')) {
                selectedInterests.push(interest);
            } else {
                selectedInterests = selectedInterests.filter(i => i !== interest);
            }
            displayNews(); 
        });
    });

    // 3. Display News
    function displayNews() {
        const feedContainer = document.querySelector('.feed-container');
        feedContainer.innerHTML = ''; // Clear existing news

        if (selectedInterests.length === 0) {
            // Create a styled placeholder message
            const placeholder = document.createElement('div');
            placeholder.classList.add('placeholder-message');
            placeholder.textContent = 'Select an interest to see your personalized news feed.';
            feedContainer.appendChild(placeholder);
            return;
        }

        // --- Placeholder Content ---
        const dummyArticles = {
            Technology: [
                { title: 'New AI Model Released', description: 'A breakthrough in AI has been announced, promising to change the tech landscape.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1620712943543-285820f4c0a4?q=80&w=1632&auto=format&fit=crop' },
                { title: 'The Future of Quantum Computing', description: 'Experts discuss the next decade of quantum advancements.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1532187643623-7f85855d49a3?q=80&w=1470&auto=format&fit=crop' },
            ],
            Sports: [
                { title: 'Championship Finals Tonight', description: 'The top two teams face off in a highly anticipated match.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1470&auto=format&fit=crop' },
            ],
            Business: [
                 { title: 'Market Hits All-Time High', description: 'Investors are optimistic as the stock market reaches a new peak.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1554224155-169544351742?q=80&w=1470&auto=format&fit=crop' },
            ]
        };

        selectedInterests.forEach(interest => {
            if (dummyArticles[interest]) {
                dummyArticles[interest].forEach(articleData => {
                    const articleElement = createNewsArticle(articleData);
                    feedContainer.appendChild(articleElement);
                });
            }
        });
    }

    // 4. Create a News Article element
    function createNewsArticle(article) {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('news-article');

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('article-image');
        imageDiv.style.backgroundImage = `url(${article.imageUrl})`;

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('article-content');

        const title = document.createElement('h3');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description;

        const link = document.createElement('a');
        link.textContent = 'Read More';
        link.href = article.url;
        link.target = '_blank';

        contentDiv.appendChild(title);
        contentDiv.appendChild(description);
        contentDiv.appendChild(link);

        articleDiv.appendChild(imageDiv);
        articleDiv.appendChild(contentDiv);

        return articleDiv;
    }
    
    // Initial placeholder message
    displayNews(); 
});
