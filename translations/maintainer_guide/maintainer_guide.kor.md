# 메인테이너 가이드

이 가이드는 커뮤니티를 위해 프로젝트를 관리하고 유지하는 데 도움을 주고 싶은 사람들을 위한 가이드입니다.( **처음으로 프로젝트에 기여하는 분들**을 위한 가이드가 아닙니다.)

## 번역

이 튜토리얼은 [다른 언어](translations/README.md)로도 제공됩니다.

| [English](maintainer_guide.md)   | [Bangla](translations/maintainer_guide/maintainer_guide.ben.md) | [Chinese (Traditional)](/translations/maintainer_guide/maintainer_guide.zho-tc.md) | [German](translations/maintainer_guide/maintainer_guide.ger.md) | [Hindi](translations/maintainer_guide/maintainer_guide.hin.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Italian](translations/maintainer_guide/maintainer_guide.ita.md) | [Japanese](translations/maintainer_guide/maintainer_guide.jpn.md) | [Portuguese](translations/maintainer_guide/maintainer_guide.por.md) | [Ukrainian](/translations/maintainer_guide/maintainer_guide.ukr.md) |

> 프로젝트 문서 번역을 하고 싶다면 환영입니다. [`번역 가이드`](translations/README.md)를 읽고 기여해주세요.

---

## 목표

주요 목표는 기여자가 Pull Request를 작성한 지점부터 가능한 빠른 피드백을 제공하는 것입니다. 이는 주로 코드 리뷰를 수행하고 수락된 PR을 병합하는 것을 의미합니다.
또한, 기여자들을 위해 프로젝트가 정확하게 작동하고 기여자들에게 도움이 되고 유용하게 사용될 수 있도록 유지 관리를 해야 합니다.

## 누구를 위한 일인가요?

Git과 GitHub 스킬이 어느 정도 있다면 누구나 참여할 수 있습니다. 전문가일 필요는 없으며, 이 가이드는 초보자에게도 도움이 될 것입니다. 이 프로젝트는 정기적인 기여를 받는 활발한 프로젝트이며, 많은 사람이 처음으로 오픈 소스에 기여하는 데 도움이 됩니다. 이 프로젝트의 메인테이너가 되면 기여자들에게 좋은 첫 경험을 제공하고 더 많은 기여를 장려하는 데 도움이 되는 것을 보장할 수 있습니다.

메인테이너로 투입하는 시간은 원하는 만큼 조절할 수 있습니다. 우리 모두 함께 원활하게 프로젝트를 운영할 수 있기를 희망합니다.

## 방법론

- 프로젝트의 pull request 섹션으로 이동하고, 'changes requested' 상태가 아닌 가장 오래된 pull request 부터 시작하세요.
- PR(Pull Request)을 열고 파일 변경 탭으로 이동하여 코드 리뷰를 시작하세요.
- PR을 확인하여 튜토리얼에서 제시한 사양을 따르는지 확인하세요.
- HTML, 링크, 데이터가 모두 올바른지 확인하세요. 카드가 파일의 시작 부분에 위치하도록 확인하세요.
- 다음으로 충돌 여부를 확인하세요. `master`를 PR branch에 병합하여 충돌을 해결합니다. 충돌은 이전 병합 이후 시간이 지난 경우나 여러 PR이 동일한 오래된 버전을 사용할 때 발생하는 경우가 일반적입니다.
- 이 경우 충돌을 수정합니다. 보통 포크를 만들 때부터 추가된 카드 위에 새 카드를 추가해야 합니다.
- 만약 다른 모든 것이 괜찮다면 PR을 승인하고 기여자에게 기여에 감사하는 메세지를 작성합니다(이들은 처음 시도하는 사람들이므로 격려가 도움이 될 것입니다).
- PR을 `master`에 병합하세요.

## 변경 요청

- 가끔 PR에는 잘못된 브랜치, 손상된 HTML, 누락된 정보, 카드가 잘못된 위치에 배치된 등 튜토리얼이 올바르게 따라지지 않은 문제가 있을 수 있습니다. 이러한 문제들은 기여자가 수정해야 하는 부분입니다 (단순한 병합 충돌이 아닌 경우).
- GitHub에서 코드 리뷰를 시작하고 변경 사항을 요청하세요. 가능한 한 자세하게 설명하고 정확한 줄에 댓글을 남기며 문제가 무엇인지와 어떻게 해결해야 하는지 명확하게 알려주세요. 그리고 이것이 PR 검토 프로세스의 정상적인 부분임을 기고해주세요.
- 준비가 되면 리뷰를 제출하세요.
- 기여자에게 도움이 될 만한 후속 질문이 있을 수 있으니 대화를 계속 주시하세요. 우리의 목표는 모든 사람이 결승선을 통과하도록 하는 것이므로 끝까지 안내하려고 노력해야합니다.
- 요청한 변경 사항을 수정한 경우, PR을 `master`에 병합할 수 있습니다.

변경 사항으로 인해 프로젝트가 손상되지 않았는지, 라이브 페이지가 여전히 예상대로 작동하는지 항상 테스트하세요. 병합하기 전에 항상 로컬에서 변경 사항을 테스트하고 의심스러운 변경 사항은 절대로 병합하지 않는 것이 가장 좋습니다.

## 도구

누적 PR이 많지 않은 경우 이 모든 프로세스를 프로젝트의 GitHub 페이지에서 직접 수행할 수 있습니다.  
하지만 몇 개의 PR이 대기 중인 경우가 드물지 않으며, 이 경우 필연적으로 병합 충돌이 발생할 수 있습니다. 익숙한 도구를 사용하여 Diff를 확인하고 충돌을 수정할 수 있습니다.  
저는 [GitKraken](https://www.gitkraken.com/download)과 같은 도구를 사용하는 것을 추천합니다. 이 도구는 시각적이며 몇 가지 PR을 거쳐야 할 때 프로젝트를 더 쉽게 관리할 수 있습니다.  
GitKraken을 다운로드하고 프로젝트를 복제합니다. 코드 편집기와 GitKraken의 통합 충돌 병합 도구를 함께 사용하면 PR을 빠르게 살펴보고 충돌을 수정하고 병합할 수 있는 모든 권한을 부여할 수 있습니다.

이 프로젝트에는 모든 기여자가 PR을 어떻게 제출하든지 상관없이 스타일 가이드가 강제되도록 Prettier가 설치되어 있습니다. 이렇게 함으로써 프로젝트는 항상 동일한 들여쓰기와 스타일을 유지합니다.
HTML 파일이 지저분해 보이는 경우 프로젝트 루트에서 아래 코드를 실행하세요.

```js
npx prettier --write index.html
```

파일을 포맷하려고 시도하고 포맷할 수 없는 경우 오류를 표시합니다. 가끔 실수로 닫는 태그가 누락되거나 HTML이 깨지는 경우가 있는데, 이를 발견하고 수정하는 좋은 방법입니다.

확실하지 않은 경우 언제든지 PR 자체에서 저나 다른 관리자를 멘션하거나 [트위터](https://twitter.com/Syknapse)에서 저에게 DM을 보내주세요.

## 함께해요

이 프로젝트의 성장을 함께 도와주세요. [트위터](https://twitter.com/Syknapse)로 저에게 연락하여 GitHub 사용자 이름을 보내주시면 추가할 수 있습니다. 아래 버튼을 클릭하여 Discord 커뮤니티에 가입할 수도 있습니다:

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')
