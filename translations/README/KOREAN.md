# [Contribute To This Project](https://syknapse.github.io/Contribute-To-This-Project/)

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweet this project')

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')

> **공지:** 메인테이너가 되어 이 프로젝트를 관리하는데 도움을 주시겠습니까? 관심 있으신 분들은 [트위터](https://twitter.com/Syknapse)로 DM을 보내주시고 [maintainer's guide](maintainer_guide.md)을 정독하세요.

## 소개

이 튜토리얼은 기여가 처음인 분들이 쉽고 간단하게 프로젝트에 참여할 수 있도록 도움을 주기 위한 튜토리얼입니다.

이 튜토리얼은 다른 언어([포르투갈어](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/PORTUGUESE.md), [스페인어](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/SPANISH.md), [이탈리아어](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/translations/ITALIAN.md))로도 제공됩니다.

### 목표

- 오픈소스 프로젝트에 기여하기
- 깃허브를 더 능숙하게 사용하기

### 누구를 대상으로한 프로젝트인가요?

- 이 프로젝트는 초보자들을 위한 프로젝트입니다. 앵커 태그 `<a href="" target=""></a>`를 작성하고 수정할 수 있다면 이 프로젝트에 참여할 수 있습니다.
- 처음으로 오픈소스에 기여 해보고 싶거나 다른 프로젝트에 기여 경험이 있지만 더 많은 기여를 경험하고 싶은 분들을 위한 프로젝트입니다.

### 이 프로젝트는 왜 필요한가요?

웹 개발자 취업을 희망하는 사람들과 현직 개발자들에게 Git 버전 관리는 필수입니다. GitHub는 많은 사람들이 사용하는 가장 대중적인 Git 호스팅 서비스이자 오픈소스 커뮤니티입니다. GitHub를 능숙하게 사용하는 것은 개발자로써 중요한 기술 중 하나입니다. 프로젝트에 기여하면 GitHub 사용에 대한 자신감이 높아지고 GitHub 프로필에 기여 내용이 표시됩니다.<br>

만약 본인이 입문자이며 Git과 GitHub에 대해 배우고 싶다면 이 가이드를 참고하세요: [You Should've Learned Git Yesterday](https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa).

## 무엇을 기여하게 되나요?

![ContributorCard](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/card.PNG)

여러분은 이 [프로젝트의 웹 페이지](https://syknapse.github.io/Contribute-To-This-Project/ 'https://syknapse.github.io/Contribute-To-This-Project')에 위 그림과 같은 카드를 기여하게 될 것입니다. 카드에는 본인 이름, 트위터 아이디, 간단한 소개 및 여러분들이 추천하는 웹 개발자들을 위한 유용한 리소스 링크가 포함됩니다.

HTML 파일 내부에 카드 템플릿의 복사본을 만들고 본인의 정보로 수정하세요.

## 목차

| <ul><li>[소개](#소개)</li><li>[무엇을 기여하게 되나요?](#무엇을-기여하게-되나요?)</li><li>[준비](#준비)</li><li>[기여하기 &rightarrow;](#기여하기)</li><li>[다음 단계](#다음-단계)</li><li>[감사의 말](#감사의-말)</li></ul> | 기여하기: <ul><li>[1단계: 저장소 fork](#1단계:-저장소-fork)</li><li>[2단계: 저장소 Clone](#2단계:-저장소-Clone)</li><li>[3단계: 새 브랜치 생성](#3단계:-새-브랜치-생성)</li><li>[4단계: index.html 파일 열기](#4단계:-index.html-파일-열기)</li><li>[5단계: 카드 템플릿 복사](#5단계:-카드-템플릿-복사)</li><li>[6단계: 내용 변경](#6단계:-내용-변경)</li><li>[7단계: 변경 사항 Commit](#7단계:-변경-사항-Commit)</li><li>[8단계: 변경 사항 GitHub에 Push](#8단계:-변경-사항-GitHub에-Push)</li><li>[9단계: PR 제출](#9단계:-PR-제출)</li><li>[10단계: 축하합니다!](#10단계:-축하합니다!)</li></ul> |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


## 준비

작업을 위해서 몇 가지 준비를 해보겠습니다.

1. GitHub 계정에 로그인하세요. 만약 아직 계정이 없으시다면 [GitHub에 가입](https://github.com/join)하세요. 작업 진행을 위해 [GitHub Hello World 튜토리얼](https://guides.github.com/activities/hello-world/)을 정독하시는 것을 추천드립니다.
1. [GitHub 데스크탑 앱](https://desktop.github.com/)을 설치하세요.
   - 커맨드 라인에서 Git을 사용하는 것이 편하다면 GitHub 데스크탑 앱을 설치하지 않으셔도 됩니다.(커맨드 라인에서 Git 사용에 대한 가이드는 이 프로젝트와 유사한 프로젝트인 [first-contributions](https://github.com/Syknapse/first-contributions)을 참고하세요.) 또는
   - [VS Code](https://code.visualstudio.com/)를 사용하는 경우 통합 Git이 제공되므로 에디터에서 직접 필요한 작업을 수행할 수 있습니다.

이제 모든 준비가 완료되었으므로 본격적으로 프로젝트 기여를 위한 작업을 시작해보겠습니다.

---

---

## 기여하기

간단한 10단계를 통해 오픈소스 기여자가 되어보세요.

_예상 소요 시간: 30분 미만_.

### 1단계: 저장소 Fork

- 이 단계에서의 목표는 프로젝트의 복사본을 만들어 여러분의 GitHub 계정에 저장하는 것입니다.
- 저장소는 GitHub에서 프로젝트가 호출되는 방식이며 포크는 프로젝트의 복사본입니다.
- 이 저장소의 [메인 페이지](https://github.com/Syknapse/Contribute-To-This-Project 'https://github.com/Syknapse/Contribute-To-This-Project')에서 아래 그림과 같은 버튼을 찾으세요.

| <ul><li> _Fork_ 버튼을 클릭하세요.</li></ul> | ![Fork](../../readme-only/fork.png) |
| :------------------------------------------- | ----------------------------------------------------------------------------------------------: |


- 이제 여러분의 계정에 프로젝트 사본 복사가 완료되었습니다.

---

### 2단계: 저장소 Clone

- 이제 프로젝트의 로컬 복사본이 필요합니다. 로컬 복사본이란 여러분의 컴퓨터에 저장된 프로젝트의 복사본을 의미합니다.
- GitHub 데스크탑 앱을 엽니다. 앱에서 다음 작업을 수행하세요:

| <ul><li> *File*을 클릭한 다음 *Clone repository*를 클릭하세요.</li></ul> | ![Clone](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/clone.PNG) |
| :----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------: |


| <ul><li>GitHub에서 프로젝트 및 Fork 목록을 볼 수 있습니다.</li><li>`<your-github-username>/Contribute-To-This-Project`를 클릭하세요.</li><li>*Clone*을 클릭하세요</li></ul>        | ![Clone project](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/clone-project.PNG) |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------: |
| <ul><li>fork된 프로젝트는 왼쪽에 fork 아이콘이 있습니다.</li><li>fork에는 고유한 GitHub 사용자 이름이 있습니다.</li></ul> |  ![your fork](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/clone-your-fork.PNG)  |

- 프로젝트가 하드디스크로 복사되는데 시간이 소요됩니다. 일반적으로 `..\Documents\GitHub`를 기본 경로로 설정하는 것을 추천드립니다.
- 이제 프로젝트의 로컬 복사본이 생성되었습니다.

---

### 3단계: 새 브랜치 생성

- 저장소가 복제되고 GitHub 데스크탑에서 열리면 새로운 브랜치를 생성할 차례입니다.
- 브랜치는 수정 사항을 `Master`라는 프로젝트의 주요 부분과 분리하는 수단입니다. 예를 들어 잘못된 수정을 통해 원하지 않은 결과를 얻게되더라도 간단히 브랜치 삭제를 통해 메인 프로젝트에 영향을 끼치지않게 할 수 있습니다.

| <ul><li>*Current branch*를 클릭하세요.</li><li>*New*를 클릭하세요.</li></ul> | ![Create branch](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/branch-new.PNG) |
| :--------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------: |


| <ul><li>브랜치 이름을 지정하세요.</li><li>`Create branch`를 클릭하세요.</li></ul> | ![Name branch](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/branch-name.PNG) |
| :-------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------: |


- 브랜치 이름을 마음대로 지정할 수 있지만, 이 브랜치는 본인의 이름이 입력된 카드를 프로젝트에 추가하기 위한 브랜치이므로 브랜치의 의도를 잘 나타낼 수 있는 `your-name-card`로 지정하는 것이 좋습니다.

| <ul><li>GitHub에 새로운 브랜치 게시</li></ul> | ![Name branch](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/branch-publish.PNG) |
| :-------------------------------------------- | ---------------------------------------------------------------------------------------------------------------: |


- 이제 마스터와 분리된 새로운 브랜치를 생성했습니다.
- 다음 단계를 위해 이 브랜치에서 작업중인지 확인하세요. GitHub 데스크탑 앱의 상단 중앙에 *Current branch*에서 현재 브랜치의 이름이 표시됩니다.

**절대 `master` 브랜치에서 작업하지 마세요.**

---

### 4단계: index.html 파일 열기

- 이제 선호하는 코드 에디터에서 편집할 파일을 열어야 합니다.
- 컴퓨터에서 프로젝트 폴더를 찾으세요. 기본 값으로 설정했다면 다음과 같은 경로에서 프로젝트 폴더를 찾을 수 있습니다. `your-computer > Documents > GitHub > Contribute-To-This-Project`
- `index.html` 파일은 `Contribute-To-This-Project` 폴더에 저장되어 있습니다.

| <ul><li>코드 에디터(Sublime, VS Code, Atom 등)를 열고 `Open file` 명령으로 프로젝트의 메인 디렉토리에서 index.html 파일을 찾습니다.</li><li>하드 디스크에 저장된 파일을 우클릭해 직접 코드 에디터로 여는 방법도 있습니다.</li></ul> | ![Open index file](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/index-open.PNG) |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------: |


- 이제 코드 에디터에서 편집할 파일을 열었으며 편경할 준비가 완료되었습니다.

---

### 5단계: 카드 템플릿 복사

- 작업을 시작하기에 앞서, 카드 템플릿의 복사본을 만들어야 합니다.

| <ul><li>html 파일 상단, `<head>` 및 `<header>` 섹션 아래에 `== TEMPLATE ==`레이블이 지정된 섹션이 있습니다.</li><li>아래 이미지에 빨간색으로 표시된 사각형 내부의 `Contributor card START`부터 `Contributor card END` 주석 사이의 모든 코드를 복사하세요. </li></ul> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Copy card template](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/card-copy.PNG)                                                                                                                                                   |

| <ul><li>복사한 코드를 주석 바로 아래에 붙여넣으세요.</li><li>카드의 시작 부분과 마지막 끝 부분 사이에 공백 한 줄이 있는지 확인하세요. 코드를 가능한 명확하게 유지하는 것이 좋습니다.</li><li>린터나 스타일 포매터를 사용하지마세요. 프로젝트에 Prettier 설정이 있습니다.</li></ul> |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Paste card template](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/card-paste.PNG)                                                                                                                                                              |

- 이제 카드를 본인의 정보로 변경하고 편집할 차례입니다.

---

### 6단계: 내용 변경

- 이제 html 편집을 시작할 것입니다. 카드에서 수정해야될 필드의 내용을 변경합니다.

| <ul><li>'Name'을 자신의 이름으로 변경합니다. </li><li> `class="name"`를 수정 하지마세요.</li></ul> | ![Change name](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/change-name.PNG) |
| :------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------: |


| <ul><li>`href="Insert URL here"`에 트위터 계정 URL을 입력하세요.</li><li>텍스트 필드에 계정 이름을 입력하세요.</li></ul> |
| :----------------------------------------------------------------------------------------------------------------------- |
| ![Change contact](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/change-contact.PNG)      |

- 트위터가 아닌 다른 연락처를 사용하려면 [Font Awesome Icons](http://fontawesome.io/icons/)에서 본인이 사용하고 싶은 아이콘을 찾아 `<i class="fa fa-twitter"></i>`에서 `fa-twitter` 부분을 수정하면 됩니다. 예를 들어 페이스북 아이콘을 사용하려면 `fa-twitter` 대신 `fa-facebook`를 사용하면 됩니다.

| <ul><li>여러분에 대해 알려주세요.</li><li>블로그 게시물처럼 자세한 설명이 아닌 트윗처럼 짧고 간결하게 작성하세요.</li></ul> | ![Change about](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/change-about.PNG) |
| :-------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------: |


| <ul><li>웹 개발과 관련해 유용한 리소스가 있는 커뮤니티의 링크 3개를 공유하세요. </li><li>영상, 강연, 팟캐스트, 기사, 참고 자료 무엇이든 좋습니다.</li><li>만약 여러분이 초보자라도 부담갖지말고 아는 것 무엇이든 공유하세요. 많은 사람들이 도움을 받을 수 있을겁니다.</li></ul> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![Change resources](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/change-resources.PNG)                                                                                                                                                         |
| <ul><li>링크: `href="here"`의 `#` 부분에 링크를 삽입하세요.</li><li>설명: `title="here"`부분에 간단한 설명을 작성하세요.</li><li>이름: >here</a>` 부분에 리소스의 이름을 쓰세요.</li></ul>                                                                                      |

- 변경된 내용들이 모두 저장되었는지 확인하세요.
- 변경된 내용들을 꼭 테스트하세요. 브라우저에서 html 파일을 열고 카드가 웹사이트에서 어떻게 보이는지 확인해야합니다. 전체 페이지에 이상이 없는지 확인하세요. 링크를 클릭하고 제대로 동작하는지도 확인해야합니다. 콘솔(Ctrl + Shift + J (Windows / Linux) 또는 Cmd + Opt + J (Mac))을 열고 에러 메시지가 없는지 확인하세요.
- 이제 코드 편집을 무사히 마쳤습니다! 다음 단계에서는 변경 사항을 GitHub로 보낸 다음 제출해 메인 프로젝트와 병합할 것입니다.

---

### 7단계: 변경 사항 Commit

- 다시 GitHub 데스크탑 앱으로 돌아갑니다.
- 변경 사항이 스테이징 영역에 자동으로 추가됩니다.
- Git에 의해 모든 변경 사항이 기록되었습니다.
- 앱에 반영된 것을 확인할 수 있습니다. 파일에 추가된 부분은 녹색으로 표시되며 삭제된 항목은 빨간색으로 표시됩니다.

| <ul><li>다음 단계는 *commit*입니다.</li><li>*commit*은 간단히 "변경 사항 확인" 정도로 설명할 수 있습니다.</li></ul> | ![Commit changes](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/commit.PNG) |
| :------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------: |


| <ul><li>GitHub 데스크탑 헤더는 다음과 같아야 합니다. </li><li>`Current repository`에서 프로젝트 이름 옆 fork 아이콘을 확인하세요.</li><li>여러분의 `Current branch`에 3단계에서 입력한 이름의 브랜치가 있을 것입니다. </li></ul> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Commit changes](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/commit-header.PNG)                                                                                                               |

| <ul><li>*Commit*을 위해 _Summary_ 필드를 작성하세요.</li><li>이 필드는 여러분이 무엇을 변경했는지를 설명하는 commit 메시지입니다.</li><li>이 경우 "Add my card information"가 적당한 commit 메시지가 될 것입니다.</li><li>필수는 아니지만, 더 자세한 설명이 담긴 *Description*을 추가할 수 있습니다.</li><li>_Commit_ 버튼을 클릭하세요. 버튼에 `Commit to "your-branch-name"`를 확인할 수 있을 것입니다.</li></ul> | ![Write commit message and commit](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/commit-message.PNG) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -----------------------------------------------------------------------------------------------------------------------------------: |


---

### 8단계: 변경 사항 GitHub에 Push

- 이제 변경된 내용들이 저장되고 commit되었습니다. 그러나 변경 사항들은 여러분의 로컬 컴퓨터에만 저장된 것입니다.
- GitHub의 저장소와 로컬 변경 사항을 동기화하는 것을 *push*라고 합니다. *push*를 통해 로컬 컴퓨터 저장소의 변경 사항들을 GitHub의 저장소로 "pushing"합니다.

| <ul><li>_Push_ 버튼을 클릭하세요.</li></ul> | ![Push to GitHub](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/push.PNG) |
| :------------------------------------------ | --------------------------------------------------------------------------------------------------------: |


- 몇 초 후에 작업이 완료되고 GitHub에 여러분의 컴퓨터의 브랜치 복사본과 정확히 일치하는 복사본이 존재하게 됩니다.

---

### 9단계: PR 제출

- 여러분이 기다리시던 Pull Request(PR)를 제출하는 단계입니다.
- 지금까지 실시한 모든 작업들은 여러분의 GitHub의 계정의 프로젝트 fork에 있었습니다.
- 이제 병합될 변경 사항을 메인 프로젝트에 보낼 차례입니다.
- 이것을 [_Pull Request_](https://help.github.com/articles/about-pull-requests/ 'About Pull Requests - GitHub Help')라고 합니다. Pull Request는 말 그대로 프로젝트 관리자에게 끌어오도록(Pull) 요청(Request)하는 작업입니다.
- GitHub에서 여러분의 fork 저장소의 메인 페이지로 이동하세요. (맨 위의 사용자 이름과 fork 아이콘이 있습니다.)
- 저장소 상단에서 pull request 메시지가 적혀진 녹색 버튼이 있습니다.

| <ul><li>`Compare and pull request`를 클릭하세요.</li></ul> | ![Submit a Pull Request](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/pull-request.PNG) |
| :--------------------------------------------------------- | -----------------------------------------------------------------------------------------------------------------------: |


| <ul><li>아래는 `Open a pull request` 페이지입니다.</li><li>우리는 지금 여러분의 브랜치의 fork를 `Master` 브랜치가 아닌 기존 프로젝트와 병합하려고 시도하고 있다는 것을 꼭 기억하세요.</li><li>아래 이미지는 pull request의 헤더가 어떻게 구성되는지를 보여주고 있습니다. </li><li> 가장 왼쪽 드롭박스에는 기존의 프로젝트가 있으며, 다음은 master 브랜치, 이어서 생성한 fork와 브랜치가 있습니다.</li></ul> |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![Open a Pull Request](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/pull-request-branches.PNG)                                                                                                                                                                                                                                                                             |

| <ul><li>pull request 생성:</li><li>제목을 작성하세요.</li><li>설명에 추가적인 설명을 작성하세요.</li><li>`Create pull request`를 클릭하세요.</li></ul> | ![Submit a Pull Request](https://github.com/Syknapse/Contribute-To-This-Project/raw/master/readme-only/pull-request-open.PNG) |
| :----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------: |


- 다른 옵션들에 당황하지마세요. 여러분은 이 세 단계만 실시하시면 됩니다.
- `Allow edits from maintainers`을 선택한 상태로 두세요.
- 이제 *Pull Request*가 프로젝트 메인테이너에게 전송될 것입니다. 리뷰 후 검토가 완료되면 여러분이 변경한 내용이 [프로젝트 웹 페이지](https://syknapse.github.io/Contribute-To-This-Project 'Contribute To This Project web page')에 반영됩니다.

---

### 10단계: 축하합니다!

모든 단계가 완료되었습니다! 여러분은 이제 GitHub의 오픈 소스 프로젝트에 기여했습니다.

라이브 웹 페이지에 여러분의 코드가 추가 되었습니다. [https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project)

여러분이 추가하고 변경한 내용은 **즉시 반영되지 않습니다.** 먼저 프로젝트 메인테이너의 리뷰, 승인 및 병합 과정을 거쳐야합니다. 병합되면 카드가 라이브 웹 페이지에 표시됩니다.

PR에 대한 리뷰어의 수정 요청은 매우 일반적인 일입니다. 만약 여러분의 PR에 리뷰어가 수정 요청을 한다면 좋은 기회라고 생각하세요. 리뷰어의 의견과 요청된 변경 사항을 확인하고 변경 후 여러분의 브랜치에서 다시 commit, push 하시면 됩니다. PR은 새로운 변경 사항과 함께 자동으로 업데이트됩니다.

PR에 대해 가능한 빠르게 리뷰와 병합이 이루어지지만 남는 시간에 작업하기 때문에 며칠정도 소요될 수 있습니다.

---

---

## 다음 단계

- 병합된 Pull Request 확인하세요.
- 변경 사항이 승인되거나 추가적인 요청사항이 있을 경우 GitHub에서 메일을 발송하게 됩니다. 그리고 PR이 master와 최종적으로 병합되면 여러분의 카드가 추가됩니다.
- 이 프로젝트가 여러분에게 도움 되었다면 :star: star :star:를 클릭해주시고 트위터[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweet this project')에 공유하세요.
- 이 프로젝트의 제작자인 Syk Hhoudeib에게 연락하고 싶다면 [트위터](https://twitter.com/Syknapse '@Syknapse')와 [링크](https://syknapse.github.io/Syk-Houdeib/#contact 'My contact section | Portfolio')를 통해 연락할 수 있습니다.
- 이 프로젝트는 오픈 소스 프로젝트입니다. 카드 기여 외에도 버그, 개선 사항 및 새로운 기능 추가 등의 수정 사항은 언제든 환영입니다. [issue](https://help.github.com/articles/creating-an-issue/ 'Mastering Issues | GitHub Guides')를 관리하고 새로운 [pull request](https://help.github.com/articles/creating-a-pull-request-from-a-fork/ 'Creating a pull request from a fork | GitHub Help')를 보내세요.
- 커뮤니티를 참여하시려면 Pull Requerst 옆에 위치한 GitHub [Discussions](https://github.com/Syknapse/Contribute-To-This-Project/discussions) 탭을 확인하세요. 이 곳에서 본인 소개, 오픈 소스에 대한 토론 및 프로젝트 메인테이너와 소통할 수 있습니다. 커뮤니티에 참여해 기능을 추가하고 커뮤니티를 발전시키는데 도움을 주시겠습니까?
- **프로젝트에 기여해 주셔서 감사합니다.** 이제 ![Good First Issue](https://user-images.githubusercontent.com/29199184/33852733-e23b7070-debb-11e7-907b-4e7a03aad436.png)에서 초보자들도 참여할 수 있는 옵션을 찾아 다른 프로젝트에도 기여해보세요.
- PR을 리뷰하고 병합하는데 도움을 줄 콜라보레이터를 찾고 있습니다. 고급 Git 작업을 직접 해보고 싶으시면 트위터로 DM을 보내주시고 [maintainer's guide](maintainer_guide.md)를 정독하세요.

## 감사의 말

이 프로젝트는 [Roshan Jossey](https://github.com/Roshanjossey)가 만든 최고의 프로젝트 [first-contributions](https://github.com/Roshanjossey/first-contributions)에서 많은 영향을 받았습니다.

또한 [#GoogleUdacityScholars](https://twitter.com/hashtag/GoogleUdacityScholars?src=hash) The Google Challenge Scholarship: Front-End Web Dev, class of 2017 Europe에서 큰 영감을 받았습니다.

## 라이센스

[MIT License](https://github.com/Syknapse/Contribute-To-This-Project/blob/master/LICENSE)

[처음으로 &uparrow;](#소개)
