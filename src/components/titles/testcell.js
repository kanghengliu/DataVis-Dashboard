import modifyTconst from './titlesid';

// Example usage within an async function
async function getTitleTconst() {
  const title = 'Inception'; // Example title
  try {
    const tconst = await modifyTconst(title);
    console.log(`The tconst for "${title}" is ${tconst}.`);
  } catch (error) {
    console.error('Failed to get tconst:', error);
  }
}

getTitleTconst();
