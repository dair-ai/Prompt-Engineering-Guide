# LLMs의 Function Calling

import {Cards, Card} from 'nextra-theme-docs'
import {CodeIcon} from 'components/icons'

## Function Calling 시작하기

Function Calling은 대규모언어모델(LLM)을 외부 툴에 안정적인 연결을 통해 효과적으로 툴을 사용하거나 외부 API와의 상호 작용을 가능하게 합니다.

GPT-4와 GPT-3.5 같은 LLM은 함수를 호출해야 할 때를 감지한 후 함수를 호출하기 위한 인수가 포함된 JSON을 출력하도록 미세 조정(fine-tuned)되었습니다. Function Calling에 의해 호출되는 기능은 AI 애플리케이션에서 도구 역할을 하며 한 번의 요청으로 하나 이상을 정의(define)할 수 있습니다.

함수 호출은 자연어를 API 호출로 변환하여 LLM 컨텍스트를 검색하거나 외부 툴과 상호 작용해야 하는 LLM 기반 챗봇 또는 에이전트를 구축하는 데 필수적인 기능입니다.

Functional calling을 통해 개발자는 다음을 만들 수 있습니다:

- 질문에 답하기 위해 외부 툴을 효율적으로 사용할 수 있는 대화형 에이전트. 예를 들어, "서울의 날씨는 어때?" 같은 쿼리는 `get_current_weather(location: string, unit: '섭씨' | '화씨')`같은 Function Call로 변환될 것입니다.
- 데이터 추출 및 태깅(tagging)을 위한 LLM 기반 솔루션 (예: 위키백과 기사에서 사람 이름 추출)
- 자연어를 API 호출 또는 유효한(valid) 데이터베이스 쿼리로 변환하는 응용 프로그램
- 지식을 기반으로 상호 작용하는 대화형 지식 검색 엔진(conversational knowledge retrieval engines)

이번 가이드에서는, 다양한 유스케이스를 통해 GPT-4와 오픈소스 모델을 통해 프롬프팅을 하는 방법을 살펴보겠습니다.

## GPT-4와 Function Calling

간단한 예시로, 모델에게 주어진 위치의 날씨를 조회하도록 요청했다고 가정해 보겠습니다.

LLM만으로는 컷오프 포인트가 있는 데이터 세트로 훈련을 했기때문에 이 요청에 응답할 수 없습니다. 이를 해결하는 방법은 LLM을 외부 툴과 결합하는 것입니다. 모델의 함수 호출 기능을 활용하여 인수와 함께 호출할 외부 함수를 결정한 다음 최종 응답을 반환하도록 할 수 있습니다. 다음은 OpenAI API를 사용하여 이를 달성하는 방법에 대한 간단한 예입니다.
Let's say a user is asking the following question to the model:

```
서울의 날씨는 어때?
```

Function Calling을 사용하여 이 요청을 처리하려면 첫 번째 단계에서 OpenAI API 요청의 일부로 전달할 날씨 함수나 함수 집합(set)을 정의합니다:

```python
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_current_weather",
            "description": "주어진 위치의 날씨를 조회하기",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "도시와 지역구, e.g. 서울특별시, 관악구",
                    },
                    "unit": {
                        "type": "string", 
                        "enum": ["섭씨", "화씨"]},
                },
                "required": ["location"],
            },
        },   
    }
]
```

위의 `get_current_weather` 주어진 위치에 따라 그 지역의 날씨를 반환합니다. 이 함수의 정의를 요청의 일부로 전달하면 실제로 함수를 실행하지는 않고 함수를 호출하는 데 필요한 인수가 포함된 JSON 객체만 반환합니다. 다음은 이를 달성하는 방법에 대한 몇 가지 코드 스니펫입니다. 

다음과 같은 함수를 정의할 수도 있겠지요:

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

아래는 사용자의 질문을 구성하는 방법입니다:

```python
messages = [
    {
        "role": "user",
        "content": "서울의 날씨는 어떄?"
    }
]
```

