import samirapi from './src';

 async function main(){
      const gptResponse = await samirapi.gpt("Hello, how are you?");
      console.log("GPT Response:", gptResponse);
 }

 main();