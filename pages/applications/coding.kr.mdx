# Generating Code

import { Callout, FileTree } from 'nextra-theme-docs'
import {Screenshot} from 'components/screenshot'
import CODE1 from '../../img/code-generation/chat-mode.png'

<Callout emoji="⚠️">
  이 장은 활발하게 개발 중입니다.
</Callout>

ChatGPT와 같은 대규모언어모델은 코드 생성에 매우 유용합니다. 이 절은 코드 생성을 위해 ChatGPT를 사용하는 방법에 대한 많은 예시를 다룰 것입니다.

앞으로 나오는 모든 예시에는 OpenAI 플레이그라운드(Playground)와 gpt-3.5-turbo 모델이 사용됩니다.

OpenAI의 모든 채팅 모델과 마찬가지로, 사용자는 System Message를 사용하여 응답의 동작과 형식을 정의할 수 있습니다. 프롬프트의 예시로 다음 시스템 메시지를 사용해보겠습니다.

```
너는 주니어 개발자에게 코딩을 가르칠 수 있는 코딩 도우미야. 언어는 Python이야. 코드를 설명하지는 말고 코드 블록 자체를 생성해.
```

## 기본 예시

User Message는 사용자가 모델로 생성하고자 하는 특정 코드의 지시를 가진 프롬프트 자체가 됩니다. 아래는 코드 생성을 위한 첫 번째 기초 프롬프트의 스냅샷입니다. 최종 코드는 Assistant로 생성되었음을 인지하시기 바랍니다.

<Screenshot src={CODE1} alt="CODE1" />

직접 시도한다면 프롬프트는 다음과 같습니다:

```
사용자에게 이름을 묻고 "안녕하세요"라고 말하는 코드를 작성해.
```

## 주석을 코드로 변환

이러한 대규모언어모델의 코드 생성 기능을 사용하여 주석만으로도 코드를 생성할 수도 있습니다. 다음은 지시를 주석 블록으로 전달하는 예시입니다:

*Prompt:*
```
"""
1. 영화들을 리스트로 생성해
2. 이 영화들의 평점을 리스트로 생성해
3. 이들을 결합하여 평점이 매겨진 영화의 json 객체를 10개 만들어.
"""
```

*Output:*
```python
movies = ["쇼생크 탈출", "대부", "다크 나이트", "쉰들러 리스트", "펄프 픽션", "반지의 제왕: 왕의 귀환", "포레스트 검프", "스타워즈: 에피소드 V - 제국의 역습", "인셉션", "양들의 침묵"]
 
ratings = [9.3, 9.2, 9.0, 8.9, 8.9, 8.9, 8.8, 8.7, 8.7, 8.6]
 
movie_ratings = {}
 
for i in range(len(movies)):
    movie_ratings[movies[i]] = ratings[i]
 
json_object = json.dumps(movie_ratings, indent=4)
 
print(json_object)
```

생성된 코드는 작동하는 코드처럼 보입니다. 하지만 출력에는 중요한 import 문, 즉 import json이 포함되어 있지 않습니다. 따라서 이러한 모델들이 작동하는 코드를 생성하는 동안, 이와 같은 작은 디테일에 각별히 주의를 기울여야 하며 항상 코드를 테스트해야 합니다.

## 함수 또는 이후 내용을 완성시키기

이러한 대규모언어모델은 개발자에게 유용한 GitHub Copilot 같은 툴과도 통합되었습니다. 한가지 유용한 기능은 모델이 함수를 완성하는 것입니다.

*Prompt:*
```python
# 두 수를 곱하고 75를 더하는 함수

def multiply(
```

*Output:*
```python
a, b):
    result = a * b
    result += 75
    return result
```

## MySQL 쿼리 생성

위에 등장한 기본 코드 생성의 예시 외에도 모델을 사용하여 MySQL 쿼리 생성 및 테스트와 같은 프로그래밍과 다른 측면으로 사용될 수 있는 유용한 코드를 생성할 수 있습니다.

프롬프트의 일부를 포함하고 특정 쿼리를 생성하도록 지시할 수 있는 정보가 담긴 데이터세트가 있다고 가정해 보겠습니다. 예를 들어:

```
"""
Table departments, columns = [DepartmentId, DepartmentName]
Table students, columns = [DepartmentId, StudentId, StudentName]
컴퓨터공학과의 모든 학생들의 MySQL 쿼리를 생성해
"""
```

*Output:*
```mysql
SELECT students.StudentId, students.StudentName
FROM students
INNER JOIN departments
ON students.DepartmentId = departments.DepartmentId
WHERE departments.DepartmentName = 'Computer Science';
```

