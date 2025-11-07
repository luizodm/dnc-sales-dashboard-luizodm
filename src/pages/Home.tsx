import { AvatarsLists, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1234.54),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2895.74),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(5699.12),
    },
  ]
  return (
    <>
      <Header />
      <Container>
        <CardComponent>CARD</CardComponent>
        <CardComponent>
          <AvatarsLists listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
