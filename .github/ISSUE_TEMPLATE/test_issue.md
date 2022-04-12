---
name: データパッチ用
about: 本番環境のデータをSQLやスクリプトで変更する場合
title: ''
labels: 'DP'
assignees: ''
---

## 概要

データパッチの背景（理由）や修正するデータの概要を書いてください

## 対象データ

- `OID: 123456` など

## 実行するデータパッチ

- SQL or Ruby など
- できれば、実行結果の期待値を書き出しましょう
- 結果の確認方法も書いてください

### チェック項目
#### 実行前
- [ ] レビューが完了した
    - [DPレビュー観点](https://moneyforward.kibe.la/notes/141385)
- [ ] 管理台帳に記入した
    - https://docs.google.com/spreadsheets/d/10iKE3xSb2TamsvAvliRxp1vSeJIUVb-klbkv6jLqO24/edit#gid=0
- [ ] ワークフローを申請した
    - https://moneyforward.cybozu.com/o/ag.cgi?page=WorkFlowForm&id=550&FID=340&cp=wwl&sp=
- [ ] ワークフローの承認を受けた

#### 実行後
- [ ] コメントにログ・結果を残した
- [ ] 管理台帳に「完了」を記入した
- [ ] 本issueをクローズした

## その他
[データパッチ方針](https://moneyforward.kibe.la/notes/211147)
