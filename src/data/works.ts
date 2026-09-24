export interface WorkItem {
  id: string;
  index: string;
  title: string;
  tech: string[];
  /** paragraphs joined by "\n\n"; rendered as separate <p> blocks */
  comment: string;
  url?: string;
  image?: string;
  /** e.g. "個人開発" / "Freelance" -- shown as a small label above the title */
  kind?: string;
  /** e.g. "約2ヶ月" */
  period?: string;
  /** e.g. "コーディング" */
  role?: string;
  /** sub-entries rendered as a list under the comment (used to group thin projects) */
  projects?: { title: string; meta?: string; description: string }[];
  /** one-line items listed under "Others" */
  others?: string[];
}

export const works: WorkItem[] = [
  {
    id: "w1",
    kind: "個人開発",
    index: "01",
    title: "つながり図",
    tech: ["JavaScript", "Canvas API"],
    comment: [
      "福祉現場向けエコマップ・ジェノグラム作成ツール。",
      "福祉現場からの相談がきっかけで開発。既存ツールは操作の複雑さや広告、オンライン前提の制約が課題だった。フレームワークやCDNを使わず、単一のHTMLファイルにVanilla JavaScriptとCanvas APIのみで実装し、オフライン環境でも実務に支障なく使えることを重視した。",
      "苦労したのは、関係性を表す線を位置や種類によって破綻なく描き分ける処理。手書きだった業務がツール化され、実際の業務の中で継続的に使われている。",
    ].join("\n\n"),
    url: "https://tsunagari-zu.vercel.app/",
    image: "/works/tsunagari-zu.webp",
  },
  {
    id: "w2",
    kind: "業務改善(自主開発)",
    index: "02",
    title: "Catalog Link Builder",
    tech: ["Python", "Streamlit", "pdfplumber", "pypdf"],
    comment: [
      "カタログ番号の自動リンク設定ツール。",
      "PDFをebook化する際、掲載されているカタログ番号に対して、CSVで管理された対応リンクを1件ずつ設定する作業があった。この作業が数千件規模になることがあり、手作業では膨大な時間がかかっていた。",
      "ディレクターからの相談がきっかけ。AIによる画像解析も検討したが、精度とコストの両面で見合わないと判断し、PDF内のテキストを座標付きで抽出、正規表現でカタログ番号のパターンのみを機械的に判定する方式を採用。該当箇所にCSVのURLをリンク注釈として直接埋め込む仕組みにした。最初はローカル環境のみの個人用ツールだったが、実用性を確認できたためWebアプリ化し、誰でもブラウザから使えるようにした。",
      "完全な自動化ではなく読み取れない箇所も残るが、1時間かかっていた作業を15分程度まで短縮し、現在も継続的に使われている。",
      "開発: Claude Codeを活用して実装。",
    ].join("\n\n"),
    url: "https://catalog-link-builder.streamlit.app/",
    image: "/works/catalog-link-builder.webp",
  },
  {
    id: "w3",
    index: "03",
    kind: "個人開発",
    title: "このサイト(ポートフォリオ)",
    tech: ["Astro", "TypeScript", "Vercel"],
    comment: [
      "自分のポートフォリオサイト。ターミナル風のUIと、休日に自分で撮影した写真の背景をコンセプトにした。",
      "Astro + TypeScriptで、JavaScriptは演出が必要な部分だけに絞った静的サイトとして構築。フォントのローカル化、OGP・canonicalの設定、prefers-reduced-motionへの対応なども行った。",
      "開発: Claude Codeを活用して実装。コンセプト、写真の選定、文章、公開範囲の判断は自分で行い、実装とレビューをClaude Codeと進めた。",
    ].join("\n\n"),
    image: "/works/portfolio-site.webp",
  },
  {
    id: "w4",
    index: "04",
    kind: "Freelance",
    title: "フリーランス案件",
    role: "コーディング / 運用保守",
    tech: ["Vue.js", "JavaScript", "SVG", "物理演算"],
    comment: [
      "フリーランスとして携わった案件のまとめ。公開を終了しているものや、手元に素材が残っていないものが多いため、個別のページではなく一覧で紹介する。",
    ].join("\n\n"),
    projects: [
      {
        title: "自治体イベント向けWebアプリゲーム",
        meta: "コーディング / 約1ヶ月",
        description: "物理演算を使い、同じ種類を繋げて消すツムツムのようなゲームを実装した。イベント終了後も継続して使いたいと、クライアントから連絡をもらった。",
      },
      {
        title: "自動車パーツ企業 展示会サイト",
        meta: "コーディング / 約2ヶ月",
        description: "SVGを使ったアニメーションと、Vue.jsによる絞り込み検索を担当した。",
      },
      {
        title: "マップ検索サイト",
        meta: "コーディング・打ち合わせ参加 / 約2ヶ月",
        description: "地図からそのエリアの施設を検索できるサイト。基本的なJavaScriptで実装し、客先での打ち合わせにも参加した。",
      },
      {
        title: "イラストレーター展示イベント LP",
        meta: "コーディング / 約2週間",
        description: "イラストレーターたちによる展示イベントのランディングページ。",
      },
      {
        title: "マーケティング会社 運用保守・リニューアル",
        meta: "運用保守・リニューアル対応",
        description: "自社ツールを販売しているマーケティング会社のサイトで、運用保守とリニューアルを担当した。",
      },
    ],
    others: ["美容系メディアの更新作業", "サイトの新規制作(デザイン込みを含む)複数"],
  },
];
