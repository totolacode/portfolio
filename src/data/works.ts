export interface WorkItem {
  id: string;
  index: string;
  title: string;
  tech: string[];
  /** paragraphs joined by "\n\n"; rendered as separate <p> blocks */
  comment: string;
  url?: string;
  image?: string;
}

export const works: WorkItem[] = [
  {
    id: "w1",
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
];
