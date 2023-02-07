## Basic Prompts Usage (WIP)

In the previous guide, we introduced and gave a basic example of a prompt. 

In this guide, we will provide more examples of how prompts are used and introduce key concepts that will be important for more the more advanced guides. 

Often, the best way to learn concepts is by running through examples. Here are a few examples of how prompt engineering can be used to achieve all types of interesting and different tasks. 


## Text Summarization
One of the standard tasks in natural language generation is text summarization. Text summarization can include many different flavors and domains. In fact, one of the most promising applications of language models is the ability to summarize articles and concepts into quick and easy to read summaries. Let's try a basic summarization task using prompts.

Let's say I am interested to learn about antibiotics, I could try a prompt like this:

```
Explain antibiotics

A:
```

Output
```
Antibiotics are a type of medication used to treat bacterial infections. They work by either killing the bacteria or preventing them from reproducing, allowing the body’s immune system to fight off the infection. Antibiotics are usually taken orally in the form of pills, capsules, or liquid solutions, or sometimes administered intravenously. They are not effective against viral infections, and using them inappropriately can lead to antibiotic resistance.
```

The "A:" is an explicit prompt format that's used in question answering. I used it here to tell the model that there is an expected further. In this example, it's not clear how this is useful vs not using it but we will leave it that for later examples. Let's just assume that this is too much information and want to summarize it further. In fact, we can instruct the model to summarize into one sentence like so:

```
Antibiotics are a type of medication used to treat bacterial infections. They work by either killing the bacteria or preventing them from reproducing, allowing the body’s immune system to fight off the infection. Antibiotics are usually taken orally in the form of pills, capsules, or liquid solutions, or sometimes administered intravenously. They are not effective against viral infections, and using them inappropriately can lead to antibiotic resistance.

Explain the above in one sentence:
```

Output
```
Antibiotics are medications used to treat bacterial infections by either killing the bacteria or stopping them from reproducing, but they are not effective against viruses and overuse can lead to antibiotic resistance.
```

Without paying too much attention to the accuracy of the output above, which is something we will touch on in a later guide, the model tried to summarize the paragraph in one sentence. You can get clever with the instructions but we will leave that for a later chapter. Feel free to pause here an experiment to see if you get better results.

## Information Extraction
While language models are trained to perform natural language generation and related tasks, it's also very capable of performing classification and a range of other natural language processing (NLP) tasks. 

Here is an example of a prompt that extracts information from a given paragraph.

```
Author-contribution statements and acknowledgements in research papers should state clearly and specifically whether, and to what extent, the authors used AI technologies such as ChatGPT in the preparation of their manuscript and analysis. They should also indicate which LLMs were used. This will alert editors and reviewers to scrutinize manuscripts more carefully for potential biases, inaccuracies and improper source crediting. Likewise, scientific journals should be transparent about their use of LLMs, for example when selecting submitted manuscripts.

Mention the large language model based product mentioned in the paragraph above:

The large language model based product mentioned in the paragraph above is ChatGPT.

```

Output
```
The large language model based product mentioned in the paragraph above is ChatGPT.
```

There are many ways we can improve the results above, but this is already very useful. 

By now it should be obvious that you can ask the model to perform different tasks by simply instructing it what to do. That's a powerful capability that AI product builder are already using to build powerful products and experiences.


Paragraph source: [ChatGPT: five priorities for research](https://www.nature.com/articles/d41586-023-00288-7) 


## Text Classification
So far, we have used simple instructions to perform a task. As a prompt engineer, you will need to get better at providing better instructions. But that's not all! You will also find that for harder use cases, just providing instructions won't be enough. This is where you need to think more about the context and the different elements you can use in a prompt. Other elements you can provide are `input data` or `examples`. 

Let's try to demonstrate this by providing an example of text classification.

```
Classify the text into neutral, negative or positive. 

Text: I think the food was okay. 
Sentiment:
```

Output
```
Neutral
```

We gave the instruction to classify the text and the model responded with `'Neutral'` which is correct. Nothing is wrong with this but let's say that what we really need is for the model to give the label in the exact format we want. So instead of `Neutral` we want it to return `neutral`. How do we achieve this. There are different ways to do this. We care about specificity here, so the more information we can provide the prompt the better results. We can try providing examples to specific the correct behavior. Let's try again:

```
Classify the text into neutral, negative or positive. 

Text: I think the vacation is okay.
Sentiment: neutral 

Text: I think the food was okay. 
Sentiment:
```

Output
```
neutral
```

Perfect! This time the model returned `neutral` which is the specific label I was looking for. It seems that the example provided in the prompt helped the model to be specific in its output. To highlight why sometimes being specific is important, checkout this example and spot the problem:

```
Classify the text into nutral, negative or positive. 

Text: I think the vacation is okay.
Sentiment:
```

Output
```
Neutral
```

What is the problem here?

## Role-Playing
Perhaps one of the more interesting things you can achieve with prompt engineering is telling the system how to behave, its intent, and identity. This is particularly useful when you are building conversational systems. 

For instance, let's create a conversational system that's able to give more technical and scientific responses to questions. 

```
The following is a conversation with an AI research assistant. The assistant tone is technical and scientific.

Human: Hello, who are you?
AI: Greeting! I am an AI research assistant. How can I help you today?
Human: Can you tell me about the creation of blackholes?
AI:
```

Output
```
Sure! Black holes are regions of spacetime where the gravitational force is so strong that nothing, not even light, can escape from it. They are created when a very massive star dies and its core collapses in on itself, forming a singularity of infinite density. The intense gravity of the singularity pulls in all the matter and radiation around it, creating the black hole.
```

Our AI research assistant sounds a bit too technical, right? Okay, let's change this behavior and instruct the system to give more accessible answers. 

```
The following is a conversation with an AI research assistant. The assistant answers should be easy to understand even by primary school students.

Human: Hello, who are you?
AI: Greeting! I am an AI research assistant. How can I help you today?
Human: Can you tell me about the creation of blackholes?
AI: 
```

Output
```
Sure! Black holes are created when a very massive star runs out of fuel and collapses in on itself. The gravity of the star is so strong that nothing, not even light, can escape its pull. This creates a point in space-time with an intense gravitational force called a black hole.
```

I think we made some progress. You can continue improving it. I am sure if you add more examples you might get even better results. 

## Code Generation
One application where LLMs are quite effective at is code generation. Copilot is a great example of this. There is a vast number of code generation tasks you can perform with clever prompts. Let's look at a few examples below.



## Reasoning
Perhaps one of the most difficult tasks for an LLM today is one that requires some form of reasoning. Reasoning is one the areas that I am most excited about due the types of complex applications that can emerge from LLMs. 

That said, current LLMs struggle to perform any type of reasoning.  


