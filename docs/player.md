---
title: レートチェッカー
description: 人狼onlineのプレイスキルをレートをもとに判定します
---

<script setup>
import PlayerRate from './components/PlayerRate.vue'
</script>

<PlayerRate />

<br>
<div class="app">
    <button @click="toggleExplanation">🔻 レートチェッカーについて</button>
    <small v-if="showExplanation" class="explanation"><br><br>
            以下の配役の試合のログからプレイヤーのレートを判定します。<br>
            ・12A猫 (狼3 狂1 占1 狩1 霊1 猫1 村4)<br>
            ・11A (狼2 狂1 占1 狩1 霊1 村5)<br>
            ・10A狩 (狼2 狂1 占1 狩1 霊1 村4)<br>
            ・8CFO (狼2 狂1 占1 霊1 共2 村1)<br><br>【ランク】<br>
        C- < C < C+ < B- < B < B+ < A- < A < A+ < S- < S < S+<br><br>厳密に計測してるわけではないです。おみくじ程度に使ってください。
    </small>
</div>

<script>
export default {
  data() {
    return {
      showExplanation: false, // 説明を表示するかどうかの状態
    };
  },
  methods: {
    toggleExplanation() {
      this.showExplanation = !this.showExplanation; // 表示状態を切り替え
    },
  },
};
</script>
