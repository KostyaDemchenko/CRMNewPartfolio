// schemas/projectType.ts

import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
      validation: (Rule) => Rule.required().min(1).error('ID обязателен'),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Название проекта',
      validation: (Rule) =>
        Rule.required().min(2).error('Название должно содержать минимум 2 символа'),
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Тип проекта',
      options: {
        list: [
          {title: 'Telegram Mini App', value: '_telegram-mini-app'},
          {title: 'Web Site', value: '_web-site'},
          {title: 'Web Application', value: '_web-application'},
        ],
      },
      validation: (Rule) => Rule.required().error('Тип проекта обязателен'),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      title: 'Технологии',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: (Rule) =>
        Rule.required().min(1).error('Необходимо выбрать хотя бы одну технологию'),
    }),
    defineField({
      name: 'date',
      type: 'string', // Используем строку для формата "DD.MM.YYYY"
      title: 'Дата',
      validation: (Rule) => Rule.required().error('Дата обязателена'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Описание',
      validation: (Rule) =>
        Rule.required().min(10).error('Описание должно содержать минимум 10 символов'),
    }),
    defineField({
      name: 'source',
      type: 'url',
      title: 'Ссылка на проект',
    }),
    defineField({
      name: 'prev_url',
      type: 'image',
      title: 'Превью изображение',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Превью обязательно'),
    }),
  ],
})
