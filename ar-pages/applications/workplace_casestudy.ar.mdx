# Graduate Job Classification Case Study

[Clavié et al., 2023](https://arxiv.org/abs/2303.07142) provide a case-study on prompt-engineering applied to a medium-scale text classification use-case in a production system. Using the task of classifying whether a job is a true "entry-level job", suitable for a recent graduate, or not, they evaluated a series of prompt engineering techniques and report their results using GPT-3.5 (`gpt-3.5-turbo`).

The work shows that LLMs outperforms all other models tested, including an extremely strong baseline in DeBERTa-V3. `gpt-3.5-turbo` also noticeably outperforms older GPT3 variants in all key metrics, but requires additional output parsing as its ability to stick to a template appears to be worse than the other variants.

The key findings of their prompt engineering approach are:

- For tasks such as this one, where no expert knowledge is required, Few-shot CoT prompting performed worse than Zero-shot prompting in all experiments.
- The impact of the prompt on eliciting the correct reasoning is massive. Simply asking the model to classify a given job results in an F1 score of 65.6, whereas the post-prompt engineering model achieves an F1 score of 91.7.
- Attempting to force the model to stick to a template lowers performance in all cases (this behaviour disappears in early testing with GPT-4, which are posterior to the paper).
- Many small modifications have an outsized impact on performance.
  - The tables below show the full modifications tested.
  - Properly giving instructions and repeating the key points appears to be the biggest performance driver.
  - Something as simple as giving the model a (human) name and referring to it as such increased F1 score by 0.6pts.

### Prompt Modifications Tested

| Short name | Description                                                                |
|------------|----------------------------------------------------------------------------|
| Baseline   | Provide a a job posting and asking if it is fit for a graduate.            |
| CoT        | Give a few examples of accurate classification before querying.            |
| Zero-CoT   | Ask the model to reason step-by-step before providing its answer.          |
| rawinst    | Give instructions about its role and the task by adding to the user msg.   |
| sysinst    | Give instructions about its role and the task as a system msg.             |
| bothinst   | Split instructions with role as a system msg and task as a user msg.       |
| mock       | Give task instructions by mocking a discussion where it acknowledges them. |
| reit       | Reinforce key elements in the instructions by repeating them.              |
| strict     | Ask the model to answer by strictly following a given template.            |
| loose      | Ask for just the final answer to be given following a given template.      |
| right      | Asking the model to reach the right conclusion.                            |
| info       | Provide additional information to address common reasoning failures.       |
| name       | Give the model a name by which we refer to it in conversation.             |
| pos        | Provide the model with positive feedback before querying it.               |


### Performance Impact of All Prompt Modifications

|                                        | Precision     | Recall        | F1            | Template Stickiness    |
|----------------------------------------|---------------|---------------|---------------|------------------------|
| _Baseline_                             | _61.2_        | _70.6_        | _65.6_        | _79%_                  |
| _CoT_                                  | _72.6_        | _85.1_        | _78.4_        | _87%_                  |
| _Zero-CoT_                             | _75.5_        | _88.3_        | _81.4_        | _65%_                  |
| _+rawinst_                             | _80_          | _92.4_        | _85.8_        | _68%_                  |
| _+sysinst_                             | _77.7_        | _90.9_        | _83.8_        | _69%_                  |
| _+bothinst_                            | _81.9_        | _93.9_        | _87.5_        | _71%_                  |
| +bothinst+mock                         | 83.3          | 95.1          | 88.8          | 74%                    |
| +bothinst+mock+reit                    | 83.8          | 95.5          | 89.3          | 75%                    |
| _+bothinst+mock+reit+strict_           | _79.9_        | _93.7_        | _86.3_        | _**98%**_              |
| _+bothinst+mock+reit+loose_            | _80.5_        | _94.8_        | _87.1_        | _95%_                  |
| +bothinst+mock+reit+right              | 84            | 95.9          | 89.6          | 77%                    |
| +bothinst+mock+reit+right+info         | 84.9          | 96.5          | 90.3          | 77%                    |
| +bothinst+mock+reit+right+info+name    | 85.7          | 96.8          | 90.9          | 79%                    |
| +bothinst+mock+reit+right+info+name+pos| **86.9**      | **97**        | **91.7**      | 81%                    |

Template stickiness refers to how frequently the model answers in the desired format. 
