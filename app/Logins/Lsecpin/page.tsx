import React from 'react';
import Header from '../../../components/Signup/SignupPassword/Header';

import ImageContent from '@/components/Signup/SignupEmail/ImageContent';
import LsecPinnav from '@/components/Login/LoginSecpin/Lsecpinnav';
import LsecPinBd from '@/components/Login/LoginSecpin/Lsecpinbd';


const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0F1012]">
      <Header />

      <div className="flex flex-1">

        {/* Left side content */}
        
      <div className="w-1/2 min-h-[calc(150vh-64px)]"> 
      <LsecPinnav/>
      <LsecPinBd/>
     
      </div>
       
       {/* Right side content */}

      <div className="w-1/2 mt-[20px]  min-h-[calc(150vh-64px)]">
          <ImageContent />
        </div>
     
    </div>
    </div>
    
  )
}

export default page
