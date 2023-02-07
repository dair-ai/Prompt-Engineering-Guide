# Advanced Prompt Usage
By this point, it should be obvious that it helps to improve prompts to get better results on different tasks. That's the whole idea behind prompt engineering. 

While those examples were fun, let's cover a few concepts more formally before we jump into more advanced concepts. 

---
## Few-Shot Prompts
Before jumping into more advanced concepts, let's review an example where we use few-shot prompts.

Do you recall the previous example where we provided the following task

```
The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 

A: 
```

If we try this again, the model output the following:

```
Yes, the odd numbers in this group add up to 107, which is an even number.
```

Again, this is not the correct response, which not only highlights the limitations of these systems but that there is a need for more advanced prompt engineering. 

Let's try to add some examples, to see if this improves the results.

```
The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.
A: The answer is False.

The odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.
A: The answer is True.

The odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.
A: The answer is True.

The odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.
A: The answer is False.

The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 
A: 
```

Output
```
The answer is True.
```

That didn't work. It seems like basic standard prompting is not enough to get reliable responses for this type of reasoning problem. The example above provides basic information on the task, even with the examples. If you take a closer look at the task, it does involve more reasoning steps. 

More recently, chain-of-thought (CoT) prompting has been popularized to address more complex arithmetic,
commonsense, and symbolic reasoning tasks. So let's talk about CoT next and see if we can solve the above task.

## Chain-of-thought Prompting

Introduced in [Wei et al. (2022)](https://arxiv.org/abs/2201.11903), chain-of-thought prompting uses few chain of thought demonstrations are provided as exemplars in prompting to improve the ability of large language models to perform complex reasoning.

```
The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.
A: Adding all the odd numbers (9, 15, 1) gives 25. The answer is False.

The odd numbers in this group add up to an even number: 17,  10, 19, 4, 8, 12, 24.
A: Adding all the odd numbers (17, 19) gives 36. The answer is True.

The odd numbers in this group add up to an even number: 16,  11, 14, 4, 8, 13, 24.
A: Adding all the odd numbers (11, 13) gives 24. The answer is True.

The odd numbers in this group add up to an even number: 17,  9, 10, 12, 13, 4, 2.
A: Adding all the odd numbers (17, 9, 13) gives 39. The answer is False.

The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 
A:
```

Output
```
Adding all the odd numbers (15, 5, 13, 7, 1) gives 41. The answer is False.
```

Wow! We can see a perfect result when we provided the reasoning step. In fact, we can solve this task by providing even fewer examples, i.e., just one example seems enough:

```
The odd numbers in this group add up to an even number: 4, 8, 9, 15, 12, 2, 1.
A: Adding all the odd numbers (9, 15, 1) gives 25. The answer is False.

The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 
A:
```

Output
```
Adding all the odd numbers (15, 5, 13, 7, 1) gives 41. The answer is False.
```

...