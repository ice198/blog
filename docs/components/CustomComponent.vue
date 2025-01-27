<template>
    <div class="app">
        <div class="text-horizontal-center">
            <h1>12桁トリップメーカー</h1>
        </div>
        <div id="status">{{ status }}</div>
        <div class="input-container">
            <input
                type="text"
                class="textbox"
                v-model="inputStr"
                placeholder="検索方法 : 前方一致"
            />
            <button class="button" @click="startGeneration">
                {{ buttonText }}
            </button>
        </div>
        <div id="results">
            <div
                v-for="(result, index) in results"
                :key="index"
                class="result-item"
            >
                <span>◆{{ result.tripcode }} #{{ result.randomString }}</span>
                <span
                    class="copy-text"
                    @click="copyToClipboard(result.randomString)"
                    :class="{ ok: result.copied }"
                >
                    {{ result.copied ? "OK!" : "コピー" }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import init, { trip12, generate_random_string_wasm } from "./pkg/tripcode.js";

export default {
    name: "TripcodeGenerator",
    setup() {
        const inputStr = ref("");
        const results = ref([]);
        const status = ref("トリップに含めたい文字を入力してください");
        const buttonText = ref("検索");
        let stopGeneration = ref(false);

        const startGeneration = async () => {
            if (buttonText.value === "検索") {
                if (!/^[\w./]*$/.test(inputStr.value)) {
                    alert("半角英数字および./のみ使用できます。");
                    return;
                }

                if (inputStr.value.length === 0) {
                    alert("文字が入力されていません。");
                    return;
                }

                if (inputStr.value.length > 12) {
                    alert("文字数が12文字を超えています。");
                    return;
                }

                stopGeneration.value = false;
                buttonText.value = "停止";

                await init();

                const generate = async () => {
                    let count = 0;
                    let totalCount = 0;
                    let startTime = Date.now();

                    while (!stopGeneration.value) {
                        const randomString = generate_random_string_wasm();
                        const tripcode = trip12(randomString);

                        if (tripcode.startsWith(inputStr.value)) {
                            results.value.unshift({
                                tripcode,
                                randomString,
                                copied: false,
                            });
                        }

                        count++;
                        totalCount++;

                        if (count % 1000 === 0) {
                            await new Promise((resolve) =>
                                setTimeout(resolve, 0),
                            );
                        }

                        if (count === 10000) {
                            const currentTime = Date.now();
                            const duration = currentTime - startTime;
                            const speed = Math.floor(10000 / (duration / 1000));
                            status.value = `検索速度: ${speed.toLocaleString()} tripcodes/s`;
                            startTime = currentTime;
                            count = 0;
                        }
                    }
                };

                generate();
            } else {
                stopGeneration.value = true;
                buttonText.value = "検索";
            }
        };

        const copyToClipboard = async (randomString) => {
            const textToCopy = `#${randomString}`;
            await navigator.clipboard.writeText(textToCopy);

            const result = results.value.find(
                (res) => res.randomString === randomString,
            );
            if (result) {
                result.copied = true;
                setTimeout(() => {
                    result.copied = false;
                }, 2000);
            }
        };

        return {
            inputStr,
            results,
            status,
            buttonText,
            startGeneration,
            copyToClipboard,
        };
    },
};
</script>

<style scoped>
body {
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
#results {
    flex: 1;
    overflow-y: auto;
}
.result-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 0px;
    white-space: pre;
    position: relative;
    color: #3c3c43; /* 文字色 */
    font-size: 0.9em;
    font-family: monospace;
    border: 1px solid #e3e3e4; /* 枠線を追加 */
    margin-bottom: -1px; /* 枠線が重なって太くなるのを防止 */
}
.result-item:nth-child(odd) {
    background-color: #ffffff;
}
.result-item:nth-child(even) {
    background-color: #f6f6f7;
}
.text-horizontal-center {
    text-align: center;
}
h1 {
    font-size: 1.5em;
    margin: 0;
    padding: 10px;
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
#status {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #e3e3e4;
    font-family: monospace;
    font-size: 1em;
}
.copy-text {
    cursor: pointer;
    margin-left: 10px;
    color: #888;
    font-size: 0.8em;
    font-weight: bold;
}
.copy-text.ok {
    color: #888;
    font-family: "Noto Sans", sans-serif;
}
.copy-text:hover {
    text-decoration: underline;
}

/* ダークモード対応のスタイル */
.dark {
    .result-item {
        border: 1px solid #29292d; /* 枠線を追加 */
    }
    .result-item:nth-child(odd) {
        background-color: #1b1b1f;
        color: #deded6;
    }
    .result-item:nth-child(even) {
        background-color: #202127;
        color: #deded6;
    }
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
    .copy-text {
        color: #95959c;
    }
    .copy-text.ok {
        color: #95959c;
    }
    #status {
        border-bottom: 1px solid #29292d;
    }
}
</style>
