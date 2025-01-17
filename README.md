# @samirxpikachu/apis-samir

[![jsr](https://img.shields.io/badge/jsr-@samirxpikachu/apis--samir-blue?style=flat-square)](https://jsr.io/@samirxpikachu/apis-samir)

A comprehensive TypeScript API client providing access to 50+ services including image manipulation, AI models, social media integration, anime data, and utility functions. Built with type safety and ease of use in mind.

## Features

- 🖼️ **Image Processing**: Generate, manipulate, and transform images
- 🤖 **AI Integration**: Access multiple AI models including GPT, PALM, Llama3, and Gemini
- 📱 **Social Media**: Download content from TikTok, Facebook, Instagram, and more
- 📺 **Anime Services**: Fetch data from AniList, MyAnimeList, and other anime sources
- 🛠️ **Utility Functions**: Currency conversion, weather data, QR codes, and more
- 🔍 **Search Capabilities**: Search across Pinterest, Google Images, Spotify, and various platforms

## Installation

Install using JSR:

```bash
jsr add @samirxpikachu/apis-samir
```

## Quick Start

```typescript
import samirapi from "@samirxpikachu/apis-samir";

async function main() {
  try {   
    const animeInfo = await samirapi.animeDetails("Attack on Titan");
    console.log("Anime Details:", animeInfo);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
```

## API Categories

### 🖼️ Image Services

```typescript
// Generate images
await samirapi.imagine(prompt);
await samirapi.animagine(prompt, resolution, model);
await samirapi.niji(prompt, resolution);

// Image manipulation
await samirapi.artify(imageUrl);
await samirapi.togta(imageUrl);
await samirapi.remBackground(imageUrl);
await samirapi.pet(imageUrl);

// Code & text to image
await samirapi.html2image(htmlCode);
await samirapi.snippet(code, theme, language);
await samirapi.note(text);
```

### 🤖 AI & Text Services

```typescript
// Language Models
await samirapi.gpt(prompt);
await samirapi.llama3(prompt, systemPrompt);
await samirapi.gemini(prompt);
await samirapi.mixtral142B(prompt);

// Text Processing
await samirapi.detectLanguage(text);
await samirapi.detectHumanAI(text);
await samirapi.generatePrompt(text);

// Text Storage
await samirapi.pastebin(text);
await samirapi.hastebin(text);
await samirapi.nekobin(code);
```

### 📱 Social Media Services

```typescript
// Content Download
await samirapi.tiktok(url);
await samirapi.Instagram(url);
await samirapi.Twitter(url);
await samirapi.facebook(url);
await samirapi.spotifydl(url);

// Profile Data
await samirapi.tikstalk(username);
await samirapi.tweetStalk(username);
```

### 📺 Anime Services

```typescript
// User & Anime Data
await samirapi.anilistUser(username);
await samirapi.animeDetails(title);
await samirapi.animeTop(category);

// MyAnimeList Integration
await samirapi.malAnimeSearch(query);
await samirapi.malMangaSearch(query);
await samirapi.malTopAiring();
await samirapi.malUpcoming();
```

### 🔍 Search Services

```typescript
await samirapi.searchPinterest(query);
await samirapi.googleImageSearch(query);
await samirapi.spotifySearch(query);
await samirapi.unsplashSearch(query);
await samirapi.stackOverflowSearch(query);
```

### 🛠️ Utility Services

```typescript
// Communication
await samirapi.getTempMail();
await samirapi.getInbox(email);
await samirapi.shortenUrl(url);

// Information
await samirapi.getWeather(city);
await samirapi.news();
await samirapi.dictionary(word);
await samirapi.convert(amount, fromCurrency, toCurrency);

// Media Processing
await samirapi.ytTranscript(url);
await samirapi.transcribe(audioUrl);
await samirapi.vocalRev(audioUrl);
```

## Error Handling

The API uses standard Promise-based error handling. Always wrap API calls in try-catch blocks:

```typescript
try {
  const result = await samirapi.imagine("sunset");
} catch (error) {
  console.error("Error:", error);
}
```


## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
6. Add your own apis

## License

This project is licensed under the   [Apache License](./LICENSE) - see the LICENSE file for details.

## Support

- Create an issue on GitHub [https://github.com/samirxpikachuio/samirApis/issues]
- Join our Telegram [https://t.me/Architectdevs]
- Email support: [samirchowdhury552@gmail.com]

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for release history.
