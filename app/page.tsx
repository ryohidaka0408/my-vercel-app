"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import {
  FaLaptopCode,
  FaUsersCog,
  FaTools,
  FaChartLine,
  FaReact,
  FaWordpress,
  FaChevronDown,
} from "react-icons/fa";

const services = [
  {
    name: "コーポレートサイト制作",
    icon: <FaWordpress size={36} />,
    description:
      "WordPress等を活用し、デザインから実装まで一貫して対応。お客様のブランド価値を高めるWebサイトを構築します。",
  },
  {
    name: "kintone導入支援",
    icon: <FaUsersCog size={36} />,
    description:
      "業務フローのヒアリングからアプリ設計、カスタマイズ開発、運用サポートまで、kintone活用をトータルで支援します。",
  },
  {
    name: "グループウェア導入支援",
    icon: <FaLaptopCode size={36} />,
    description:
      "Office 365やGaroon等の導入をサポート。情報共有を円滑にし、組織の生産性向上に貢献します。",
  },
  {
    name: "既存システムの改修",
    icon: <FaTools size={36} />,
    description:
      "現行システムの課題を分析し、機能追加やパフォーマンス改善、UI/UXの向上など、最適な改修プランを提案・実行します。",
  },
  {
    name: "業務改善コンサルティング",
    icon: <FaChartLine size={36} />,
    description:
      "ITの専門家として、現状の業務プロセスを可視化・分析。非効率な作業を特定し、自動化やシステム化による改善策を提案します。",
  },
  {
    name: "Webアプリケーション開発",
    icon: <FaReact size={36} />,
    description:
      "React, Vue.jsなどモダンな技術スタックを用い、お客様の独自の要件に合わせたカスタムWebアプリケーションを開発します。",
  },
];

const projects = [
  {
    period: "2025年5月 ~ 2025年8月",
    title: "kintone導入支援案件 (請負)",
    summary:
      "リサイクル事業様へkintoneの導入支援。要件定義から仕様書作成、アプリ設計・構築、カスタマイズ実装、運用管理まで一貫して実施。",
    details: [
      "顧客管理アプリ作成",
      "帳票出力 (JavaScript/TypeScript): 見積書、計量報告書、請求書",
      "回収管理 (JavaScript/TypeScript): 回収頻度に基づくスケジュール自動登録、回収品目・計量数入力一覧",
    ],
    technologies: ["JavaScript", "TypeScript", "kintone"],
  },
  {
    period: "2025年3月 ~ 2025年4月",
    title: "kintoneアプリ ガチャ機能追加案件",
    summary:
      "顧客からの入電業務を、ガチャシステム導入により各部署へ均等に差配する機能を追加。",
    details: ["要件定義", "既存環境設定変更資料作成"],
    technologies: ["kintone", "kintone-customize", "HULFT Square"],
  },
  {
    period: "2024年10月 ~ 2025年2月",
    title: "電力開発企業 社内システム開発",
    summary:
      "既存kintoneの業務プロセスに合わせた改修・機能追加。グループウェアや帳票出力ツール開発も幅広く対応。",
    details: [
      "JavaScriptカスタマイズ(API連携含む)",
      "プラグイン提案・導入",
      "BIツール(QuickSight)へのデータ連携",
      "自社プラグイン開発",
      "プロセス管理の可視化",
    ],
    technologies: [
      "JavaScript",
      "Python",
      "CSS",
      "Vue.js",
      "kintone",
      "Garoon",
      "QuickSight",
    ],
  },
  {
    period: "2024年9月 ~ 2024年10月",
    title: "グループウェア(Office)導入支援 (請負)",
    summary: "クライアント様へグループウェアシステムの導入支援。",
    details: [
      "一般ユーザー向け研修",
      "各種アプリケーション設定",
      "ドキュメント作成",
    ],
    technologies: ["Microsoft 365 (Office)"],
  },
  {
    period: "2023年8月 ~ 2023年10月",
    title: "コーポレートサイト制作 (受託開発)",
    summary:
      "衣類メーカー企業様の既存サイト作り替えを受託開発。ヒアリングからWordPress上でのプラグインと一部コーディングによるサイト制作を実施。",
    details: [],
    technologies: ["PHP", "CSS", "MySQL", "WordPress"],
  },
  {
    period: "2022年6月 ~ 2023年7月",
    title: "大手グループウェア/ERP製品 導入支援",
    summary:
      "販売元パートナー企業にて、顧客折衝、スケジュール調整、要件ヒアリング、業務改善提案を主に行う。取引業種は官公庁、税理士事務所、不動産関連など多岐にわたる。",
    details: [],
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "Vue.js",
      "PHP",
      "MySQL",
      "MariaDB",
      "kintone",
      "Garoon",
    ],
  },
];

