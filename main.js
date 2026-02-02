document.addEventListener('DOMContentLoaded', () => {
    const interests = ['K-Pop', 'K-Drama', 'K-Food', 'K-Beauty'];
    const interestsContainer = document.querySelector('.interests-container');
    let selectedInterests = [];

    // Helper function to create a news article element
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

    // Main function to display news based on selected interests
    function displayNews() {
        const feedContainer = document.querySelector('.feed-container');
        feedContainer.innerHTML = ''; // Clear existing news

        if (selectedInterests.length === 0) {
            const placeholder = document.createElement('div');
            placeholder.classList.add('placeholder-message');
            placeholder.textContent = '관심있는 K-컬처 주제를 선택하고 최신 소식을 받아보세요!';
            feedContainer.appendChild(placeholder);
            return;
        }

        // --- K-Culture Dummy Articles (with corrected syntax) ---
        const dummyArticles = {
            'K-Pop': [
                { title: 'Global Idol Group Announces World Tour', description: 'The sensational K-Pop group will be performing in 15 countries, starting next month.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1593305842131-2795a4a61a0e?q=80&w=2670&auto=format&fit=crop' },
                { title: "Rookie Group's Debut Album Tops Charts", description: 'A new girl group has taken the world by storm with their powerful vocals and choreography.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?q=80&w=2670&auto=format&fit=crop' },
            ],
            'K-Drama': [
                { title: 'New Historical Drama Captivates Audiences', description: 'With stunning cinematography and a gripping plot, this new series is a must-watch.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?q=80&w=2574&auto=format&fit=crop' },
            ],
            'K-Food': [
                 { title: 'The Rise of Vegan Kimchi', description: 'Chefs are reinventing the classic Korean dish with plant-based ingredients.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1598612188048-f235b6757134?q=80&w=2670&auto=format&fit=crop' },
            ],
            'K-Beauty': [
                 { title: 'Glass Skin: The Skincare Trend Here to Stay', description: 'Learn the secrets to achieving a luminous, clear complexion with these K-Beauty tips.', url: '#', imageUrl: 'https://images.unsplash.com/photo-1599450308018-8d2a45d0a647?q=80&w=2574&auto=format&fit=crop' },
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

    // --- Initialization ---

    // 1. Generate Interest Buttons
    interestsContainer.innerHTML = ''; // Clear any placeholders
    interests.forEach(interest => {
        const button = document.createElement('button');
        button.classList.add('interest-btn');
        button.textContent = interest;
        button.dataset.interest = interest;
        interestsContainer.appendChild(button);

        // Add click listener for selection
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

    // 2. Initial call to display the placeholder message
    displayNews();
});
