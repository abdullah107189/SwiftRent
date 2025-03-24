import Header from '../../components/common/Header';
import Notifications from './Notifications';
import Profile from './Profile ';
import Security from './Security';

const SettingsPage = () => {
  return (
    <>
      <Header title="Settings" />
      <div className="flex-1 overflow-auto relative z-10">
        <main className="p-4">
          <Profile />
          <Notifications />
          <Security />
        </main>
      </div>
    </>
  );
};
export default SettingsPage;
