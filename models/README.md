// @format
# Schemas

## Concept

- slug (string)
- name (string)
- description (?string)

## User

- id (something unique)
- email (string)
- name (string)
- confirmed_at (?datetime)

## Lesson

- id (something unique)
- concept_id (foreign key)
- title (string)
- text (string)

## Question

- id (something unique)
- concept_id (foreign key)
- text (string)
- correct_answer (Choice)
- incorrect_answers (Choices)
- hint (string)
- explanation (string)
