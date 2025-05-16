# Indirect Reasoning with LLMs 

import { Tabs, Tab } from 'nextra/components'

## Background
[Zhang et al. (2024)](https://arxiv.org/abs/2402.03667) recently proposed an indirect reasoning method to strengthen the reasoning power of LLMs. It employs the logic of contrapositives and contradictions to tackle IR tasks such as factual reasoning and mathematic proof. It consists of two key steps: 1) enhance the comprehensibility of LLMs by augmenting data and rules (i.e., logical equivalence of contrapositive), and 2) design prompt templates to stimulate LLMs to implement indirect reasoning based on proof by contradiction.

Experiments on LLMs like GPT-3.5-turbo and Gemini-pro show that the proposed method enhances the overall accuracy of factual reasoning by 27.33% and mathematic proof by 31.43% compared to traditional direct reasoning methods.

Below is an example of zero-shot template for proof-by-contradiction.


## Prompt
```
If a+|a|=0, try to prove that a<0.

Step 1: List the conditions and questions in the original proposition.

Step 2: Merge the conditions listed in Step 1 into one. Define it as wj.

Step 3: Let us think it step by step. Please consider all possibilities. If the intersection between wj (defined in Step 2) and the negation of the question is not empty at least in one possibility, the original proposition is false. Otherwise, the original proposition is true.

Answer:
```

## Code / API

<Tabs items={['GPT-4 (OpenAI)', 'Mixtral MoE 8x7B Instruct (Fireworks)']}>
    <Tab>
  
    ```python
    from openai import OpenAI
    client = OpenAI()

    response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
    {
      "role": "user",
      "content": "If a+|a|=0, try to prove that a<0.\n\nStep 1: List the conditions and questions in the original proposition.\n\nStep 2: Merge the conditions listed in Step 1 into one. Define it as wj.\n\nStep 3: Let us think it step by step. Please consider all possibilities. If the intersection between wj (defined in Step 2) and the negation of the question is not empty at least in one possibility, the original proposition is false. Otherwise, the original proposition is true.\n\nAnswer:"
    }
    ],
    temperature=0,
    max_tokens=1000,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )
    ```
    </Tab>

    <Tab>
        ```python
        import fireworks.client
        fireworks.client.api_key = "<FIREWORKS_API_KEY>"
        completion = fireworks.client.ChatCompletion.create(
            model="accounts/fireworks/models/mixtral-8x7b-instruct",
            messages=[
                {
                "role": "user",
                "content": "If a+|a|=0, try to prove that a<0.\n\nStep 1: List the conditions and questions in the original proposition.\n\nStep 2: Merge the conditions listed in Step 1 into one. Define it as wj.\n\nStep 3: Let us think it step by step. Please consider all possibilities. If the intersection between wj (defined in Step 2) and the negation of the question is not empty at least in one possibility, the original proposition is false. Otherwise, the original proposition is true.\n\nAnswer:",
                }
            ],
            stop=["<|im_start|>","<|im_end|>","<|endoftext|>"],
            stream=True,
            n=1,
            top_p=1,
            top_k=40,
            presence_penalty=0,
            frequency_penalty=0,
            prompt_truncate_len=1024,
            context_length_exceeded_behavior="truncate",
            temperature=0.9,
            max_tokens=4000
        )
        ```
    </Tab>


</Tabs>

## Reference
- [Large Language Models as an Indirect Reasoner: Contrapositive and Contradiction for Automated Reasoning](https://arxiv.org/abs/2402.03667) (06 February 2024)