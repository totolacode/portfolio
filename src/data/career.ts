export interface CareerSubEntry {
  period: string;
  description: string;
  highlight?: string;
}

export interface CareerEntry {
  period: string;
  company: string;
  description?: string;
  highlight?: string;
  /** bullet list of what was handled, rendered under the description */
  items?: string[];
  sub?: CareerSubEntry[];
}

export const origin = "稚内生まれ。進学を機に札幌へ移り、北海道工業大学を卒業。";

export const summary =
  "Webフロントエンドを中心に、WordPress、EC-CUBE、Shopifyを用いたサイト・EC構築、Nuxt.js + LaravelでのWebアプリ開発に従事。社内勉強会の企画・運営や、チームリーダーとして新人育成にも携わり、技術・マネジメント両面でスキルを蓄積してきました。";
export const summaryHighlight = "技術・マネジメント両面でスキルを蓄積";

export const career: CareerEntry[] = [
  {
    period: "2021.08 - 現在",
    company: "株式会社monomode",
    items: [
      "Shopifyでの新規ECサイトの構築",
      "EC-CUBE、makeshopなど別ECからShopifyへのリニューアル(要件整理、データ移行、技術面の打ち合わせ)",
      "EC-CUBEのカスタマイズ(クライアントとディレクターの要望をもとにした仕様検討を含む)",
      "WordPressのセキュリティ対応、外部APIを使ったログイン機能とマイページの実装",
      "WordPressのカスタムブロックによるFSE(フルサイトエディティング)でのサイト構築(100ページを超える病院サイトのフルリニューアルで実装中)",
    ],
    sub: [
      {
        period: "2023.04 -",
        description:
          "自社開発の業務効率化ツール「Huddler」の開発(Nuxt.js、Laravel、Firebase、AWS)。Laravelでのデータ処理や、Stripeを用いたサブスクリプション課金機能を担当。",
      },
      {
        period: "2022.09 -",
        description: "社内LT会を企画・復活。知識共有の文化を全社に定着させる。",
        highlight: "知識共有の文化を全社に定着",
      },
    ],
  },
  {
    period: "2019.05 - 2020.04",
    company: "ハズムクリエイション株式会社",
    description: "マークアップエンジニアとして、持株会社サイト・ECサイトの構築、保守運用を担当。",
  },
  {
    period: "2017.11 - 2018.09",
    company: "株式会社カリア",
    description: "営業から企画・デザイン・フロントエンド制作、保守運用まで一貫して担当。",
  },
  {
    period: "2016.10 - 2017.09",
    company: "株式会社トランスコスモスDMI",
    description: "大手企業サイトの新規制作・保守運用を担当。",
  },
  {
    period: "2014.03 - 2016.05",
    company: "株式会社エスオーエルグループ",
    description: "医療・介護業界のWebサイト制作、インタビュー動画の撮影・編集を担当。",
  },
];
