## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
|body|text||
|image|string||


## userテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|user_name|text||
|mail|text||
|password|text||

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|
|group_name|text||


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id | integer | null: false, foreign_key: true|
|group_id | integer | null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user