# Prompt Introduction

This guide covers the basics of standard prompts to provide a rough idea on how to use prompts to interact and instruct large language models (LLMs). 

All examples are tested with `text-davinci-003` (using OpenAI's playground) unless otherwise specified. It uses the default configurations, e.g., `temperature=0.7` and `top-p=1`.

Before starting with some basic examples, keep in mind that your results may vary depending on the version of LLM you are using. 

---

## Basic Prompts

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

Is that better? Well, we told the model to complete the sentence so the result looks a lot better as it follows exactly what we told it to do ("complete the sentence"). This approach of instructing the model to perform a task is what's referred to as **prompt engineering**. 

The example above is a basic illustration of what's possible with LLMs today. Today's LLMs are able to perform all kinds of advanced tasks that range from text summarization to mathematical reasoning to code generation.

You can try other simple tasks by using simple commands to instruct the model like "Write", "Classify", "Summarize", "Translate", "Order", etc.

Keep in mind that you also need to experiment a lot so see what works best. Trying different instructions with different keywords and data and see what works best for your particular use case and task. Usually, the mode specific and relevant the context is to the task you are trying to perform, the better. We will touch on the importance of sampling and adding more context in the upcoming guides.

We will cover more of these capabilities in this guide but also cover other areas of interest such as advanced prompting techniques and research topics around prompt engineering. 

---
## Standard Prompts

We have tried a very simple prompt above. A standard prompt has the following format:

```
<Question>?
```
 
This can be formatted into a QA format, which is standard in a lot of QA dataset, as follows:

```
Q: <Question>?
A: 
```

Given the standard format above, one popular and effective technique to prompting is referred to as few-shot prompting where we provide exemplars. Few-shot prompts can be formatted as follows:

```
<Question>?
<Answer>

<Question>?
<Answer>

<Question>?
<Answer>

<Question>?

```


And you can already guess that its QA format version would look like this:

```
Q: <Question>?
A: <Answer>

Q: <Question>?
A: <Answer>

Q: <Question>?
A: <Answer>

Q: <Question>?
A:
```

Keep in mind that it's not required to use QA format. The format depends on the task at hand. For instance, you can perform a simple classification task and give exemplars that demonstrate the task as follows:

```
This is awesome! // Positive
This is bad! // Negative
Wow that movie was rad! // Positive
What a horrible show! //
```

Output
```
Negative
```

Few-shot prompts enable in-context learning which is the ability of language models to learn tasks given only a few examples. We will see more of this in action in the upcoming guides.

---
## Elements of a Prompt

As we cover more and more examples and applications that are possible with prompt engineering, you will notice that there are certain elements that make up a prompt. 

A prompt can be composed of a question, instruction, input data, and examples. A question or instruction is a required component of a prompt. Depending on the task at hand, you might find it useful to include more information like data and examples. More on this in the upcoming guides.