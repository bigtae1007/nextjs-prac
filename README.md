# NextJS 연습 repo

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

## Anchor 사용은 안하는게 좋다.

- React와 마찬가지로 새로고침이 포함되어있는 a태그로 이동하는 것은 좋은 방식이 아니다.
- import Link from "link/next를 선언하고 <Link></Link>를 사용하자

## CSS 적용 방법

- inline-style : JSX 태그에 직접 입력하는 방법
- modules : next.js에 module 방식
  - css 파일 명을 XXX.module.css으로 작성 XXX는 선택
  - import styles from "./XXX.mpdule.css" 선언
  - jsx 태그에 className={styles.XXX} 작성 XXX는 css 파일에 클래스 명
  - 여러개의 style을 입력할 경우 전체를 문자열로 표시하는 방법과 배열 2가지 방법 등이 있다. 두 클래스 명에 공백만 추가하면 그만
    - className={\`${styles.nav}${styles.active}\`}
    - className = {[styles.nav, styles.active].join(" ")}
  * style jsx : \<style\ jsx>{\`style 작성\`}<\/style\>

#### 특징

- modules.css가 아닌 .css파일은 import 할 수 없다. 단, 아래에 설명하는 \_app.tsx/jsx에서는 가능하다.

#### 전역 CSS 설정하는 방법

- 하나의 페이지에서만 전역 CSS 작성하기
  - style jsx에서 jsx global 넘기기. 단, 페이지에 한해 적용된다. 즉 페이지가 변경되면 의미가 없다.
- App component 추가하기
  - \_app.js / ts 추가하기 - 모든 렌더링에 포함하여 렌더링하는 파일
  - global CSS import 또는 style jsx global로 지정하기

## 훅

### useRouter

- 주소 정보를 받아올 수 있는 훅
- console.log를 찍어보자 다양한 주소 정보가 담겨있다.
