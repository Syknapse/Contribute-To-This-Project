# 維護者指南

本指南是為了那些想要作為維護者加入本專案的人，為了替社群幫忙管理和維護專案。（這不是給 **第一次貢獻者**的指南）

## 翻譯

這份教學也有[其他語言](/translations/README.md)的翻譯

| [English](/maintainer_guide.md)   | [Bangla](/translations/maintainer_guide/maintainer_guide.ben.md) | [German](/translations/maintainer_guide/maintainer_guide.ger.md) | [Italian](/translations/maintainer_guide/maintainer_guide.ita.md) | [Japanese](/translations/maintainer_guide/maintainer_guide.jpn.md) |
| :---: | :---: | :---: | :---: | :---: |
| [Portuguese](/translations/maintainer_guide/maintainer_guide.por.md) | [Ukrainian](/translations/maintainer_guide/maintainer_guide.ukr.md) |

> 歡迎將專案的文件翻成其他語言。閱讀[`翻譯指南`](/translations/README.md)來做出貢獻。

---

## 目標

我們的主要目標是盡快的在我們的貢獻者建立拉取請求後給他們回饋。這代表給予 code review，以及合併被接受的 PR。
除了以上的事情，我們可以維護專案、確保一切正確運作並且對我們的貢獻者盡可能的有幫助。

## 這是給誰的？

任何有一點 Git 和 GitHub 技術的人。你不需要是一個專家，本指南應該連新手都能幫助到。這是一個接受貢獻、幫助許多人做出第一次開源貢獻的活躍專案。成為本專案的一名維護者能確保它繼續給我們的貢獻者一個好的初體驗，並鼓勵他們貢獻更多。

你可以自行決定要投入多少時間。希望我們能一起確保專案運行順利。

## 方法

- 去專案的 pull request 區域，從最舊的、不是在 'change requested' 狀態的拉取請求開始。
- 開啟一個 PR，然後到 files changes 分頁，並開始一次 code review。
- 檢查 PR，確保它符合教學中的規格。
- 確保 HTML、連結、資料都是正確的。確保卡片在檔案開始的地方、它應該在的地方。
- 接下來檢查是否有任何衝突 (conflict)。將 `master` 合併到 PR 分支來修復衝突。衝突通常在上次合併過了一段時間，而數個 PR 在使用同樣的過期版本的時候發生。
- 如果是這樣，就修復衝突。通常你會需要將新的卡片加到自從分叉以來，所有存在的卡片上方。
- 如果其他事情都沒問題，批准 (approve) PR、寫一個訊息給貢獻者以感謝他們的貢獻（請記得他們是第一次貢獻，鼓勵對他們有益）。
- 將 PR 合併進 `master`。

## 請求變更

- 有時候 PR 有一些應該被貢獻者修復的問題，像是錯的分支、壞掉的 HTML、缺少的資訊、放在錯誤地方的卡片。任何沒有正確遵守教學的地方（而且不是簡單的合併衝突）。
- 在 GitHub 上開始一次 code review 並且請求變更。試著盡可能詳細描述、在特定那一行留言、告訴他們問題是什麼以及如何修復，並鼓勵他們這是審查 PR 流程的正常部分。
- 當你準備好了，提交 review。
- 保持注意對話 (conversation) 以免貢獻者接下來有你可以幫助的問題。我們的目標是讓所有人通過終點線，所以我們試著將他們所有人一路帶到那邊。
- 一旦他們修好了請求的變更，PR 可以被合併到 `master`。

請總是測試變更是否沒有弄壞專案，而且網頁仍然如預期的運作。在合併以前先在本地測試總是最好的，還有永遠不要合併任何可疑的東西。

## 工具

如果沒有很多累積的 PR，以上的全部流程都可以在專案的 GitHub 頁面中直接完成。
然而，有多個 PR 在等待並不罕見，這種時候總是會不可避免的有合併衝突。你可以使用你熟悉的任何工具查看差異 (diff)，並修復衝突。
我建議使用類似 [GitKraken](https://www.gitkraken.com/download) 的工具。它是視覺化的，而且它讓你能在有一些 PR 要處理時簡單地管理專案。
下載 GitKraken、複製這個專案。使用你的程式編輯器搭配 GitKraken 的整合合併衝突工具讓你能快速瀏覽 PR、修復衝突以及合併。

本專案有安裝 Prettier 以確保無論一個貢獻者如何提交 PR，都會符合格式規範。如此一來，本專案會一直保持一樣的縮排與格式。
如果你注意到 HTML 檔案看起來有點亂，在專案根目錄運行以下程式。

```js
npx prettier --write index.html
```

它應該試著格式化 (format) 檔案，而如果它不能的話，它會顯示錯誤。有時候缺少一個標籤或是壞掉的 HTML 會被合併，而這是一個找到並修復它們的好方法。

如果你有疑問，你隨時可以在 PR 中 @ 我或是其他維護者，或是在[推特](https://twitter.com/Syknapse)上私訊我。

## 加入我們

加入我們來一起幫住這個專案成長。在[推特](https://twitter.com/Syknapse)上聯絡我並傳給我你的 GitHub 名稱，好讓我加入你。你也可以點下面的按鈕加入我們的 Discord 社群：

[![Discord](https://badgen.net/discord/online-members/tWkvS4ueVF?label=Join%20Our%20Discord%20Server&icon=discord)](https://discord.gg/tWkvS4ueVF '加入我們的 Discord 伺服器！')
