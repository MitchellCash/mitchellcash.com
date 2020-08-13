export async function getArticleExcerpt(articleText) {
  const EXCERPT_LENGTH = 200;
  const lines = articleText.split('\n');
  const filteredArticleText = [];

  // Don't make an excerpt that starts with a new line, heading or other non-paragraph content.
  lines.forEach((line) => {
    let badLine = false;

    if (line === '') {
      badLine = true;
    }

    if (line.charAt(0) === '_') {
      badLine = true;
    }

    if (line.charAt(0) === '#') {
      badLine = true;
    }

    if (!badLine) {
      filteredArticleText.push(line);
    }
  });

  // Get the excerpt from the filtered text first paragraph.
  let articleExcerpt = filteredArticleText[0].substring(0, EXCERPT_LENGTH);

  // If the excerpt is less than the length wanted that is fine.
  if (articleExcerpt.length < EXCERPT_LENGTH) {
    return articleExcerpt;
  }

  // If the excerpt is equal to the length we want let's make sure the last word is a whole
  // word.
  if (articleExcerpt.charAt(EXCERPT_LENGTH - 1) !== '') {
    for (let i = EXCERPT_LENGTH - 1; i > 0; i -= 1) {
      if (articleExcerpt.charAt(i) === ' ') {
        articleExcerpt = filteredArticleText[0].substring(0, i);
        break;
      }
    }
  }

  return `${articleExcerpt}...`;
}

export function getArticleReadingTime(articleText) {
  const WORDS_PER_MINUTE = 200;
  let minutes = 0;
  const words = articleText.split(' ').length;
  minutes = Math.ceil(words / WORDS_PER_MINUTE);
  return minutes;
}
