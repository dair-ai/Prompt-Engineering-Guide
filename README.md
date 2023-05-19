# Prompt Engineering Guide

Prompt engineering is a relatively new discipline for developing and optimizing prompts to efficiently use language models (LMs) for a wide variety of applications and research topics. Prompt engineering skills help to better understand the capabilities and limitations of large language models (LLMs). Researchers use prompt engineering to improve the capacity of LLMs on a wide range of common and complex tasks such as question answering and arithmetic reasoning. Developers use prompt engineering to design robust and effective prompting techniques that interface with LLMs and other tools.

Motivated by the high interest in developing with LLMs, we have created this new prompt engineering guide that contains all the latest papers, learning guides, lectures, references, and tools related to prompt engineering.

Happy Prompting!

Due to high demand, we are partnering with Maven to deliver a new course on Prompt Engineering for LLMs. If you are interested, [join the waitlist](https://maven.com/forms/4f11a9). [Elvis Saravia](https://www.linkedin.com/in/omarsar/), who has worked at companies like Meta AI and Elastic, and has years of experience in AI and LLMs, will be the instructor of this course.

---
## Announcements / Updates

- 🌐 We now support [中文](https://www.promptingguide.ai/zh), [日本語](https://www.promptingguide.ai/jp), [한글](https://www.promptingguide.ai/kr), [Português](https://www.promptingguide.ai/pt), [Turkish](https://www.promptingguide.ai/tr) and [English](https://www.promptingguide.ai/). Welcoming more translations.
- 🎓 New course on Prompt Engineering for LLMs coming soon! Join the [waitlist](ttps://maven.com/forms/4f11a9)!
- 🎉 We have launched new web version of the guide [here](https://www.promptingguide.ai/)
- 🔥 We reached #1 on Hacker News on 21 Feb 2023
- 🎉 The Prompt Engineering Lecture went live [here](https://youtu.be/dOxUroR57xs)

[Join our Discord](https://discord.gg/FUyz9vPAwf)

[Follow us on Twitter](https://twitter.com/dair_ai)

[Subscribe to our Newsletter](https://nlpnews.substack.com/)

---

## Guides
You can also find the most up-to-date guides on our new website [https://www.promptingguide.ai/](https://www.promptingguide.ai/).

- [Prompt Engineering - Introduction](https://www.promptingguide.ai/introduction)
  - [Prompt Engineering - LLM Settings](https://www.promptingguide.ai/introduction/settings)
  - [Prompt Engineering - Basics of Prompting](https://www.promptingguide.ai/introduction/basics)
  - [Prompt Engineering - Prompt Elements](https://www.promptingguide.ai/introduction/elements)
  - [Prompt Engineering - General Tips for Designing Prompts](https://www.promptingguide.ai/introduction/tips)
  - [Prompt Engineering - Examples of Prompts](https://www.promptingguide.ai/introduction/exampleshttps://www.promptingguide.ai/introduction/examples)
- [Prompt Engineering - Techniques](https://www.promptingguide.ai/techniques)
  - [Prompt Engineering - Zero-Shot Prompting](https://www.promptingguide.ai/techniques/zeroshot)
  - [Prompt Engineering - Few-Shot Prompting](https://www.promptingguide.ai/techniques/fewshot)
  - [Prompt Engineering - Chain-of-Thought Prompting](https://www.promptingguide.ai/techniques/cot)
  - [Prompt Engineering - Self-Consistency](https://www.promptingguide.ai/techniques/consistency)
  - [Prompt Engineering - Generate Knowledge Prompting](https://www.promptingguide.ai/techniques/knowledge)
  - [Prompt Engineering - Automatic Prompt Engineer](https://www.promptingguide.ai/techniques/ape)
  - [Prompt Engineering - Active-Prompt](https://www.promptingguide.ai/techniques/activeprompt)
  - [Prompt Engineering - Directional Stimulus Prompting](https://www.promptingguide.ai/techniques/dsp)
  - [Prompt Engineering - ReAct Prompting](https://www.promptingguide.ai/techniques/react)
  - [Prompt Engineering - Multimodal CoT Prompting](https://www.promptingguide.ai/techniques/multimodalcot)
  - [Prompt Engineering - Graph Prompting](https://www.promptingguide.ai/techniques/graph)
- [Prompt Engineering - Applications](https://www.promptingguide.ai/applications)
  - [Prompt Engineering - Program-Aided Language Models](https://www.promptingguide.ai/applications/pal)
  - [Prompt Engineering - Generating Data](https://www.promptingguide.ai/applications/generating)
  - [Prompt Engineering - Generating Code](https://www.promptingguide.ai/applications/coding)
  - [Prompt Engineering - Graduate Job Classification Case Study](https://www.promptingguide.ai/applications/workplace_casestudy)
- [Prompt Engineering - Models](https://www.promptingguide.ai/models)
  - [Prompt Engineering - Flan](https://www.promptingguide.ai/models/flan)
  - [Prompt Engineering - ChatGPT](https://www.promptingguide.ai/models/chatgpt)
  - [Prompt Engineering - LLaMA](https://www.promptingguide.ai/models/llama)
  - [Prompt Engineering - GPT-4](https://www.promptingguide.ai/models/gpt-4)
  - [Prompt Engineering - Model Collection](https://www.promptingguide.ai/models/collection)
- [Prompt Engineering - Risks and Misuses](https://www.promptingguide.ai/risks)
  - [Prompt Engineering - Adversarial Prompting](https://www.promptingguide.ai/risks/adversarial)
  - [Prompt Engineering - Factuality](https://www.promptingguide.ai/risks/factuality)
  - [Prompt Engineering - Biases](https://www.promptingguide.ai/risks/biases)
- [Prompt Engineering - Papers](https://www.promptingguide.ai/papers)
  - [Prompt Engineering - Overviews](https://www.promptingguide.ai/papers#overviews)
  - [Prompt Engineering - Approaches](https://www.promptingguide.ai/papers#approaches)
  - [Prompt Engineering - Applications](https://www.promptingguide.ai/papers#applications)
  - [Prompt Engineering - Collections](https://www.promptingguide.ai/papers#collections)
- [Prompt Engineering - Tools](https://www.promptingguide.ai/tools)
- [Prompt Engineering - Notebooks](https://www.promptingguide.ai/notebooks)
- [Prompt Engineering - Datasets](https://www.promptingguide.ai/datasets)
- [Prompt Engineering - Additional Readings](https://www.promptingguide.ai/readings)


---
## Lecture

We have published a 1 hour lecture that provides a comprehensive overview of prompting techniques, applications, and tools.
- [Video Lecture](https://youtu.be/dOxUroR57xs)
- [Notebook with code](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/notebooks/pe-lecture.ipynb)
- [Slides](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/lecture/Prompt-Engineering-Lecture-Elvis.pdf)

---
## Running the guide locally

To run the guide locally, for example to check the correct implementation of a new translation, you will need to:

1. Install Node >=18.0.0
1. Install `pnpm` if not present in your system. Check [here](https://pnpm.io/installation) for detailed instructions.
1. Install the dependencies: `pnpm i next react react-dom nextra nextra-theme-docs`
1. Boot the guide with `pnpm dev`
2. Browse the guide at `http://localhost:3000/`

---
## Appearances
Some places where we have been featured:
- Wall Street Journal - [ChatGPT Can Give Great Answers. But Only If You Know How to Ask the Right Question](https://www.wsj.com/articles/chatgpt-ask-the-right-question-12d0f035)
- Forbes - [Mom, Dad, I Want To Be A Prompt Engineer](https://www.forbes.com/sites/craigsmith/2023/04/05/mom-dad-i-want-to-be-a-prompt-engineer/?sh=7f1213159c8e)
- Markettechpost - [Best Free Prompt Engineering Resources (2023)](https://www.marktechpost.com/2023/04/04/best-free-prompt-engineering-resources-2023/)


---
If you are using the guide for your work, please cite us as follows:

```
@article{Saravia_Prompt_Engineering_Guide_2022,
author = {Saravia, Elvis},
journal = {https://github.com/dair-ai/Prompt-Engineering-Guide},
month = {12},
title = {{Prompt Engineering Guide}},
year = {2022}
}
```

## License

[MIT License](https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/LICENSE.md)


Feel free to open a PR if you think something is missing here. Always welcome feedback and suggestions. Just open an issue!
