
### <미니프로젝트> - 온라인 쇼핑몰 만들기
---
#### 기술
- JavaScript, HTML, CSS

#### 기능
- 아이템 스크롤링
- 버튼을 이용한 필터링 기능
- 버튼 호버 기능

#### 구현
- 목록이 컨테이너를 넘어가면 스크롤이 만들어지고 overflow-y: scroll, 스크롤은 display: none 으로 처리하였습니다.
- data.json 파일을 만들고, fetch를 통해서 데이터를 main.js 파일로 불러오는 방식을 이용하였습니다.
- 아이템 목록를 함수로 정의하여 Html li 태그로 생성하였습니다.
- 클릭 이벤트를 컨테이너에 등록하여 핸들링하는 이벤트 위임을 사용하였습니다.
- 버튼을 클릭했을때 data-key와 data-value를 받아와서 필터링하는 함수를 구현하였습니다.
- 
#### 기간
7월 1일 ~ 7월 11일

#### 메인화면
<img src="https://user-images.githubusercontent.com/58972939/178279974-2874286d-026c-4414-81c2-89898ee397e0.png" width="50%" height="50%">

#### Skirt 필터링
<img src="https://user-images.githubusercontent.com/58972939/178286940-bf1117e3-6b75-4038-b69a-f72de2682a0a.png" width="50%" height="50%">

#### Color - Pink 필터링
<img src="https://user-images.githubusercontent.com/58972939/178287491-9ff9ab68-c384-4194-9253-269a1c4d5859.png" width="50%" height="50%">



#### ref
-https://developer.mozilla.org
