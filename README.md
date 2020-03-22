## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
|body|text||
|image|string||

### Association
- belongs_to :group
- belongs_to :user

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|mail|||
|password|text||

### Association
- has_many :group,through: :groups_users
- has_many  :groups_users
- has_many :messages


## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :group,through: :groups_users
- has_many  :groups_users
- has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id | integer | null: false, foreign_key: true|
|group_id | integer | null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user