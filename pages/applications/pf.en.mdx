# Prompt Function

## Introduction
When we draw a parallel between GPT's dialogue interface and a programming language's shell, the encapsulation prompt can be thought of as forming a function. This function has a unique name, and when we call this name with the input text, it produces results based on the set internal rules. In a nutshell, we build a reusable prompt with a name that makes it easy to engage with GPT. It's like having a handy tool that lets GPT carry out particular tasks on our behalf – we just need to give the input, and we receive the desired output.

By encapsulating prompts into functions, you can create a series of functions to establish a workflow. Each function represents a specific step or task, and when combined in a particular order, they can automate complex processes or solve problems more efficiently. This approach allows for a more structured and streamlined interaction with GPT, ultimately enhancing its capabilities and making it a powerful tool to accomplish a wide range of tasks.

So before we can use a function, we need to let GPT know about it. Here is a prompt that defines the function.

*Prompt:*
> Let's call this prompt with **meta prompt**.  
This prompt has been tested on GPT3.5 and performs even better on GPT4

```
Hello, ChatGPT! I hope you are doing well. I am reaching out to you for assistance with a specific function. I understand that you have the capability to process information and perform various tasks based on the instructions provided. In order to help you understand my request more easily, I will be using a template to describe the function, input, and instructions on what to do with the input. Please find the details below:

function_name: [Function Name]
input: [Input]
rule: [Instructions on how to process the input]

I kindly request you to provide the output for this function, based on the details I have provided. Your assistance is greatly appreciated. Thank you!
I will replace the text inside the brackets with the relevant information for the function I want you to perform. This detailed introduction should help you understand my request more efficiently and provide the desired output. The format is function_name(input) If you understand, just answer one word with ok.

```


## Examples 

### English study assistant
For example, let's say we want to use GPT to aid us in our English studies. We can simplify the process by creating a series of functions.

This example has been tested on GPT3.5 and performs even better on GPT4

#### Function description

We need to paste the **meta prompt** that was defined above the section in GPT

Then we will create a function `trans_word`.  
This function prompts GPT to translate Chinese into English.

*Prompt:*
```
function_name: [trans_word]
input: ["text"]
rule: [I want you to act as an English translator, spelling corrector and improver. I will provide you with input forms including "text" in any language and you will detect the language, translate it and answer in the corrected of my text, in English.]
```


Write a function that expands text.

*Prompt:*
```
function_name: [expand_word]
input: ["text"]
rule: [Please serve as a Chatterbox, spelling corrector, and language enhancer. I will provide you with input forms including "text" in any language, and output the original language.I want you to Keep the meaning same, but make them more literary.]
```

Write a function that corrects text.

*Prompt:*
```
function_name: [fix_english]
input: ["text"]
rule: [Please serve as an English master, spelling corrector, and language enhancer. I will provide you with input forms including "text", I want you to improve the text's vocabulary and sentences with more natural and elegent. Keep the meaning same.]
```
Finally, you can run the function independently or chain them together.

*Prompt:*
```
trans_word('婆罗摩火山处于享有“千岛之国”美称的印度尼西亚. 多岛之国印尼有4500座之多的火山, 世界著名的十大活火山有三座在这里.')
fix_english('Finally, you can run the function independently or chain them together.')
fix_english(expand_word(trans_word('婆罗摩火山处于享有“千岛之国”美称的印度尼西亚. 多岛之国印尼有4500座之多的火山, 世界著名的十大活火山有三座在这里.')))
```
By representing the functions in this format, you can clearly see each function's name, input, and the rule to process the input. It provides an organized way to understand the functionality and purpose of each step in the workflow

_tips:_
If you don't want ChatGPT to output excessive information, you can simply add a sentence after defining the function's rules.
```
DO NOT SAY THINGS ELSE OK, UNLESS YOU DONT UNDERSTAND THE FUNCTION
```

### Multiple params function
Let's create a function that generates a password by taking five input parameters, and outputs the generated password.

*Prompt:*
```
function_name: [pg]
input: ["length", "capitalized", "lowercase", "numbers", "special"]
rule: [I want you to act as a password generator for individuals in need of a secure password. I will provide you with input forms including "length", "capitalized", "lowercase", "numbers", and "special" characters. Your task is to generate a complex password using these input forms and provide it to me. Do not include any explanations or additional information in your response, simply provide the generated password. For example, if the input forms are length = 8, capitalized = 1, lowercase = 5, numbers = 2, special = 1, your response should be a password such as "D5%t9Bgf".]
```
```
pg(length = 10, capitalized = 1, lowercase = 5, numbers = 2, special = 1)
pg(10,1,5,2,1)
```

### Thought
Now, there already have many projects that are working on programming GPT, such as:
- [GitHub Copilot](https://github.com/features/copilot)
- [Microsoft AI](https://www.microsoft.com/en-us/ai)
- [chatgpt-plugins](https://openai.com/blog/chatgpt-plugins)
- [LangChain](https://github.com/hwchase17/langchain)
- [marvin](https://github.com/PrefectHQ/marvin)

But those projects are designed either for product customer or for users who can code with Python or other programming languages. 
For the average user, use this easy template for daily work and iterate a couple of times. Use a note application to document the function, and it can even be updated to a library. 
Alternatively, some open source ChatGPT tools, such as [ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web), [chatbox](https://github.com/Bin-Huang/chatbox), [PromptAppGPT](https://github.com/mleoking/PromptAppGPT), and [ChatGPT-Desktop](https://github.com/lencx/ChatGPT), can be used. Currently, ChatGPT-Next-Web allows adding a few shots before initializing the new chat. And PromptAppGPT supports low-code development of web applications based on prompt templates and enables anyone to develop AutoGPT-like applications with a few lines of prompts.
We can use this feature to add our function, which can then be used.
