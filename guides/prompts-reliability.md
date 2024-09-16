## Reliability

We have seen already how effective well-crafted prompts can be for various tasks using techniques like few-shot learning. As we think about building real-world applications on top of LLMs, it becomes crucial to think about the reliability of these language models. This guide focuses on demonstrating effective prompting techniques to improve the reliability of LLMs like GPT-3. Some topics of interest include generalizability, calibration, biases, social biases, and factuality to name a few.

**Note that this section is under heavy development.**

Topics:
- [Factuality](#factuality)
- [Biases](#biases)
- ...

---
## Factuality
LLMs have a tendency to generate responses that sounds coherent and convincing but can sometimes be made up. Improving prompts can help improve the model to generate more accurate/factual responses and reduce the likelihood to generate inconsistent and made up responses. 

Some solutions might include:
- provide ground truth (e.g., related article paragraph or Wikipedia entry) as part of context to reduce the likelihood of the model producing made up text.
- configure the model to produce less diverse responses by decreasing the probability parameters and instructing it to admit (e.g., "I don't know") when it doesn't know the answer. 
- provide in the prompt a combination of examples of questions and responses that it might know about and not know about

Let's look at a simple example:

*Prompt:*
```
Q: What is an atom? 
A: An atom is a tiny particle that makes up everything. 

Q: Who is Alvan Muntz? 
A: ? 

Q: What is Kozar-09? 
A: ? Q: 

How many moons does Mars have? 
A: Two, Phobos and Deimos. 

Q: Who is Neto Beto Roberto? 
```

*Output:*
```
A: ?
```

I made up the name "Neto Beto Roberto" so the model is correct in this instance. Try to change the question a bit and see if you can get it to work. There are different ways you can improve this further based on all that you have learned so far.

---
## Biases
LLMs can produce problematic generations that can potentially be harmful and display biases that could deteriorate the performance of the model on downstream tasks. Some of these can be mitigates through effective prompting strategies but might require more advanced solutions like moderation and filtering. 

### Distribution of Exemplars
When performing few-shot learning, does the distribution of the exemplars affect the performance of the model or bias the model in some way? We can perform a simple test here.

*Prompt:*
```
Q: I just got the best news ever!
A: Positive

Q: We just got a raise at work!
A: Positive

Q: I'm so proud of what I accomplished today.
A: Positive

Q: I'm having the best day ever!
A: Positive

Q: I'm really looking forward to the weekend.
A: Positive

Q: I just got the best present ever!
A: Positive

Q: I'm so happy right now.
A: Positive

Q: I'm so blessed to have such an amazing family.
A: Positive

Q: The weather outside is so gloomy.
A: Negative

Q: I just got some terrible news.
A: Negative

Q: That left a sour taste.
A:
```

*Output:*
```
Negative
```

In the example above, it seems that the distribution of exemplars doesn't bias the model. This is good. Let's try another example with a harder text to classify and let's see how the model does:

*Prompt:*
```
Q: The food here is delicious!
A: Positive 

Q: I'm so tired of this coursework.
A: Negative

Q: I can't believe I failed the exam.
A: Negative

Q: I had a great day today!
A: Positive 

Q: I hate this job.
A: Negative

Q: The service here is terrible.
A: Negative

Q: I'm so frustrated with my life.
A: Negative

Q: I never get a break.
A: Negative

Q: This meal tastes awful.
A: Negative

Q: I can't stand my boss.
A: Negative

Q: I feel something.
A:
```

*Output:*
```
Negative
```

While that last sentence is somewhat subjective, I flipped the distribution and instead used 8 positive examples and 2 negative examples and then tried the same exact sentence again. Guess what the model responded? It responded "Positive". The model might have a lot of knowledge about sentiment classification so it will be hard to get it to display bias for this problem. The advice here is to avoid skewing the distribution and instead provide more balanced number of examples for each label. For harder tasks where the model doesn't have too much knowledge of, it will likely struggle more. 


### Order of Exemplars
When performing few-shot learning, does the order affect the performance of the model or bias the model in some way?

You can try the above exemplars and see if you can get the model to be biased towards a label by changing the order. The advice is to randomly order exemplars. For example, avoid having all the positive examples first and then the negative examples last. This issue is further amplified if the distribution of labels is skewed. Always ensure to experiment a lot to reduce this type of biasness.

---

Other upcoming topics:
- Perturbations
- Spurious Correlation
- Domain Shift
- Toxicity
- Hate speech / Offensive content
- Stereotypical bias 
- Gender bias
- Coming soon!
- Red Teaming

---
## References
- [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073) (Dec 2022)
- [Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?](https://arxiv.org/abs/2202.12837) (Oct 2022)
- [Prompting GPT-3 To Be Reliable](https://arxiv.org/abs/2210.09150) (Oct 2022)
- [On the Advance of Making Language Models Better Reasoners](https://arxiv.org/abs/2206.02336) (Jun 2022)
- [Unsolved Problems in ML Safety](https://arxiv.org/abs/2109.13916) (Sep 2021)
- [Red Teaming Language Models to Reduce Harms: Methods, Scaling Behaviors, and Lessons Learned](https://arxiv.org/abs/2209.07858) (Aug 2022)
- [StereoSet: Measuring stereotypical bias in pretrained language models](https://aclanthology.org/2021.acl-long.416/) (Aug 2021)
- [Calibrate Before Use: Improving Few-Shot Performance of Language Models](https://arxiv.org/abs/2102.09690v2) (Feb 2021)
- [Techniques to improve reliability - OpenAI Cookbook](https://github.com/openai/openai-cookbook/blob/main/techniques_to_improve_reliability.md)

---
[Previous Section (Adversarial Prompting)](./prompts-adversarial.md)

[Next Section (Miscellaneous)](./prompts-miscellaneous.md)
