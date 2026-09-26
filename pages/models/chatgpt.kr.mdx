# ChatGPT 프롬프트 엔지니어링

import { Callout, FileTree } from 'nextra-theme-docs'
import {Screenshot} from 'components/screenshot'
import CHATGPT1 from '../../img/chatgpt-1.png'
import CHATGPTCLASSIC from '../../img/chatgpt-classic.png'

이 섹션에서는 팁, 응용 프로그램, 제한 사항, 논문 및 추가 읽기 자료를 포함하여 ChatGPT에 대한 최신 프롬프트 엔지니어링 기술을 다룹니다.

Topics:
- [ChatGPT 소개](#ChatGPT 소개)
- [대화 태스크 리뷰](#대화 태스크 리뷰)
- [ChatGPT와 대화하기](#ChatGPT와 대화하기)

---
## ChatGPT 소개

ChatGPT는 대화 방식으로 상호 작용할 수 있는 기능을 갖춘 새로운 모델[OpenAI로 학습](https://openai.com/blog/chatgpt) 입니다. 이 모델은 프롬프트에 따라 지시를 수행하고 대화 맥락에 따라 적절한 응답을 제공하도록 훈련되었습니다. ChatGPT는 질문에 답변하거나, 레시피를 제안하거나, 특정 스타일로 가사를 쓰거나, 코드를 생성하는 등의 작업에 도움을 줄 수 있습니다.

ChatGPT는 인간의 피드백을 통한 강화학습(Reinforcement Learning from Human Feedback, RLHF)에 의해 훈련됩니다. 이 모델은 이전의 GPT보다 낫지만 (또한, 부적절하고 신뢰하기 어려운 결과를 줄이기 위해 학습되었지만), 여전히 제한적인 부분이 있습니다. 이러한 장단점에 대해 구체적인 예를 들어 설명해 보겠습니다.

ChatGPT의 연구는 [여기](chat.openai.com)에서 확인하실 수 있지만, 아래의 예에서는 OpenAI Playground의 'Chat' 모드를 사용합니다.

---
## 대화 작업 검토하기

이전 가이드 중, 대화 역량과 역할 프롬프트에 대해 조금 다루었습니다. 해당 가이드에서는, 특정 의도, 행동, 아이덴티티를 가지고 특정 스타일로 대화를 하도록 LLM에 지시하는 방법을 다루었습니다.

여기에서는 더 기술적이고 과학적인 응답을 생성할 수 있도록 대화 시스템을 만들었던 이전의 기본 예제를 다시 살펴보겠습니다.

*프롬프트:*
```
다음은 AI 연구 조교와의 대화입니다. 조교의 톤은 기술적이고 과학적인 것으로 가정합니다.

인간: 안녕하세요, 누구세요?
AI: 인사드립니다! 저는 AI 연구 조교입니다. 오늘은 어떤 일로 찾아오셨나요??
인간: 블랙홀 생성에 대해 알려줄 수 있나요?
AI:
```

위 예제에서 아래의 두 가지 중요한 구성 요소를 확인할 수 있습니다:
- 챗봇의 **의도** 또는 챗봇에 대한 설명
- 챗봇이 응답할 때 사용할 스타일이나 어조를 지시하는 챗봇의 **아이덴티티**

위의 간단한 예제는 'text-davinci-003'을 사용하는 텍스트 자동완성 API로 잘 작동합니다. 최근에 OpenAI는 챗봇 완성에 특화된 더 강력하고 저렴한 모델인 `gpt-3.5-turbo`를 사용한 [ChatGPT API](https://openai.com/blog/introducing-chatgpt-and-whisper-apis)를 발표했습니다. 사실, 비대화형 사용 사례에도 이 모델을 권장합니다. ChatGPT API를 사용할 때 얻을 수 있는 다른 이점으로는 비용을 크게 절감(90%)하고 효율성이 높다는 것입니다.

Snap Inc. 나 Instacart와 같은 대기업들은 맞춤형 추천에서 자유로운 쇼핑 목표까지, 자사 제품에 ChatGPT를 활용한 대화 기능을 이미 적용하고 있습니다.

---
## ChatGPT와 대화하기

### 멀티 턴(Multi-turn) 대화

ChatGPT의 기능을 보여주기 위해 위의 챗봇 어시스턴트 예제를 사용하여 결과를 살펴보겠습니다. `text-davinci-003`에 비해 ChatGPT에 적용된 `gpt-3.5-turbo` 모델은 채팅 형식을 입력으로 사용합니다. 이 모델은 일련의 메시지를 입력으로 예상하고, 이를 사용하여 응답을 생성합니다.

*입력:*
```
시스템: 당신은 AI의 연구 조교입니다. 기술적이고 과학적인 톤으로 말합니다.
사용자: 안녕하세요, 당신은 누구신가요?
어시스턴트: 안녕하세요! 저는 AI의 연구 조교입니다. 오늘 어떤 일로 찾아오셨나요?
사용자: 블랙홀 생성에 대해 가르쳐주실 수 있나요?
```

*출력:*
```
어시스턴트: 물론이죠! 블랙홀은 거대한 별이 연료가 다 떨어져서 자체 중력에 의해 붕괴할 때 만들어집니다. 이 붕괴로 인해 별은 엄청나게 밀도가 높아져 빛조차도 빠져나갈 수 없을 정도로 강한 중력장을 갖게 됩니다. 이 돌아올 수 없는 지점을 사건의 지평선이라고 합니다. 별이 사건의 지평선을 넘으면 블랙홀로 간주합니다.
```

위의 예제에서는 입력과 출력을 단순화했지만, ChatGPT 채팅 자동완성 API는 메시지를 특정한 형식으로 입력해야 한다는 것에 유의하셔야 합니다. 아래는 OpenAI Playground의 `Chat Mode`를 사용했을 때, 이 예제가 어떻게 보이는지 아래에 스냅샷을 추가했습니다:

<Screenshot src={CHATGPT1} alt="CHATGPT1" />

우리의 예제에 대한 보다 공식적인 API 호출은 아래의 예제와 비슷합니다:

```python
import openai

openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[
        {"role": "system", "content": "당신은 AI의 연구 조교입니다. 기술적이고 과학적인 톤으로 말합니다."},
        {"role": "user", "content": "안녕하세요, 당신은 누구신가요?"},
        {"role": "assistant", "content": "안녕하세요! 저는 AI의 연구 조교입니다. 오늘 어떤 일로 찾아오셨나요?"},
        {"role": "user", "content": "블랙홀 생성에 대해 가르쳐주실 수 있나요?"}
    ]
)
```
실제로 개발자들은 미래에 ChatGPT와 [채팅 마크업 언어(ChatML)](https://github.com/openai/openai-python/blob/main/chatml.md)를 통해 상호작용할 것으로 예상합니다.

### 단일 턴(Single-turn) 태스크

채팅 형식은 멀티 턴 대화뿐만 아니라 `text-davinci-003`에서 사용한 것과 유사하게 단일 턴 작업도 지원합니다. 이는 ChatGPT를 사용하여 원래 GPT 모델과 유사한 작업을 수행할 수 있습니다. 예를 들어, ChatGPT를 사용하여 다음과 같은 대화의 질의응답 작업을 수행해 보겠습니다:

*입력:*
```
사용자: 아래 문맥에 따라 질문에 답하세요. 답변은 짧고 간결하게 작성하세요. 답변이 확실하지 않은 경우 "답변이 확실하지 않음"으로 응답하세요.

맥락: Teplizumab은 뉴저지의 제약 회사인 Ortho Pharmaceutical 제약에서 유래되었습니다. 거기에서 과학자들은 OKT3라는 이름의 초기 버전 항체를 개발했습니다. 원래 쥐로부터 유래된 이 분자는 T 세포의 표면에 결합하여 그들의 세포 죽음을 막을 수 있었습니다. 1986년에는 신장 이식 후 장기 거부반응을 예방하는 데 도움이 되도록 승인되어 인간이 사용하도록 허용된 최초의 치료 항체가 되었습니다.

질문: OKT3는 어디에서 유래되었나요?

답변:
```

*출력:*
```
어시스턴트: 쥐입니다.
```

ChatGPT를 사용하여 작업을 수행하는 방법을 더 잘 보여주기 위해 `사용자`와 `어시스턴트` 라벨을 추가하였습니다. 다음은 Playground를 사용한 예시입니다:

<Screenshot src={CHATGPTCLASSIC} alt="CHATGPTCLASSIC" />

아래는 보다 공식적인 API 호출 예시입니다. (요청의 메시지 구성 요소만 포함했습니다.)

```python
CONTENT = """아래 문맥에 따라 질문에 답하세요. 답변은 짧고 간결하게 작성하세요. 답변이 확실하지 않은 경우 \"답변이 확실하지 않음\"으로 응답하세요.

맥락: Teplizumab은 뉴저지의 제약 회사인 Ortho Pharmaceutical 제약에서 유래되었습니다. 거기에서 과학자들은 OKT3라는 이름의 초기 버전 항체를 개발했습니다. 원래 쥐로부터 유래된 이 분자는 T 세포의 표면에 결합하여 그들의 세포 죽음을 막을 수 있었습니다. 1986년에는 신장 이식 후 장기 거부반응을 예방하는 데 도움이 되도록 승인되어 인간이 사용하도록 허용된 최초의 치료 항체가 되었습니다.

질문: OKT3는 어디에서 유래되었나요?

답변:
"""

response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": CONTENT},
    ],
    temperature=0,
)
```

### 챗 모델에게 지시하기

공식 OpenAI 문서에 따르면 `gpt-3.5-turbo` 모델의 스냅샷도 제공될 예정입니다. 예를 들어, 3월 1일 이후 `gpt-3.5-turbo-0301`스냅샷에 접근할 수 있습니다. 이를 통해 개발자들은 원하는 버전을 선택할 수 있습니다. 또한 이는 모델에 지시하는 모범 사례가 버전마다 달라질 수 있다는 것을 의미합니다.

현재 `gpt-3.5-turbo-0301`의 권장 사항은 `system` 메시지가 아니라 `user` 메시지에 지시사항을 추가하는 것입니다.

---
## 참조

- [Is ChatGPT a Good Sentiment Analyzer? A Preliminary Study](https://arxiv.org/abs/2304.04339) (April 2023)
- [A Preliminary Evaluation of ChatGPT for Zero-shot Dialogue Understanding](https://arxiv.org/abs/2304.04256) (April 2023)
- [Extractive Summarization via ChatGPT for Faithful Summary Generation](https://arxiv.org/abs/2304.04193) (April 2023)
- [What does ChatGPT return about human values? Exploring value bias in ChatGPT using a descriptive value theory](https://arxiv.org/abs/2304.03612) (April 2023)
- [On the Evaluations of ChatGPT and Emotion-enhanced Prompting for Mental Health Analysis](https://arxiv.org/abs/2304.03347) (April 2023)
- [ChatGPT-Crawler: Find out if ChatGPT really knows what it's talking about](https://arxiv.org/abs/2304.03325) (April 2023)
- [Should ChatGPT be Biased? Challenges and Risks of Bias in Large Language Models](https://arxiv.org/abs/2304.03738) (April 2023)
- [Synthesis of Mathematical programs from Natural Language Specifications](https://arxiv.org/abs/2304.03287) (April 2023)
- [Large language models effectively leverage document-level context for literary translation, but critical errors persist](https://arxiv.org/abs/2304.03245) (April 2023)
- [Investigating Chain-of-thought with ChatGPT for Stance Detection on Social Media](https://arxiv.org/abs/2304.03087) (April 2023)
- [ChatGPT for Shaping the Future of Dentistry: The Potential of Multi-Modal Large Language Model](https://arxiv.org/abs/2304.03086) (April 2023)
- [Can Large Language Models Play Text Games Well? Current State-of-the-Art and Open Questions](https://arxiv.org/abs/2304.02868) (April 2023)
- [Human-like Summarization Evaluation with ChatGPT](https://arxiv.org/abs/2304.02554) (April 2023)
- [Evaluation of ChatGPT Family of Models for Biomedical Reasoning and Classification](https://arxiv.org/abs/2304.02496) (April 2023)
- [Comparative Analysis of CHATGPT and the evolution of language models](https://arxiv.org/abs/2304.02468) (April 2023)
- [Unleashing the Power of ChatGPT for Translation: An Empirical Study](https://arxiv.org/abs/2304.02182) (April 2023)
- [Geotechnical Parrot Tales (GPT): Overcoming GPT hallucinations with prompt engineering for geotechnical applications](https://arxiv.org/abs/2304.02138) (April 2023)
- [Unlocking the Potential of ChatGPT: A Comprehensive Exploration of its Applications, Advantages, Limitations, and Future Directions in Natural Language Processing](https://arxiv.org/abs/2304.02017) (April 2023)
- [Summary of ChatGPT/GPT-4 Research and Perspective Towards the Future of Large Language Models](https://arxiv.org/abs/2304.01852) (April 2023)
- [Is ChatGPT a Highly Fluent Grammatical Error Correction System? A Comprehensive Evaluation](https://arxiv.org/abs/2304.01746) (April 2023)
- [Safety Analysis in the Era of Large Language Models: A Case Study of STPA using ChatGPT](https://arxiv.org/abs/2304.01246) (April 2023)
- [Large language models can rate news outlet credibility](https://arxiv.org/abs/2304.00228) (April 2023)
- [Can AI Chatbots Pass the Fundamentals of Engineering (FE) and Principles and Practice of Engineering (PE) Structural Exams?](https://arxiv.org/abs/2303.18149) (April 2023)
- [Can AI Put Gamma-Ray Astrophysicists Out of a Job?](https://arxiv.org/abs/2303.17853) (March 2023)
- [Comparing Abstractive Summaries Generated by ChatGPT to Real Summaries Through Blinded Reviewers and Text Classification Algorithms](https://arxiv.org/abs/2303.17650) (March 2023)
- [HuggingGPT: Solving AI Tasks with ChatGPT and its Friends in HuggingFace](https://arxiv.org/abs/2303.17580) (March 2023)
- [WavCaps: A ChatGPT-Assisted Weakly-Labelled Audio Captioning Dataset for Audio-Language Multimodal Research](https://arxiv.org/abs/2303.17395) (March 2023)
- [How well do Large Language Models perform in Arithmetic tasks?](https://arxiv.org/abs/2304.02015) (March 2023)
- [Assessing Cross-Cultural Alignment between ChatGPT and Human Societies: An Empirical Study](https://arxiv.org/abs/2303.17466) (March 2023)
- [Yes but.. Can ChatGPT Identify Entities in Historical Documents?](https://arxiv.org/abs/2303.17322) (March 2023)
- [Evaluation of ChatGPT for NLP-based Mental Health Applications](https://arxiv.org/abs/2303.15727) (March 2023)
- [A Perspectival Mirror of the Elephant: Investigating Language Bias on Google, ChatGPT, Wikipedia, and YouTube](https://arxiv.org/abs/2303.16281) (March 2023)
- [ChatGPT or academic scientist? Distinguishing authorship with over 99% accuracy using off-the-shelf machine learning tools](https://arxiv.org/abs/2303.16352) (March 2023)
- [Zero-shot Clinical Entity Recognition using ChatGPT](https://arxiv.org/abs/2303.16416) (March 2023)
- [ChatGPT is a Knowledgeable but Inexperienced Solver: An Investigation of Commonsense Problem in Large Language Models](https://arxiv.org/abs/2303.16421) (March 2023)
- [ChatGPT4PCG Competition: Character-like Level Generation for Science Birds](https://arxiv.org/abs/2303.15662) (March 2023)
- [ChatGPT as a Factual Inconsistency Evaluator for Abstractive Text Summarization](https://arxiv.org/abs/2303.15621) (March 2023)
- [Chat-REC: Towards Interactive and Explainable LLMs-Augmented Recommender System](https://arxiv.org/abs/2303.14524) (March 2023)
- [A comprehensive evaluation of ChatGPT's zero-shot Text-to-SQL capability](https://arxiv.org/abs/2303.13547) (March 2023)
- [Towards Making the Most of ChatGPT for Machine Translation](https://arxiv.org/abs/2303.13780) (March 2023)
- [Error Analysis Prompting Enables Human-Like Translation Evaluation in Large Language Models: A Case Study on ChatGPT](https://arxiv.org/abs/2303.13809) (March 2023)
- [ChatGPT Outperforms Crowd-Workers for Text-Annotation Tasks](https://arxiv.org/pdf/2303.15056v1.pdf) (March 2023)
- [ChatGPT or Grammarly? Evaluating ChatGPT on Grammatical Error Correction Benchmark](https://arxiv.org/abs/2303.13648) (March 2023)
- [ChatGPT and a New Academic Reality: AI-Written Research Papers and the Ethics of the Large Language Models in Scholarly Publishing](https://arxiv.org/abs/2303.13367) (March 2023)
- [Are LLMs the Master of All Trades? : Exploring Domain-Agnostic Reasoning Skills of LLMs](https://arxiv.org/abs/2303.12810) (March 2023)
- [Is ChatGPT A Good Keyphrase Generator? A Preliminary Study](https://arxiv.org/abs/2303.13001) (March 2023)
- [MM-REACT: Prompting ChatGPT for Multimodal Reasoning and Action](https://arxiv.org/abs/2303.11381) (March 2023)
- [Large Language Models Can Be Used to Estimate the Ideologies of Politicians in a Zero-Shot Learning Setting](https://arxiv.org/abs/2303.12057) (March 2023)
- [Chinese Intermediate English Learners outdid ChatGPT in deep cohesion: Evidence from English narrative writing](https://arxiv.org/abs/2303.11812) (March 2023)
- [A Comprehensive Capability Analysis of GPT-3 and GPT-3.5 Series Models](https://arxiv.org/abs/2303.10420) (March 2023)
- [ChatGPT as the Transportation Equity Information Source for Scientific Writing](https://arxiv.org/abs/2303.11158) (March 2023)
- [Translating Radiology Reports into Plain Language using ChatGPT and GPT-4 with Prompt Learning: Promising Results, Limitations, and Potential](https://arxiv.org/abs/2303.09038) (March 2023)
- [ChatGPT Participates in a Computer Science Exam](https://arxiv.org/abs/2303.09461) (March 2023)
- [Consistency Analysis of ChatGPT](https://arxiv.org/abs/2303.06273) (Mar 2023)
- [Algorithmic Ghost in the Research Shell: Large Language Models and Academic Knowledge Creation in Management Research](https://arxiv.org/abs/2303.07304) (Mar 2023)
- [Large Language Models in the Workplace: A Case Study on Prompt Engineering for Job Type Classification](https://arxiv.org/abs/2303.07142) (March 2023)
- [Seeing ChatGPT Through Students' Eyes: An Analysis of TikTok Data](https://arxiv.org/abs/2303.05349) (March 2023)
- [Extracting Accurate Materials Data from Research Papers with Conversational Language Models and Prompt Engineering -- Example of ChatGPT](https://arxiv.org/abs/2303.05352) (Mar 2023)
- [ChatGPT is on the horizon: Could a large language model be all we need for Intelligent Transportation?](https://arxiv.org/abs/2303.05382) (Mar 2023)
- [Making a Computational Attorney](https://arxiv.org/abs/2303.05383) (Mar 2023)
- [Does Synthetic Data Generation of LLMs Help Clinical Text Mining?](https://arxiv.org/abs/2303.04360) (Mar 2023)
- [MenuCraft: Interactive Menu System Design with Large Language Models](https://arxiv.org/abs/2303.04496) (Mar 2023)
- [A Comprehensive Survey of AI-Generated Content (AIGC): A History of Generative AI from GAN to ChatGPT](https://arxiv.org/abs/2303.04226) (Mar 2023)
- [Exploring the Feasibility of ChatGPT for Event Extraction](https://arxiv.org/abs/2303.03836)
- [ChatGPT: Beginning of an End of Manual Annotation? Use Case of Automatic Genre Identification](https://arxiv.org/abs/2303.03953) (Mar 2023)
- [Is ChatGPT a Good NLG Evaluator? A Preliminary Study](https://arxiv.org/abs/2303.04048) (Mar 2023)
- [Will Affective Computing Emerge from Foundation Models and General AI? A First Evaluation on ChatGPT](https://arxiv.org/abs/2303.03186) (Mar 2023)
- [UZH_CLyp at SemEval-2023 Task 9: Head-First Fine-Tuning and ChatGPT Data Generation for Cross-Lingual Learning in Tweet Intimacy Prediction](https://arxiv.org/abs/2303.01194) (Mar 2023)
- [How to format inputs to ChatGPT models](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_format_inputs_to_ChatGPT_models.ipynb) (Mar 2023)
- [Can ChatGPT Assess Human Personalities? A General Evaluation Framework](https://arxiv.org/abs/2303.01248) (Mar 2023)
- [Cross-Lingual Summarization via ChatGPT](https://arxiv.org/abs/2302.14229) (Feb 2023)
- [ChatAug: Leveraging ChatGPT for Text Data Augmentation](https://arxiv.org/abs/2302.13007) (Feb 2023)
- [Dr ChatGPT, tell me what I want to hear: How prompt knowledge impacts health answer correctness](https://arxiv.org/abs/2302.13793) (Feb 2023)
- [An Independent Evaluation of ChatGPT on Mathematical Word Problems (MWP)](https://arxiv.org/abs/2302.13814) (Feb 2023)
- [ChatGPT: A Meta-Analysis after 2.5 Months](https://arxiv.org/abs/2302.13795) (Feb 2023)
- [Let's have a chat! A Conversation with ChatGPT: Technology, Applications, and Limitations](https://arxiv.org/abs/2302.13817) (Feb 2023)
- [Check Your Facts and Try Again: Improving Large Language Models with External Knowledge and Automated Feedback](https://arxiv.org/abs/2302.12813) (Feb 2023)
- [On the Robustness of ChatGPT: An Adversarial and Out-of-distribution Perspective](https://arxiv.org/abs/2302.12095) (Feb 2023)
- [How Generative AI models such as ChatGPT can be (Mis)Used in SPC Practice, Education, and Research? An Exploratory Study](https://arxiv.org/abs/2302.10916) (Feb 2023)
- [Can ChatGPT Understand Too? A Comparative Study on ChatGPT and Fine-tuned BERT](https://arxiv.org/abs/2302.10198) (Feb 2023)
- [A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT](https://arxiv.org/abs/2302.11382) (Feb 2023)
- [Zero-Shot Information Extraction via Chatting with ChatGPT](https://arxiv.org/abs/2302.10205) (Feb 2023)
- [ChatGPT: Jack of all trades, master of none](https://arxiv.org/abs/2302.10724) (Feb 2023)
- [A Pilot Evaluation of ChatGPT and DALL-E 2 on Decision Making and Spatial Reasoning](https://arxiv.org/abs/2302.09068) (Feb 2023)
- [Netizens, Academicians, and Information Professionals' Opinions About AI With Special Reference To ChatGPT](https://arxiv.org/abs/2302.07136) (Feb 2023)
- [Linguistic ambiguity analysis in ChatGPT](https://arxiv.org/abs/2302.06426) (Feb 2023)
- [ChatGPT versus Traditional Question Answering for Knowledge Graphs: Current Status and Future Directions Towards Knowledge Graph Chatbots](https://arxiv.org/abs/2302.06466) (Feb 2023)
- [What ChatGPT and generative AI mean for science](https://www.nature.com/articles/d41586-023-00340-6) (Feb 2023)
- [Applying BERT and ChatGPT for Sentiment Analysis of Lyme Disease in Scientific Literature](https://arxiv.org/abs/2302.06474) (Feb 2023)
- [Exploring AI Ethics of ChatGPT: A Diagnostic Analysis](https://arxiv.org/abs/2301.12867) (Jan 2023)
- [ChatGPT for Good? On Opportunities and Challenges of Large Language Models for Education](https://www.edu.sot.tum.de/fileadmin/w00bed/hctl/_my_direct_uploads/ChatGPT_for_Good_.pdf) (Jan 2023)
- [The political ideology of conversational AI: Converging evidence on ChatGPT's pro-environmental, left-libertarian orientation](https://arxiv.org/abs/2301.01768) (Jan 2023)
- [Techniques to improve reliability - OpenAI Cookbook](https://github.com/openai/openai-cookbook/blob/main/techniques_to_improve_reliability.md)
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
- [Introducing ChatGPT](https://openai.com/blog/chatgpt) (Nov 2022)
