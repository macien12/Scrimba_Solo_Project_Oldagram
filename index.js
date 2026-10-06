const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const renderEl = document.getElementById("mainEl");

function render(artists) {
    let listItems = ""; 
    for (let i = 0; i < artists.length; i++) {
        listItems += `
        <main>
            <section>
                <div class="container userNameEl">
                    <img src="${artists[i].avatar}" alt="Avatar of artist" class="avatarEl">
                    <div class="nameEl">
                        <h2>${artists[i].name}</h2>
                        <p>${artists[i].location}</p>
                    </div>
                </div>
            </section>
            <section>
                <div class="container">
                    <!-- Note the data-index="${i}" on both clickable elements -->
                    <img src="${artists[i].post}" alt="Portrait of author" class="likesIncrement mainImg" data-index="${i}">
                    <div id="mediaIcons">
                        <img src="images/icon-heart.png" alt="Small outline of heart" class="likesIncrement socialEl" data-index="${i}">
                        <img src="images/icon-comment.png" alt="Small black comunicator icon" class="socialEl">
                        <img src="images/icon-dm.png" alt="Small black icon of paper plane" class="socialEl">
                    </div>
                    <!-- Note the unique id="likes-${i}" -->
                    <p class="boldEl"><span id="likes-${i}">${artists[i].likes}</span> Likes</p>
                    <p><span class="boldEl">${artists[i].username}</span> ${artists[i].comment}</p>
                </div>
            </section>
        </main>
        `;
    }
    renderEl.innerHTML = listItems;
}

render(posts);

renderEl.addEventListener("click", function(event) {
    if (event.target.classList.contains("likesIncrement")) {
        // Read index from data-index attribute
        const index = Number(event.target.dataset.index);
        
        if (!isNaN(index) && posts[index]) {
            // Increment the count in the data array
            posts[index].likes += 1;
            
            // Find and update this exact post's span
            const countSpan = document.getElementById(`likes-${index}`);
            if (countSpan) {
                countSpan.textContent = posts[index].likes.toLocaleString();
            }
        } 
    }
});