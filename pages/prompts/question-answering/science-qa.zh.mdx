# Science Question Answering with LLMs

import { Tabs, Tab } from 'nextra/components'
import {Callout} from 'nextra/components'

## Background
The following prompt tests an LLM's capabilities to perform science question answering. 

## Prompt

```markdown
Answer the question based on the context below. Keep the answer short and concise. Respond "Unsure about answer" if not sure about the answer.

Context: Teplizumab traces its roots to a New Jersey drug company called Ortho Pharmaceutical. There, scientists generated an early version of the antibody, dubbed OKT3. Originally sourced from mice, the molecule was able to bind to the surface of T cells and limit their cell-killing potential. In 1986, it was approved to help prevent organ rejection after kidney transplants, making it the first therapeutic antibody allowed for human use.

Question: What was OKT3 originally sourced from?
Answer:
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
        "content": "Answer the question based on the context below. Keep the answer short and concise. Respond \"Unsure about answer\" if not sure about the answer.\n\nContext: Teplizumab traces its roots to a New Jersey drug company called Ortho Pharmaceutical. There, scientists generated an early version of the antibody, dubbed OKT3. Originally sourced from mice, the molecule was able to bind to the surface of T cells and limit their cell-killing potential. In 1986, it was approved to help prevent organ rejection after kidney transplants, making it the first therapeutic antibody allowed for human use.\n\nQuestion: What was OKT3 originally sourced from?\nAnswer:"
        }
    ],
    temperature=1,
    max_tokens=250,
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
                "content": "Answer the question based on the context below. Keep the answer short and concise. Respond \"Unsure about answer\" if not sure about the answer.\n\nContext: Teplizumab traces its roots to a New Jersey drug company called Ortho Pharmaceutical. There, scientists generated an early version of the antibody, dubbed OKT3. Originally sourced from mice, the molecule was able to bind to the surface of T cells and limit their cell-killing potential. In 1986, it was approved to help prevent organ rejection after kidney transplants, making it the first therapeutic antibody allowed for human use.\n\nQuestion: What was OKT3 originally sourced from?\nAnswer:",
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
- [Prompt Engineering Guide](https://www.promptingguide.ai/introduction/examples#question-answering) (16 March 2023)