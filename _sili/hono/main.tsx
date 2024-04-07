/** @jsx jsx */
import { Hono } from 'https://deno.land/x/hono@v4.2.2/mod.ts'
import { jsx, Fragment } from 'https://deno.land/x/hono/middleware.ts'
import { Button } from 'npm:react-vant'
import React from 'npm:react'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

  const List = () => (
    <Fragment>
      <p>first child</p>
      <p>second child</p>
      <p>third child</p>
    </Fragment>
  )
  app.get('/page', (c) => {
    return c.html(<div className='demo-button'>
    <Button type='primary'>Primary</Button>
    <Button type='info'>Info</Button>
    <Button type='default'>Default</Button>
    <Button type='warning'>Warning</Button>
    <Button type='danger'>Dangeer</Button>
  </div>)
  })

  Deno.serve({ port: 13158 }, app.fetch)