마침내, 위의 `get_completion`함수와 `messages`와 `tools` 모두를 함께 전달할 수 있습니다:

```python
response = get_completion(messages, tools=tools)
```

응답(request) 객체는 다음과 같습니다:

```python
ChatCompletionMessage(content=None, role='assistant', function_call=None, tool_calls=[ChatCompletionMessageToolCall(id='...', function=Function(arguments='{"location":"서울","unit":"섭씨"}', name='get_current_weather'), type='function')])
```

특히 인수(argument) 객체에는 모델이 추출한 중요한 인수들이 포함되어 있으므로 요청을 완료하는 데 필수적입니다.

그런 다음 실제 날씨를 위해 외부 날씨 API를 호출해도 좋습니다. 사용자의 원 질문에 대한 최종 응답을 요약한 모델에 전달할 날씨 정보가 있으면 말이지요.

## Notebooks

다음은 OpenAI API를 사용하여 Function Calling을 사용하는 방법을 보여주는 간단한 예가 있는 Notebook입니다:

<Cards>
    <Card 
        icon={<CodeIcon />}
        title="Function Calling with OpenAI APIs"
        href="https://github.com/dair-ai/Prompt-Engineering-Guide/blob/main/notebooks/pe-function-calling.ipynb"
    />
</Cards>

## 오픈 소스 LLM의 Function Calling
오픈 소스 LLM을 사용한 Function Calling에 대한 더 많은 내용을 곧 공개할 예정입니다.

## Function Calling 유스케이스

다음은 LLM의 Function Calling 기능의 이점을 얻을 수 있는 사용 사례 목록입니다:

- **대화형 에이전트**: 기능 호출은 외부 API나 외부 지식 기반을 호출하여 보다 관련성 있고 유용한 응답을 제공함으로써 복잡한 질문에 답변하는 복잡한 대화형 에이전트나 챗봇을 만드는 데 사용할 수 있습니다.

- **자연어 이해**: 자연어를 구조화된 JSON 데이터로 변환하고 텍스트에서 구조화된 데이터를 추출하며 명명된 개체(entity) 인식, 감정 분석, 키워드 추출 등의 작업을 수행할 수 있습니다.

- **수학 문제 풀기**: Function Calling을 사용하여 여러 단계와 다양한 유형의 고급 계산이 필요한 복잡한 수학 문제를 해결할 수 있습니다.

- **API 통합(Integration)**: LLM과 외부 API를 효과적으로 통합하여 데이터를 가져오거나 입력에 따른 작업을 수행하는 데 사용할 수 있습니다. 이는 QA 시스템이나 크리에이티브 어시스턴트를 구축하는 데 도움이 될 수 있습니다. 일반적으로 Function Calling은 자연어를 유효한 API 호출로 변환할 수 있습니다.

- **정보 추출**: 기사에서 관련 뉴스 기사나 참고문헌을 검색하는 등 주어진 입력에서 특정 정보를 추출하는 기능 호출을 효과적으로 사용합니다.


## 참고문헌
- [Fireworks Raises the Quality Bar with Function Calling Model and API Release](https://blog.fireworks.ai/fireworks-raises-the-quality-bar-with-function-calling-model-and-api-release-e7f49d1e98e9)
- [Benchmarking Agent Tool Use and Function Calling](https://blog.langchain.dev/benchmarking-agent-tool-use/)
- [Function Calling](https://ai.google.dev/docs/function_calling)
- [Interacting with APIs](https://python.langchain.com/docs/use_cases/apis)
- [OpenAI's Function Calling](https://platform.openai.com/docs/guides/function-calling)
- [How to call functions with chat models](https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models)
- [Pushing ChatGPT's Structured Data Support To Its Limits](https://minimaxir.com/2023/12/chatgpt-structured-data/)
- [Math Problem Solving with Function Calling](https://github.com/svpino/openai-function-calling/blob/main/sample.ipynb)
