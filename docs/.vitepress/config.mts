import { defineConfig } from "vitepress";

export default defineConfig({
  title: "氷のブログ",
  description: "今までにやってきたことの備忘録です。",
  appearance: {
    //デフォルトでライトテーマにする
    initialValue: "light",
  },
  head: [
    ["link", { rel: "icon", href: "/icon.ico" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
    ],
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    darkModeSwitchLabel: "テーマ",
    outlineTitle: "目次",
    sidebarMenuLabel: "目次",
    returnToTopLabel: "ページのトップへ",
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
