import { defineConfig } from "vitepress";

export default defineConfig({
  title: "人狼wiki",
  description: "人狼onlineについて個人的に思ったことを書き残したもの",
  lastUpdated: true,
  ignoreDeadLinks: true,
  themeConfig: {
    outline: false,
    darkModeSwitchLabel: "テーマ",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "検索",
                buttonAriaLabel: "検索",
              },
              modal: {
                displayDetails: "詳細リストを表示",
                resetButtonTitle: "検索をリセット",
                backButtonTitle: "検索を閉じる",
                noResultsText: "結果はありません",
                footer: {
                  selectText: "選択",
                  selectKeyAriaLabel: "入力",
                  navigateText: "移動",
                  navigateUpKeyAriaLabel: "上矢印",
                  navigateDownKeyAriaLabel: "下矢印",
                  closeText: "閉じる",
                  closeKeyAriaLabel: "esc",
                },
              },
            },
          },
        },
      },
    },
  },
});
