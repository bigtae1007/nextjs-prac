# NextJS 연습 repo

clean code를 생각하며 연습을 해보자.

## pages 폴더

- react 에서 routing에 개념과는 다르다.
- 파일 이름이 곧 URL이 된다.
- export default를 해야만 화면에 보여질 수 있다.
- 없는 주소는 기본적으로 not found 페이지가 보여진다. 커스텀 가능

* 예외사항
  - index.js는 home으로 연결이 된다. 파일 명에 의미가 없다. 주소로 index를 들어가도 필요가 없다.
  - 기본적으로 react를 import할 필요가 없다. 다만 다른 훅을 사용할 땐 필요하다.

## jsx가 필수 X , tsx는 필수 O

- typescript를 사용하지 않는다면, react와 동일하게 js, jsx 둘다 코드를 작성할 수 있다.
- typescript를 사용한다면, tsx로만 코드가 작성이 가능하다. (JSX문법을 사용할 수 없다.)

## hydration (React와 Next.js에 결합에 장점)

- 브라우저가 JS 코드를 읽고 그려야 하기 때문에 react 웹을 실행하면 처음에는 빈 화면이 보인다.
- react는 엄밀히 말하면 html에 코드가 없다. 전부 JS코드로 이루어져있다. 따라서 읽는데 시간이 오래걸린다.

- Next.JS같은 경우에는 html에 코드가 있다. react에 JSX는 JS로 들어가지만 Next 프레임워크를 사용하면 HTML 코드로 들어간다. (같은 렌더지만 NextJS가 HTML 소스코드로 변환을 시켜준다.)
- 페이지 오픈 시 HTML이 먼저 그려지고 react 코드가 실행되기 때문에 화면에 보이지는 속도가 빠르다.

#### 테스트 방법

React와 Next로 만든 웹페이지에서 브라우저에 JS읽기 기능을 끄면 볼 수 있다.
react는 JS코드를 읽어야 하기 때문에 화면이 보이지 않고 기능을 키라는 문구가 뜬다.
Next는 동적으로 동작하지는 않지만 HTML은 화면에 보이게 된다.
