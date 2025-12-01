"use client";

import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // この行は変更不要です
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import FlowingBackground from "@/components/FlowingBackground";

// メタデータはクライアントコンポーネントでは直接エクスポートできないため、コメントアウトまたは削除します。
// Next.js 13+ では、メタデータはサーバーコンポーネントで設定するのが基本です。
// この構成でも、ルートの `layout.tsx` がサーバーコンポーネントであればメタデータは機能しますが、
// クライアントコンポーネントにするとこのファイルからは設定できなくなります。
// 今回はアニメーションを優先し、メタデータは必要に応じて別の方法で設定します。

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    // ページの読み込みが完了してからアニメーションを開始
    const timer = setTimeout(() => {
      setHiding(true); // フェードアウトアニメーションを開始
      // アニメーションが終わるのを待ってからコンポーネントを非表示にする
      setTimeout(() => {
        setLoading(false);
      }, 1000); // CSSのアニメーション時間と合わせる
    }, 1500); // 1.5秒間ローディング画面を表示

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-zinc-50 dark:bg-black">
        <FlowingBackground />
        {loading && <div className={hiding ? "loader-fade-out" : ""}><Loader /></div>}
        <div className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
