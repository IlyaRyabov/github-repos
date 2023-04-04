import styled from 'styled-components';

const NoReposDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`;

export function NoReposData() {
    return (
        <NoReposDataWrapper>
            <h1>По Вашому запиту не знайдено жодного репозиторія</h1>
        </NoReposDataWrapper>
    )
}
