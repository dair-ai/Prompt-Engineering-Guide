# Adding Odd Numbers with LLMs

import { Tabs, Tab } from 'nextra/components'

## Background
This prompt tests an LLM's mathematical capabilities by prompting it check if adding odd numbers add up to an even number. We will also leverage chain-of-thought prompting in this example. 

## Prompt

```markdown
The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. 
Solve by breaking the problem into steps. First, identify the odd numbers, add them, and indicate whether the result is odd or even. 
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
            "content": "The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. \nSolve by breaking the problem into steps. First, identify the odd numbers, add them, and indicate whether the result is odd or even."
            }
        ],
        temperature=1,
        max_tokens=256,
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
                "content": "The odd numbers in this group add up to an even number: 15, 32, 5, 13, 82, 7, 1. \nSolve by breaking the problem into steps. First, identify the odd numbers, add them, and indicate whether the result is odd or even.",
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
- [Sparks of Artificial General Intelligence: Early experiments with GPT-4](https://www.promptingguide.ai/introduction/examples#reasoning) (13 April 2023)