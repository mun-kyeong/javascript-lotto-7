import { Console } from "@woowacourse/mission-utils";
import { LOTTO_UNIT_PRICE } from "../../constants/lotto.js";
import Lotto from "./Lotto.js";
import { generateRandomNum } from "../../utils/generateRandomNum.js";

export class UserLottoInfo {
  #inputPrice;
  #lottoCount;
  #lottos;

  constructor(price) {
    this.#inputPrice = price;
    this.#lottoCount = this.#inputPrice / LOTTO_UNIT_PRICE;
    this.#lottos = [];
  }

  get lottoCount() {
    return this.#lottoCount;
  }

  createLotto() {
    for (let i = 0; i < this.#lottoCount; i++) {
      Console.print(generateRandomNum(6));
      const lotto = new Lotto(generateRandomNum(6));
      this.#lottos.push(lotto);
    }
  }
}
