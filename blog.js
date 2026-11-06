const feed = document.querySelector('.blog-feed');

if (feed) {
  const sortControl = document.querySelector('#post-sort');
  const topicButtons = [...document.querySelectorAll('.topic-button')];
  const emptyMessage = feed.querySelector('.blog-empty');
  let selectedTopic = 'all';

  function updateFeed() {
    const posts = [...feed.querySelectorAll('.blog-post')];
    const visiblePosts = posts.filter(post =>
      selectedTopic === 'all' || post.dataset.topic === selectedTopic
    );
    const newestFirst = sortControl.value === 'newest';

    visiblePosts.sort((a, b) => {
      const dateA = Date.parse(a.querySelector('time').dateTime);
      const dateB = Date.parse(b.querySelector('time').dateTime);
      return newestFirst ? dateB - dateA : dateA - dateB;
    });

    posts.forEach(post => { post.hidden = !visiblePosts.includes(post); });
    visiblePosts.forEach(post => feed.append(post));
    emptyMessage.hidden = visiblePosts.length > 0;
    emptyMessage.textContent = posts.length && selectedTopic !== 'all'
      ? 'No posts in this topic yet.'
      : 'No posts yet. Check back soon.';
  }

  topicButtons.forEach(button => {
    button.addEventListener('click', () => {
      selectedTopic = button.dataset.topic;
      topicButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      updateFeed();
    });
  });

  sortControl.addEventListener('change', updateFeed);
  updateFeed();
}
