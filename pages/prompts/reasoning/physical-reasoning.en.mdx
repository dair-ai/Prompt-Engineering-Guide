# Physical Reasoning with LLMs 

import { Tabs, Tab } from 'nextra/components'

## Background
This prompt tests an LLM's physical reasoning capabilities by prompting it to perform actions on a set of objects.

## Prompt
```
Here we have a book, 9 eggs, a laptop, a bottle and a nail. Please tell me how to stack them onto each other in a stable manner.
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
        "content": "Here we have a book, 9 eggs, a laptop, a bottle and a nail. Please tell me how to stack them onto each other in a stable manner."
        }
    ],
    temperature=1,
    max_tokens=500,
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
                "content": "Here we have a book, 9 eggs, a laptop, a bottle and a nail. Please tell me how to stack them onto each other in a stable manner.",
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