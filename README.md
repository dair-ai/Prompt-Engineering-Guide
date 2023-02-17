# Prompt Engineering Guide

This guide contains a set of recent papers, learning guides, and tools related to prompt engineering. The repo is intended as a research and educational reference for practitioners and developers.

Announcements:

- 📣 Full lecture + notebook + exercises (releasing this weekend (19 Feb) on my [YouTube channel](https://www.youtube.com/channel/UCyna_OxOWL7IEuOwb7WhmxQ))

- 📣 Examples and explainers coming soon!

- [Join our Discord](https://discord.gg/SKgkVT8BGJ) to discuss more about prompt engineering

---

## Table of Contents

- [Guides](#guides)
- [Papers](#papers)
- [Tools & Libraries](#tools--libraries)
- [Datasets](#datasets)
- [Blog, Guides, Tutorials and Other Readings](#blog-guides-tutorials-and-other-readings)

---

## Guides 🔮
The following are a set of guides on prompt engineering developed by us. Guides are work in progress.  

- [Prompt Engineering - Introduction](/guides/prompts-intro.md)
- [Prompt Engineering - Basic Usage](/guides/prompts-basic-usage.md)
- [Prompt Engineering - Advanced Usage](/guides/prompts-advanced-usage.md)
- [Prompt Engineering - Adversarial Prompts](/guides/prompt-adversarial.md)
- [Prompt Engineering - Miscellaneous Topics](/guides/prompt-miscellaneous.md)


## Papers
#### (Sorted by Release Date)

- Surveys / Overviews:

  - [Augmented Language Models: a Survey](https://arxiv.org/abs/2302.07842) (Feb 2023)
  - [A Survey for In-context Learning](https://arxiv.org/abs/2301.00234) (Dec 2022)
  - [Towards Reasoning in Large Language Models: A Survey](https://arxiv.org/abs/2212.10403) (Dec 2022)
  - [Emergent Abilities of Large Language Models](https://arxiv.org/abs/2206.07682) (Jun 2022)
  - [A Taxonomy of Prompt Modifiers for Text-To-Image Generation](https://arxiv.org/abs/2204.13988) (Apr 2022)
  - [Pre-train, Prompt, and Predict: A Systematic Survey of Prompting Methods in Natural Language Processing](https://arxiv.org/abs/2107.13586) (Jul 2021)
- Approaches/Techniques:
  
  - [À-la-carte Prompt Tuning (APT): Combining Distinct Data Via Composable Prompting](https://arxiv.org/abs/2302.07994) (Feb 2023)
  - [GraphPrompt: Unifying Pre-Training and Downstream Tasks for Graph Neural Networks](https://arxiv.org/abs/2302.08043) (Feb 2023)
  - [The Capacity for Moral Self-Correction in Large Language Models](https://arxiv.org/abs/2302.07459) (Feb 2023)
  - [SwitchPrompt: Learning Domain-Specific Gated Soft Prompts for Classification in Low-Resource Domains](https://arxiv.org/abs/2302.06868) (Feb 2023)
  - [Evaluating the Robustness of Discrete Prompts](https://arxiv.org/abs/2302.05619) (Feb 2023)
  - [Compositional Exemplars for In-context Learning](https://arxiv.org/abs/2302.05698) (Feb 2023)
  - [Hard Prompts Made Easy: Gradient-Based Discrete Optimization for Prompt Tuning and Discovery](https://arxiv.org/abs/2302.03668) (Feb 2023)
  - [Multimodal Chain-of-Thought Reasoning in Language Models](https://arxiv.org/abs/2302.00923) (Feb 2023)
  - [Large Language Models Can Be Easily Distracted by Irrelevant Context](https://arxiv.org/abs/2302.00093) (Feb 2023)
  - [Synthetic Prompting: Generating Chain-of-Thought Demonstrations for Large Language Models](https://arxiv.org/abs/2302.00618) (Feb 2023)
  - [Progressive Prompts: Continual Learning for Language Models](https://arxiv.org/abs/2301.12314) (Jan 2023)
  - [Batch Prompting: Efficient Inference with LLM APIs](https://arxiv.org/abs/2301.08721) (Jan 2023)
  - [On Second Thought, Let's Not Think Step by Step! Bias and Toxicity in Zero-Shot Reasoning](https://arxiv.org/abs/2212.08061) (Dec 2022)
  - [Constitutional AI: Harmlessness from AI Feedback](https://arxiv.org/abs/2212.08073) (Dec 2022)
  - [Successive Prompting for Decomposing Complex Questions](https://arxiv.org/abs/2212.04092) (Dec 2022)
  - [Discovering Language Model Behaviors with Model-Written Evaluations](https://arxiv.org/abs/2212.09251) (Dec 2022)
  - [Structured Prompting: Scaling In-Context Learning to 1,000 Examples](https://arxiv.org/abs/2212.06713) (Dec 2022)
  - [PAL: Program-aided Language Models](https://arxiv.org/abs/2211.10435) (Nov 2022)
  - [Large Language Models Are Human-Level Prompt Engineers](https://arxiv.org/abs/2211.01910) (Nov 2022)
  - [Ignore Previous Prompt: Attack Techniques For Language Models](https://arxiv.org/abs/2211.09527) (Nov 2022)
  - [Machine Generated Text: A Comprehensive Survey of Threat Models and Detection Methods](https://arxiv.org/abs/2210.07321) (Nov 2022)
  - [Teaching Algorithmic Reasoning via In-context Learning](https://arxiv.org/abs/2211.09066) (Nov 2022)
  - [Enhancing Self-Consistency and Performance of Pre-Trained Language Models through Natural Language Inference](https://arxiv.org/abs/2211.11875) (Nov 2022)
  - [Ask Me Anything: A simple strategy for prompting language models](https://paperswithcode.com/paper/ask-me-anything-a-simple-strategy-for) (Oct 2022)
  - [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) (Oct 2022)
  - [Prompting GPT-3 To Be Reliable](https://arxiv.org/abs/2210.09150) (Oct 2022)
  - [Decomposed Prompting: A Modular Approach for Solving Complex Tasks](https://arxiv.org/abs/2210.02406) (Oct 2022)
  - [Language Models Are Greedy Reasoners: A Systematic Formal Analysis of Chain-of-Thought](https://arxiv.org/abs/2210.01240v3) (Oct 2022)
  - [Evaluating the Susceptibility of Pre-Trained Language Models via Handcrafted Adversarial Examples](https://arxiv.org/abs/2209.02128) (Sep 2022)
  - [Promptagator: Few-shot Dense Retrieval From 8 Examples](https://arxiv.org/abs/2209.11755) (Sep 2022)
  - [On the Advance of Making Language Models Better Reasoners](https://arxiv.org/abs/2206.02336) (June 2022)
  - [Large Language Models are Zero-Shot Reasoners](https://arxiv.org/abs/2205.11916) (May 2022)
  - [MRKL Systems: A modular, neuro-symbolic architecture that combines large language models, external knowledge sources and discrete reasoning](https://arxiv.org/abs/2205.00445) (May 2022)
  - [Toxicity Detection with Generative Prompt-based Inference](https://arxiv.org/abs/2205.12390) (May 2022)
  - [The Unreliability of Explanations in Few-shot Prompting for Textual Reasoning](https://arxiv.org/abs/2205.03401) (May 2022)
  - [A Taxonomy of Prompt Modifiers for Text-To-Image Generation](https://arxiv.org/abs/2204.13988) (Apr 2022)
  - [PromptChainer: Chaining Large Language Model Prompts through Visual Programming](https://arxiv.org/abs/2203.06566) (Mar 2022)
  - [Self-Consistency Improves Chain of Thought Reasoning in Language Models](https://arxiv.org/abs/2203.11171) (March 2022)
  - [Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?](https://arxiv.org/abs/2202.12837) (Feb 2022)
  - [Chain of Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903) (Jan 2022)
  - [Show Your Work: Scratchpads for Intermediate Computation with Language Models](https://arxiv.org/abs/2112.00114) (Nov 2021)
  - [Generated Knowledge Prompting for Commonsense Reasoning](https://arxiv.org/abs/2110.08387) (Oct 2021)
  - [Reframing Instructional Prompts to GPTk's Language](https://arxiv.org/abs/2109.07830) (Sep 2021)
  - [Design Guidelines for Prompt Engineering Text-to-Image Generative Models](https://arxiv.org/abs/2109.06977) (Sep 2021)
  - [Making Pre-trained Language Models Better Few-shot Learners](https://aclanthology.org/2021.acl-long.295) (Aug 2021)
  - [Fantastically Ordered Prompts and Where to Find Them: Overcoming Few-Shot Prompt Order Sensitivity](https://arxiv.org/abs/2104.08786) (April 2021)
  - [BERTese: Learning to Speak to BERT](https://aclanthology.org/2021.eacl-main.316) (April 2021)
  - [The Power of Scale for Parameter-Efficient Prompt Tuning](https://arxiv.org/abs/2104.08691) (April 2021)
  - [Prompt Programming for Large Language Models: Beyond the Few-Shot Paradigm](https://arxiv.org/abs/2102.07350) (Feb 2021)
  - [Calibrate Before Use: Improving Few-Shot Performance of Language Models](https://arxiv.org/abs/2102.09690) (Feb 2021)
  - [Prefix-Tuning: Optimizing Continuous Prompts for Generation](https://arxiv.org/abs/2101.00190) (Jan 2021)
  - [AutoPrompt: Eliciting Knowledge from Language Models with Automatically Generated Prompts](https://arxiv.org/abs/2010.15980) (Oct 2020)
  - [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) (May 2020)
  - [How Can We Know What Language Models Know?](https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00324/96460/How-Can-We-Know-What-Language-Models-Know) (July 2020)
- Applications:
  
  - [LabelPrompt: Effective Prompt-based Learning for Relation Classification](https://arxiv.org/abs/2302.08068) (Feb 2023)
  - [Prompt Tuning of Deep Neural Networks for Speaker-adaptive Visual Speech Recognition](https://arxiv.org/abs/2302.08102) (Feb 2023)
  - [The Capacity for Moral Self-Correction in Large Language Models](https://arxiv.org/abs/2302.07459) (Feb 2023)
  - [Prompting for Multimodal Hateful Meme Classification](https://arxiv.org/abs/2302.04156) (Feb 2023)
  - [PLACES: Prompting Language Models for Social Conversation Synthesis](https://arxiv.org/abs/2302.03269) (Feb 2023)
  - [Commonsense-Aware Prompting for Controllable Empathetic Dialogue Generation](https://arxiv.org/abs/2302.01441) (Feb 2023)
  - [Crawling the Internal Knowledge-Base of Language Models](https://arxiv.org/abs/2301.12810) (Jan 2023)
  - [Legal Prompt Engineering for Multilingual Legal Judgement Prediction](https://arxiv.org/abs/2212.02199) (Dec 2022)
  - [Investigating Prompt Engineering in Diffusion Models](https://arxiv.org/abs/2211.15462) (Nov 2022)
  - [Learn to Explain: Multimodal Reasoning via Thought Chains for Science Question Answering](https://arxiv.org/abs/2209.09513v2) (Sep 2022)
  - [Conversing with Copilot: Exploring Prompt Engineering for Solving CS1 Problems Using Natural Language](https://arxiv.org/abs/2210.15157) (Oct 2022)
  - [Piloting Copilot and Codex: Hot Temperature, Cold Prompts, or Black Magic?](https://arxiv.org/abs/2210.14699) (Oct 2022)
  - [Plot Writing From Scratch Pre-Trained Language Models](https://aclanthology.org/2022.inlg-main.5) (July 2022)
- Collections:

  - [Chain-of-ThoughtsPapers](https://github.com/Timothyxxx/Chain-of-ThoughtsPapers)
  - [Papers with Code](https://paperswithcode.com/task/prompt-engineering)
  - [Prompt Papers](https://github.com/thunlp/PromptPapers#papers)

## Tools & Libraries
#### (Sorted by Name)

- [AI Test Kitchen](https://aitestkitchen.withgoogle.com)
- [betterprompt](https://github.com/krrishdholakia/betterprompt)
- [DreamStudio](https://beta.dreamstudio.ai)
- [DUST](https://dust.tt)
- [Dyno](https://trydyno.com)
- [EveryPrompt](https://www.everyprompt.com)
- [GPT Index](https://github.com/jerryjliu/gpt_index)
- [GPTTools](https://gpttools.com/comparisontool)
- [hwchase17/adversarial-prompts](https://github.com/hwchase17/adversarial-prompts)
- [Interactive Composition Explorer](https://github.com/oughtinc/ice)
- [LangChain](https://github.com/hwchase17/langchain)
- [LearnGPT](https://www.learngpt.com)
- [Lexica](https://lexica.art)
- [loom](https://github.com/socketteer/loom)
- [Metaprompt](https://metaprompt.vercel.app/?task=gpt)
- [OpenAI Playground](https://beta.openai.com/playground)
- [OpenPrompt](https://github.com/thunlp/OpenPrompt)
- [Playground](https://playgroundai.com)
- [Prodia](https://app.prodia.com/#/)
- [Prompt Base](https://promptbase.com)
- [Prompt Engine](https://github.com/microsoft/prompt-engine)
- [Prompt Generator for OpenAI's DALL-E 2](http://dalle2-prompt-generator.s3-website-us-west-2.amazonaws.com)
- [Promptable](https://promptable.ai)
- [PromptInject](https://github.com/agencyenterprise/PromptInject)
- [Prompts.ai](https://github.com/sevazhidkov/prompts-ai)
- [PromptSource](https://github.com/bigscience-workshop/promptsource)
- [Scale SpellBook](https://scale.com/spellbook)
- [sharegpt](https://sharegpt.com)
- [ThoughtSource](https://github.com/OpenBioLink/ThoughtSource)
- [Visual Prompt Builder](https://tools.saxifrage.xyz/prompt)

## Datasets
#### (Sorted by Name)

- [Anthropic's Red Team dataset](https://github.com/anthropics/hh-rlhf/tree/master/red-team-attempts), [(paper)](https://arxiv.org/abs/2209.07858)
- [Awesome ChatGPT Prompts](https://huggingface.co/datasets/fka/awesome-chatgpt-prompts)
- [DiffusionDB](https://github.com/poloclub/diffusiondb)
- [Midjourney Prompts](https://huggingface.co/datasets/succinctly/midjourney-prompts)
- [P3 - Public Pool of Prompts](https://huggingface.co/datasets/bigscience/P3)
- [PartiPrompts](https://parti.research.google)
- [Real Toxicity Prompts](https://allenai.org/data/real-toxicity-prompts)
- [Stable Diffusion Dataset](https://huggingface.co/datasets/Gustavosta/Stable-Diffusion-Prompts)
- [WritingPrompts](https://www.reddit.com/r/WritingPrompts)

## Blog, Guides, Tutorials and Other Readings
#### (Sorted by Name)

- [3 Principles for prompt engineering with GPT-3](https://www.linkedin.com/pulse/3-principles-prompt-engineering-gpt-3-ben-whately)
- [A beginner-friendly guide to generative language models - LaMBDA guide](https://aitestkitchen.withgoogle.com/how-lamda-works)
- [A Complete Introduction to Prompt Engineering for Large Language Models](https://www.mihaileric.com/posts/a-complete-introduction-to-prompt-engineering)
- [A Generic Framework for ChatGPT Prompt Engineering](https://medium.com/@thorbjoern.heise/a-generic-framework-for-chatgpt-prompt-engineering-7097f6513a0b)
- [AI Content Generation](https://www.jonstokes.com/p/ai-content-generation-part-1-machine)
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [Best 100+ Stable Diffusion Prompts](https://mpost.io/best-100-stable-diffusion-prompts-the-most-beautiful-ai-text-to-image-prompts)
- [Best practices for prompt engineering with OpenAI API](https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api)
- [ChatGPT, AI and GPT-3 Apps and use cases](https://gpt3demo.com)
- [CMU Advanced NLP 2022: Prompting](https://youtube.com/watch?v=5ef83Wljm-M&feature=shares)
- [Curtis64's set of prompt gists](https://gist.github.com/Curtis-64)
- [DALL·E 2 Prompt Engineering Guide](https://docs.google.com/document/d/11WlzjBT0xRpQhP9tFMtxzd0q6ANIdHPUBkMV-YB043U/edit#)
- [DALLE Prompt Book](https://dallery.gallery/the-dalle-2-prompt-book)
- [Diffusion Models: A Practical Guide](https://scale.com/guides/diffusion-models-guide)
- [Exploiting GPT-3 Prompts](https://twitter.com/goodside/status/1569128808308957185)
- [Exploring Prompt Injection Attacks](https://research.nccgroup.com/2022/12/05/exploring-prompt-injection-attacks)
- [Extrapolating to Unnatural Language Processing with GPT-3's In-context Learning: The Good, the Bad, and the Mysterious](http://ai.stanford.edu/blog/in-context-learning)
- [Generative AI with Cohere: Part 1 - Model Prompting](https://txt.cohere.ai/generative-ai-part-1)
- [Giving GPT-3 a Turing Test](https://lacker.io/ai/2020/07/06/giving-gpt-3-a-turing-test.html)
- [GPT3 and Prompts: A quick primer](https://buildspace.so/notes/intro-to-gpt3-prompts)
- [How to Draw Anything](https://andys.page/posts/how-to-draw)
- [How to get images that don't suck](https://www.reddit.com/r/StableDiffusion/comments/x41n87/how_to_get_images_that_dont_suck_a)
- [How to write good prompts](https://andymatuschak.org/prompts)
- [Language Models and Prompt Engineering: Systematic Survey of Prompting Methods in NLP](https://youtube.com/watch?v=OsbUfL8w-mo&feature=shares)
- [Learn Prompting](https://learnprompting.org)
- [Methods of prompt programming](https://generative.ink/posts/methods-of-prompt-programming)
- [Mysteries of mode collapse](https://www.lesswrong.com/posts/t9svvNPNmFf5Qa3TA/mysteries-of-mode-collapse)
- [NLP for Text-to-Image Generators: Prompt Analysis](https://heartbeat.comet.ml/nlp-for-text-to-image-generators-prompt-analysis-part-1-5076a44d8365)
- [NLP with Deep Learning CS224N/Ling284 - Lecture 11: Promting, Instruction Tuning, and RLHF](http://web.stanford.edu/class/cs224n/slides/cs224n-2023-lecture11-prompting-rlhf.pdf)
- [Notes for Prompt Engineering by sw-yx](https://github.com/sw-yx/ai-notes)
- [OpenAI Cookbook](https://github.com/openai/openai-cookbook)
- [OpenAI Prompt Examples for several applications](https://platform.openai.com/examples)
- [Pretrain, Prompt, Predict -  A New Paradigm for NLP](http://pretrain.nlpedia.ai)
- [Prompt Engineering 101 - Introduction and resources](https://www.linkedin.com/pulse/prompt-engineering-101-introduction-resources-amatriain)
- [Prompt Engineering 101: Autocomplete, Zero-shot, One-shot, and Few-shot prompting](https://youtube.com/watch?v=v2gD8BHOaX4&feature=shares)
- [Prompt Engineering 101](https://humanloop.com/blog/prompt-engineering-101)
- [Prompt Engineering - A new profession ?](https://www.youtube.com/watch?v=w102J3_9Bcs&ab_channel=PatrickDebois)
- [Prompt Engineering by co:here](https://docs.cohere.ai/docs/prompt-engineering)
- [Prompt Engineering by Microsoft](https://microsoft.github.io/prompt-engineering)
- [Prompt engineering davinci-003 on our own docs for automated support (Part I)](https://www.patterns.app/blog/2022/12/21/finetune-llm-tech-support)
- [Prompt Engineering Guide: How to Engineer the Perfect Prompts](https://richardbatt.co.uk/prompt-engineering-guide-how-to-engineer-the-perfect-prompts)
- [Prompt Engineering in GPT-3](https://www.analyticsvidhya.com/blog/2022/05/prompt-engineering-in-gpt-3)
- [Prompt Engineering Template](https://docs.google.com/spreadsheets/d/1-snKDn38-KypoYCk9XLPg799bHcNFSBAVu2HVvFEAkA/edit#gid=0)
- [Prompt Engineering Topic by GitHub](https://github.com/topics/prompt-engineering)
- [Prompt Engineering: From Words to Art](https://www.saxifrage.xyz/post/prompt-engineering)
- [Prompt Engineering with OpenAI's GPT-3 and other LLMs](https://youtube.com/watch?v=BP9fi_0XTlw&feature=shares)
- [Prompt injection attacks against GPT-3](https://simonwillison.net/2022/Sep/12/prompt-injection)
- [Prompt injection to read out the secret OpenAI API key](https://twitter.com/ludwig_stumpp/status/1619701277419794435?s=20&t=GtoMlmYCSt-UmvjqJVbBSA)
- [Prompting in NLP: Prompt-based zero-shot learning](https://savasy-22028.medium.com/prompting-in-nlp-prompt-based-zero-shot-learning-3f34bfdb2b72)
- [Prompting Methods with Language Models and Their Applications to Weak Supervision](https://snorkel.ai/prompting-methods-with-language-models-nlp)
- [Prompts as Programming by Gwern](https://www.gwern.net/GPT-3#prompts-as-programming)
- [Reverse Prompt Engineering for Fun and (no) Profit](https://lspace.swyx.io/p/reverse-prompt-eng)
- [Simulators](https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators)
- [Start with an Instruction](https://beta.openai.com/docs/quickstart/start-with-an-instruction)
- [Talking to machines: prompt engineering & injection](https://artifact-research.com/artificial-intelligence/talking-to-machines-prompt-engineering-injection)
- [the Book - Fed Honeypot](https://fedhoneypot.notion.site/25fdbdb69e9e44c6877d79e18336fe05?v=1d2bf4143680451986fd2836a04afbf4)
- [The ChatGPT Prompt Book](https://docs.google.com/presentation/d/17b_ocq-GL5lhV_bYSShzUgxL02mtWDoiw9xEroJ5m3Q/edit#slide=id.gc6f83aa91_0_79)
- [Using GPT-Eliezer against ChatGPT Jailbreaking](https://www.alignmentforum.org/posts/pNcFYZnPdXyL2RfgA/using-gpt-eliezer-against-chatgpt-jailbreaking)

# Lecture + Tutorial

Full tutorial and lecture coming soon!

---

Feel free to open a PR if you think something is missing here. Always welcome feedback and suggestions.
