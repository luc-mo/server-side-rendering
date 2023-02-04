import { FC, Fragment, ReactElement } from 'react'
import { Header } from 'components/Header'
import { Main } from 'components/Main'

export const App: FC = (): ReactElement => {
  return (
    <Fragment>
      <Header/>
      <Main/>
    </Fragment>
  )
}
