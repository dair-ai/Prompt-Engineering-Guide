## Prompt Introduction

This guide covers the basics of standard prompts to provide a rough idea on how to use prompts to interact and instruct large language models (LLMs). 

All examples are tested with `text-davinci-003` (using OpenAI's playground) unless otherwise specified. It uses the default configurations, e.g., `temperature=0.7` and `top-p=1`.

Before starting with some basic examples, keep in mind that your results may vary depending on the version of LLM you are using. 

---

You can already achieve a lot with prompts, but the quality of results depends on how much information you provide it. A prompt can contain information like the `instruction` or `question` you are passing to the model and including other details such as `inputs` or `examples`. 

Here is a basic example of a simple prompt:

```
The sky is
```

Output:
```
blue

The sky is blue on a clear day. On a cloudy day, the sky may be gray or white.
```

As you can see, the language model outputs a continuation of strings that make sense give the context `"The sky is"`. The output might be unexpected or far from the task we want to accomplish. 

This basic example also highlights the necessity to provide more context or instructions on what specifically we want to achieve.

Let's try to improve it a bit:

```
Complete the sentence: 

The sky is
```

Output

```
 so  beautiful today.
```

Is that better? Well, we told the model to complete the sentence so the result looks a lot better as it follows exactly what we told it to do ("complete the sentence") . This approach of instructing the model to perform a task is what's referred to as **prompt engineering**. 

The example above is a basic illustration of what's possible with LLMs today. Today's LLMs are able to perform all kinds of advanced tasks that range from text summarization to mathematical reasoning to code generation.

We will cover more of these capabilities in this guide but also cover other areas of interest such as advanced prompting techniques and research topics around prompt engineering. 