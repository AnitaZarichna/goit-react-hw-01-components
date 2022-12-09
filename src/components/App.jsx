import user from '../json/user';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import {Statistics} from './Statistics/Statistics';
import { ProfileCard } from './UserProfile/Profile';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';



export const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#6a8fa0'
      }}
    >
     <ProfileCard
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />;
    </div>
  );
};
