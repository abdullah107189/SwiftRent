import { User } from 'lucide-react';
import SettingSection from './SettingSection';

const Profile = () => {
  return (
    <SettingSection icon={User} title={'Profile'}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://scontent.fjed5-1.fna.fbcdn.net/v/t39.30808-1/405446777_1330349001180200_5529436962829068080_n.jpg?stp=c0.15.1536.1536a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=REd_2O0i_XIQ7kNvgEdMLkp&_nc_oc=AdlMU-fep4f1-K9jN0gmVyb716uGnCurbCfJwXm91_HJq3CpWWvq5WKUyRuQGz08ZK7yStNeWwRxdB-NnwhGoKjh&_nc_zt=24&_nc_ht=scontent.fjed5-1.fna&_nc_gid=LKq_oE6kVSdILxcl0PrvLQ&oh=00_AYF7OWKMph0WxmxjBoY2ijkKyjUAyi2a_pGgm8K7ebk50A&oe=67DFBD8E"
          alt="Profile"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">IBRAHIM</h3>
          <p className="text-gray-400">abc@example.com</p>
        </div>
      </div>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
export default Profile;
