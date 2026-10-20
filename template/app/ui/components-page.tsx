import { css } from 'remix/ui'
import { Button } from 'remix/ui/button'
import { Glyph } from 'remix/ui/glyph'
import { Option, Select } from 'remix/ui/select'
import { theme } from 'remix/ui/theme'

import { Layout } from './layout.tsx'

export function ComponentsPage() {
  return () => (
    <Layout title="Components">
      <section mix={pageCss}>
        <header mix={pageHeaderCss}>
          <p mix={eyebrowCss}>RMX-01 theme</p>
          <h1 mix={pageTitleCss}>remix/ui showcase</h1>
          <p mix={leadCss}>
            Built on the <code>RMX_01</code> token contract, with <code>Button</code> tones and a{' '}
            <code>Select</code> wired up to a hidden form input.
          </p>
        </header>

        <article mix={cardCss}>
          <h2 mix={cardTitleCss}>Button tones</h2>
          <p mix={cardBodyCss}>Each tone is the same component with a different <code>tone</code> prop.</p>
          <div mix={rowCss}>
            <Button tone="primary" startIcon={<Glyph name="add" />}>
              Primary
            </Button>
            <Button tone="secondary" startIcon={<Glyph name="edit" />}>
              Secondary
            </Button>
            <Button tone="ghost" startIcon={<Glyph name="search" />}>
              Ghost
            </Button>
            <Button tone="danger" startIcon={<Glyph name="trash" />}>
              Danger
            </Button>
          </div>
          <div mix={rowCss}>
            <Button tone="primary" disabled>
              Disabled primary
            </Button>
            <Button tone="secondary" endIcon={<Glyph name="chevronRight" />}>
              With end icon
            </Button>
          </div>
        </article>

        <article mix={cardCss}>
          <h2 mix={cardTitleCss}>Select</h2>
          <p mix={cardBodyCss}>
            Click the trigger or press <kbd mix={kbdCss}>↓</kbd> to open. Typing while closed picks a
            matching option.
          </p>
          <form mix={formCss}>
            <label mix={fieldCss}>
              <span mix={labelTextCss}>Framework</span>
              <Select defaultLabel="Select a framework" defaultValue="remix" name="framework">
                <Option label="Remix framework" value="remix">
                  Remix
                </Option>
                <Option label="React Router framework" value="react-router">
                  React Router
                </Option>
                <Option label="React framework" value="react">
                  React
                </Option>
                <Option disabled label="Angular framework" value="angular">
                  Angular (disabled)
                </Option>
              </Select>
            </label>

            <label mix={fieldCss}>
              <span mix={labelTextCss}>Environment</span>
              <Select defaultLabel="Pick an environment" name="environment">
                <Option label="Production environment" value="production">
                  Production
                </Option>
                <Option label="Staging environment" textValue="beta" value="staging">
                  Staging
                </Option>
                <Option label="Development environment" value="development">
                  Development
                </Option>
              </Select>
            </label>

            <div mix={rowCss}>
              <Button tone="primary" type="submit">
                Submit
              </Button>
              <Button tone="ghost" type="reset">
                Reset
              </Button>
            </div>
          </form>
        </article>
      </section>
    </Layout>
  )
}

const pageCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.xl,
  maxWidth: '880px',
  margin: '0 auto',
  padding: `${theme.space.xxl} ${theme.space.lg}`,
  fontFamily: theme.fontFamily.sans,
  color: theme.colors.text.primary,
})

const pageHeaderCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.sm,
})

const eyebrowCss = css({
  margin: 0,
  fontSize: theme.fontSize.xxs,
  fontWeight: theme.fontWeight.semibold,
  letterSpacing: theme.letterSpacing.meta,
  textTransform: 'uppercase',
  color: theme.colors.text.muted,
})

const pageTitleCss = css({
  margin: 0,
  fontSize: theme.fontSize.xxl,
  fontWeight: theme.fontWeight.bold,
  lineHeight: theme.lineHeight.tight,
  letterSpacing: theme.letterSpacing.tight,
})

const leadCss = css({
  margin: 0,
  fontSize: theme.fontSize.md,
  lineHeight: theme.lineHeight.relaxed,
  color: theme.colors.text.secondary,
  '& code': {
    fontFamily: theme.fontFamily.mono,
    fontSize: theme.fontSize.sm,
    padding: `0 ${theme.space.xs}`,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.surface.lvl3,
  },
})

const cardCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.md,
  padding: theme.space.xl,
  border: `1px solid ${theme.colors.border.subtle}`,
  borderRadius: theme.radius.lg,
  backgroundColor: theme.surface.lvl0,
  boxShadow: theme.shadow.xs,
})

const cardTitleCss = css({
  margin: 0,
  fontSize: theme.fontSize.lg,
  fontWeight: theme.fontWeight.semibold,
  lineHeight: theme.lineHeight.tight,
})

const cardBodyCss = css({
  margin: 0,
  fontSize: theme.fontSize.sm,
  lineHeight: theme.lineHeight.relaxed,
  color: theme.colors.text.secondary,
  '& code': {
    fontFamily: theme.fontFamily.mono,
    fontSize: theme.fontSize.xs,
    padding: `0 ${theme.space.xs}`,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.surface.lvl3,
  },
})

const rowCss = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.space.sm,
})

const formCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.lg,
})

const fieldCss = css({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.space.xs,
  maxWidth: '320px',
})

const labelTextCss = css({
  fontSize: theme.fontSize.xs,
  fontWeight: theme.fontWeight.medium,
  color: theme.colors.text.secondary,
})

const kbdCss = css({
  display: 'inline-block',
  padding: `0 ${theme.space.xs}`,
  fontFamily: theme.fontFamily.mono,
  fontSize: theme.fontSize.xxs,
  border: `1px solid ${theme.colors.border.subtle}`,
  borderRadius: theme.radius.sm,
  backgroundColor: theme.surface.lvl1,
})
