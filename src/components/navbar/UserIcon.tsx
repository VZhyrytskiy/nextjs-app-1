import { LuUser } from 'react-icons/lu';
import { currentUser, auth } from '@clerk/nextjs/server';

async function UserIcon() {
  // const { userId } = auth();        // получить только userId
  const user = await currentUser();    // получить всю информацию о пользователе
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img src={profileImage} alt="Profile Image" className='w-6 h-6 rounded-full object-cover'/>
    )
  }
  
  return (
    <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />
  )
}

export default UserIcon;