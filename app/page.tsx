'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const loadScripts = async () => {
      const mainScript = document.createElement('script')
      mainScript.src = '/js/main.js'
      mainScript.async = true
      document.body.appendChild(mainScript)
      
      mainScript.onload = () => {
        const animationsScript = document.createElement('script')
        animationsScript.src = '/js/animations.js'
        animationsScript.async = true
        document.body.appendChild(animationsScript)
      }
    }
    
    loadScripts()
    
    return () => {
      const scripts = document.querySelectorAll('script[src*="/js/"]')
      scripts.forEach(script => script.remove())
    }
  }, [])

  return (
    <>
      <div className="bg-effects">
        <div className="matrix-rain"></div>
        <div className="circuit-lines"></div>
        <div className="neon-grid"></div>
      </div>

      <header className="header">
        <nav className="nav">
          <div className="nav-logo">
            <i className="fas fa-rocket neon-icon"></i>
            <span className="logo-text">AI×Programming</span>
          </div>
          <div className="nav-links">
            <a href="#features" className="nav-link">特徴</a>
            <a href="#curriculum" className="nav-link">カリキュラム</a>
            <a href="#pricing" className="nav-link">料金</a>
            <a href="#cta" className="nav-link cta-button">参加する</a>
          </div>
          <div className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">⚡</span>
            AI×プログラミングサロン
          </div>
          <h1 className="hero-title">
            <span className="title-line">未来のスキルを身につけ、</span>
            <span className="title-line neon-text">キャリアを加速させよう</span>
          </h1>
          <div className="hero-description">
            <p>毎日の作業、もっと楽にできるはずなのに...</p>
            <p>明日の業務から使える"武器"を手に入れて、働き方を変えてみませんか？</p>
          </div>
          <div className="hero-cta">
            <a href="#cta" className="cta-primary">
              <span>今すぐ始める</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#features" className="cta-secondary">
              <span>詳細を見る</span>
              <i className="fas fa-play"></i>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">30日</span>
              <span className="stat-label">で実用ツール完成</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">90日</span>
              <span className="stat-label">で副業レベル到達</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2-3h</span>
              <span className="stat-label">毎日の時短を実現</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="float-item" data-float="1">
              <i className="fab fa-python"></i>
            </div>
            <div className="float-item" data-float="2">
              <i className="fab fa-js"></i>
            </div>
            <div className="float-item" data-float="3">
              <i className="fas fa-robot"></i>
            </div>
            <div className="float-item" data-float="4">
              <i className="fas fa-cogs"></i>
            </div>
            <div className="float-item" data-float="5">
              <i className="fas fa-brain"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="problem">
        <div className="container">
          <h2 className="section-title">毎日の作業、もっと楽にできるはずなのに...</h2>
          <div className="problem-grid">
            <div className="problem-item">
              <div className="problem-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>AIツールは知っているけど、うまく使いこなせない</h3>
            </div>
            <div className="problem-item">
              <div className="problem-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>プログラミングに興味はあるけど、何から始めればいいかわからない</h3>
            </div>
            <div className="problem-item">
              <div className="problem-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>効率化したいけど、具体的な方法が見つからない</h3>
            </div>
          </div>
          <div className="solution-text">
            <p><strong>そんなあなたのために、「学ぶ」で終わらせない実践的なサロンを用意しました。</strong></p>
            <p>明日の業務から使える"武器"を手に入れて、働き方を変えてみませんか？</p>
          </div>
        </div>
      </section>

      <section className="why-now">
        <div className="container">
          <h2 className="section-title">なぜ今、AIとプログラミングなのか</h2>
          <p className="section-subtitle">時代の転換点に立つ今、準備をするかしないかで大きな差が生まれています。</p>
          
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="timeline-content">
                <h3>AI革命の到来</h3>
                <p>ChatGPTをはじめとする生成AIが業務を劇的に変えている</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-robot"></i>
              </div>
              <div className="timeline-content">
                <h3>自動化のニーズ</h3>
                <p>単純作業を自動化し、創造的な仕事に集中する時代へ</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="timeline-content">
                <h3>スキル格差の拡大</h3>
                <p>AI・プログラミングを使える人とそうでない人の差が急拡大</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="timeline-content">
                <h3>市場価値の向上</h3>
                <p>実装力とAI活用スキルを持つ人材への需要が急上昇</p>
              </div>
            </div>
          </div>
          
          <div className="cta-highlight">
            <p>今学び始めれば、数年後には圧倒的なアドバンテージを手にできます。</p>
          </div>
        </div>
      </section>

      <section className="ai-capabilities">
        <div className="container">
          <h2 className="section-title">AIで実際に何ができるようになるの？</h2>
          <p className="section-subtitle">AIは単なるツールではありません。<strong>あなたの能力を何倍にも拡張する武器</strong>です。</p>
          
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="card-header">
                <i className="fas fa-magic"></i>
                <h3>プロンプト設計をマスター</h3>
              </div>
              <ul className="capability-list">
                <li>要約・抽出・分類・仕様化の型とチェックリストを活用</li>
                <li>議事録の自動化とポイント抽出</li>
                <li>データの整理と分析レポート自動生成</li>
                <li>仕様書の下書きと要件整理の効率化</li>
              </ul>
            </div>
            
            <div className="capability-card">
              <div className="card-header">
                <i className="fas fa-cogs"></i>
                <h3>実際の活用例</h3>
              </div>
              <ul className="capability-list">
                <li>楽天の注文履歴を自動抽出・整理</li>
                <li>iPhone明細PDFの自動保存＆文字起こし</li>
                <li>Gmail請求書の自動保存と分類</li>
                <li>会議内容の自動要約とタスク抽出</li>
              </ul>
            </div>
          </div>
          
          <div className="specialized-fields">
            <h3>さらに、特化分野での活用も</h3>
            <p>今後サロンでは、様々な分野でのAI活用ノウハウも展開予定：</p>
            
            <div className="fields-grid">
              <div className="field-card">
                <div className="field-icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h4>経理×AI</h4>
                <p>仕訳の自動化、決算書類の作成支援、経費精算の効率化</p>
              </div>
              <div className="field-card">
                <div className="field-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h4>転売×AI</h4>
                <p>商品リサーチの自動化、価格動向分析、出品作業の効率化</p>
              </div>
              <div className="field-card">
                <div className="field-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h4>アフィリエイト×AI</h4>
                <p>コンテンツ生成、SEO分析、案件選定の自動化</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transformation">
        <div className="container">
          <h2 className="section-title">サロンに入ると、あなたはどう変わる？</h2>
          <p className="section-subtitle"><strong>30日後、90日後のあなたは今とは全く違うレベルにいます</strong></p>
          
          <div className="transformation-timeline">
            <div className="transformation-step">
              <div className="step-number">30</div>
              <div className="step-content">
                <h3>30日後の到達目標</h3>
                <ul>
                  <li>日常タスクの自動化システムを1つ完成</li>
                  <li>AI議事録システムの構築と運用開始</li>
                  <li>プロンプト設計の基本パターンを習得</li>
                </ul>
              </div>
            </div>
            <div className="transformation-step">
              <div className="step-number">90</div>
              <div className="step-content">
                <h3>90日後の到達目標</h3>
                <ul>
                  <li>社内で使える実用的なツールを1本公開</li>
                  <li>複数の自動化システムを組み合わせた業務フロー構築</li>
                  <li>副業案件に対応できるスキルレベルに到達</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <i className="fas fa-clock"></i>
              <h4>時間の大幅削減</h4>
              <p>毎日2-3時間の時短を実現</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-star"></i>
              <h4>社内評価アップ</h4>
              <p>効率化の提案と実装で存在感向上</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-dollar-sign"></i>
              <h4>副業の受注力向上</h4>
              <p>実績とポートフォリオの充実</p>
            </div>
            <div className="benefit-card">
              <i className="fas fa-rocket"></i>
              <h4>将来への投資</h4>
              <p>AI時代に必要不可欠なスキルセット獲得</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">サロンの3つの特徴</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>AI・生成AI専門カリキュラム</h3>
              <p>最新ツールの"正しい使い方"を厳選し、実務で再現できる型を配布</p>
              <div className="feature-details">
                <h4>基礎カリキュラム:</h4>
                <ul>
                  <li>プロンプト設計チェックリスト（要約／抽出／分類／仕様化）</li>
                  <li>ツール用途マップと比較（検索・要約・表変換・議事録化）</li>
                  <li>実例：楽天の注文履歴抽出／iPhone明細PDFの自動保存＆文字起こし</li>
                  <li>そのまま流用できるテンプレ（データ抽出・要件整理・仕様書下書き）</li>
                </ul>
                <div className="achievement">
                  <strong>到達目安:</strong> 30日で「日常タスクの自動化」＋「議事録のAI化」を1つ完成
                </div>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-number">02</div>
              <div className="feature-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>本格プログラミング実装</h3>
              <p>基礎→API連携→運用まで、"動かし続ける"実装力を獲得</p>
              <div className="feature-details">
                <h4>学べること:</h4>
                <ul>
                  <li>GAS/JavaScript/Pythonでの自動化とAPI連携（認証・非同期）</li>
                  <li>例外処理／ログ／通知（Slack/メール）まで含めた運用設計</li>
                  <li>スクレイピング→シート/DB→可視化（定期実行・失敗時リトライ）</li>
                  <li>コードレビューによる品質向上とベストプラクティス習得</li>
                </ul>
                <div className="achievement">
                  <strong>到達目安:</strong> 90日で社内/副業向けのツールを1本公開
                </div>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="feature-number">03</div>
              <div className="feature-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>コミュニティ学習環境</h3>
              <p>Discordで"詰まりを最短で解消"し、成果物を積み上げる</p>
              <div className="feature-details">
                <h4>サポート内容:</h4>
                <ul>
                  <li>チャンネル例：#質問箱／#自動化レシピ／#制作ギャラリー／#ライブ告知</li>
                  <li>専門分野チャンネル：#経理AI／#転売AI／#アフィリエイトAI（順次開設）</li>
                  <li>ライブ＋アーカイブでいつでも復習、質問し放題</li>
                  <li>コードレビュー（可読性・保守性・例外処理・運用設計）</li>
                </ul>
                <div className="achievement">
                  <strong>到達目安:</strong> 毎週の提出物をポートフォリオ化
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="instructors">
        <div className="container">
          <h2 className="section-title">実績豊富な講師陣があなたをサポート</h2>
          
          <div className="instructors-grid">
            <div className="instructor-card">
              <div className="instructor-avatar">
                <div className="avatar-placeholder">KIDD</div>
                <div className="avatar-glow"></div>
              </div>
              <h3>KIDD</h3>
              <h4>AI・生成AIツール専門講師</h4>
              <p>最新のAI技術とツールに精通し、実践的な活用方法を分かりやすく解説。常に最新トレンドをキャッチアップし、本当に使えるAI情報のみを厳選してお届けします。</p>
              <div className="instructor-skills">
                <span className="skill-tag">AI・生成AIツール</span>
                <span className="skill-tag">ライブQ&A</span>
                <span className="skill-tag">最新動向</span>
              </div>
            </div>
            
            <div className="instructor-card">
              <div className="instructor-avatar">
                <div className="avatar-placeholder">R</div>
                <div className="avatar-glow"></div>
              </div>
              <h3>R</h3>
              <h4>プログラミング・開発実務講師</h4>
              <p>元テックキャンプ講師として豊富な指導経験を持ち、現在は会社経営も手がけるプロフェッショナル。要件定義から本番デプロイまでの実務フローを、実際の開発を通じて指導します。</p>
              <div className="instructor-skills">
                <span className="skill-tag">プロトタイプ開発</span>
                <span className="skill-tag">コードレビュー</span>
                <span className="skill-tag">実務フロー</span>
              </div>
              <div className="disclaimer">
                ※「TECH CAMP」は株式会社divの登録商標です。本サロンは同社とは一切関係ありません。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="live-streaming">
        <div className="container">
          <h2 className="section-title">ライブ配信で疑問をその場で解決</h2>
          
          <div className="streaming-grid">
            <div className="streaming-info">
              <h3>定期ライブ配信</h3>
              <div className="info-item">
                <strong>配信頻度:</strong> 週1回または月1回（時期により調整）
              </div>
              <div className="info-item">
                <strong>アーカイブ:</strong> 全配信をアーカイブ公開、いつでも復習可能
              </div>
            </div>
            
            <div className="streaming-content">
              <h3>配信内容</h3>
              <ul>
                <li>デモ＋Q&A／短時間で実務に効く小ネタ</li>
                <li>最新AIツールの使い方解説</li>
                <li>プログラミング実装のライブコーディング</li>
                <li>参加者の質問に対するリアルタイム回答</li>
                <li>成果発表会と相互フィードバック</li>
              </ul>
            </div>
            
            <div className="streaming-support">
              <h3>見逃し対応も安心</h3>
              <ul>
                <li>全配信をアーカイブ化</li>
                <li>重要ポイントのタイムスタンプ付き</li>
                <li>資料とコードの配布</li>
                <li>後日の個別質問も受付</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-middle">
        <div className="container">
          <h2>結果が出る学びを、今日から。</h2>
          <p><strong>AI×プログラミングで、あなたのキャリアを次のレベルへ。</strong></p>
          <div className="cta-content">
            <p>「学んだけど使えない」「時間だけが過ぎていく」そんな経験はもう終わりです。</p>
            <p>このサロンでは、<strong>学んだその日から実践できる</strong>実用的なスキルを身につけられます。</p>
            <p>週3〜5時間の学習で、"動く成果物"が確実に積み上がっていきます。</p>
          </div>
          <div className="benefits-highlight">
            <div className="benefit-item">
              <i className="fas fa-clock"></i>
              <span>作業時間の削減</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-chart-line"></i>
              <span>社内評価アップ</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-dollar-sign"></i>
              <span>副業の受注力向上</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-briefcase"></i>
              <span>ポートフォリオ充実</span>
            </div>
          </div>
          <p className="final-message"><strong>今始めれば、3ヶ月後には周りから頼られる存在になっています。</strong></p>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">料金プラン</h2>
          
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>ベーシックプラン</h3>
              <div className="price">
                <span className="currency">¥</span>
                <span className="amount">2,980</span>
                <span className="period">/月（税込）</span>
              </div>
            </div>
            
            <div className="pricing-features">
              <h4>含まれるサービス:</h4>
              <ul>
                <li><i className="fas fa-check"></i> AI・生成AIツールの使い方講習</li>
                <li><i className="fas fa-check"></i> 最新動向の紹介とライブQ&A</li>
                <li><i className="fas fa-check"></i> プログラミング基礎解説</li>
                <li><i className="fas fa-check"></i> デモ・モックアプリの共有</li>
                <li><i className="fas fa-check"></i> 定期ライブ配信（週1回または月1回）</li>
                <li><i className="fas fa-check"></i> アーカイブ視聴（過去の全配信）</li>
                <li><i className="fas fa-check"></i> Discord質問し放題</li>
                <li><i className="fas fa-check"></i> コードレビューサポート</li>
                <li><i className="fas fa-check"></i> 個別最適化アンケート</li>
                <li><i className="fas fa-check"></i> 学習ロードマップ提供</li>
              </ul>
            </div>
            
            <div className="pricing-highlight">
              <p><strong>シンプルで手頃な価格で、充実したサポートを受けられます。</strong></p>
            </div>
            
            <a href="#cta" className="pricing-cta">
              <span>今すぐ参加する</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="curriculum" className="curriculum">
        <div className="container">
          <h2 className="section-title">カリキュラム内容（抜粋）</h2>
          
          <div className="curriculum-grid">
            <div className="curriculum-category">
              <h3>基礎カリキュラム</h3>
              
              <div className="curriculum-item">
                <h4><i className="fas fa-magic"></i> AI×プロンプト設計</h4>
                <p>要約・抽出・分類・仕様化の型とチェックリスト。誤り検出の再質問テンプレ付き。</p>
              </div>
              
              <div className="curriculum-item">
                <h4><i className="fas fa-cogs"></i> GASで業務自動化</h4>
                <p>Gmail/Sheets/Driveの連携。通知、添付保存、表整形、定期実行、失敗時リトライまで。</p>
              </div>
              
              <div className="curriculum-item">
                <h4><i className="fas fa-chart-bar"></i> スクレイピング→可視化</h4>
                <p>日次収集→表・グラフ更新。例外・ブロック対策、キャッシュ戦略を学習。</p>
              </div>
            </div>
            
            <div className="curriculum-category">
              <h3>専門分野カリキュラム（順次展開）</h3>
              
              <div className="curriculum-item">
                <h4><i className="fas fa-calculator"></i> 経理×AI</h4>
                <ul>
                  <li>領収書・請求書の自動読み取りと仕訳生成</li>
                  <li>勘定科目の自動判定システム</li>
                  <li>月次・年次決算資料の自動作成</li>
                  <li>経費精算の承認フロー自動化</li>
                </ul>
              </div>
              
              <div className="curriculum-item">
                <h4><i className="fas fa-shopping-cart"></i> 転売×AI</h4>
                <ul>
                  <li>商品トレンド分析と仕入れ判断支援</li>
                  <li>競合価格の自動監視と価格調整</li>
                  <li>商品説明文の自動生成</li>
                  <li>在庫管理と売上予測</li>
                </ul>
              </div>
              
              <div className="curriculum-item">
                <h4><i className="fas fa-bullhorn"></i> アフィリエイト×AI</h4>
                <ul>
                  <li>SEOに最適化されたコンテンツ自動生成</li>
                  <li>キーワード分析と記事企画の自動化</li>
                  <li>成果の良い案件の自動抽出</li>
                  <li>SNS投稿の自動化とエンゲージメント分析</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="curriculum-highlight">
            <p><strong>実践重視のカリキュラムで、確実にスキルアップできます。</strong></p>
          </div>
        </div>
      </section>

      <section className="case-studies">
        <div className="container">
          <h2 className="section-title">実際の制作事例</h2>
          
          <div className="cases-grid">
            <div className="case-category">
              <h3>基礎自動化事例</h3>
              
              <div className="case-item">
                <div className="case-icon">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <h4>楽天の注文履歴をGASで自動出力</h4>
                <p>受注情報の抽出→スプレッドシート集計→日次更新。担当者の工数削減と可視化を両立。</p>
              </div>
              
              <div className="case-item">
                <div className="case-icon">
                  <i className="fas fa-file-pdf"></i>
                </div>
                <h4>iPhone明細PDFの自動保存＆文字起こし</h4>
                <p>Gmail受信→Drive保存→テキスト化→検索性向上。監査や照会対応がスムーズに。</p>
              </div>
            </div>
            
            <div className="case-category">
              <h3>専門分野事例（予定）</h3>
              
              <div className="case-item">
                <div className="case-icon">
                  <i className="fas fa-calculator"></i>
                </div>
                <h4>経理×AI事例</h4>
                <ul>
                  <li>月100枚の領収書を自動仕訳、経理作業時間を70%削減</li>
                  <li>決算書類の下書きを自動生成、税理士との打ち合わせ準備を効率化</li>
                </ul>
              </div>
              
              <div className="case-item">
                <div className="case-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h4>転売×AI事例</h4>
                <ul>
                  <li>Amazon商品の価格変動を24時間監視、最適タイミングでの仕入れ判断支援</li>
                  <li>商品写真から自動で魅力的な商品説明文を生成</li>
                </ul>
              </div>
              
              <div className="case-item">
                <div className="case-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h4>アフィリエイト×AI事例</h4>
                <ul>
                  <li>月間1万PVのブログ記事を半自動生成、収益を3倍に向上</li>
                  <li>Twitter投稿を自動化し、フォロワー数を6ヶ月で5倍に増加</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="disclaimer">
            ※実名・企業名など秘匿情報はマスキングの上で共有します。
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2 className="section-title">参加までの流れ</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>お申し込み</h3>
                <p>ロボットペイで決済完了</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>ご案内</h3>
                <p>Discord招待＆ウェルカムガイド送付</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>オリエンテーション</h3>
                <p>目標ヒアリング／個別ロードマップ作成</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>受講開始</h3>
                <p>ライブ参加＋課題実践＋レビュー受講</p>
              </div>
            </div>
          </div>
          
          <div className="process-note">
            <p><strong>スムーズに学習を開始できるよう、丁寧にサポートします。</strong></p>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <h2 className="section-title">よくある質問</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <div className="faq-question">
                <h3>プログラミング初心者でも参加できますか？</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>はい、初心者歓迎です。基礎から丁寧に解説し、個別サポートも充実しています。</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>どのような開発環境が必要ですか？</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Windows 11またはmacOS Catalina以降、メモリ8GB以上を推奨します。</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>サポート体制はどのようになっていますか？</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>Discordでの質問対応、定期ライブ配信、アーカイブ視聴が可能です。個別サポートも充実しています。</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>途中参加でもついていけますか？</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>可能です。アーカイブ視聴と個別ロードマップでキャッチアップを支援します。</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>コードレビューはどこまで見てもらえますか？</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>可読性・例外処理・保守性・運用設計まで確認します。</p>
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <h3>忙しくて時間が取れない場合は？</h3>
                <i className="fas fa-chevron-down"></i>
              </div>
              <div className="faq-answer">
                <p>アーカイブ視聴で自分のペースで学習できます。週3-5時間程度の時間確保をおすすめしています。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cta" className="final-cta">
        <div className="container">
          <h2>今すぐ始めて、3ヶ月後の成長した自分に出会いましょう。</h2>
          <p>決済は <strong>ロボットペイ</strong> を利用します。お申し込み完了後、Discordの招待リンクとウェルカムガイドをお送りします。</p>
          
          <div className="cta-button-container">
            <a href="#" className="final-cta-button">
              <span className="button-text">お申し込みはこちら</span>
              <span className="button-icon">
                <i className="fas fa-rocket"></i>
              </span>
            </a>
          </div>
          
          <div className="cta-benefits">
            <div className="benefit-item">
              <i className="fas fa-shield-alt"></i>
              <span>安心のサポート体制</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-clock"></i>
              <span>即日スタート可能</span>
            </div>
            <div className="benefit-item">
              <i className="fas fa-users"></i>
              <span>コミュニティ学習</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <i className="fas fa-rocket neon-icon"></i>
              <span>AI×Programming Salon</span>
            </div>
            <div className="footer-text">
              <p>未来のスキルを身につけ、キャリアを加速させよう</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 AI×Programming Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}