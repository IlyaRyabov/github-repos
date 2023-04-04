import styled from 'styled-components';
import star_icon from 'ui/icons/star.svg';
import watcher_icon from 'ui/icons/watcher.svg';
import {NoReposData} from './NoData';
import {getRepoName} from '../repos.helpers';

const RepoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  background: #ffffff;
  margin-bottom: 36px;
  padding: 40px;
`;

const RepoAvatar = styled.img`
  width: 128px;
  height: 144px;
  margin-right: 32px;
  border-radius: 4px;
`;

const RepoTitle = styled.h5`
  color: #081F32;
  font-size: 22px;
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: capitalize;
`;

const RepoInfo = styled.p`
  color: #A5ADBB;
  font-size: 16px;
  margin: 2px 0;
`;

const RepoDescription = styled.p`
  color: #6E798C;
  font-size: 16px;
  margin-top: 6px;
  margin-bottom: 0;
  max-width: 550px;
`;

const RepoStatisticWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RepoStatisticBlock = styled.div`
  display: flex;
  align-items: center;
  
  &:first-child {
    margin-bottom: 20px;
  }
  
  img {
    width: 24px;
    height: 24px;
    margin-right: 14px;
  }

  p {
    margin: 0;
  }
`;

export function ReposList(props) {
    const {repos} = props;

    if (!repos?.length) {
        return <NoReposData/>;
    }

    return repos.map((repo) => (
        <RepoWrapper key={repo.id}>
            <div style={{display: 'flex'}}>
                <RepoAvatar
                    src={repo.owner.avatar_url}
                    alt="avatar"
                />
                <div>
                    <RepoTitle>{getRepoName(repo.full_name)}</RepoTitle>
                    <RepoInfo>{repo.owner.login}</RepoInfo>
                    <RepoInfo>{repo.language}</RepoInfo>
                    <RepoDescription>{repo.description}</RepoDescription>
                </div>
            </div>

            <RepoStatisticWrapper>
                <RepoStatisticBlock>
                    <img src={star_icon} alt='star' />
                    <p>{repo.stargazers_count} stars</p>
                </RepoStatisticBlock>

                <RepoStatisticBlock>
                    <img src={watcher_icon} alt='watcher' />
                    <p>{repo.watchers_count} watchers</p>
                </RepoStatisticBlock>
            </RepoStatisticWrapper>
        </RepoWrapper>
    ));
}
