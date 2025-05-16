# Evaluate Plato's Dialogue

import { Tabs, Tab } from 'nextra/components'

## Background
The following prompt tests an LLM's ability to perform evaluation on the outputs of two different models as if it was a teacher.

First, two models (e.g., ChatGPT & GPT-4) are prompted to using the following prompt:

```
Plato’s Gorgias is a critique of rhetoric and sophistic oratory, where he makes the point that not only is it not a proper form of art, but the use of rhetoric and oratory can often be harmful and malicious. Can you write a dialogue by Plato where instead he criticizes the use of autoregressive language models?
```

Then, those outputs are evaluated using the evaluation prompt below.

## Prompt
```
Can you compare the two outputs below as if you were a teacher?

Output from ChatGPT: {output 1}

Output from GPT-4: {output 2}
```

## Code / API

<Tabs items={['GPT-4 (OpenAI)', 'Mixtral MoE 8x7B Instruct (Fireworks)']}>
    <Tab>
  
    ```python
    from openai import OpenAI
    client = OpenAI()

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[
            {
            "role": "user",
            "content": "Can you compare the two outputs below as if you were a teacher?\n\nOutput from ChatGPT:\n{output 1}\n\nOutput from GPT-4:\n{output 2}"
            }
        ],
        temperature=1,
        max_tokens=1500,
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
                "content": "Can you compare the two outputs below as if you were a teacher?\n\nOutput from ChatGPT:\n{output 1}\n\nOutput from GPT-4:\n{output 2}",
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
- [Sparks of Artificial General Intelligence: Early experiments with GPT-4](https://arxiv.org/abs/2303.12712) (13 April 2023)