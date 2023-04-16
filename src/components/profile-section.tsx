// react component to show user name and email
import { useGetProfile } from "../api/profile-api";

const ProfileSection: React.FC = () => {
  const {
    data: profileData,
    error: getProfileError,
    isLoading: isGetProfileLoading,
  } = useGetProfile();

  return (
    <div style={{ border: "1px grey solid", margin: 4, padding: 8 }}>
      {isGetProfileLoading && <div>Loading...</div>}
      {getProfileError && <div>Error: {getProfileError.message}</div>}
      {profileData && (
        <div>
          <span>Hi, {profileData.name} ({profileData.email})</span>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
