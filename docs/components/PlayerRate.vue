<template>
    <h1>レートチェッカー</h1>

    <div class="input-container">
        <input
            class="textbox"
            v-model="searchId"
            placeholder="トリップを入力"
            @input="clearResult"
        />
        <button @click="searchRate" class="button">検索</button>
    </div>
    <p v-if="result !== null">
        <span v-if="result !== 'NoData'">
            <div class="result-container">
                <span class="input-id">{{ searchId }}</span>
                <div v-if="result.isTop500">
                    <img src="/crown.png" width="60" alt="Top 500 Image" />
                </div>
            </div>
            <div class="info">
                <div class="rate">レート</div>
                <div class="rate-font">{{ result.rate }}</div>
                <div class="rate">ランク</div>
                <div :class="getRankClass(result.rank)">
                    {{ result.rank }}
                </div>
                <div v-if="result.rankPosition" class="rank-position">
                    <div class="rate">歴代順位</div>
                    {{ result.rankPosition }}位
                </div>
            </div>
        </span>
        <span v-else>レートの計測が完了していません</span>
    </p>
</template>

<script>
export default {
    data() {
        return {
            searchId: "",
            rateData: {},
            sortedRateData: [],
            result: null,
        };
    },
    methods: {
        async loadRates() {
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/ice198/Brella/refs/heads/main/data/rate.txt",
                );
                const text = await response.text();
                text.split("\n").forEach((line) => {
                    const [id, rate] = line.split(/\s+/);
                    if (id && rate) {
                        this.rateData[id] = parseFloat(rate);
                    }
                });

                // データをソートして順位をつける
                this.sortedRateData = Object.entries(this.rateData)
                    .sort((a, b) => b[1] - a[1])
                    .map((entry, index) => ({
                        id: entry[0],
                        rate: entry[1],
                        rankPosition: index + 1,
                    }));
            } catch (error) {
                console.error("ファイルの読み込みに失敗しました:", error);
            }
        },
        searchRate() {
            const rateEntry = this.sortedRateData.find(
                (entry) => entry.id === this.searchId,
            );
            if (rateEntry) {
                const rank = this.getRank(rateEntry.rate);
                const rankPosition = rateEntry.rankPosition;
                const isTop500 = rankPosition <= 500;
                const result = {
                    rate: rateEntry.rate.toFixed(1), // 小数第1位まで四捨五入
                    rank: rank,
                    rankPosition: rankPosition <= 3000 ? rankPosition : null, // 上位3000位以内で順位表示
                    isTop500: isTop500, // 上位500位以内なら画像表示
                };
                this.result = result;
            } else {
                this.result = "NoData";
            }
        },
        getRank(rate) {
            if (rate < 1000) return "C-";
            if (rate >= 1000 && rate < 1100) return "C";
            if (rate >= 1100 && rate < 1200) return "C+";
            if (rate >= 1200 && rate < 1250) return "B-";
            if (rate >= 1250 && rate < 1450) return "B";
            if (rate >= 1450 && rate < 1550) return "B+";
            if (rate >= 1550 && rate < 1650) return "A-";
            if (rate >= 1650 && rate < 1700) return "A";
            if (rate >= 1700 && rate < 1800) return "A+";
            if (rate >= 1800 && rate < 1900) return "S-";
            if (rate >= 1900 && rate < 2000) return "S";
            return "S+";
        },
        getRankClass(rank) {
            if (["C-", "C", "C+"].includes(rank)) return "rank rank-c";
            if (["B-", "B", "B+"].includes(rank)) return "rank rank-b";
            if (["A-", "A", "A+"].includes(rank)) return "rank rank-a";
            if (["S-", "S", "S+"].includes(rank)) return "rank rank-s";
            return "rank"; // デフォルトのスタイル
        },
        clearResult() {
            this.result = null;
        },
    },
    mounted() {
        this.loadRates();
    },
};
</script>

<style scoped>
@font-face {
    font-family: "JetBrainsMono";
    src: url("/JetBrainsMono-Bold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
}
body {
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
h1 {
    font-size: 1.5em;
    margin: 0;
    padding: 10px;
    text-align: center; /* センター配置 */
}
.input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
}
.textbox {
    color: #333;
    width: 100%;
    padding: 10px 10px;
    border: 1px solid #e2e2e3;
    border-radius: 20px;
    background: #f6f6f7;
    font-size: 1em;
    line-height: 1.5;
    padding-left: 20px;
}
.textbox::placeholder {
    color: #999;
    font-size: 0.8em;
}
.textbox:focus {
    outline: none;
    box-shadow: none;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    padding: 0.7em 1.5em;
    border: 1px solid transparent;
    border-radius: 25px;
    background-color: #3e5cff;
    color: #fff;
    font-size: 0.95em;
    font-weight: bold;
    box-sizing: border-box;
    transition:
        background-color 0.3s,
        color 0.3s;
}
.button:hover {
    background-color: #304adb;
    color: #fff;
}
.button.stop {
    background-color: #f00;
    color: #fff;
    border: 1px solid #f00;
}
.button.stop:hover {
    background-color: #d00;
    border: 1px solid #d00;
}
.input-id {
    font-size: 2.1rem;
    font-weight: bold;
}
.result-container {
    display: flex;
    align-items: center;
}
.info {
    margin-top: 30px;
    line-height: 1.6;
}
.rate {
    font-size: 1.1rem;
    font-weight: bold;
}
.rate-font {
    font-size: 2.8rem;
    font-family: "JetBrainsMono", monospace;
}
.rank-c {
    font-size: 3rem;
    font-weight: bold;
    color: #30c822;
}
.rank-b {
    font-size: 3rem;
    font-weight: bold;
    color: #007cff;
}
.rank-a {
    font-size: 3rem;
    font-weight: bold;
    color: #ff8300;
}
.rank-s {
    font-size: 3rem;
    font-weight: bold;
    color: #ff004b;
}
.rank-position {
    font-size: 3rem;
    font-weight: bold;
}

/* ダークモード対応のスタイル */
.dark {
    .textbox {
        background: #161618;
        border: 1px solid #29292d;
        color: #deded6;
    }
    .textbox::placeholder {
        color: #95959c;
    }
    .button {
        background-color: #0064ff;
        color: #fff;
    }
    .button:hover {
        background-color: #024cbf;
    }
    .button.stop {
        background-color: #f00;
        color: #fff;
    }
}
</style>
