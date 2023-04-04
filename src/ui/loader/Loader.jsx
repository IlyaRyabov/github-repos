import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export function Loader() {
    return (
        <LoaderWrapper>
            <h1>Loading...</h1>
        </LoaderWrapper>
    )
}
