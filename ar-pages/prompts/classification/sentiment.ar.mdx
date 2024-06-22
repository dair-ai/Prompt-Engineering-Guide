# Sentiment Classification with LLMs

import { Tabs, Tab } from 'nextra/components'

## Background
This prompt tests an LLM's text classification capabilities by prompting it to classify a piece of text.

## Prompt
```
Classify the text into neutral, negative, or positive
Text: I think the food was okay.
Sentiment:
```

## Prompt Template
```
Classify the text into neutral, negative, or positive
Text: {input}
Sentiment:
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
                "content": "Classify the text into neutral, negative, or positive\nText: I think the food was okay.\nSentiment:\n"
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
                "content": "Classify the text into neutral, negative, or positive\nText: I think the food was okay.\nSentiment:\n",
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
- [Prompt Engineering Guide](https://www.promptingguide.ai/introduction/examples#text-classification) (16 March 2023)