export default function Home() {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [holo, setHolo] = useState({
    x: 50, y: 50, opacity: 0,
    gradient: 'radial-gradient(circle at 50% 50%, #ffffff, #ff00ff, #00ffff, #ffff00, #ff0000)'
  });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleProjectToggle = (index: number) => {
    setOpenProjectIndex(openProjectIndex === index ? null : index);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    // ↓↓↓ ステップ1で取得したあなたのFormspreeエンドポイントURLに置き換えてください ↓↓↓
    const endpoint = "https://formspree.io/f/mwpgogqa";

    fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => (res.ok ? setFormStatus("success") : Promise.reject(res)))
      .catch(() => setFormStatus("error"));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    const rotateX = -yPct * 20; // 回転の強さ
    const rotateY = xPct * 20;

    setRotation({ x: rotateX, y: rotateY });
    
    const holoX = mouseX / width * 100;
    const holoY = mouseY / height * 100;
    const newGradient = `radial-gradient(circle at ${holoX}% ${holoY}%, #ffffff, #ff00ff, #00ffff, #ffff00, #ff0000)`;

    setHolo({ x: holoX, y: holoY, opacity: 0.15, gradient: newGradient });
  };

  const handleMouseLeave = () => {
    // スムーズに元の位置に戻す
    setRotation({ x: 0, y: 0 });
    setHolo(prev => ({
      ...prev,
      opacity: 0,
      // グラデーションの位置をリセットしないことで、フェードアウトが自然に見える
    }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center font-sans">
      {/* Section 1: トップビュー (About) */}
      <section
        id="about"
        className="relative flex min-h-screen w-full max-w-5xl items-center justify-center overflow-hidden p-4 pt-16 md:p-8"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
          <div
            className="animate-wave absolute top-[-10%] left-[-25%] h-[250px] w-[250px] rounded-full bg-blue-300/50 dark:bg-blue-900/50 md:top-[-50px] md:left-[-100px] md:h-[400px] md:w-[400px]"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="animate-wave absolute bottom-[-10%] right-[-25%] h-[250px] w-[250px] rounded-full bg-purple-300/50 dark:bg-purple-900/50 md:bottom-[-50px] md:right-[-100px] md:h-[400px] md:w-[400px]"
            style={{ animationDelay: "-5s", animationDuration: "25s" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-center gap-10 md:flex-row md:gap-16">
          {/* 画像エリア */}
          <div
            ref={imageContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex-shrink-0"
            style={{
              animation: "fade-in-up 0.5s ease-out forwards",
              transformStyle: "preserve-3d",
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: "transform 0.3s cubic-bezier(.03,.98,.52,.99)",
            }}
          >
            <Image
              src="/profile.jpg" // publicフォルダに置いたあなたの画像ファイル名に書き換えてください
              alt="プロフィール画像"
              width={240}
              height={240}
              className="rounded-full object-cover shadow-lg transition-transform duration-300"
              priority
              style={{ transform: "translateZ(20px)" }} // 画像を少し手前に浮かせる
            />
            {/* レアカード風ホログラフィックエフェクト */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: holo.gradient,
                opacity: holo.opacity,
                mixBlendMode: "color-dodge",
                transition: "opacity 0.3s ease-out",
                transform: "translateZ(21px)",
              }}
            />
          </div>
          {/* テキストエリア */}
          <div className="text-center md:text-left">
            <h1
              className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-5xl"
              style={{ animation: "fade-in-up 0.5s ease-out forwards" }}
            >
              日髙　凌
              <br />
              
            </h1>
            <p className="text-0.5xl font-bold tracking-tight text-black dark:text-zinc-50 sm:text-0.5xl">-Ryo Hidaka-</p>
            <p
              className="mt-4 text-xl text-zinc-600 dark:text-zinc-400"
              style={{
                animation: "fade-in-up 0.5s 0.2s ease-out forwards",
                opacity: 0,
              }}
            >
              WEBエンジニア / セールスエンジニア
            </p>
            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
              style={{
                animation: "fade-in-up 0.5s 0.4s ease-out forwards",
                opacity: 0,
              }}
            >
              大学卒業後、複数の業界で営業や業務管理を経験。その中でITの力で業務を効率化できる可能性に気づき、エンジニアへの転身を決意。現在はSES事業会社にて、クライアントの課題を解決するためのシステム開発、特にkintoneプラグイン開発やWebサイト制作に注力しています。
            </p>
            <p
              className="mt-4 max-w-xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300"
              style={{
                animation: "fade-in-up 0.5s 0.5s ease-out forwards",
                opacity: 0,
              }}
            >
              ビジネスサイドの経験を活かし、お客様の真の課題を理解し、技術で解決策を提案することを得意としています。趣味は漫画です。
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Skills */}
      <section id="skills" className="min-h-screen w-full max-w-5xl py-24 px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {[
            {
              name: "HTML",
              icon: <SiHtml5 size={48} className="text-orange-500" />,
            },
            {
              name: "CSS",
              icon: <SiCss3 size={48} className="text-blue-500" />,
            },
            {
              name: "JavaScript",
              icon: <SiJavascript size={48} className="text-yellow-400" />,
            },
            {
              name: "TypeScript",
              icon: <SiTypescript size={48} className="text-blue-600" />,
            },
            {
              name: "React",
              icon: <SiReact size={48} className="text-sky-500" />,
            },
            { name: "Next.js", icon: <SiNextdotjs size={48} /> },
            {
              name: "Node.js",
              icon: <SiNodedotjs size={48} className="text-green-500" />,
            },
            {
              name: "Tailwind CSS",
              icon: <SiTailwindcss size={48} className="text-cyan-400" />,
            },
            {
              name: "Git",
              icon: <SiGit size={48} className="text-orange-600" />,
            },
          ].map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-4 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md transition-transform hover:-translate-y-2"
              style={{
                animation: "fade-in-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {skill.icon}
              <span className="font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Works */}
      <section
        id="works"
        className="min-h-screen w-full max-w-5xl py-24 px-4 bg-white dark:bg-zinc-900"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Works</h2>

        {/* 提供サービス */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg"
            >
              <div className="mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* プロジェクト詳細 */}
        <h3 className="text-3xl font-bold text-center mb-4">PROJECTS</h3>
        <p className="text-center text-zinc-500 mb-12">— プロジェクト詳細 —</p>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => handleProjectToggle(index)}
                className="w-full flex justify-between items-center p-5 text-left bg-zinc-50 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {project.period}
                  </p>
                  <h4 className="text-lg font-semibold mt-1">
                    {project.title}
                  </h4>
                </div>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openProjectIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className="accordion-content"
                style={{
                  maxHeight: openProjectIndex === index ? "1000px" : "0",
                  ...(openProjectIndex === index && {
                    paddingTop: "1.25rem",
                    paddingBottom: "1.25rem",
                  }),
                }}
              >
                <div className="px-5">
                  <p className="mb-4 text-zinc-700 dark:text-zinc-300">
                    {project.summary}
                  </p>
                  {project.details.length > 0 && (
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">詳細:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {project.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h5 className="font-semibold mb-2">使用技術:</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full dark:bg-blue-900 dark:text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Contact */}
      <section
        id="contact"
        className="min-h-screen w-full max-w-5xl py-24 px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12">
          お仕事のご依頼・ご相談など、お気軽にお問い合わせください。
        </p>

        <div className="max-w-2xl mx-auto">
          {formStatus === "success" ? (
            <p className="text-center p-8 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-lg">
              お問い合わせありがとうございます。メッセージは正常に送信されました。
            </p>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-zinc-400 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? "送信中..." : "送信する"}
                </button>
              </div>
              {formStatus === "error" && (
                <p className="text-center text-red-500">
                  メッセージの送信に失敗しました。時間をおいて再度お試しください。
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