모델이 쿼리를 생성합니다! 그러나 이 예제는 생성된 쿼리를 테스트할 데이터베이스가 없는 채로 구성되었습니다. 이 예시를 테스트할 경우 이 데이터베이스를 생성하는 것이 유용할 수도 있습니다. 다행히 ChatGPT로 이를 생성할 수 있습니다. 한 가지 방법은 데이터베이스 스키마를 생성하기 위해 약간 다른 지시를 하여 위 프롬프트의 수정된 버전을 사용하는 것입니다.

```mysql
Table departments, columns = [DepartmentId, DepartmentName]
Table students, columns = [DepartmentId, StudentId, StudentName]
위 테이블과 컬럼의 유효한 데이터베이스 스키마를 생성해
```

모델은 다음과 같은 스키마를 생성했습니다:

```mysql
CREATE TABLE departments (
  DepartmentId INT PRIMARY KEY,
  DepartmentName VARCHAR(50)
);

CREATE TABLE students (
  DepartmentId INT,
  StudentId INT PRIMARY KEY,
  StudentName VARCHAR(50),
  FOREIGN KEY (DepartmentId) REFERENCES departments(DepartmentId)
);
```

[sqliteonline.com](https://sqliteonline.com/)에서 임시 데이터베이스를 만들 수 있습니다.

기존에 생성된 쿼리가 유효한지 테스트하려면 더미 데이터도 필요합니다. 이것도 ChatGPT를 써봅시다! 프롬프트는 다음과 같습니다:

```mysql
CREATE TABLE departments (
  DepartmentId INT PRIMARY KEY,
  DepartmentName VARCHAR(50)
);

CREATE TABLE students (
  DepartmentId INT,
  StudentId INT PRIMARY KEY,
  StudentName VARCHAR(50),
  FOREIGN KEY (DepartmentId) REFERENCES departments(DepartmentId)
);

위의 데이터베이스 스키마를 바탕으로 각 테이블에 4개의 로우을 포함하는 유효한 Insert 구문을 생성해.
```

Insert 구문이 포함된 출력은 다음과 같습니다:

```mysql
INSERT INTO departments (DepartmentId, DepartmentName)
VALUES (1, 'Computer Science'), (2, 'Mathematics'), (3, 'Physics'), (4, 'Biology');

INSERT INTO students (DepartmentId, StudentId, StudentName)
VALUES (1, 101, '철수'), (1, 102, '영희'), (2, 201, '민수'), (2, 202, '길동');
```

이제 데이터베이스와 더미 데이터가 있으므로 기존 쿼리를 테스트할 수 있습니다. 더미 데이터를 기반으로 결과는 철수와 영희가 포함된 두 로우여야 합니다.

## 코드 설명
특정 언어로 프로그래밍을 배운다면 모델이 특정한 몇 가지 코드를 설명하도록 유도하는 것이 유용할 수 있습니다. 위에서 생성한 쿼리를 재사용하여 모델에게 설명을 요청해 봅시다.

이전과 동일한 Sysyem Message를 사용한다면 모델에 지시하는 방법에 주의하시기 바랍니다. 예를 들어, 다음 예시를 사용하는 경우 모델은 Python의 코딩 도우미라는 이유로 지시를 거부하는 듯하지만 설명은 제공합니다. 모델은 시스템 메시지를 따르도록 설계되었기 때문에 가끔 지시하는 내용을 생성하지 않는 경우가 있습니다.

*Prompt:*

```mysql
SELECT students.StudentId, students.StudentName
FROM students
INNER JOIN departments
ON students.DepartmentId = departments.DepartmentId
WHERE departments.DepartmentName = 'Computer Science';

위를 SQL 문으로 설명해.
```

*Output:*

```
죄송합니다. Python의 코딩 도우미로서 SQL 코드를 생성할 수 없습니다. 하지만 제공된 SQL 문의 목적을 설명할 수는 있습니다.

이 SQL 문은 `students` 테이블에서 `StudentId` 및 `StudentName` 컬럼을 선택합니다. 여기서 `departments` 테이블의 `DepartmentName` 컬럼은 'Computer Science'와 같습니다. 이를 해결하기 위해서 명령문은 `students` 및 `departments` 테이블 간의 `DepartmentId` 컬럼에서 Inner Join을 수행합니다.

쉽게 말해 컴퓨터공학과에 재학 중인 학생의 이름과 아이디를 뽑는 것입니다.
```

## 코드 수정

해당 페이지는 개발 중에 있습니다.

## 코드 디버깅

해당 페이지는 개발 중에 있습니다.

## 우수 사례

해당 페이지는 개발 중에 있습니다.
