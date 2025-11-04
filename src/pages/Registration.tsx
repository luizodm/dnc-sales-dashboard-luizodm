import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: #666;
`

const RegistrationImage = styled.div`
  background-image: url(/login-image.svg);
  backgroung-size: cover;
  height: 100vh;
  width: 50vh;
`

function Registration() {
  return (
    <>
      <RegistrationArea>REGISTRATION</RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration
