
## 前書き
グループ別でメッセージのやりとりができる、チャットアプリを作成しました。
URL:http://18.180.205.35/users/sign_in

## ログイン情報
- e-mail
ttttt@gmail.com
- パスワード
11111111

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|
|body|text||
|image|string||

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|mail|text||
|password|text||

### Association
- has_many :groups,through: :groups_users
- has_many  :groups_users
- has_many :messages


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :users,through: :groups_users
- has_many  :groups_users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user