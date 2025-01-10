import { formatMoneyJapaneseYen } from "@/utils/format-money-japanese-yen";

/**
 * ### API KEY なしでサイトにGoogleマップを表示させるための埋め込みコード
 * - 以下の定数を iframe の src属性 に指定することで Googleマップ を表示できる
 * @see https://www.webdesignleaves.com/pr/plugins/googlemap_02.html
 */
export const GOOGLE_MAP_ADDRESS =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1620.876356098532!2d139.70120503573096!3d35.65846379538141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b8427e1c0b1%3A0x78f6e23397061d6f!2z5riL6LC344K544Kv44Op44Oz44OW44Or44K544Kv44Ko44Ki!5e0!3m2!1sja!2sjp!4v1676948522584!5m2!1sja!2sjp";

export const COMPANY_DATA = [
  {
    key: "会社名",
    value: "合同会社Guildex",
  },
  {
    key: "資本金",
    value: `${formatMoneyJapaneseYen(4500000)}円`,
  },
  {
    key: "設立",
    value: "2021年5月25日",
  },
  {
    key: "代表社員",
    value: "木村一貴",
  },
  {
    key: "従業員数",
    value: "5名",
  },
  {
    key: "事業内容",
    value: `48時間限定マッチングアプリ「Frappy」の開発および運営\nWebアプリケーション及びWebシステムの受託開発\nネイティブアプリの受託開発（iOS, Android）`,
  },
  {
    key: "住所",
    value: "〒151-0053 東京都渋谷区代々木5丁目57番-2 ザ・パークハビオSOHO代々木公園",
  },
];
