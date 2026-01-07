// Write your code here!
/**
 * Function to display posts in the DOM
 * @param {Array} posts - The array of post objects from the API
 */
function displayPosts(posts) {
  const postList = document.getElementById('post-list');
  // Clear list before appending to ensure clean state for tests
  postList.innerHTML = '';

  posts.forEach((post) => {
    const li = document.createElement('li');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    // Add content (Tests look for 'title' in h1 and 'body' in p)
    h1.textContent = post.title;
    p.textContent = post.body;

    // Append hierarchy
    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

/**
 * Async function to fetch data and call display function
 */
async function fetchAndDisplayPosts() {
  try {
    // 1. Fetch from JSONPlaceholder posts endpoint
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    // 2. Wait for the response to be converted to JSON
    const data = await response.json();

    // 3. Display the posts
    displayPosts(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// 4. Call the function to start the process
fetchAndDisplayPosts();
