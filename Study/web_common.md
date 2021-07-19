**동적/정적 타입 변수**
- Dynamic : 변수에 Type 설정이 불필요
  -    ex) javascript var
- Static : 변수에 Type 설정이 필요
  -     ex) JAVA - String, int...

**npm install options**
- --global : 전역에 설치
- --save : 프로젝트 결과물에 포함되야 할 packaage 설치
- --save-dev : 프로젝트 개발에 필요한 package 설치

**Babel Packages**
- Packages
  - babel-cli : CLI 제공
  - babel-core : 핵심 패키지
  - babel-preset-env : es6를 실행할 수 있는 환경 preset
  - babel-preset-stage : es6를 실행할 수 있는 preset
    -     ❗️preset 이란? 미리 준비한 Plugin 모음
- .babelrc
  - Babel 설정 파일

**Lexical Binding**
- 메서드 호출 혁식에 따라 this가 bind되는 것
-     ❗️Arrow Function의 경우 Lexical binding 되지 않고, outer의 this가 자동 전의 됨