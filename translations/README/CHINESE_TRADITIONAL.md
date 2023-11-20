# [Contribute To This Project](https://syknapse.github.io/Contribute-To-This-Project/)

![image info](/favicon.png)

> 用 :sparkling_heart:製作的 Logo，作者： [CandidDeer](https://github.com/CandidDeer)

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF 'Join our Discord server!')
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://syknapse.github.io/Contribute-To-This-Project/)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://syknapse.github.io/Contribute-To-This-Project/)

---

> ## **公告：**
>
> 你願意成為這個專案的維護者 (maintainer) 並讓它繼續運行嗎？如果你有興趣，請閱讀[維護者指南](/translations/maintainer_guide/maintainer_guide.zho-tc.md)並在[Twitter](https://twitter.com/Syknapse)上私訊我。

---

### 索引表

#### 概覽

- [公告](#公告)
- [簡介](#簡介)
- [這是給誰的？](#這是給誰的)
- [為什麼我要做這件事？](#為什麼我要做這件事)
- [我要貢獻什麼？](#我要貢獻什麼)
- [翻譯](#翻譯)
- [設置](#設置-)
- [下一步](#下一步)
- [致謝](#致謝)

#### 步驟

- [貢獻](#貢獻)
- [第一步：分叉此儲存庫](#第一步分叉此儲存庫)
- [第二步：複製此儲存庫](#第二步複製此儲存庫)
- [第三步：建立一個新的分支](#第三步建立一個新的分支)
- [第四步：打開 index.html 檔案](#第四步打開-indexhtml-檔案)
- [第五步： 複製卡片範本](#第五步-複製卡片範本)
- [第六步：套用你的變更](#第六步套用你的變更)
- [第七步：提交你的變更](#第七步提交你的變更)
- [第八步：推送你的變更至 Github](#第八步推送你的變更至-github)
- [第九步：建立一個 PR（拉取請求）](#第九步建立一個-pr拉取請求)
- [第十步：慶祝](#第十步慶祝)

---

## 簡介

這是一個幫助第一次貢獻者參與簡單專案的教學。

### 目標

- 為一個開源專案貢獻。
- 熟悉使用 GitHub。

### 這是給誰的？

- 這是給完全初學者的。如果你知道如何寫和編輯一個錨點標籤 `<a href="" target=""></a>`，那你應該就做得到。
- 這也是給那些有多一點經驗、想做出第一次開源貢獻，或是想要做出更多貢獻來提升自己的經驗與自信的人。

### 為什麼我要做這件事？

任何網頁開發者，不論是新手或是老手都需要使用 Git 版本控制，而 Github 是每個人都在用、最熱門的 Git 託管服務。它也是開源社群的核心。熟悉使用 GitHub 是一項基本技能。為一個專案做出貢獻能增加你的信心，並且給你一些東西放在你的 Github 個人頁面上。

如果你是一個新的開發者，而且在考慮你是否需要學 Git 和 GitHub，答案就在這篇文章：[You Should've Learned Git Yesterday](https://codeburst.io/number-one-piece-of-advice-for-new-developers-ddd08abc8bfa 'New Developer? You should’ve learned Git yesterday. by Brandon Morelli, creator of CodeBurst.io').

### 我要貢獻什麼？

![Contributor Card](/readme-only/card.PNG 'Contributor Card')

你將會貢獻一張像這樣的卡片到這個[專案的網頁](https://syknapse.github.io/Contribute-To-This-Project/ 'https://syknapse.github.io/Contribute-To-This-Project')。它會包含你的名字、你的推特帳號、一段簡介、還有你推薦的三個對網頁開發實用的連結。

你將會在 HTML 檔中複製這個卡片的範本，並且用自己的資料為它客製化。

---

### 翻譯

這份教學也有[其他語言](/translations/README.md)的翻譯

|     [Arabic](/translations/README/ARABIC.md)     |  [Bangla](/translations/README/BANGLA.md)  |            [English](/README.md)             |  [French](/translations/README/FRENCH.md)  |  [German](/translations/README/German.md)  |
| :---------------------------------------------: | :---------------------------------------: | :-----------------------------------------: | :---------------------------------------: | :---------------------------------------: |
|      [Hindi](/translations/README/HINDI.md)      | [Italian](/translations/README/ITALIAN.md) | [Japanese](/translations/README/JAPANESE.md) |  [Korean](/translations/README/KOREAN.md)  |  [Polish](/translations/README/POLISH.md)  |
| [Portuguese](/translations/README/PORTUGUESE.md) | [Russian](/translations/README/RUSSIAN.md) |  [Serbian](/translations/README/SERBIAN.md)  | [Spanish](/translations/README/SPANISH.md) | [Turkish](/translations/README/TURKISH.md) |
| [Ukrainian](/translations/README/UKRAINIAN.md) |

> 歡迎將專案的文件翻成其他語言。閱讀[`翻譯指南`](/translations/README.md)來做出貢獻。

---

### 設置！ :)

注意：這份教學使用 GitHub PC。 [如果你熟悉使用終端，查看這份教學（點這裡）](/translations/terminal_tutorial/terminal_tutorial.zho-tc.md)

首先，我們先來設置好環境。

1. 登入你的 GitHub 帳號。如果你沒有一個帳號就[加入 GitHub](https://github.com/join)。我建議你在繼續之前先完成[GitHub Hello World 教學](https://guides.github.com/activities/hello-world/)。
2. 下載 [GitHub Desktop](https://desktop.github.com/).
   - 或者，如果你熟悉在命令列使用 Git，你也可以這樣做。 [命令列教學的連結在這裡](/translations/terminal_tutorial/terminal_tutorial.zho-tc.md).
   - 如果你使用 [VS Code](https://code.visualstudio.com/ 'Visual Studio Code website')，它自帶整合的 Git 並且讓你可以直接從編輯器做我們需要的事情。
   - 不過使用這個教學最簡單的方法是使用 GitHub Desktop。

> 現在既然你都準備好了，讓我們繼續貢獻這個專案吧。

[↑ 回到頂部 ↑](#索引表)

---

### 貢獻

用十個步驟成為一個開源貢獻者。

_估計時間：少於30分鐘_.

#### 第一步：分叉此儲存庫

- 這一步的目標是複製一份這個專案，並且放到你的帳號底下。
- 一個儲存庫 (repo) 是一個專案在 GitHub 中的稱呼，而分叉則是它的複製品。
- 請確認你在這個儲存庫的[主頁](https://github.com/Syknapse/Contribute-To-This-Project 'https://github.com/Syknapse/Contribute-To-This-Project')。

| ![Fork](/readme-only/fork.png "click on 'Fork'") |
| :---------------------------------------------: |
|         **點擊 _Fork_ 按鈕**          |

- 現在你在自己的帳號有一份這個專案的完整複製品了。

[↑ 回到頂部 ↑](#索引表)

---

#### 第二步：複製此儲存庫

- 現在我們想要在本地複製一份這個專案。也就是你的電腦上儲存的一份複製品。
- 打開 GitHub desktop。在應用程式中：

| ![Clone](/readme-only/clone.PNG '點擊 clone repository') |
| :------------------------------------------------------: |
|       **點擊 _File_ 然後 _Clone repository_**        |

- 你會看到你的專案清單以及在 Github 上的分叉 (fork)。
- 選擇 `<你的 github 帳號名稱>/Contribute-To-This-Project`.
- 點擊 _Clone_

| ![複製專案](/readme-only/clone-project.PNG '點擊 =你的 github 帳號名稱=/Contribute-To-This-Project') |
| :----------------------------------------------------------------------------------------------------------: |

| :arrow_right_hook: 一個分叉的專案在左邊會有一個叉子符號。你的分叉將會有你的 Github 名稱 | ![你的分叉](/readme-only/clone-your-fork.PNG '你的分叉看起來會像這樣，有你的使用者名稱。') |
| :------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------: |

- 把專案複製到你的硬碟會花一點時間。我建議你保持預設的路徑，通常是 `..\Documents\GitHub`。
- 現在你有一份本專案的本地複製了。

[↑ 回到頂部 ↑](#索引表)

---

#### 第三步：建立一個新的分支

- 當儲存庫複製好了，而且在 GitHub desktop 開著時，是時候建立新的分支了。
- 一個分支是一種讓你的變更和專案的主要部分（稱作 `Master`）分開的方法。舉例來說，如果事情出錯了，而且你對於你的變更不滿意，你可以簡單的刪掉那個分支而主專案則不會被影響。

| :arrow_right_hook: 點擊 _`Current branch`_，然後點 _`New`_ | ![Create branch](/readme-only/branch-new.PNG "點 'Branch'，然後是 'New'") |
| :---------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **給你的分支取名，然後點 `Create branch`** |                           ![Name branch](/readme-only/branch-name.PNG 'Name your branch')                            |
| :arrow_right_hook: **把你的新分支發佈到 GitHub**                      | ![Name branch](/readme-only/branch-publish.PNG 'Click publish to send the new branch to your remote repo on GitHub') |

- 你可以叫它任何東西，不過既然這是一個新增你的名字卡片到專案的分支，叫它`你的名字-card` 是一個最佳實踐，因為它能讓這個分支的目的很清楚。
- 現在你已經建立了一個新的、和 master 分開的分支。
- 在接下來的步驟，請確保你是在這個分支工作。你會在 GitHub desktop 正上方、寫著 _Current branch_ 的地方看到你目前的分支的名稱。

**不要在 `master` 分支中工作**

[↑ 回到頂部 ↑](#索引表)

---

#### 第四步：打開 index.html 檔案

- 現在我們需要用你最喜歡的程式編輯器打開我們要編輯的檔案。
- 在你的電腦上找到專案的資料夾。如果你有保持預設設定，它應該在類似`your-computer > Documents > GitHub > Contribute-To-This-Project` 的地方。
- `index.html` 檔案就在 `Contribute-To-This-Project` 資料夾中。
- 打開你的程式編輯器（Sublime、VS Code、Atom.. 等等）並且使用 `Open file` 命令，並且找到本專案主資料夾中的 index.html 檔案。

|                  ![Open index file](/readme-only/index-open.PNG 'Open index.html in your text editor')                   |
| :---------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **或者你也可以在你的硬碟中找到你的檔案、右鍵點擊，並且用你的編輯器打開** |

- 現在你已經在你的編輯器中打開了你要編輯的檔案，而你已經準備好要修改它了。

[↑ 回到頂部 ↑](#索引表)

---

#### 第五步： 複製卡片範本

- 我們會複製一份卡片的範本以修改它。
- 在 html 檔案的最上方、 `<head>` 和 `<header>` 區域的下方，你會找到標記 `== TEMPLATE ==` 的區域。
- 複製圖片中紅色框內的所有東西，從 `Contributor card START` 註解到 `Contributor card END` 註解。

| ![Copy card template](/readme-only/card-copy.PNG 'Copy the card template') |
| :-----------------------------------------------------------------------: |

- 把整段程式直接在要你貼上的註解下面貼上。
- 確保你的卡片開始和結束的地方各自有一行空白。保持程式碼盡可能的乾淨是一種最佳實踐。
- 永遠不要使用程式碼檢查工具 (linter) 或程式碼格式工具 (formatter)。這個專案有設置 Prettier。

| ![Paste card template](/readme-only/card-paste.PNG 'Paste below the indicated line') |
| :---------------------------------------------------------------------------------: |

- 現在這是一張**你**可以編輯和自訂的卡片了。

[↑ 回到頂部 ↑](#索引表)

---

#### 第六步：套用你的變更

- 我們現在要開始編輯 html、改變我們卡片中可以自訂的欄位。

| :arrow_right_hook: 用你的名字取代 'Name' | ![Change name](/readme-only/change-name.PNG 'Type your name') |
| :----------------------------------------------- | :----------------------------------------------------------: |

- **注意： 不要改動 `class="name"`**

| :arrow_right_hook: 插入你推特帳號的 URL `href="Insert URL here"`，在文字欄位中填入你的用戶名稱 | ![Change contact](/readme-only/change-contact.PNG 'Insert a link to your Twitter account and type your handle') |
| :--------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------: |

- 如果你偏好使用推特以外的聯絡方式，你會需要到 [Font Awesome Icons](http://fontawesome.io/icons/) 尋找正確的圖示，並且取代推特的圖示 `<i class="fa fa-x-twitter"></i>`。舉例來說，用新的圖示如 `fa-facebook` 取代 `fa-x-twitter` 的部分。然後一樣照著上面的步驟進行。

|                                                                                                                                         ![Change about](/readme-only/change-about.PNG 'Write a sentence about you')                                                                                                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                               :arrow_right_hook: **告訴我們關於你的事情。保持簡短扼要。把它想成一則推特而非部落格文章**                                                                                                                |
|                                                                                                              ![Change resources](/readme-only/change-resources.PNG 'Insert link, write a short description, and type the name of the resource')                                                                                                              |
| :arrow_right_hook: **與社群分享三個你覺得對於網頁開發有用的資源連結。它可以是任何東西，一部影片、一場對話、一集 podcast、一篇文章、一篇論文，或是一個工具。如果你是一位新手，不要被它嚇到，分享你知道的任何東西，就算你覺得它很基礎也一樣。你會對於多少人能受益感到驚訝的。** |

- **連結：** 取代 `#` 並在 `href="here"` 插入連結。請避免使用網址縮短器或是任何不是從你要放的網站中取得的 URL！
- **標題：** 寫一個簡短的簡介 `title="here"`.
- **名稱：** 將資源的名稱寫在文字欄位 `>here</a>`.
- 確認你已經**儲存了所有變更**.
- **測試你的變更**。這很重要！在你的瀏覽器中打開你的 html 檔案（例如雙擊它）並查看你的卡片在網站上的樣子。看看整個頁面是不是仍然長得一樣而且沒有東西壞掉。點擊你的連結並確認它們正常運作。打開網頁控制台 (Ctrl + Shift + J (Windows / Linux) 或 Cmd + Opt + J (Mac)) 並檢查裡面是否沒有錯誤訊息。
- 很好，你已經完成編輯你的程式了！下一步會把你的變更送到 GitHub，然後提交它們並與主專案合併。

[↑ 回到頂部 ↑](#索引表)

---

#### 第七步：提交你的變更

- 回到 GitHub desktop。
- 你的變更將會自動被加入到預存區。
- 這代表 Git 已經紀錄了所有**儲存的**變更。
- 你可以在應用程式中看見這件事。你加入檔案的所有東西都會是綠色的，而刪掉的則是紅的。

|                                                                                                  ![Commit changes](/readme-only/commit.PNG "The changes you've added should appear in green on the right side of GitHub desktop app. The commit button is on the bottom left")                                                                                                  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                                      :arrow_right_hook: 下一步稱作 _`提交 (Commit)`_。這大概代表`確認變更`                                                                                                                                      |
|                                                                                              ![Commit changes](/readme-only/commit-header.PNG "The changes you've added should appear in green on the right side of GitHub desktop app. The commit button is on the bottom left")                                                                                               |
|                                                                            :arrow_right_hook: **這是你的 GitHub desktop 頂部應該長的樣子。注意 `Current repository` 中、專案名稱旁的叉子符號，你的 `Current branch` 的名字會和你在第三步中時取的名字一樣。**                                                                            |
|                                                                                                                  ![Write commit message and commit](/readme-only/commit-message.PNG "Write a brief commit message in the 'summary' input, and click 'commit'")                                                                                                                  |
| :arrow_right_hook: **為了 _`提交`_ ，你必須填寫 _`Summary`_ （概要）欄位。這是為了解釋你改了什麼的提交訊息。在這個例子中， `"Add my card information"` 會是一個合理的訊息。你可以選擇性的加上一個更詳細的 _`Description`_ （描述）。點 _`Commit`_ 按鈕。你的按鈕會顯示類似 `Commit to "your-branch-name"` 的訊息** |

[↑ 回到頂部 ↑](#索引表)

---

#### 第八步：推送你的變更至 GitHub

- 你的變更現在是已儲存或已提交的。但是他們只在本地中儲存，也就是在你的電腦上。
- 將你本地的變更和 GitHub 上的儲存庫同步被稱作 _推送_。你在把你本地儲存庫的變更＂推＂到遠端 GitHub 上的儲存庫。

| :arrow_right_hook: 點 _`Push`_ 按鈕 | ![Push to GitHub](/readme-only/push.PNG "Push your changes to GitHub, click on the 'Push' button") |
| :------------------------------------------- | :-----------------------------------------------------------------------------------------------: |

- 過了幾秒後，操作就會完成，而且現在你在你的電腦和 GitHub 上都會有著一模一樣的分支。

[↑ 回到頂部 ↑](#索引表)

---

#### 第九步：建立一個 PR（拉取請求）

- 這就是你在等待的時刻；建立一個 _拉取請求_ (PR)
- 目前為止，你所做的所有工作都是在這個專案的分叉上，就像你記得的那樣存在於你的 Github 帳號下。
- 現在是時候把你的變更送到主專案來和它合併了。
- 這叫做一個[_拉取請求_](https://help.github.com/articles/about-pull-requests/ 'About Pull Requests - GitHub Help')，因為你在請求原專案的維護者把你的變更＂拉＂到他們的專案。
- 到 GitHub 上**你的分叉**的主頁（它會有一個叉子圖示還有你的名字在上面）。
- 在你的儲存庫上方，你會看到一個被標註的的拉取請求訊息和一個綠色按鈕。

|  ![Submit a Pull Request](/readme-only/pull-request.PNG 'This is usually towards the top of the page, under the description and above the project files and folders')  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                    :arrow_right_hook: **點擊 `Compare and pull request`**                                                     |
| ![Open a Pull Request](/readme-only/pull-request-branches.PNG 'You are requesting to merge your branch from your fork into the master branch of the original project') |
|                                              :arrow_right_hook: 這是一個`建立拉取請求`頁面的樣子                                               |

- 請記得 _你正在試著把你的分支和原本專案合併，而不是與你的分叉的 `Master` 分支_。
- 下圖讓你對於你的拉取請求應該長怎樣有一個大概的概念。
- master 分支的左側是原本的專案。在右邊是你的分叉與你建立的分支。

|                   ![Submit a Pull Request](/readme-only/pull-request-open.PNG "Click the green button. Don't be scared!")                    |
| :-----------------------------------------------------------------------------------------------------------------------------------------: |
| :arrow_right_hook: **建立一個拉取請求：寫一個標題、在描述欄加上選擇性的資訊，並且點 `Create pull request`** |

- 不要被其他選項嚇到。你目前只需要做這三個步驟。
- 保持選項 `Allow edits from maintainers` 打勾。
- 現在，一個 _拉取請求_ 將會被送到專案維護者那邊。一旦它被審查和接受後，你的變更就會出現在[專案網頁](https://syknapse.github.io/Contribute-To-This-Project 'Contribute To This Project web page')。

[↑ 回到頂部 ↑](#索引表)

---

#### 第十步：慶祝

就是這樣。你成功了！你現在已經在 GitHub 上做出了開源貢獻。

你把程式加到了一個在線的網頁： [https://syknapse.github.io/Contribute-To-This-Project](https://syknapse.github.io/Contribute-To-This-Project)

你的變更**不會馬上就看得到**；首先它們必須被審查、接受，並且由專案維護者合併。一旦它們被合併了，你的卡片應該能被看見而且在頁面上顯示。

被審查者要求修改 PR 是非常正常的。如果發生在你身上，可以把它想成一個非常好的練習。注意留言和要求的變更。一旦你做出了被要求的變更（在你的分支上），你所要做的事情就是提交並且推送你的變更。這個 PR 將帶著新的變更會自動更新。

我保證我會試著盡快審查和合併，但是我是在我的空閒時間做這件事的，所以幾天的延遲不可避免。

[↑ 回到頂部 ↑](#索引表)

---

### 下一步

- 過一段時間再回來看你已經合併的拉取請求。
- 當你的變更被批准時，或是被要求做出額外變更時，你應該會收到 GitHub 寄的電子郵件。還有當 PR 終於與 master 合併，而且你的卡片被加入的時候。
- 你也可以從這 _免費_ 系列中學習怎麼貢獻：[How to Contribute to an Open Source Project on GitHub](https://kcd.im/pull-request)
- 如果你覺得這份專案**有用**，請在頁面的最上面給它一顆:star:星星:star:，並且替它**發推特**來幫忙宣傳。[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)][twit]
- 你可以在[推特](https://twitter.com/Syknapse '@Syknapse')**追蹤我**和聯絡我，或是[使用這些其他方法](https://syknapse.github.io/Syk-Houdeib/#contact 'My contact section | Portfolio')
- 這是一個開源專案，所以除了貢獻你的卡片外，歡迎你幫忙修復 bug、改進，或是加上新功能。新增一個 [issue](https://help.github.com/articles/creating-an-issue/ 'Mastering Issues | GitHub Guides') 或是發送一個 [拉取請求](https://help.github.com/articles/creating-a-pull-request-from-a-fork/ 'Creating a pull request from a fork | GitHub Help')。
- 為了幫忙改進我們的社群，看一眼拉取請求旁的 GitHub [Discussions](https://github.com/Syknapse/Contribute-To-This-Project/discussions) 頁面。這個區域是一個介紹你自己、進行有關開源更深入的討論，還有和專案維護者交流的地方。你願意幫助我們建立這個功能，並改善我們的社群嗎？
- **感謝你貢獻這個專案**。現在你可以繼續試著貢獻其他專案了；尋找![Good First Issue](https://user-images.githubusercontent.com/29199184/33852733-e23b7070-debb-11e7-907b-4e7a03aad436.png)標籤以找到適合新手的貢獻選擇。
- 我也在尋找合作者來幫助我審查與合併 PR。如果你想要有更進階的 Git 練習，請在推特上私訊我，並且閱讀[維護者指南](/maintainer_guide.md)。

[↑ 回到頂部 ↑](#索引表)

---

### 致謝

這個專案受到 [Roshan Jossey](https://github.com/Roshanjossey) 出色的  [first-contributions](https://github.com/Roshanjossey/first-contributions) 專案，和它卓越的教學影響很大。

它也特別被 [#GoogleUdacityScholars](https://twitter.com/hashtag/GoogleUdacityScholars?src=hash) The Google Challenge Scholarship: Front-End Web Dev, class of 2017 Europe 周邊優秀的社群所啟發。

### 前100名貢獻者

[![GitHub Contributors Image](https://contrib.rocks/image?repo=Syknapse/Contribute-To-This-Project)](https://github.com/Syknapse/Contribute-To-This-Project/graphs/contributors)

[回到頂部 &uparrow;](#簡介)

[twit]: https://twitter.com/intent/tweet?text=Contribute%20To%20This%20Project.%20An%20easy%20project%20for%20first-time%20contributors,%20with%20a%20full%20tutorial.%20By%20@Syknapse&url=https://github.com/Syknapse/Contribute-To-This-Project&hashtags=100DaysofCode 'Tweet this project'
