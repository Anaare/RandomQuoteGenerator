const key = "DKvhYllD2Au6nSpW93ph1Q==rLgs0k73umEie2zV";

const topics = [
  "age",
  "alone",
  "amazing",
  "anger",
  "architecture",
  "art",
  "attitude",
  "beauty",
  "best",
  "birthday",
  "business",
  "car",
  "change",
  "communication",
  "computers",
  "cool",
  "courage",
  "dad",
  "dating",
  "death",
  "design",
  "dreams",
  "education",
  "environmental",
  "equality",
  "experience",
  "failure",
  "faith",
  "family",
  "famous",
  "fear",
  "fitness",
  "food",
  "forgiveness",
  "freedom",
  "friendship",
  "funny",
  "future",
  "god",
  "good",
  "government",
  "graduation",
  "great",
  "happiness",
  "health",
  "history",
  "home",
  "hope",
  "humor",
  "imagination",
  "inspirational",
  "intelligence",
  "jealousy",
  "knowledge",
  "leadership",
  "learning",
  "legal",
  "life",
  "love",
  "marriage",
  "medical",
  "men",
  "mom",
  "money",
  "morning",
  "movies",
  "success",
];

/* RETURNS PROMISE! */
const randomQuote = async () => {
  try {
    const randTopic = Math.floor(Math.random() * topics.length);
    const response = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${topics[randTopic]}`,
      {
        headers: { "X-Api-Key": key },
      }
    );
    const [data] = await response.json();
    return data.quote;
  } catch (error) {
    console.log(error);
  }
};

const randomSymbol = async () => {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/emoji?name=symbols`,
      {
        headers: { "X-Api-Key": key },
      }
    );
    const symbolsArray = await response.json();
    const randSymbol = Math.floor(Math.random() * symbolsArray.length);
    return symbolsArray[randSymbol].character;
  } catch (error) {
    console.log(error);
  }
};

const dadJokes = async () => {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/dadjokes`, {
      headers: { "X-Api-Key": key },
    });

    const [data] = await response.json();
    return data.joke;
  } catch (error) {
    console.log(error);
  }
};

const displayQuote = async () => {
  const quote_one = (await randomQuote()) || "No quote available";
  const symbol = (await randomSymbol()) || "❓";
  const dad_joke = (await dadJokes()) || "No joke available";

  console.log(
    `Quote of the day: ${quote_one} ${symbol} 
    Here's a dad joke to better your mood: ${dad_joke}`
  );
};

displayQuote();
