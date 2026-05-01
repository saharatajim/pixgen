
"use client"


import { UpdateUser } from '@/components/UpdateUserModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
     const userData=authClient.useSession()
      const user=userData?.data?.user
   
    
    return (
        <div className='mt-10 w-100'>
            <Card>
                 <Avatar>
                        <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                        <Avatar.Fallback></Avatar.Fallback>
                      </Avatar>
                      <p>{user?.name }</p>
                      
            <UpdateUser/>
            </Card>
        </div>
    );
};

export default ProfilePage;