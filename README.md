# 안녕하세요. jude 입니다.
<br>

## 마크다운 문법
*마크다운은 쉽고 빠르게 가독성 있는 문서를 작성하는데 도움이 됩니다.<br>
기본적으로 깃헙은 마크다운 문법을 지원하고 있습니다.

### 1. Heading
```
# 이것은 h1
## 이것은 h2
### 이것은 h3
#### 이것은 h4
##### 이것은 h5
###### 이것은 h6
이것은 보통 텍스트
```
# 이것은 h1
## 이것은 h2
### 이것은 h3
#### 이것은 h4
##### 이것은 h5
###### 이것은 h6
이것은 보통 텍스트

<br>

### 2. BlockQuote
```
> 이것은 1단 blockquote
> > 이것은 2단 blockquote
> > > 이것은 3단 blockquote
> > > > 이것은 4단 blockquote
```

> 이것은 1단 blockquote
> > 이것은 2단 blockquote
> > > 이것은 3단 blockquote
> > > > 이것은 4단 blockquote

<br>
인용문 안에는 각종 문법을 포함할 수 있다.

```
> - list
>   + list
>     * list
```

> - list
>   + list
>     * list

<br>

### 3. 목록
```
순서 없는 목록 (ul)
- test
    + test
        * test
```

- test
    + test
        * test

<br>

```
순서 있는 목록 (ol)
1. 목록 첫번째
2. 목록 두번째
3. 목록 세번쨰
2. 목록 첫번째
3. 목록 두번째
```

__* 이렇듯 떨어뜨려 번호를 다시 써도 실제로는 아래와 같이 순서가 이어진다.__

1. 목록 첫번째
2. 목록 두번째
3. 목록 세번쨰
2. 목록 첫번째
3. 목록 두번째

<br>

### 4. 수평선
```
* * *
***
*******
- - -
---------------
```

* * *

***

********

- - -

-----------

<br>

### 5. 링크
```
[daum](http://www.daum.net)
[naver](http://www.naver.com)
<https://www.google.co.kr/>
<http://www.nate.com>

웹개발 관련 정보를 [네이버][1]와 [다음][2]에서 검색을 하면 만족스러운 결과가
나오지않아서 [구글][3]에서 주로 검색을 하는 편이다.

  [1]: http://www.naver.com/        "네이버"
  [2]: http://www.daum.net/         "다음"
  [3]: http://www.google.co.kr/     "구글"

웹개발 관련 정보를 [네이버][]와 [다음][]에서 검색을 하면 만족스러운 결과가
나오지않아서 [구글][]에서 주로 검색을 하는 편이다.

  [네이버]: http://www.naver.com/        "네이버"
  [다음]:   http://www.daum.net/         "다음"
  [구글]:   http://www.google.co.kr/     "구글"

```

[daum](http://www.daum.net)
[naver](http://www.naver.com)
<https://www.google.co.kr/>
<http://www.nate.com>

웹개발 관련 정보를 [네이버][1]와 [다음][2]에서 검색을 하면 만족스러운 결과가
나오지않아서 [구글][3]에서 주로 검색을 하는 편이다.

  [1]: http://www.naver.com/        "네이버"
  [2]: http://www.daum.net/         "다음"
  [3]: http://www.google.co.kr/     "구글"

웹개발 관련 정보를 [네이버][]와 [다음][]에서 검색을 하면 만족스러운 결과가
나오지않아서 [구글][]에서 주로 검색을 하는 편이다.

  [네이버]: http://www.naver.com/        "네이버"
  [다음]:   http://www.daum.net/         "다음"
  [구글]:   http://www.google.co.kr/     "구글"

<br>

### 6. 강조

```
*이탤릭 em 태그*

_이탤릭 em 태그_

**볼드 strong 태그**

__볼드 strong 태그__

~~취소선~~~
```

*이탤릭 em 태그*

_이탤릭 em 태그_

**볼드 strong 태그**

__볼드 strong 태그__

~~취소선~~

<br>

### 7. 코드블럭

```
` ` `
function test() {
    console.log("함수 테스트");
}
` ` `
```

```
function test() {
    console.log("함수 테스트");
}
```

<br>

단어에 짧게 사용하면 아래와 같이 음영 처리됨<br>
```
출력을 할 때 사용하는 `print()` function.
```
출력을 할 때 사용하는 `print()` function.

<br>

```
* 목록 안의 코드블럭은 목록 아래에 들여쓰기를 하여 작성
    ```
    <p>리스트 안의 코드</p>
    목록 안의 코드블럭 2번째 줄
    ```
```

* 목록 안의 코드블럭은 목록 아래에 들여쓰기를 하여 작성
    ```
    <p>리스트 안의 코드</p>
    목록 안의 코드블럭 2번째 줄
    ```

<br>

### 8. 체크박스

```
- [x] test
- [ ] test2
```

- [x] test
- [ ] test2