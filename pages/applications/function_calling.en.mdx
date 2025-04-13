# Function Calling with LLMs

import {Cards, Card, Callout} from 'nextra-theme-docs'
import {CodeIcon} from 'components/icons'

## Getting Started with Function Calling

<iframe width="100%"
  height="415px"
  src="https://www.youtube.com/embed/p0I-hwZSWMs?si=tQgi-LiHe6Oj_rzm" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  />


Function calling is the ability to reliably connect LLMs to external tools to enable effective tool usage and interaction with external APIs. 

LLMs like GPT-4 and GPT-3.5 have been fine-tuned to detect when a function needs to be called and then output JSON containing arguments to call the function. The functions that are being called by function calling will act as tools in your AI application and you can define more than one in a single request.

Function calling is an important ability for building LLM-powered chatbots or agents that need to retrieve context for an LLM or interact with external tools by converting natural language into API calls. 

Functional calling enables developers to create:

- conversational agents that can efficiently use external tools to answer questions. For example, the query "What is the weather like in Belize?" will be converted to a function call such as `get_current_weather(location: string, unit: 'celsius' | 'fahrenheit')`
- LLM-powered solutions for extracting and tagging data (e.g., extracting people names from a Wikipedia article)
- applications that can help convert natural language to API calls or valid database queries
- conversational knowledge retrieval engines that interact with a knowledge base 

In this guide, we demonstrate how to prompt models like GPT-4 and open-source models to perform function calling for different use cases. 

## Function Calling with GPT-4

As a basic example, let's say we asked the model to check the weather in a given location. 

The LLM alone would not be able to respond to this request because it has been trained on a dataset with a cutoff point. The way to solve this is to combine the LLM with an external tool. You can leverage the function calling capabilities of the model to determine an external function to call along with its arguments and then have it return a final response. Below is a simple example of how you can achieve this using the OpenAI APIs. 

Let's say a user is asking the following question to the model:

```
What is the weather like in London?
```

To handle this request using function calling, the first step is to define a weather function or set of functions that you will be passing as part of the OpenAI API request:

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "Get the current weather in a given location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "The city and state, e.g. San Francisco, CA",
                    },
                    "unit": {
                        "type": "string", 
                        "enum": ["celsius", "fahrenheit"]},
                },
                "required": ["location"],
            },
        },   
    }
]
```

The `get_current_weather` function returns the current weather in a given location. When you pass this function definition as part of the request, it doesn't actually executes a function, it just returns a JSON object containing the arguments needed to call the function. Here are some code snippets of how to achieve this. 

You can define a completion function as follows:

```python
def get_completion(messages, model="gpt-3.5-turbo-1106", temperature=0, max_tokens=300, tools=None):
    response = openai.chat.completions.create(
        model=model,
        messages=messages,
        temperature=temperature,
        max_tokens=max_tokens,
        tools=tools
    )
    return response.choices[0].message
```

This is how you can compose the user question:

```python
messages = [
    {
        "role": "user",
        "content": "What is the weather like in London?"
    }
]
```

Finally, you can call the  `get_completion` above and passing both the `messages` and `tools`:

```python
response = get_completion(messages, tools=tools)
```

The `response` object contains the following:

```python
ChatCompletionMessage(content=None, role='assistant', function_call=None, tool_calls=[ChatCompletionMessageToolCall(id='...', function=Function(arguments='{"location":"London","unit":"celsius"}', name='get_current_weather'), type='function')])
```

In particular, the `arguments` object contains the important arguments extracted by the model and that will be needed to complete the request. 

You can then choose to call an external weather API for the actual weather. Once you have the weather information available you can pass it back to the model to summarize a final response given the original user question.

## Notebooks

<Callout type= "info" emoji="🎓">
Learn more about function calling in our new AI courses. [Join now!](https://dair-ai.thinkific.com/)
Use code PROMPTING20 to get an extra 20% off.
</Callout>

Here is a notebook with a simple example that demonstrates how to use function calling with the OpenAI APIs:

<Cards>
    <Card 
        icon={<CodeIcon />}
        title="Function Calling with OpenAI APIs"
        href="https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/notebooks/pe-function-calling.ipynb"
    />
</Cards>

## Function Calling with Open-Source LLMs
More notes on function calling with open-source LLMs coming soon.

## Function Calling Use Cases

Below is a list of use cases that can benefit from the function calling capability of LLMs:

- **Conversational Agents**: Function calling can be used to create complex conversational agents or chatbots that answer complex questions by calling external APIs or external knowledge base and providing more relevant and useful responses.

- **Natural Language Understanding**: It can convert natural language into structured JSON data, extract structured data from text, and perform tasks like named entity recognition, sentiment analysis, and keyword extraction.

- **Math Problem Solving**: Function calling can be used to define custom functions to solve complex mathematical problems that require multiple steps and different types of advanced calculations.

- **API Integration**: It can be used to effectively integrate LLMs with external APIs to fetch data or perform actions based on the input. This could be helpful to build either a QA system or creative assistant. In general, function calling can convert natural language into valid API calls. 

- **Information Extraction**: Function calling be effectively used to extract specific information from a given input, such as retrieving relevant news stories or references from an article.


## References
- [Fireworks Raises the Quality Bar with Function Calling Model and API Release](https://blog.fireworks.ai/fireworks-raises-the-quality-bar-with-function-calling-model-and-api-release-e7f49d1e98e9)
- [Benchmarking Agent Tool Use and Function Calling](https://blog.langchain.dev/benchmarking-agent-tool-use/)
- [Function Calling](https://ai.google.dev/docs/function_calling)
- [Interacting with APIs](https://python.langchain.com/docs/use_cases/apis)
- [OpenAI's Function Calling](https://platform.openai.com/docs/guides/function-calling)
- [How to call functions with chat models](https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models)
- [Pushing ChatGPT's Structured Data Support To Its Limits](https://minimaxir.com/2023/12/chatgpt-structured-data/)
- [Math Problem Solving with Function Calling](https://github.com/svpino/openai-function-calling/blob/main/sample.ipynb)
