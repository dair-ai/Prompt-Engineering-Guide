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

Let's just assume that this is too much information and want to summarize it further. In fact, we can instruct the model to summarize to one sentence like so:

```
Antibiotics are a type of medication used to treat bacterial infections. They work by either killing the bacteria or preventing them from reproducing, allowing the body’s immune system to fight off the infection. Antibiotics are usually taken orally in the form of pills, capsules, or liquid solutions, or sometimes administered intravenously. They are not effective against viral infections, and using them inappropriately can lead to antibiotic resistance.

Explain the above in one sentence:
```

Output
```
Antibiotics are medications used to treat bacterial infections by either killing the bacteria or stopping them from reproducing, but they are not effective against viruses and overuse can lead to antibiotic resistance.
```

Without paying too much attention to the accuracy of the output above, which is something we will touch on in a later guide, the model tried to summarize the paragraph in one sentence. You can get clever with the instructions but we will leave that for the learner to practice more. 

## Information Extraction
...

## Role-Playing
...

## Reasoning
...